import gulp from 'gulp'
import eslint from 'gulp-eslint'
import fileCache from 'gulp-file-cache'
import babel from 'gulp-babel'
import nodemon from 'gulp-nodemon'
import gutil from 'gulp-util'

const cache = new fileCache()
const SRC = ['src/**']
const DIST = 'dist'

const notify = (event) => {
  gutil.log('File', gutil.colors.green(event.path), 'was', gutil.colors.magenta(event.type))
}

gulp.task('lint', () => {  
  return gulp.src(SRC)
    .pipe(cache.filter())
    .pipe(eslint())
    .pipe(eslint.result(result => {
      console.log(`ESLint result: ${result.filePath}`)
      console.log(`# Messages: ${result.messages.length}`)
      console.log(`# Warnings: ${result.warningCount}`)
      console.log(`# Errors: ${result.errorCount}`)
    }))
    .pipe(eslint.format())
    .pipe(cache.cache())
})
gulp.task('compile', () => {
  return gulp.src(SRC)
    .pipe(cache.filter())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(cache.cache())
    .pipe(gulp.dest(DIST));
})

gulp.task('watch', () => {
  let watcher = {
    compile: gulp.watch(SRC, ['compile'])
  }
  for (let key in watcher) {
    watcher[key].on('change', notify)
  }
})

gulp.task('start', () => {
  return  nodemon({
      script: DIST + '/server.js',
      watch: DIST
      // tasks: ['compile']
    })
})

gulp.task('default',['watch', 'start'], () => {
  gutil.log('Gulp is running')
})