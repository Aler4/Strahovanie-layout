import fileInclude from  'gulp-file-include';
import versionNumber from 'gulp-version-number';

export const html = () => {
    return app.gulp.src(app.path.src.pages)
        .pipe(fileInclude())
        .pipe(
            versionNumber({
                'value': '%DT%',
                'append': {
                    'key':'_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js'
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            })
        )
        .pipe(app.gulp.dest(app.path.build.pages))
        .pipe(app.plugins.browsersync.stream());
};