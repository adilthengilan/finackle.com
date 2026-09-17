import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // NeoPay Royal Blue -> Finackle Deep Indigo
  content = content.replace(/#1233D3/g, '#1C0F38');
  
  // NeoPay BG -> Finackle BG
  content = content.replace(/#F8FAFC/g, '#F6F7FA');
  
  // Convert Cyan accents to softer Indigo/Purple accents
  content = content.replace(/text-cyan-300/g, 'text-indigo-300');
  content = content.replace(/bg-cyan-300/g, 'bg-indigo-400');
  content = content.replace(/bg-cyan-400/g, 'bg-indigo-400');
  content = content.replace(/text-cyan-600/g, 'text-indigo-400');
  content = content.replace(/bg-cyan-50/g, 'bg-indigo-50/50');
  
  // Convert Tailwind blue to indigo for harmony with #1C0F38
  content = content.replace(/shadow-blue-900/g, 'shadow-indigo-900');
  content = content.replace(/border-blue-/g, 'border-indigo-');
  content = content.replace(/text-blue-/g, 'text-indigo-');
  content = content.replace(/bg-blue-/g, 'bg-indigo-');
  content = content.replace(/hover:bg-blue-800/g, 'hover:bg-[#2A1B54]');
  content = content.replace(/hover:text-blue-800/g, 'hover:text-[#2A1B54]');

  fs.writeFileSync(file, content, 'utf8');
});

console.log("Colors updated!");
