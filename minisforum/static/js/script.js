const home_next = document.getElementById('arrow_right');
const home_return = document.getElementById('arrow_left');

function home_next_slide(number){
	var slide1=document.getElementById("home_slider1")
	var slide2=document.getElementById("home_slider2")
	var slide3=document.getElementById("home_slider3")
	var slide4=document.getElementById("home_slider4")
	if (number==1) {
		slide1.style.display="block"
		slide2.style.display="none"
		slide3.style.display="none"
		slide4.style.display="none"
	}
	if (number==2) {
		slide1.style.display="none"
		slide2.style.display="block"
		slide3.style.display="none"
		slide4.style.display="none"
	}
	if (number==3) {
		slide1.style.display="none"
		slide2.style.display="none"
		slide3.style.display="block"
		slide4.style.display="none"
	}
	if (number==4) {
		slide1.style.display="none"
		slide2.style.display="none"
		slide3.style.display="none"
		slide4.style.display="block"
	}
};

function home_return_slide(number){
	var slide1=document.getElementById("home_slider1")
	var slide2=document.getElementById("home_slider2")
	var slide3=document.getElementById("home_slider3")
	var slide4=document.getElementById("home_slider4")
	if (number==1) {
		slide1.style.display="block"
		slide2.style.display="none"
		slide3.style.display="none"
		slide4.style.display="none"
	}
	if (number==2) {
		slide1.style.display="none"
		slide2.style.display="block"
		slide3.style.display="none"
		slide4.style.display="none"
	}
	if (number==3) {
		slide1.style.display="none"
		slide2.style.display="none"
		slide3.style.display="block"
		slide4.style.display="none"
	}
	if (number==4) {
		slide1.style.display="none"
		slide2.style.display="none"
		slide3.style.display="none"
		slide4.style.display="block"
	}
};

document.querySelectorAll('.home_lupa1').forEach(function(img) {
    img.addEventListener('mouseenter', function() {
        this.style.display = 'none';
        this.nextElementSibling.style.display = 'block';
    });
});

document.querySelectorAll('.home_lupa2').forEach(function(img) {
    img.addEventListener('mouseleave', function() {
        this.style.display = 'none';
        this.previousElementSibling.style.display = 'block';
    });
});

document.querySelectorAll('.home_heart1').forEach(function(img) {
    img.addEventListener('mouseenter', function() {
        this.style.display = 'none';
        this.nextElementSibling.style.display = 'block';
    });
});

document.querySelectorAll('.home_heart2').forEach(function(img) {
    img.addEventListener('mouseleave', function() {
        this.style.display = 'none';
        this.previousElementSibling.style.display = 'block';
    });
});

document.querySelectorAll('.home_korzina1').forEach(function(img) {
    img.addEventListener('mouseenter', function() {
        this.style.display = 'none';
        this.nextElementSibling.style.display = 'block';
    });
});

document.querySelectorAll('.home_korzina2').forEach(function(img) {
    img.addEventListener('mouseleave', function() {
        this.style.display = 'none';
        this.previousElementSibling.style.display = 'block';
    });
});