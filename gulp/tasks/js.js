import webpack from 'webpack-stream';
import rename from "gulp-rename";

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: true })
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'main.min.js'
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
};