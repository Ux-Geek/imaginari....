const fs = require('fs');
const path = require('path');

const inspoDir = path.join(__dirname, 'src/Inspos');
const cssPath = path.join(__dirname, 'src/inspo.css');

const files = fs.readdirSync(inspoDir).filter(f => f.endsWith('.html'));

let combinedCss = '';

files.forEach(file => {
  const content = fs.readFileSync(path.join(inspoDir, file), 'utf-8');
  const styleMatches = content.matchAll(/<style>([\s\S]*?)<\/style>/gi);
  for (const match of styleMatches) {
    combinedCss += `\n/* From ${file} */\n` + match[1];
  }
});

// Remove :root variables block from the combined CSS to avoid overriding index.css, 
// or at least rename them if necessary. Wait, our new design system defines --olive-400 etc.
// The HTML files define their own :root block. We can keep it or remove it.
combinedCss = combinedCss.replace(/:root\s*{[^}]*}/g, '/* :root removed */');

fs.writeFileSync(cssPath, combinedCss);
console.log('CSS extracted to inspo.css');
