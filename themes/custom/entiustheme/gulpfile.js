const {
  series,
  parallel,
  src,
  dest,
  watch,
} = require('gulp');
const gulp = require("gulp");
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const beautify = require('gulp-jsbeautifier');
const removeEmptyLines = require('gulp-remove-empty-lines');
const gulpstripcomments = require('gulp-strip-comments');
const stripCssComments = require('gulp-strip-css-comments');
const cleanCSS = require('gulp-clean-css');
const stripLogs = require('gulp-strip-debug');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');

// Static server
function browserSyncing() {
  console.log("running.. browserSyncing");
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
      },
      port: 3000
     });
     //or
      //   browserSync.init({
      //     proxy: "yourlocal.dev"
      // });
  
  gulp.watch("scss/*.scss", scssTask).on('change', browserSync.reload);;
  gulp.watch("js/*.js", javascriptTask).on('change', browserSync.reload);;
  gulp.watch(["*.html","html/index.html"]).on('change', browserSync.reload);
}



function scssTask() {
  console.log("running.. scssTask");
  return src("./scss/**.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest("./dist/css"));
}

function javascriptTask() {
  console.log("running.. javascriptTask");
  return src([
      'node_modules/babel-polyfill/dist/polyfill.js',
      'js/**.js'  
    ])
    .pipe(babel(
      //   {presets: ['es2015','es2016']}
        {
          "presets": [["@babel/preset-env", { "targets": "defaults" }]]
        }
    
    ))
    .pipe(sourcemaps.init())
    .pipe(concat("All.js"))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/js'));
}

function beautifyJsTask() {
  console.log("running.. beautifyJsTask");
  return src('./js/*.js')
    .pipe(beautify())
    .pipe(dest('./js'))
};

function beautifyHtmlTask() {
  console.log("running.. beautifyHtmlTask");
  return src('./html/*.html')
    .pipe(beautify())
    .pipe(dest('./html'));
}

function beautifyScssTask() {
  console.log("running.. beautifyScssTask");
  return src(['./scss/*.scss'])
    .pipe(beautify())
    .pipe(dest('./scss'))
};

// function watchingAll() {
//   console.log("running.. watchingAll");
//   watch('scss/*.scss', scssTask);
//   watch('js/*.js', javascriptTask);
//   watch('html/*.html');
// }

function cleanJsForProd() {
  console.log("running.. cleanJsForProd");
  return src('./dist/js/All.js')
    .pipe(beautify())
    .pipe(removeEmptyLines())
    .pipe(gulpstripcomments())
    .pipe(stripLogs())
    .pipe(dest('./dist/prod/js'))
    .pipe(uglify())
    .pipe(rename({
      extname: 'prod.min.js'
    }))
    .pipe(dest('dist/prod/js'));
};

function cleanScssForProd() {
  console.log("running.. cleanScssForProd");
  return src(['./scss/**.scss'])
    .pipe(beautify())
    .pipe(removeEmptyLines())
    .pipe(dest('./dist/scss'));
};

function cleanCssForProd() {
  console.log("running.. cleanCssForProd");
  return src(['./dist/css/**.css'])
    //split de functie in scss en css een serie functie
    .pipe(beautify())
    .pipe(removeEmptyLines())
    .pipe(stripCssComments())
    .pipe(dest('./dist/css'))
    .pipe(cleanCSS(
      {compatibility: 'ie8'}
      ))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(dest('dist/prod/css'));
};


//because of the exports, you can run "gulp scssTask" 
//or "gulp tasknumber1"
exports.javascriptTask = javascriptTask;
exports.beautifyScssTask = beautifyScssTask;
exports.cleanJsForProd = cleanJsForProd;
exports.cleanCssForProd = cleanCssForProd;
exports.cleanScssForProd = cleanScssForProd;
exports.beautifyHtmlTask = beautifyHtmlTask;

//default gulp task by running "gulp". 
exports.default = series(
  //linting task w3c voor html en css?
  parallel(beautifyScssTask, beautifyHtmlTask, beautifyJsTask),
  browserSyncing
);

//cleaning 
exports.cleaning = series(beautifyJsTask,beautifyScssTask,
  parallel(cleanJsForProd, cleanCssForProd, cleanScssForProd)
  //CopypublishTask?
)

//for production
exports.runprod = function () {
  //series(cleanCssForProd,cleanScssForProd);
  parallel(cleanJsForProd, cleanCssForProd, cleanScssForProd);
  //CopypublishTask?
}


//voert eerst serie uit (tasknumber1 uit -> daarna parallel()); 
//parallel voert beide tegelijk uit. (scssTask en javascriptTask);
//exports.default = series(tasknumber1, parallel(scssTask, javascriptTask));