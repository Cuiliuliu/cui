const gulp = require("gulp");

const sass = require("gulp-sass");

const minifyCSS = require("gulp-minify-css");
const webserver = require("gulp-webserver");
const htmlmin = require("gulp-htmlmin");
const babel = require("gulp-babel");
const clean = require("gulp-clean");

gulp.task("minifyCSS", function () {
  return gulp
    .src("dist/css/*.css")
    .pipe(minifyCSS())
    .pipe(gulp.dest("dist/min-css"));
});
gulp.task("scssAll", function () {
  return gulp.src("scss/*.scss").pipe(sass()).pipe(gulp.dest("dist/css"));
});
gulp.task("watch", function () {
  gulp.watch("scss/*.scss", ["scssAll"]);
  gulp.watch("dist/css/*.css", ["minifyCSS"]);
  gulp.watch("./src/js/*.js", ["js"]);
  gulp.watch("./index.html", ["html"]);
  gulp.watch("./html/**", ["html"]);
  // gulp.watch("./html/**", ["webserver"]);
  // gulp.watch("./index.html", ["webserver"]);
  gulp.watch("./src/static/**", ["static"]);
});
gulp.task("webserver", function () {
  return gulp.src("./").pipe(
    webserver({
      host: "localhost",
      port: "8080",
      livereload: true,
      open: "./index.html",
      proxies: [
        // 配置所有代理
        {
          // 其中一个代理配置
          source: "/login", // 使用的关键字
          target: "http://localhost:80/login.php", // 代理的路径
        },
      ],
    })
  );
});

gulp.task("js", function () {
  return gulp
    .src("./js/**")
    .pipe(
      babel({
        presets: ["es2015"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"));
});
gulp.task("html", function () {
  return gulp
    .src("*.html")
    .pipe(
      htmlmin({
        removeEmptyAttibutes: true, // 移出所有空属性
        collapseWhitespace: true, // 压缩 html
      })
    )
    .pipe(gulp.dest("./dist/pages"));
});
gulp.task("clean", function () {
  return gulp.src("./dist").pipe(clean());
});
gulp.task("default", function () {
  // 里面的每一个参数都可以是一个任务或者一个任务队列
  // 再执行任务的时候，会把前一个任务队列完成的情况下再执行下一个任务队列
  runSequence(
    "clean",
    ["css", "sass", "js", "html", "lib", "static"],
    ["webserver", "watch"]
  );
});