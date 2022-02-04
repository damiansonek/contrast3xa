jQuery(document).ready(function ($) {
	function createCookie(name, value, days) {
		var expires = "";
		if (days) {
			var time = new Date();
			time.setTime(time.getTime() + (days * 24 * 60 * 60 * 1000));
		}
		document.cookie = name + "=" + value + expires + "; path=/";
	}

	function getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return "";
	}

	function deleteCookie(name) {
		createCookie(name, "", -1);
	}

	function checkCookie(name) {
		var check = getCookie(name);
		if (check != "")
			return true;
		return false;
	}

	function setCookie2(name,value,days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	}
	function getCookie2(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	function eraseCookie2(name) {   
		document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}

	if(getCookie2('fontSize')) {
		setFontSize(parseInt(getCookie2('fontSize')));
	} else {
		setFontSize(1);
	}

	if(getCookie2('contrastMode')) {
		setContrast(parseInt(getCookie2('contrastMode')) === 1);
	} else {
		setContrast(false);
	}

	function setContrast(state) {
		switch(state) {
			case true:
				$('*').addClass('contrast-mode');
				setCookie2('contrastMode', 1);
				break;
			case false:
				$('*').removeClass('contrast-mode');
				setCookie2('contrastMode', 0);
				break;
			default:
				setContrast(false);
		}
	}

	function setFontSize(target) {
		switch(target) {
			case 1:
				$('*').removeClass('fontsize2x');
				$('*').removeClass('fontsize3x');
				$('*').addClass('fontsize1x');
				setCookie2('fontSize', 1);
				break;
			case 2:
				$('*').removeClass('fontsize1x');
				$('*').removeClass('fontsize3x');
				$('*').addClass('fontsize2x');
				setCookie2('fontSize', 2);
				break;
			case 3:
				$('*').removeClass('fontsize1x');
				$('*').removeClass('fontsize2x');
				$('*').addClass('fontsize3x');
				setCookie2('fontSize', 3);
				break;
			default:
				setFontSize(1);
		}
	}

	$('#contrast').click(function () {
		if(parseInt(getCookie2('contrastMode')) === 1) {
			setContrast(false);
		} else {
			setContrast(true);
		}
	});

	$('#fontsize1x').click(function () {
		if(parseInt(getCookie2('fontSize')) === 1) {
			setFontSize(1);
		} else {
			setFontSize(1);
		}
	});

	$('#fontsize2x').click(function () {
		if(parseInt(getCookie2('fontSize')) === 2) {
			setFontSize(1);
		} else {
			setFontSize(2);
		}
	});

	$('#fontsize3x').click(function () {
		if(parseInt(getCookie2('fontSize')) === 3) {
			setFontSize(1);
		} else {
			setFontSize(3);
		}
	});
});