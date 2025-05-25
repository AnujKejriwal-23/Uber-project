const mongoose = require('mongoose');


function connectTodb() {
  mongoose.connect(process.env.DB_CONNECT)
  .then(() => console.log('Connected!'))
  .catch((err)=>{
    console.log('COnnection Failed!',err)
  });
}

module.exports = connectTodb;