import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, 'dist/spa');
const indexPath = path.join(distPath, 'index.html');
const assetsDir = path.join(distPath, 'assets');

console.log('🔧 Безопасное исправление путей...');

// Сначала просто выведем список всех файлов для диагностики
console.log('\n📋 Файлы в assets:');
let files = [];
if (fs.existsSync(assetsDir)) {
    files = fs.readdirSync(assetsDir).sort();
    files.forEach(file => {
        const stats = fs.statSync(path.join(assetsDir, file));
        const size = (stats.size / 1024).toFixed(2) + ' KB';
        console.log(`   ${file.padEnd(50)} ${size}`);
    });
}

// Исправляем только index.html, но БЕЗ изменения имен файлов
if (fs.existsSync(indexPath)) {
    console.log('\n📝 Проверка index.html...');
    let html = fs.readFileSync(indexPath, 'utf8');
    let changed = false;
    
    // Находим все ссылки на файлы в index.html
    const linkRegex = /(href|src)=["']([^"']+)["']/g;
    let match;
    const links = [];
    
    while ((match = linkRegex.exec(html)) !== null) {
        links.push({
            type: match[1],
            url: match[2]
        });
    }
    
    console.log('Найденные ссылки:');
    links.forEach(link => {
        console.log(`   ${link.type}=${link.url}`);
        
        // Проверяем, существует ли файл
        if (link.url.includes('/assets/')) {
            const fileName = link.url.split('/assets/')[1];
            const fileExists = files.some(f => f === fileName || f === fileName + '.');
            
            if (!fileExists) {
                console.log(`   ⚠️ Файл не найден: ${fileName}`);
                
                // Ищем похожий файл
                const similarFile = files.find(f => 
                    f.replace(/\.$/, '') === fileName || 
                    f === fileName.replace(/\.css$/, '') ||
                    f.includes(fileName.replace(/\.[^/.]+$/, ''))
                );
                
                if (similarFile) {
                    console.log(`   ✅ Найден похожий: ${similarFile}`);
                    
                    // Исправляем ссылку в HTML
                    const oldUrl = link.url;
                    const newUrl = '/buildhouse/assets/' + similarFile;
                    html = html.replace(new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newUrl);
                    changed = true;
                }
            } else {
                console.log(`   ✅ Файл существует: ${fileName}`);
            }
        }
    });
    
    if (changed) {
        fs.writeFileSync(indexPath, html);
        console.log('✅ index.html обновлен (исправлены ссылки)');
    } else {
        console.log('✅ index.html в порядке, изменения не требуются');
    }
}

// Проверяем CSS файлы
console.log('\n🎨 Проверка CSS файлов...');
const cssFiles = files.filter(f => f.endsWith('.css') || f.includes('-css-') || f.endsWith('.css.'));
cssFiles.forEach(cssFile => {
    const cssPath = path.join(assetsDir, cssFile);
    let css = fs.readFileSync(cssPath, 'utf8');
    let cssChanged = false;
    
    // Ищем ссылки на изображения в CSS
    const urlRegex = /url\(["']?([^"')]+)["']?\)/g;
    let urlMatch;
    
    while ((urlMatch = urlRegex.exec(css)) !== null) {
        const url = urlMatch[1];
        
        // Проверяем только локальные файлы
        if (!url.startsWith('http') && !url.startsWith('data:')) {
            const fileName = url.split('/').pop();
            
            // Ищем файл в assets
            const fileExists = files.some(f => f === fileName || f === fileName + '.');
            
            if (!fileExists) {
                console.log(`   ⚠️ В CSS ${cssFile} не найден файл: ${fileName}`);
                
                // Ищем похожий файл
                const similarFile = files.find(f => 
                    f.replace(/\.$/, '') === fileName || 
                    f.includes(fileName.replace(/\.[^/.]+$/, ''))
                );
                
                if (similarFile) {
                    console.log(`   ✅ Найден похожий: ${similarFile}`);
                    
                    // Исправляем ссылку в CSS
                    css = css.replace(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), similarFile);
                    cssChanged = true;
                }
            }
        }
    }
    
    if (cssChanged) {
        fs.writeFileSync(cssPath, css);
        console.log(`✅ CSS обновлен: ${cssFile}`);
    }
});

console.log('\n✅ Диагностика завершена!');