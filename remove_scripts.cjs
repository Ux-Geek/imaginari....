const fs = require('fs');
const path = require('path');

const pagesDir = path.join(process.cwd(), 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove script tags and their content
  content = content.replace(/<script>[\s\S]*?<\/script>/gi, '');
  
  fs.writeFileSync(filePath, content);
  console.log(`Cleaned ${file}`);
});
