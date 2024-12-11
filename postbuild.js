const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "resources", "src");
const destinationDir = path.join(__dirname, "resources");

// Рекурсивное перемещение содержимого
function moveContents(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`Источник не существует: ${src}`);
    return;
  }

  const items = fs.readdirSync(src, { withFileTypes: true });

  items.forEach((item) => {
    const srcPath = path.join(src, item.name);
    const destPath = path.join(dest, item.name);

    if (item.isDirectory()) {
      // Переместить папку рекурсивно
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      moveContents(srcPath, destPath);
    } else {
      // Переместить файл
      fs.renameSync(srcPath, destPath);
    }
  });

  // Удалить исходную папку после перемещения
  fs.rmSync(src, { recursive: true, force: true });
}

// Переместить содержимое из resources/src в resources
moveContents(sourceDir, destinationDir);

console.log("Перемещение завершено!");
