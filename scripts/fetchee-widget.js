(function() {

	function getFetcheeWidgetTemplate(url, callback){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				callback(xmlhttp.responseText);
			} else {
				callback(null);
			}
		};
		xmlhttp.open('GET', url, true);
		xmlhttp.send();
	}

	var _div = document.createElement('div');

	getFetcheeWidgetTemplate('//0.0.0.0:8000/fetchee-template.html', function(result){
		if (result){

			var fetchee_style = document.createElement('style');
			fetchee_style.setAttribute('type', 'text/css');
			fetchee_style.innerHTML = '.fetchee-button { background-color: yellow; }';
			document.getElementsByTagName('head')[0].appendChild(fetchee_style);

			_div.innerHTML = result;
			document.body.insertBefore(_div, document.body.firstChild);
		}
	})





	console.log('hhhhh');

}());
