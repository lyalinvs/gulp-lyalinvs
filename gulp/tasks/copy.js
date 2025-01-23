//копирует файлы из папки исходников в папку готовых результатов

export const copy = () => {
	return app.gulp.src(app.path.src.files) /*получили файлы из указанной папки для копирования*/
		.pipe(app.gulp.dest(app.path.build.files)); /*скопировали файлы в указанную папку*/
}