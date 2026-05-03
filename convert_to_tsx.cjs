const fs = require('fs');
const path = require('path');

const projectDir = process.cwd();
const inspoDir = path.join(projectDir, 'src/Inspos');
const pagesDir = path.join(projectDir, 'src/pages');

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

const files = fs.readdirSync(inspoDir).filter(f => f.endsWith('.html') && f !== 'maginari-design-system.html');

files.forEach(file => {
  const content = fs.readFileSync(path.join(inspoDir, file), 'utf-8');
  
  // Extract body content
  const bodyMatch = content.match(/<body>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return;
  
  let jsx = bodyMatch[1];
  
  // Convert HTML attributes to JSX
  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
  jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
  jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  jsx = jsx.replace(/fill-rule=/g, 'fillRule=');
  jsx = jsx.replace(/clip-rule=/g, 'clipRule=');
  jsx = jsx.replace(/viewBox=/gi, 'viewBox=');
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  
  // Self close tags
  ['img', 'input', 'br', 'hr', 'path', 'circle', 'line', 'rect'].forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi');
    jsx = jsx.replace(regex, `<${tag}$1 />`);
  });

  // Basic style to object (very rough, might need manual fix)
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(';').forEach(rule => {
      if (!rule.trim()) return;
      const [key, value] = rule.split(':').map(s => s.trim());
      if (key && value) {
        const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[camelKey] = value;
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });

  let componentName = file.replace('.html', '').replace(/^2?maginari-/, '').split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
  if (componentName === 'Homepage') componentName = 'NewHome';
  
  const componentContent = `
import React from 'react';

export const ${componentName} = () => {
  return (
    <div className="bg-bg-base min-h-screen text-text-secondary font-sans font-light overflow-x-hidden">
      ${jsx}
    </div>
  );
};
`;

  fs.writeFileSync(path.join(pagesDir, `${componentName}.tsx`), componentContent);
  console.log(`Created ${componentName}.tsx`);
});
