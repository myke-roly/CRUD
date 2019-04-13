const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Router
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'))
app.use('/api/users', require('./routes/users'));

app.use(express.static(path.join(__dirname, './public')));

// Starting the server
app.listen(app.set('port'), () => {
    console.log(`Listen server on port ${ app.set('port') }`);
});