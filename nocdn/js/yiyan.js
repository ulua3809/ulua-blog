var xhr = new XMLHttpRequest();
xhr.open('get', 'https://v1.hitokoto.cn');
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		var data = JSON.parse(xhr.responseText);
		var gushici = document.getElementById('jinrishici-sentence');
		var hitokoto = data.hitokoto;
		if (data.from) {
			hitokoto += "\n--from " + data.from;
		}
		if (data.from_who) {
			hitokoto += " " + data.from_who;
		}
		gushici.innerText = hitokoto;
		console.log(data);
	}
};
xhr.send();