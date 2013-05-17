( function() {
    /*global jQuery: false*/
    'use strict';
	
	var $smile = document.getElementById('smile');

	$smile.onclick = function() {
		if ( this.className === '') {
			this.className ='is-active';
		} else {
			this.className = '';
			setTimeout(function() {
				$smile.className = 'is-active';
			}, 100);
		};
	};
})();//(function()