var myModule = (function(){
	var DEFAULT = {
		myButton : document.querySelector('#button'),
		myTextArea : document.querySelector('textarea'),
		minHeightVal : '50',
		maxHeightVal : '400'
	};

	var autoResize = function (){
		var clientH = DEFAULT.myTextArea.clientHeight;

	    DEFAULT.myTextArea.style.overflow = (clientH < DEFAULT.maxHeightVal) ? 'hidden': 'scroll';
	    DEFAULT.myTextArea.style.height = "100%"; // for some reason this only works in javascript?
	    DEFAULT.myTextArea.style.minHeight = DEFAULT.minHeightVal + 'px';
	    DEFAULT.myTextArea.style.maxHeight = DEFAULT.maxHeightVal + 'px';
	    DEFAULT.myTextArea.style.height = DEFAULT.myTextArea.scrollHeight + 'px';
	    DEFAULT.myTextArea.style.padding = '10px';
	};

	autoResize();
	
	return {
		runTheApp : function(){
			return DEFAULT.myTextArea.addEventListener('keyup', autoResize, false);
		},
		setSize : function(){
			var myArguments = arguments[0] || '';
			DEFAULT.minHeightVal = myArguments.minHeightVal || DEFAULT.minHeightVal;
			DEFAULT.maxHeightVal = myArguments.maxHeightVal || DEFAULT.maxHeightVal;
			return autoResize();
		}
	};
})();

// Adjustable module settings to run the app.
myModule.setSize({minHeightVal : '50', maxHeightVal : '400'});
myModule.runTheApp();
