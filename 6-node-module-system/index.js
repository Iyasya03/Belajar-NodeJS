
//const nama = 'Ahmad iyasya';
//const cetakNama = (nama) => `Hi, nama saya ${nama}`;
//console.log(cetakNama( nama ));
//const fs = require('fs');
//const cetakNama = require('./coba');//local module
//const moment = require('moment'); // thrid party module / npm module / node_module
//console.log('Hello wpu');
const coba = require('./coba');

console.log(
    coba.cetakNama('Ahmad iyasya'), 
    coba.PI,
    coba.mahasiswa.cetakMhs(), 
    new coba.Orang()
);

