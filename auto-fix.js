import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'dist/spa/assets');
const indexPath = path.join(__dirname, 'dist/spa/index.html');

console.log('🤖 Автоматическое исправление имен...');

if (fs.existsSync(assetsDir) && fs.existsSync(indexPath)) {
    // Читаем все файлы в assets
    const files = fs.readdirSync(assetsDir);
    
    // Читаем index.html
    let html = fs.readFileSync(indexPath, 'utf8');
    
    // Ищем все ссылки на JS файлы в index.html
    const jsLinks = html.match(/src="[^"]+\.js"/g) || [];
    const referencedJsFiles = jsLinks.map(link => {
        const match = link.match(/src="[^"]*\/([^"]+\.js)"/);
        return match ? match[1] : null;
    }).filter(Boolean);
    
    console.log('📋 Файлы, указанные в index.html:');
    referencedJsFiles.forEach(file => console.log(`   ${file}`));
    
    console.log('\n📋 Файлы в папке assets:');
    files.forEach(file => console.log(`   ${file}`));
    
    // Находим несоответствия
    const missingFiles = referencedJsFiles.filter(refFile => 
        !files.includes(refFile) && !files.includes(refFile.replace(/[^a-zA-Z0-9.-]/g, ''))
    );
    
    if (missingFiles.length > 0) {
        console.log('\n❌ Отсутствуют файлы:');
        missingFiles.forEach(file => console.log(`   ${file}`));
        
        // Пытаемся найти похожие файлы
        missingFiles.forEach(missingFile => {
            const baseName = missingFile.split('-')[0]; // Берем первую часть имени
            const similarFile = files.find(f => f.includes(baseName));
            
            if (similarFile) {
                console.log(`   Найден похожий: ${missingFile} -> ${similarFile}`);
                
                // Создаем копию с нужным именем
                const srcPath = path.join(assetsDir, similarFile);
                const destPath = path.join(assetsDir, missingFile);
                fs.copyFileSync(srcPath, destPath);
                console.log(`   ✅ Скопирован: ${similarFile} -> ${missingFile}`);
            }
        });
    } else {
        console.log('✅ Все файлы на месте!');
    }
}