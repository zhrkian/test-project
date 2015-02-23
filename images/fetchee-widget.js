(function() {


	window.fetchee = {
		publisherId: '',
		_css: '.fetchee-container{background-color:black;margin-left:auto;margin-right:auto;text-align:center;width:100%}.fetchee-button{background-color:yellow}.fetchee-popover{padding:20px;background-color:#eaeaea;position:absolute;display:none;border-color:#444141;border-style:solid;border-width:3px;-moz-border-radius:15px;-webkit-border-radius:15px;border-radius:15px;z-index:2}.fetchee-input{-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;z-index:2}.fetchee-button{-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;z-index:2}.fetchee-ok{-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;z-index:2;background-color:#5cb85c}.fetchee-cancel{-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;z-index:2;background-color:#f0ad4e}',
		_html: '<button id="fetchee-button" class="fetchee-button">THIS IS A WIDGET BUTTON!!!</button> <div id="fetchee-popover" class="fetchee-popover" align="center"> <p>I\'m a fetchee popover!!!</p> <input class="fetchee-input" type="email"/> <br><br> <button class="fetchee-ok">Ok</button> <button class="fetchee-cancel">Cancel</button></div>',

		init: function(publisherId){
			var self = this;
			self.publisherId = publisherId;
			self.getStyles(self._css);
			self.getTemplate(self._html);
		},
		getTemplate: function(html){
			var widgetElement		= document.createElement('div');
			widgetElement.innerHTML	= html;
			widgetElement.setAttribute('class', 'fetchee-container');
			document.body.insertBefore(widgetElement, document.body.firstChild);

			this.widgetController(widgetElement);
		},
		getStyles: function(styles){
			var fstyles = document.createElement('style');
			fstyles.setAttribute('type', 'text/css');
			fstyles.innerHTML = styles;
			document.getElementsByTagName('head')[0].appendChild(fstyles);
		},
		widgetController: function(widget){
			var self = this;
			var fetcheeButton	= widget.getElementsByClassName('fetchee-button')[0];
			var fetcheePopover	= widget.getElementsByClassName('fetchee-popover')[0];

			self.widgetPopoverController(widget, fetcheePopover);

			fetcheeButton.addEventListener('click', function(event){
				self.showPopOver(fetcheePopover, event);
			});
		},
		widgetPopoverController: function(widget, popover){
			var self = this;
			var ok		= widget.getElementsByClassName('fetchee-ok')[0];
			var cancel	= widget.getElementsByClassName('fetchee-cancel')[0];
			var email	= widget.getElementsByClassName('fetchee-input')[0];

			ok.addEventListener('click', function(){
				self.closePopOver(popover, email);
				self.getWidgetPost('http://beta.rpgcloud.net:5000/api/subscribe');
			});

			cancel.addEventListener('click', function(){
				self.closePopOver(popover);
			});
		},
		showPopOver: function(popover, event) {
			popover.style.left		= event.pageX + 'px';
			popover.style.top		= event.pageY + 'px';
			popover.style.display	= 'inline';
		},

		closePopOver: function(popover, email) {
			if (email.value){
				popover.style.display = 'none';
			} else {
				popover.style.display = 'none';
			}
		},
		getWidgetPost: function(url, data){
			var httpRequest = new XMLHttpRequest();
			httpRequest.open('POST', url, true);
			httpRequest.withCredentials = false;
			httpRequest.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
			httpRequest.onreadystatechange = function () {
				if (httpRequest.readyState == 4 && httpRequest.status == 200) {
					console.log(JSON.parse(httpRequest.responseText));
				};
			};
			httpRequest.send(JSON.stringify(data));
		}


	}
	//Раскомментить если тянем из файлов
	//var getWidgetSync = function(url, callback){
	//	var httpRequest = new XMLHttpRequest();
	//	httpRequest.onreadystatechange = function () {
	//		if (httpRequest.readyState == 4 && httpRequest.status == 200) {
	//			callback(httpRequest.responseText);
	//		};
	//	};
	//	httpRequest.open('GET', url, false);
	//	httpRequest.send(null);
	//};


	//Этим темплейты из JS для тестов на сервере
	//getStyles(_css);
	//getTemplate(_html);

	//Для работы из fetchee-template/styles
	//getWidgetSync('//beta.rpgcloud.net:8080/fetchee-styles', getStyles);
	//getWidgetSync('//beta.rpgcloud.net:8080/fetchee-template', getTemplate);
}());
