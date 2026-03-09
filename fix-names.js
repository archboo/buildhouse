import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'dist/spa/assets');
const indexPath = path.join(__dirname, 'dist/spa/index.html');

console.log('🔧 Фиксация имен файлов...');

// Словарь для маппинга старых имен на новые
const nameMapping = {
    'Axios-WPi3xxQ.js': 'axios.js',
    'MainLayout-C_gEjFF0.js': 'MainLayout.js',
    'HomePage-T_B79hG-.js': 'HomePage.js',
    // Добавьте остальные файлы
};

if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    
    // Переименовываем файлы согласно маппингу
    Object.entries(nameMapping).forEach(([oldName, newName]) => {
        const oldPath = path.join(assetsDir, oldName);
        const newPath = path.join(assetsDir, newName);
        
        if (fs.existsSync(oldPath)) {
            fs.renameSync(oldPath, newPath);
            console.log(`✅ Переименован: ${oldName} -> ${newName}`);
        }
    });
    
    // Обновляем ссылки в index.html
    if (fs.existsSync(indexPath)) {
        let html = fs.readFileSync(indexPath, 'utf8');
        
        Object.entries(nameMapping).forEach(([oldName, newName]) => {
            html = html.replace(new RegExp(oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newName);
        });
        
        fs.writeFileSync(indexPath, html);
        console.log('✅ index.html обновлен');
    }
}