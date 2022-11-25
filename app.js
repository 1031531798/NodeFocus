var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var stylus = require('stylus');
var { graphqlHTTP } = require('express-graphql');
var { graphql, buildSchema } = require('graphql');
var { buildSchema } = require('graphql');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fileRouter = require('./routes/file');
var petApp = require('./routes/flutterApi');
var myImage = require('./routes/myImage');
const {initGraphql} = require('./graphql/serve');
const { initSocket } = require('./utils/socket');
var ejs = require('ejs');
var app = express();
let imagePath = process.cwd() + '\\public\\images\\';
var root = {
  hello: () => 'hello world',
  typeList: () => {
    return 
  }
};
initSocket(app)
//graphql 请求拦截
initGraphql(app)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/file', fileRouter)
app.use('/myImage', myImage)
app.use('/petApp', petApp)
app.get('/',(req, res) => {
  res.writeHead(200,{'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/index.html').pipe(res);
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.all("*",function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.send(200);  //让options尝试请求快速结束
  else
    next();
})
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
