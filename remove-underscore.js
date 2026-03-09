import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'dist/spa/assets');
const indexPath = path.join(__dirname, 'dist/spa/index.html');

console.log('🔧 Удаление подчеркивания в начале имен файлов...');

if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    const renameMap = {};
    
    // Находим все файлы, начинающиеся с подчеркивания
    files.forEach(file => {
        if (file.startsWith('_')) {
            const newName = file.substring(1); // Убираем первый символ (_)
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
        let cssChanged = false;
        
        Object.entries(renameMap).forEach(([oldName, newName]) => {
            if (css.includes(oldName)) {
                const escapedOldName = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                css = css.replace(new RegExp(escapedOldName, 'g'), newName);
                cssChanged = true;
            }
        });
        
        if (cssChanged) {
            fs.writeFileSync(cssPath, css);
            console.log(`✅ CSS обновлен: ${cssFile}`);
        }
    });
    
    console.log(`\n📋 Всего переименовано файлов: ${Object.keys(renameMap).length}`);
    
} else {
    console.log('❌ Папка assets не найдена');
}