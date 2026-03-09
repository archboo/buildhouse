import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'dist/spa/assets');

console.log('🔄 Восстановление расширений файлов...');

if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    const restorationMap = {
        // CSS файлы
        'HomePage-css-D5m0PRHg': 'HomePage-css-D5m0PRHg.css',
        'index-css-BQlA4XsM': 'index-css-BQlA4XsM.css',
        'MainLayout-css-O-tfrGlf': 'MainLayout-css-O-tfrGlf.css',
        
        // Изображения
        'logo-svg-CTpXhdPD': 'logo-svg-CTpXhdPD.svg',
        'main-banner-png-BJrC0JoY': 'main-banner-png-BJrC0JoY.png',
        'map-wihte-png-CDAbRJPP': 'map-wihte-png-CDAbRJPP.png',
        
        // Шрифты
        'flUhRq6tzZclQEJ-Vdg-IuiaDsNa-woff-Dr0goTwe': 'flUhRq6tzZclQEJ-Vdg-IuiaDsNa-woff-Dr0goTwe.woff',
        'flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-woff2-D-x-0Q06': 'flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-woff2-D-x-0Q06.woff2',
        'KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabVmUiAw-woff-CNa4tw4G': 'KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabVmUiAw-woff-CNa4tw4G.woff',
        'KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bVmUiAw-woff-CHKg1YId': 'KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bVmUiAw-woff-CHKg1YId.woff',
        'KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAw-woff-yBxCyPWP': 'KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAw-woff-yBxCyPWP.woff',
        'KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAw-woff-3fZ6d7DD': 'KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAw-woff-3fZ6d7DD.woff',
        'KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjalmUiAw-woff-BepdiOnY': 'KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjalmUiAw-woff-BepdiOnY.woff',
        'KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtalmUiAw-woff-4ZhHFPot': 'KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtalmUiAw-woff-4ZhHFPot.woff'
    };
    
    let restored = 0;
    
    files.forEach(file => {
        if (restorationMap[file]) {
            const oldPath = path.join(assetsDir, file);
            const newPath = path.join(assetsDir, restorationMap[file]);
            
            if (fs.existsSync(oldPath) && !fs.existsSync(newPath)) {
                fs.renameSync(oldPath, newPath);
                console.log(`✅ Восстановлен: ${file} -> ${restorationMap[file]}`);
                restored++;
            }
        }
    });
    
    if (restored === 0) {
        console.log('✅ Нет файлов для восстановления');
    }
    
    // Проверяем файлы без расширений
    console.log('\n📋 Текущие файлы без расширений:');
    const currentFiles = fs.readdirSync(assetsDir);
    currentFiles.forEach(file => {
        if (!path.extname(file) && !file.endsWith('.js')) {
            console.log(`   ⚠️ ${file}`);
        }
    });
    
} else {
    console.log('❌ Папка assets не найдена');
}