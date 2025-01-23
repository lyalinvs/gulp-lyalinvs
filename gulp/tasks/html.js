import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "HTML",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(fileinclude()) //собирает из ./src/html/*.html в ./src/index.html
		.pipe(app.plugins.replace(/@img\//g, 'img/')) //находит @img и меняет на img/
		.pipe(webpHtmlNosvg()) //из картинок в формат webp
		.pipe(
			versionNumber({ //добавляет к готовым файлам дату и время
				'value': '%DT%',
				'append': {
					'key': '_v',
					'cover': 0,
					'to': [
						'css',
						'js',
					]
				},
				'output': {
					'file': 'gulp/version.json'
				}
			})
		)
		.pipe(app.gulp.dest(app.path.build.html)) //копирует html из папки исходников в папку готовых результатов
		.pipe(app.plugins.browsersync.stream()); //(после открытия) обновляет браузер
}
