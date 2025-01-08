var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let exphbs = require('express-handlebars');
var indexRouter = require('./routes/index');
let mongoose = require('mongoose');

var app = express();

// view engine setup
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: {
    formatDate: function (date) {
      return date.toLocaleDateString( 'vi-VN');
    },
    formatCurrency: (value) => {
      return new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND'
      }).format(value).replace('₫', 'VNĐ');
  },
  }

});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// connect to mongodb
mongoose.connect('mongodb://localhost/node-demo', {
});
const db = mongoose.connection;

// Lắng nghe sự kiện lỗi
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// Lắng nghe sự kiện kết nối thành công
db.once('open', () => {
    console.log('MongoDB connected successfully!');
});

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
