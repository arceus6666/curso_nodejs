const express = require('express');
const path = require('path');
// initializations
const app = express();
// settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// routes
app.use(require('./routes'));
// Start the server
app.listen(app.get('port'), () => {
 console.log("Server escuchando ", app.get('port'))
})