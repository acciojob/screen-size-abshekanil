//your JS code here. If required.

let h1 = document.getElementById('heading');

function updateSize(){
	let width = window.innerWidth;
let height = window.innerHeight;
	h1.innerHTML = 'Width: '+width+' and Height: '+height;
}

window.addEventListener('resize', updateSize);

updateSize();
