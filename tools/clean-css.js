const FS = require('fs');
const CleanCSS = require('clean-css');

const options = { level: 2 };
const outputFont = new CleanCSS(options).minify(['src/assets/css/font.css']);
const outputStyle = new CleanCSS(options).minify(['src/assets/css/style.css']);
FS.writeFile('dist/assets/css/style.min.css', outputStyle.styles, (err) => {
  if (err) throw err;
  console.log('minify is successfully');
});
FS.writeFile('dist/assets/css/font.min.css', outputFont.styles, (err) => {
  if (err) throw err;
  console.log('minify is successfully');
});