import imagemin from "gulp-imagemin";
import webp from "gulp-webp";

export const images = () => {
	//return app.gulp.src(app.path.src.images)
	return app.gulp.src(app.path.src.images, { encoding: false })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "IMAGES",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.gulp.src(app.path.src.images))
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(imagemin({
			progressive: true,
			svgPlugins: [{removeViewBox: false}],
			interlaced: true,
			optimazationLevel: 7 // 0 to 7 степень сжатия
		}))		
		.pipe(webp())
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.gulp.src(app.path.src.svg))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browsersync.stream());
}