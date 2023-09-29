process.env.PORT = process.env.PORT || 4000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB = "mongodb://root:example@192.168.44.117/users";

if (process.env.NODE_ENV === 'dev') {
    urlDB = "mongodb://root:example@192.168.44.117/users";
} else {
    urlDB = "mongodb://root:example@192.168.44.117/"
};

process.env.URLDB = urlDB;

process.env.CADUCIDAD_TOKEN = '48h';

process.env.SEED_AUTENTICACION = process.env.SEED_AUTENTICACION ||  'este-es-el-seed-desarrollo';