import fs from 'fs';
import path from 'path';

const appDir = path.resolve('./app');
const files = fs.readdirSync(appDir).filter(f => f.endsWith('.html'));

let imageCounter = 1;

for (const file of files) {
  const filePath = path.join(appDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/https:\/\/dummyimage\.com\/[a-zA-Z0-9/]+/g, () => {
    const imgId = (imageCounter % 3) + 1;
    imageCounter++;
    return `img/brutalist/${imgId}.png`;
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Replaced dummy images.');
