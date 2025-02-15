/*проверка поддержки webp, добавление класса webp или no-webp для HTML*/
export function isWebp(){
	//проверка поддержки webp
	function testWebP(callback){
		let webP = new Image();
		webP.onload = webP.onerror = function(){
			callback(webP.height == 2)
		};
		webP.src = "data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA";
	}
	//добавление класса _webp или _no-webp для HTML
	testWebP(function(support){
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}