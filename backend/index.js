if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const path = require('path');

require('./database');

app.set('port', process.env.PORT || 3000);

// Midlewares
app.use(morgan('dev'));
// app.use(cors());

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/', require('./routes/index'));
app.use('/api/urls', require('./routes/urls'));

// app.use('/here', require('./routes/here'));

// app.get('/api/urls', function (req, res) {
//   res.render('index')
// });


// Init
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
