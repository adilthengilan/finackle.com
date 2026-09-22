import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';

function phpApiDevPlugin(): Plugin {
  return {
    name: 'php-api-dev-emulator',
    configureServer(server) {
      server.middlewares.use('/api/send-enquiry.php', (req, res) => {
        res.setHeader('Content-Type', 'application/json; charset=UTF-8');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

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
                admin_recipient: 'sales@finackle.com',
                sender_address: 'Finackle <website@finackle.com>',
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
          req.on('end', () => {
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
