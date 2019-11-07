const gulp = require("gulp");
const zip = require("gulp-zip");
const clean = require("gulp-clean");
// const alias = require("gulp-ts-path-alias");

const globs = [
  "app/**/!(*.ts)*",
  "config/**/!(*.ts)*",
  "app.js",
  "agent.js",
  "package.json"
];

gulp.task("default", ["clean", "zip"]);

gulp.task("zip", () => {
  return (
    gulp
      .src(globs, {
        base: "./"
      })
      // .pipe(
      //   alias(".", {
      //     "@/*": ["app/*"]
      //   })
      // )
      .pipe(zip("release.zip"))
      .pipe(gulp.dest(""))
  );
});

gulp.task("clean", () => {
  return gulp
    .src("release.zip", {
      read: false
    })
    .pipe(clean());
});
