const { Sequelize } = require("sequelize");

// database connection
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql" || process.env.DB_DRIVER,
    logging: false,
    dialectOptions: process.env.NODE_ENV == 'development' ? {} : {
      ssl: {
        require: true, // This ensures SSL is used
        rejectUnauthorized: false, // This is for self-signed certificates, set to true for production
        // You can provide additional options here, such as:
        // ca: fs.readFileSync('/path/to/server-certificates/root.crt').toString(),
        // key: fs.readFileSync('/path/to/client-key/client-key.key').toString(),
        // cert: fs.readFileSync('/path/to/client-certificates/client-cert.crt').toString(),
      },
    },
    // pool: {
    //   max: 100,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000,
    // },
  },
);

module.exports = sequelize;
