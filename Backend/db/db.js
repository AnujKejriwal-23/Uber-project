const mongoose = require('mongoose');


function connectTodb() {
  mongoose.connect(process.env.DB_CONNECT)
  .then(() => console.log('Connected!'))
  .catch(()=>{
    console.log('COnnection Failed!')
  });
}

module.exports = connectTodb;