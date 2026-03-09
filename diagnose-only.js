import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, 'dist/spa');
const indexPath = path.join(distPath, 'index.html');
const assetsDir = path.join(distPath, 'assets');

console.log('🔍 ДИАГНОСТИКА (только чтение, без изменений)');
console.log('=============================================');

if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir).sort();
    
    console.log(`\n📋 Все файлы в assets (${files.length} шт.):`);
    files.forEach(file => {
        const ext = path.extname(file) || '(нет расширения)';
        const stats = fs.statSync(path.join(assetsDir, file));
        const size = (stats.size / 1024).toFixed(2) + ' KB';
        console.log(`   ${file.padEnd(50)} ${ext.padEnd(15)} ${size}`);
    });
    
    // Проверяем CSS ссылки в index.html
    if (fs.existsSync(indexPath)) {
        console.log('\n📝 Проверка index.html:');
        const html = fs.readFileSync(indexPath, 'utf8');
        
        // Ищем все ссылки на CSS
        const cssLinks = html.match(/href="[^"]+\.css[^"]*"/g) || [];
        console.log(`   Найдено CSS ссылок: ${cssLinks.length}`);
        cssLinks.forEach(link => {
            const cssFile = link.match(/href="([^"]+)"/)[1];
            const fileName = cssFile.split('/').pop();
            const exists = files.some(f => f === fileName || f === fileName + '.');
            console.log(`   ${link} - ${exists ? '✅' : '❌'} ${fileName}`);
        });
        
        // Ищем все ссылки на изображения
        const imgLinks = html.match(/src="[^"]+\.(png|jpg|jpeg|gif|svg)[^"]*"/g) || [];
        console.log(`\n   Найдено изображений: ${imgLinks.length}`);
        imgLinks.forEach(link => {
            const imgFile = link.match(/src="([^"]+)"/)[1];
            const fileName = imgFile.split('/').pop();
            const exists = files.some(f => f === fileName || f === fileName + '.');
            console.log(`   ${link} - ${exists ? '✅' : '❌'} ${fileName}`);
        });
    }
    
    // Проверяем CSS файлы
    console.log('\n🎨 Проверка CSS файлов:');
    const cssFiles = files.filter(f => f.endsWith('.css') || f.includes('-css-'));
    cssFiles.forEach(cssFile => {
        console.log(`\n   ${cssFile}:`);
        const cssPath = path.join(assetsDir, cssFile);
        const css = fs.readFileSync(cssPath, 'utf8');
        
        // Ищем ссылки на изображения в CSS
        const imageRefs = css.match(/url\([^)]+\)/g) || [];
        imageRefs.forEach(ref => {
            const imageFile = ref.match(/url\(['"]?([^'")]+)['"]?\)/)[1];
            const fileName = imageFile.split('/').pop();
            const exists = files.some(f => f === fileName || f === fileName + '.');
            console.log(`      ${ref} - ${exists ? '✅' : '❌'} ${fileName}`);
        });
    });
    
} else {
    console.log('❌ Папка assets не найдена');
}

console.log('\n✅ Диагностика завершена');