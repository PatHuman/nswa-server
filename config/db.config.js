module.exports = {
  my:{
    HOST: "127.0.0.1",
    USER: "devman",
    PASSWORD: "pass",
    DB: "uchopdb",
    PORT:"3307",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  pg:{
    HOST: "127.0.0.1",
    USER: "postgres",
    PASSWORD: "postgres",
    DB: "postgres",
    PORT:"5432",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }    
  }

};
