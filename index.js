require('babel-register');
const fs = require('fs');
const folder = './content/';

if (!process.argv[3]) {
  console.error("Por favor ingresa un número");
  return;
}

fs.readdir(folder, (err, files) => {
  const match = new RegExp(`${process.argv[3]}-`);
  const lesson = files.find((file) => file.match(match));
  if (lesson) {
    require(`${folder}${lesson}/${process.argv[2]}.js`);
  } else {
    console.error("Modulo no encontrado");
  }
});
