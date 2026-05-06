const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'Inspos');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Basic conversions
  html = html.replace(/class=/g, 'className=');
  html = html.replace(/for=/g, 'htmlFor=');
  
  // SVG attributes
  const svgAttrs = [
    'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit',
    'fill-rule', 'clip-rule', 'clip-path'
  ];
  svgAttrs.forEach(attr => {
    const camel = attr.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    html = html.replace(new RegExp(attr + '=', 'g'), camel + '=');
  });

  // Self closing tags
  ['img', 'input', 'br', 'hr', 'meta', 'link'].forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi');
    html = html.replace(regex, `<${tag}$1 />`);
  });

  // Style tags
  html = html.replace(new RegExp('<style>([\\\\s\\\\S]*?)<\\\\/style>', 'gi'), '<style>{\`$1\`}</style>');

  // HTML comments
  html = html.replace(new RegExp('<!--([\\\\s\\\\S]*?)-->', 'g'), '{/* $1 */}');

  // viewBox
  html = html.replace(/viewbox=/g, 'viewBox=');
  
  // charset
  html = html.replace(/charset=/g, 'charSet=');

  const componentName = file.replace('.html', '').split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('').replace(/[^a-zA-Z0-9]/g, '');

  const tsx = `import React from 'react';

export const ${componentName} = () => {
  return (
    <>
      ${html}
    </>
  );
};

export default ${componentName};
`;

  const outPath = path.join(dir, file.replace('.html', '.tsx'));
  fs.writeFileSync(outPath, tsx);
});
console.log('Conversion complete.');
