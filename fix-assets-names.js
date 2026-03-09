import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'dist/spa/assets');
const indexPath = path.join(__dirname, 'dist/spa/index.html');

console.log('🔍 Проверка файлов...');

if (fs.existsSync(assetsDir)) {
  // Получаем все файлы
  let files = fs.readdirSync(assetsDir);
  
  // Создаем маппинг старых имен на новые
  const renameMap = {};
  
  files.forEach(file => {
    const fullPath = path.join(assetsDir, file);
    
    // Пропускаем, если это не файл
    if (!fs.statSync(fullPath).isFile()) return;
    
    let newName = file;
    
    // Убираем точку в конце
    if (newName.endsWith('.')) {
      newName = newName.slice(0, -1);
    }
    
    // Исправляем двойные точки
    newName = newName.replace(/\.\./g, '.');
    newName = newName.replace(/\.-/, '.');
    
    // Убираем лишние точки в середине (но сохраняем расширения)
    const parts = newName.split('.');
    if (parts.length > 2) {
      // Если больше 2 частей, возможно это проблема
      // Оставляем только последнюю часть как расширение
      const ext = parts.pop();
      const name = parts.join('-'); // Соединяем остальные части через дефис
      newName = name + '.' + ext;
    }
    
    if (newName !== file) {
      renameMap[file] = newName;
    }
  });
  
  // Переименовываем файлы
  Object.entries(renameMap).forEach(([oldName, newName]) => {
    const oldPath = path.join(assetsDir, oldName);
    const newPath = path.join(assetsDir, newName);
    
    if (fs.existsSync(oldPath) && !fs.existsSync(newPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`✅ Переименован: ${oldName} -> ${newName}`);
    }
  });
  
  // Обновляем index.html
  if (fs.existsSync(indexPath)) {
    let html = fs.readFileSync(indexPath, 'utf8');
    
    Object.entries(renameMap).forEach(([oldName, newName]) => {
      // Экранируем специальные символы для регулярного выражения
      const escapedOldName = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      html = html.replace(new RegExp(escapedOldName, 'g'), newName);
    });
    
    fs.writeFileSync(indexPath, html);
    console.log('✅ index.html обновлен');
  }
  
  // Обновляем CSS файлы
  const cssFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'));
  cssFiles.forEach(cssFile => {
    const cssPath = path.join(assetsDir, cssFile);
    let css = fs.readFileSync(cssPath, 'utf8');
    let changed = false;
    
    Object.entries(renameMap).forEach(([oldName, newName]) => {
      if (css.includes(oldName)) {
        const escapedOldName = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        css = css.replace(new RegExp(escapedOldName, 'g'), newName);
        changed = true;
      }
    });
    
    if (changed) {
      fs.writeFileSync(cssPath, css);
      console.log(`✅ CSS обновлен: ${cssFile}`);
    }
  });
  
  console.log('\n📋 Финальный список файлов:');
  const finalFiles = fs.readdirSync(assetsDir).sort();
  finalFiles.forEach(file => {
    const stats = fs.statSync(path.join(assetsDir, file));
    const size = (stats.size / 1024).toFixed(2) + ' KB';
    console.log(`   ${file.padEnd(50)} ${size}`);
  });
  
} else {
  console.log('❌ Папка assets не найдена');
}