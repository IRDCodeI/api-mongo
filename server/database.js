const mongoose = require('mongoose'); 
const URI = 'mongodb://144.22.35.114:27017/'; 

mongoose.connect(URI)
.then(db=> console.log('BD conectada'))
.catch(err => console.error(err));

module.exports = mongoose;