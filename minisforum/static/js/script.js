/*Начало блока home*/

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
/*Конец блока home*/

/*начало блока shop*/
function show_close_shop() {
	var shop_cont=document.getElementById('shop_cont');
	var full_shop=document.getElementById('full_shop');
	var shop=document.getElementById('shop');
	var dark_back=document.getElementById('dark_back');
	if (dark_back.style.opacity=="1") {
		dark_back.style.opacity="0"
		shop_cont.classList.remove('shop_slide_in')
		shop_cont.classList.add("shop_slide_out")
		full_shop.classList.remove('shop_slide_in')
		full_shop.classList.add("shop_slide_out")
		shop.style.right="12px"
		dark_back.style.display="none"
	} else {
		dark_back.style.display="block"
		dark_back.style.opacity="1"
		shop_cont.classList.remove('shop_slide_out')
		shop_cont.classList.add("shop_slide_in")
		full_shop.classList.remove('shop_slide_out')
		full_shop.classList.add("shop_slide_in")
		shop.style.right="344px"
	}
}

function close_shop() {
	var shop_cont=document.getElementById('shop_cont');
	var full_shop=document.getElementById('full_shop');
	var shop=document.getElementById('shop');
	var dark_back=document.getElementById('dark_back');
	dark_back.style.opacity="0"
	shop_cont.classList.remove('shop_slide_in')
	shop_cont.classList.add("shop_slide_out")
	full_shop.classList.remove('shop_slide_in')
	full_shop.classList.add("shop_slide_out")
	shop.style.right="12px"
	dark_back.style.display="none"
}
/*конец блока shop*/

