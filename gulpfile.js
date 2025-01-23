//основной модуль
import gulp from "gulp";
//импорт путей
import { path } from "./gulp/config/path.js";
//импорт общих плагинов
import { plugins } from "./gulp/config/plugin.js";

//передаём значения в глобальную переменную (потому что модули будут писаться в отдельный файлах)
global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins
}

//импорт задач
//import {copy} from "./gulp/tasks/copy.js";
import {images} from "./gulp/tasks/images.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js";
//import {otfToTtf, ttfToWoff, fontsStyle} from "./gulp/tasks/fonts.js"
import {svgSprive} from "./gulp/tasks/svgSprive.js";
import {zip} from "./gulp/tasks/zip.js";

//наблюдатель за изминениями файлов
function watcher(){
	//gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.images, images);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
}

export {svgSprive}

//последовательная обработка шрифтов
//const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//основные задачи
//const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));
//const mainTasks = gulp.parallel(copy, html, scss, js, images);
const mainTasks = gulp.parallel(html, scss, js, images);

//выполняем задачи
//построение сценариев выполнения задач
//задача по умолчанию
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
//задача для создания архива
const deployZip = gulp.series(reset, mainTasks, zip);

export{deployZip}

//сценарий по умолчанию называется default
gulp.task('default', dev);