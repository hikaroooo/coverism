const getColors = require('get-image-colors');
const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'images');

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('이미지 폴더를 읽는 데 실패했습니다:', err);
    return;
  }

  const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));

  imageFiles.forEach(file => {
    const filePath = path.join(folderPath, file);

    getColors(filePath).then(colors => {
      const hexColors = colors.map(color => color.hex());
      console.log(`📚 ${file} →`, hexColors.join(', '));
    }).catch(err => {
      console.error(`⚠️  ${file} 처리 실패:`, err.message);
    });
  });
});