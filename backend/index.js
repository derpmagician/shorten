if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const path = require('path');
const app = express();

require('./database');

app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
// // app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());
// // app.use(express.static('public'));

app.use('/', require('./routes/index'));
app.use('/api/urls', require('./routes/urls'));
// app.use('/here', require('./routes/here'));

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
