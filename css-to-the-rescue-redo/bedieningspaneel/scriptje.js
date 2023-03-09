var ranges = document.querySelectorAll('[type=range]');
var head = document.querySelector('head');

var i = 0;
while (i < ranges.length) {
	ranges[i].addEventListener('input',function(){
		slide(this);
	});
	slide(ranges[i]);
	i++;
}

function slide(s){
	var sValue = s.value;
	var sId = s.id;

	head.setAttribute('data-'+sId+'-value',sValue);
	var sMax = s.max;
	if(sMax > 19) {
		var sDec = sMax/10;
		head.setAttribute('data-'+sId+'-X', Math.floor(sValue/sDec));
	}

    let text = head.getAttribute('data-'+sId+'-value',sValue);
    document.getElementById("body").className = `${sId}-${text}`;  
}