import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'dist/spa/assets');
const indexPath = path.join(__dirname, 'dist/spa/index.html');

console.log('🔍 Простое исправление имен файлов...');

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const changes = [];
  
  files.forEach(file => {
    const oldPath = path.join(assetsDir, file);
    if (!fs.statSync(oldPath).isFile()) return;
    
    let newName = file;
    
    // Убираем точку в конце
    if (newName.endsWith('.')) {
      newName = newName.slice(0, -1);
    }
    
    // Если имя изменилось
    if (newName !== file) {
      const newPath = path.join(assetsDir, newName);
      fs.renameSync(oldPath, newPath);
      changes.push(`${file} -> ${newName}`);
    }
  });
  
  if (changes.length > 0) {
    console.log('✅ Переименованные файлы:');
    changes.forEach(change => console.log(`   ${change}`));
  } else {
    console.log('✅ Нет файлов для переименования');
  }
  
  // Просто проверяем существование index.html
  if (fs.existsSync(indexPath)) {
    console.log('✅ index.html существует');
  }
  
  console.log('\n📋 Файлы в assets:');
  const finalFiles = fs.readdirSync(assetsDir).sort();
  finalFiles.forEach(file => {
    console.log(`   ${file}`);
  });
  
} else {
  console.log('❌ Папка assets не найдена');
}