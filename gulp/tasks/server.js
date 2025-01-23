export const server = (done) => {
	app.plugins.browsersync.init({
		server: {
			baseDir: `${app.path.build.html}`
		},
		notify: false, //отключить различные сообщения от браузера
		port: 3000,
	});
}