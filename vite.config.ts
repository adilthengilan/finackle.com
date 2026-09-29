import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { Resend } from 'resend';
import { defineConfig, type Plugin } from 'vite';

function phpApiDevPlugin(): Plugin {
  return {
    name: 'php-api-dev-emulator',
    configureServer(server) {
      server.middlewares.use('/api/send-enquiry.php', (req, res) => {
        res.setHeader('Content-Type', 'application/json; charset=UTF-8');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        // Strictly obtain Resend API key and configurations from environment variables
        const resendApiKey = process.env.RESEND_API_KEY || '';
        const adminEmail = process.env.ADMIN_EMAIL || 'info@finackle.com';
        const fromEmail = process.env.FROM_EMAIL || 'Finackle <website@finackle.com>';

        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method === 'GET') {
          res.statusCode = 200;
          res.end(
            JSON.stringify(
              {
                status: 'online',
                endpoint: '/api/send-enquiry.php',
                message:
                  'Finackle Enquiry Backend is active. In production on Hostinger, this endpoint is executed natively by PHP.',
                resend_configured: Boolean(resendApiKey),
                resend_source: resendApiKey ? 'environment' : 'missing',
                admin_recipient: adminEmail,
                sender_address: fromEmail,
                timestamp: new Date().toISOString(),
              },
              null,
              2
            )
          );
          return;
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}');

              // Check honeypot
              if (data.hp_field && data.hp_field.trim().length > 0) {
                res.statusCode = 200;
                res.end(
                  JSON.stringify({
                    success: true,
                    message: 'Enquiry submitted successfully.',
                  })
                );
                return;
              }

              if (!data.name || !data.email) {
                res.statusCode = 400;
                res.end(
                  JSON.stringify({
                    success: false,
                    message: 'Name and email are required.',
                  })
                );
                return;
              }

              // Verify RESEND_API_KEY from environment
              if (!resendApiKey) {
                res.statusCode = 500;
                res.end(
                  JSON.stringify({
                    success: false,
                    message:
                      'Configuration error: RESEND_API_KEY is not defined in environment variables.',
                  })
                );
                return;
              }

              // Deliver via Resend using the environment API key
              const resend = new Resend(resendApiKey);
              const subject = `New Website Enquiry - ${data.name}`;
              const messageText = data.message || 'No additional message provided.';
              const serviceText = data.service || 'Finance Health Check & Diagnostic Review';

              try {
                // Send admin notification
                let sendResult = await resend.emails.send({
                  from: fromEmail,
                  to: [adminEmail],
                  replyTo: data.email,
                  subject,
                  text: `NEW WEBSITE ENQUIRY\n=======================================\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nCompany: ${data.company || 'N/A'}\nService: ${serviceText}\n\nMessage:\n${messageText}\n=======================================`,
                });

                // Fallback to onboarding@resend.dev if custom domain is not yet verified in Resend
                if (
                  sendResult.error &&
                  (sendResult.error.message?.includes('domain') ||
                    sendResult.error.message?.includes('verified') ||
                    sendResult.error.name === 'validation_error')
                ) {
                  await resend.emails.send({
                    from: 'Finackle Enquiry <onboarding@resend.dev>',
                    to: [adminEmail],
                    replyTo: data.email,
                    subject,
                    text: `NEW WEBSITE ENQUIRY\n=======================================\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nCompany: ${data.company || 'N/A'}\nService: ${serviceText}\n\nMessage:\n${messageText}\n=======================================`,
                  });
                }
              } catch (sendErr) {
                console.error('[Resend Dev] Email delivery error:', sendErr);
              }

              res.statusCode = 200;
              res.end(
                JSON.stringify({
                  success: true,
                  message: 'Enquiry submitted successfully.',
                })
              );
            } catch {
              res.statusCode = 400;
              res.end(
                JSON.stringify({
                  success: false,
                  message: 'Invalid JSON payload.',
                })
              );
            }
          });
          return;
        }

        res.statusCode = 405;
        res.end(
          JSON.stringify({
            success: false,
            message: 'Method Not Allowed',
          })
        );
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), phpApiDevPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
