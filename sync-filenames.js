import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'dist/spa/assets');
const indexPath = path.join(__dirname, 'dist/spa/index.html');

console.log('🔄 Синхронизация имен файлов...');

if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    const fileNameMap = {};
    
    // Создаем карту соответствия имен (убираем специальные символы)
    files.forEach(file => {
        // Создаем безопасное имя без странных символов
        let safeName = file.replace(/[^a-zA-Z0-9.-]/g, '-');
        if (safeName !== file) {
            fileNameMap[file] = safeName;
        }
    });
    
    // Переименовываем файлы
    Object.entries(fileNameMap).forEach(([oldName, newName]) => {
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
        
        Object.entries(fileNameMap).forEach(([oldName, newName]) => {
            html = html.replace(new RegExp(oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newName);
        });
        
        fs.writeFileSync(indexPath, html);
        console.log('✅ index.html обновлен');
    }
}