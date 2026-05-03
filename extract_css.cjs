const fs = require('fs');
const path = require('path');

const projectDir = process.cwd();
const inspoDir = path.join(projectDir, 'src/Inspos');
const cssPath = path.join(projectDir, 'src/inspo.css');

const files = fs.readdirSync(inspoDir).filter(f => f.endsWith('.html'));

let combinedCss = '';

files.forEach(file => {
  const content = fs.readFileSync(path.join(inspoDir, file), 'utf-8');
  const styleMatches = content.matchAll(/<style>([\s\S]*?)<\/style>/gi);
  for (const match of styleMatches) {
    combinedCss += `\n/* From ${file} */\n` + match[1];
  }
});

combinedCss = combinedCss.replace(/:root\s*{[^}]*}/g, '/* :root removed */');

fs.writeFileSync(cssPath, combinedCss);
console.log('CSS extracted to inspo.css');
