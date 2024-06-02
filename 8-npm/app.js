const validator = require('validator')
const chalk = require('chalk');

//console.log(validator.isEmail('ahiyasya@gmail.com'));
//console.log(validator.isMobilePhone('087818679286', 'id-ID'));
//console.log(validator.isNumeric('087818679286'));
//console.log(chalk.italic.bgBlue.black('Hello world!'));
const nama = 'Ahmad iyasya';
const pesan = chalk`Lorem, ipsum dolor {bgRed.black sit amet} consectetur {bgGreen.italic.black.bold adipisicing}  elit. Nama saya ${nama}`;
console.log(pesan);