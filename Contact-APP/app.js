const yargs = require('yargs');
const contacts = require('./contacts');

yargs.command({
  command: 'add',
  describe: 'Menambahkan contact baru',
  builder: {
    nama: {
        describe: "Nama lengkap",
        demandOption : true,
        type: 'string',
    },
    email:{
        describe: 'Email',
        demandOption : false,
        type: 'string',
    },
    noHP:{
        describe: 'Nomor Hendphone',
        demandOption : true,
        type: 'string',
    }
  },
  handler(argv){
    contacts.simpanContact(argv.nama, argv.email, argv.noHP);
  },  
})
.demandCommand();

//Menampilkan daftar semua nama  & no HP contact
yargs.command({
command: 'list',
  describe: 'Menampilkan semua nama & no HP contact',
  handler(){
    contacts.listContact();
  },
});

//menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
      describe: 'Menampilkan detail sebuah contact berdasarkan nama',
      builder : {
        nama: {
            describe: "Nama lengkap",
            demandOption : true,
            type: 'string',
        },
      },
      handler(argv){
        contacts.detailContact(argv.nama);
      },
    });
    
//Menghapus contactberdasarkan nama
yargs.command({
  command: 'delete',
    describe: 'Menghapus detail sebuah contact berdasarkan nama',
    builder : {
      nama: {
          describe: "Nama lengkap",
          demandOption : true,
          type: 'string',
      },
    },
    handler(argv){
      contacts.deleteContact(argv.nama);
    },
  });


yargs.parse();


