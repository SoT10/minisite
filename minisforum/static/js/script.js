/*Начало блока nav и sub_navbar*/
const texts = [
	"Доставка по всей России",
	"Гарантия от одного года",
	"Каталог товаров MINISFORUM",
	"Качество, мощность, стиль, мобильность"
]

let currentIndex = 0;
function sub_navbar_change_text() {
    const sub_navbar_text = document.getElementById('sub_navbar_text');
    sub_navbar_text.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(sub_navbar_change_text, 1347)

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname !== "/") {
        let sub_navbar = document.getElementById('sub_navbar');
        sub_navbar.style.display = "block";
    }
});

document.getElementById('down_menu_show').addEventListener("click", function() {
	var nav=document.getElementById("down_menu_panel");
	var img_show=document.getElementById("down_menu_show");
	var img_close=document.getElementById("down_menu_close");
	nav.style.height="234px";
	img_show.style.display="none";
	img_close.style.display="block";
})

document.getElementById('down_menu_close').addEventListener("click", function() {
	var nav=document.getElementById("down_menu_panel");
	var img_show=document.getElementById("down_menu_show");
	var img_close=document.getElementById("down_menu_close");
	nav.style.height="0px";
	img_show.style.display="block";
	img_close.style.display="none";
})
/*Конец блока nav и sub_navbar*/
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

let start_number = 2

function home_next_slide_timer() {
	try {
		var slide1=document.getElementById("home_slider1")
		var slide2=document.getElementById("home_slider2")
		var slide3=document.getElementById("home_slider3")
		var slide4=document.getElementById("home_slider4")
		if (start_number==1) {
			slide1.style.display="block"
			slide2.style.display="none"
			slide3.style.display="none"
			slide4.style.display="none"
		}
		if (start_number==2) {
			slide1.style.display="none"
			slide2.style.display="block"
			slide3.style.display="none"
			slide4.style.display="none"
		}
		if (start_number==3) {
			slide1.style.display="none"
			slide2.style.display="none"
			slide3.style.display="block"
			slide4.style.display="none"
		}
		if (start_number==4) {
			slide1.style.display="none"
			slide2.style.display="none"
			slide3.style.display="none"
			slide4.style.display="block"
		}

	} catch (error) {

	}
	start_number = start_number + 1
	if (start_number > 4) {
        start_number = 1;
    }
}

setInterval(home_next_slide_timer, 4000)

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

function add_to_korzina() {
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

	let spisok_tovarov = document.getElementById('full_shop_center_empty')
	let korzina_btn = document.getElementById('korzina_btn')
	let zakaz_btn = document.getElementById('zakaz_btn')
    if (spisok_tovarov.style.display!="none") {
		korzina_btn.style.display="none"
		zakaz_btn.style.display="none"
	} else {
		korzina_btn.style.display="block"
		zakaz_btn.style.display="block"
	}
}

document.querySelectorAll('.home3_tabl_card_shop').forEach(button => {
    button.addEventListener('click', addToCart);
});

document.querySelectorAll('.product_form_submit').forEach(button => {
    button.addEventListener('click', addToCart1);
});

function addToCart(event) {
    const productElement = event.target.closest('.home3_tabl_card');
    
    const id = productElement.getAttribute('data-id');
    const img = productElement.querySelector('.home3_tabl_card_img').getAttribute('src');
    const product_name = productElement.querySelector('.gain-center').textContent;
    const product_price = productElement.querySelector('.home3_tabl_card_price').textContent;
    
    let korzina = JSON.parse(localStorage.getItem('korzina')) || [];
    
    // Проверяем, есть ли уже товар с таким id в корзине
    let found = false;
    korzina.forEach(item => {
        if (item.id === id) {
            item.quantity = item.quantity ? item.quantity + 1 : 2; // Увеличиваем количество товара
            found = true;
        }
    });
    
    // Если товара с таким id нет в корзине, добавляем его
    if (!found) {
        korzina.push({ id, img, product_name, product_price, quantity: 1 });
    }

    localStorage.setItem('korzina', JSON.stringify(korzina));
    displayShoppingCart();
    
    let spisok_tovarov = document.getElementById('full_shop_center_empty')
	let korzina_btn = document.getElementById('korzina_btn')
	let zakaz_btn = document.getElementById('zakaz_btn')
    if (spisok_tovarov.style.display!="none") {
		korzina_btn.style.display="none"
		zakaz_btn.style.display="none"
	} else {
		korzina_btn.style.display="block"
		zakaz_btn.style.display="block"
	}
}

function addToCart1(event) {
	const product_quantity = parseInt(document.getElementById('id_number').value);
	if (product_quantity<1 || product_quantity>999 || isNaN(product_quantity)) {
		alert("Введите корректное значение")
		return
	}
    const productElement = event.target.closest('.product');
    const id = productElement.getAttribute('data-id');
    const img = productElement.querySelector('.zoom-image').getAttribute('src');
    const product_name = productElement.querySelector('.product_right_title').textContent;
    const product_price = productElement.querySelector('.product_right_price').textContent;
    
    let korzina = JSON.parse(localStorage.getItem('korzina')) || [];
    
    // Проверяем, есть ли уже товар с таким id в корзине
    let found = false;
    korzina.forEach(item => {
        if (item.id === id) {
            item.quantity = item.quantity ? item.quantity + product_quantity : 2; // Увеличиваем количество товара
            found = true;
        }
    });
    
    // Если товара с таким id нет в корзине, добавляем его
    if (!found) {
        korzina.push({ id, img, product_name, product_price, quantity: product_quantity });
    }

    localStorage.setItem('korzina', JSON.stringify(korzina));
    displayShoppingCart();
    
    let spisok_tovarov = document.getElementById('full_shop_center_empty')
	let korzina_btn = document.getElementById('korzina_btn')
	let zakaz_btn = document.getElementById('zakaz_btn')
    if (spisok_tovarov.style.display!="none") {
		korzina_btn.style.display="none"
		zakaz_btn.style.display="none"
	} else {
		korzina_btn.style.display="block"
		zakaz_btn.style.display="block"
	}
}

function isCartEmpty() {
    const korzina = JSON.parse(localStorage.getItem('korzina')) || [];
    return korzina.length === 0;
}

function displayShoppingCart() {
	if (!isCartEmpty()){
		document.getElementById('full_shop_center_empty').style.display="none"
	}
    const cartItems = JSON.parse(localStorage.getItem('korzina')) || [];

    const shoppingCartContainer = document.getElementById('shoppingCartContainer');
    shoppingCartContainer.innerHTML = ''; // Очищаем контейнер перед обновлением списка
    let resultSum=0
    cartItems.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('full_shop_center_buy');

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('full_shop_center_buy_img');
        const img = document.createElement('img');
        img.classList.add('full_shop_center_buy_img_1');
        img.setAttribute('src', item.img);
        img.setAttribute('alt', item.product_name);
        imgDiv.appendChild(img);

        const textDiv = document.createElement('div');
        textDiv.classList.add('full_shop_center_buy_text');
        const productNameDiv = document.createElement('div');
        productNameDiv.classList.add('full_shop_center_buy_text_product');
        productNameDiv.textContent = item.product_name;
        const priceDiv = document.createElement('div');
        priceDiv.classList.add('full_shop_center_buy_text_price');
        priceString = item.product_price.replace(/\s/g, '').replace('₽', '');
        let price = parseFloat(priceString.replace(',', '.'));
        let sum = item.quantity * price
        sum=sum.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})
        let zena_one = price
        zena_one=zena_one.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})
        priceDiv.textContent = `${item.quantity} X ${zena_one} = ${sum}`;
        resultSum=resultSum+item.quantity * price;
        textDiv.appendChild(productNameDiv);
        textDiv.appendChild(priceDiv);

        const urnaDiv = document.createElement('div');
        urnaDiv.classList.add('full_shop_center_buy_urna');
        const urnaIcon = document.createElement('span');
        urnaIcon.classList.add('xoo-wsc-icon-trash');
        urnaIcon.addEventListener('click', () => removeFromCart(item.id));
        urnaDiv.appendChild(urnaIcon);

        productDiv.appendChild(imgDiv);
        productDiv.appendChild(textDiv);
        productDiv.appendChild(urnaDiv);

        shoppingCartContainer.appendChild(productDiv);
    });
    document.getElementById("full_shop_down_text").innerHTML= "ОБЩАЯ СУММА: " + resultSum.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})
}

function removeFromCart(id) {
    let korzina = JSON.parse(localStorage.getItem('korzina')) || [];
    
    // Фильтруем корзину, оставляя только те товары, у которых id не совпадает с переданным id
    korzina = korzina.filter(item => item.id !== id);
    
    // Обновляем данные в локальном хранилище
    localStorage.setItem('korzina', JSON.stringify(korzina));

    if (isCartEmpty()){
		document.getElementById('full_shop_center_empty').style.display="grid"
	}

    displayShoppingCart();

	let spisok_tovarov = document.getElementById('full_shop_center_empty')
	let korzina_btn = document.getElementById('korzina_btn')
	let zakaz_btn = document.getElementById('zakaz_btn')
    
    if (spisok_tovarov.style.display!="none") {
		korzina_btn.style.display="none"
		zakaz_btn.style.display="none"
	} else {
		korzina_btn.style.display="block"
		zakaz_btn.style.display="block"
	}
}

window.addEventListener('load', displayShoppingCart);
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
	
	let spisok_tovarov = document.getElementById('full_shop_center_empty')
	let korzina_btn = document.getElementById('korzina_btn')
	let zakaz_btn = document.getElementById('zakaz_btn')

	if (spisok_tovarov.style.display!="none") {
		korzina_btn.style.display="none"
		zakaz_btn.style.display="none"
	} else {
		korzina_btn.style.display="block"
		zakaz_btn.style.display="block"
	}
}

function close_shop() {
	var shop_cont=document.getElementById('shop_cont');
	var full_shop=document.getElementById('full_shop');
	var shop=document.getElementById('shop');
	var dark_back=document.getElementById('dark_back');
	var un_auth_user_like=document.getElementById('un_auth_user_like')
	var auth_user_like_already=document.getElementById('auth_user_like_already')
	dark_back.style.opacity="0"
	shop_cont.classList.remove('shop_slide_in')
	shop_cont.classList.add("shop_slide_out")
	full_shop.classList.remove('shop_slide_in')
	full_shop.classList.add("shop_slide_out")
	shop.style.right="12px"
	dark_back.style.display="none"
	un_auth_user_like.style.display="none"
	auth_user_like_already.style.display="none"

	let spisok_tovarov = document.getElementById('full_shop_center_empty')
	let korzina_btn = document.getElementById('korzina_btn')
	let zakaz_btn = document.getElementById('zakaz_btn')
    if (spisok_tovarov.style.display!="none") {
		korzina_btn.style.display="none"
		zakaz_btn.style.display="none"
	} else {
		korzina_btn.style.display="block"
		zakaz_btn.style.display="block"
	}
}

function close_popup() {
	var dark_back=document.getElementById('dark_back');
	var un_auth_user_like=document.getElementById('un_auth_user_like')
	dark_back.style.display="none"
	un_auth_user_like.style.display="none"
}

function close_popup_2() {
	var dark_back=document.getElementById('dark_back');
	var auth_user_like_already=document.getElementById('auth_user_like_already')
	dark_back.style.display="none"
	auth_user_like_already.style.display="none"
}

function go_like() {
	window.location.href = '/my_accaunt/?href=favorite';
}
/*конец блока shop*/

/*Начало блока my_accaunt*/
window.onload = function() {
    function getQueryParam(param) {
        let urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    let hrefParam = getQueryParam('href');

    var my_accaunt1_zakazi=document.getElementById('my_accaunt1_zakazi');
	var my_accaunt1_adress=document.getElementById('my_accaunt1_adress');
	var my_accaunt1_anketa=document.getElementById('my_accaunt1_anketa');
	var my_accaunt1_spisok=document.getElementById('my_accaunt1_spisok');

    if (hrefParam=="zakazi") {
		my_accaunt1_zakazi.style.display="grid";
		my_accaunt1_adress.style.display="none";
		my_accaunt1_anketa.style.display="none";
		my_accaunt1_spisok.style.display="none";
    } else if (hrefParam=="address") {
    	my_accaunt1_zakazi.style.display="none";
		my_accaunt1_adress.style.display="block";
		my_accaunt1_anketa.style.display="none";
		my_accaunt1_spisok.style.display="none";
    } else if (hrefParam=="anketa") {
    	my_accaunt1_zakazi.style.display="none";
		my_accaunt1_adress.style.display="none";
		my_accaunt1_anketa.style.display="block";
		my_accaunt1_spisok.style.display="none";
    } else if (hrefParam=="favorite") {
    	my_accaunt1_zakazi.style.display="none";
		my_accaunt1_adress.style.display="none";
		my_accaunt1_anketa.style.display="none";
		my_accaunt1_spisok.style.display="block";
    }
};

function my_accaunt1_btns_zakazi(){
	window.location.href="/my_accaunt/?href=zakazi"
}

function my_accaunt1_btns_adress(){
	window.location.href="/my_accaunt/?href=address"
}

function my_accaunt1_btns_anketa() {
	window.location.href="/my_accaunt/?href=anketa"
}

function my_accaunt1_btns_wants() {
	window.location.href="/my_accaunt/?href=favorite"
}

document.addEventListener("DOMContentLoaded", function() {
    // Выбираем все элементы с классом 'my_accaunt1_zakazi_element_total'
    var elements = document.querySelectorAll('.my_accaunt1_zakazi_element_total');
    
    // Перебираем каждый элемент
    elements.forEach(function(element) {
        var sum = element.innerHTML;
        
        sum = sum.replace(',', '.');
        
        var formattedSum = parseFloat(sum).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
        
        element.innerHTML = formattedSum;
    });
});



function show_adress() {
	var my_accaunt1_adress_none_adress = document.getElementById('my_accaunt1_adress_none-adress')
	var my_accaunt1_adress_add = document.getElementById('my_accaunt1_adress_add')

	my_accaunt1_adress_add.style.display = "block"
	my_accaunt1_adress_none_adress.style.display = "none"
}

document.addEventListener('DOMContentLoaded', (event) => {
    const selectAllCheckbox = document.getElementById('select_all');
    const itemCheckboxes = document.querySelectorAll('.item_checkbox');
    try {
    	selectAllCheckbox.addEventListener('change', function() {
	        itemCheckboxes.forEach(checkbox => {
	            checkbox.checked = this.checked;
	        });
	    });
    } catch (e) {}
    
});
/*Конец блока my_accaunt*/

/*Начало блока product*/
const zoomImage = document.querySelector('.zoom-image');
const container = document.querySelector('.zoom-container');

try {
	container.addEventListener('mousemove', function(e) {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width * 100; 
      const y = (e.clientY - top) / height * 100;

      zoomImage.style.transformOrigin = `${x}% ${y}%`;
      zoomImage.style.transform = 'scale(2)';
    });

    container.addEventListener('mouseleave', function() {
      zoomImage.style.transform = 'scale(1)'; 
      zoomImage.style.transformOrigin = 'center center';
    });
}
catch (error) {}

function change_image(element) {
	var mainImg = document.getElementById('product_main_img')
	mainImg.src=element.src
}

function validateForm() {
    const stars = document.querySelectorAll('.product_feedback_star');
    let ratingSelected = false;

    stars.forEach(star => {
        if (star.classList.contains('selected')) {
            ratingSelected = true;
        }
    });

    if (!ratingSelected) {
        const errorMessage = document.getElementById('product_feedback_error-message');
        errorMessage.textContent = 'Пожалуйста, выберите рейтинг отзыва.';
        errorMessage.style.display = 'block';
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.product_feedback_star');
    
    const setRating = (rating) => {
        stars.forEach(star => {
            const starRating = parseInt(star.getAttribute('data-rating'));
            if (starRating <= rating) {
                star.classList.add('selected', 'hover');
                var id_rating=document.getElementById('id_rating')
				id_rating.value=rating
            } else {
                star.classList.remove('selected', 'hover');
            }
        });
    };

    let savedRating = localStorage.getItem('product_rating');
    if (savedRating) {
        setRating(parseInt(savedRating));
    }

    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const rating = star.getAttribute('data-rating');
            stars.forEach(s => {
                if (s.getAttribute('data-rating') <= rating) {
                    s.classList.add('hover');
                } else {
                    s.classList.remove('hover');
                }
            });
        });

        star.addEventListener('mouseout', () => {
            stars.forEach(s => {
                s.classList.remove('hover');
            });
            if (savedRating) {
                setRating(parseInt(savedRating));
            }
        });

        star.addEventListener('click', (event) => {
            event.preventDefault();
            const rating = parseInt(star.getAttribute('data-rating'));
            localStorage.setItem('product_rating', rating); 
            savedRating = rating; 
            setRating(rating);
           	var id_rating=document.getElementById('id_rating')
           	id_rating.value=rating 
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.product_feedback_star_user');

    stars.forEach(star => {
        star.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });
});

function clear_raiting() {
	localStorage.removeItem('product_rating');
}
/*Конец блока product*/

/*Начало блока catalog*/
document.addEventListener('DOMContentLoaded', function() {
    var likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(function(btn) {

        btn.addEventListener('click', function(e) {
            e.preventDefault();

            var productId = this.getAttribute('data-product-id');

            fetch('/add_to_favorites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken')
                },
                body: JSON.stringify({ 'product_id': productId })
            })
            .then(response => response.json())
            .then(data => {
                var heartIcon = this;
                if (data.error) {
                	auth_user_like_already=document.getElementById('auth_user_like_already')
                	var dark_back=document.getElementById('dark_back');
                	dark_back.style.display="block"
                	dark_back.style.opacity=1
                	auth_user_like_already.style.display='block'
                } else {
                	heartIcon.classList.add('liked');
                }
            })
            .catch(error => {
	            dark_back=document.getElementById('dark_back')
	            un_auth_user_like=document.getElementById('un_auth_user_like')
	            un_auth_user_like.style.display="block"
            	dark_back.style.display="block"
	            dark_back.style.display = "block";
	            dark_back.style.opacity=1
	        });
        });
    });

    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
});

function get_product_name(product_name) {
	document.getElementById('auth_user_like_already_text').innerHTML = product_name + " уже в списке желаний"
}
/*Конец блока catalog*/

/*Начало блока cart*/
function go_to_cart() {
	window.location.href = '/cart';
}

function displayCartItems() {
	if (isCartEmpty() && window.location.pathname=="/cart/") {
		window.location.href = '/';
	}

    const cartItems = JSON.parse(localStorage.getItem('korzina')) || [];
    const cartTableContainer = document.getElementById('cartTableContainer');
    
    if (!cartTableContainer) {
        return;
    }
    
    cartTableContainer.innerHTML = '';
    let resultSum=0
    cartItems.forEach(item => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('cart_table_second_row');
        
        const text1Div = document.createElement('div');
        text1Div.classList.add('cart_table_second_row_text_1');
        
        const cartContDiv = document.createElement('div');
        cartContDiv.classList.add('cart_cont');
        
        const delCartDiv = document.createElement('div');
        delCartDiv.classList.add('del_cart1');
        delCartDiv.setAttribute('data-id', item.id);
        
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('cart_table_second_row_text_1_img');
        const img = document.createElement('img');
        img.setAttribute('src', item.img);
        img.setAttribute('alt', item.product_name);
        imgDiv.appendChild(img);
        
        const textDiv = document.createElement('div');
        textDiv.classList.add('cart_table_second_row_text_1_text');
        textDiv.textContent = item.product_name;
        
        cartContDiv.appendChild(delCartDiv);
        cartContDiv.appendChild(imgDiv);
        cartContDiv.appendChild(textDiv);
        
        text1Div.appendChild(cartContDiv);
        
        const text2Div = document.createElement('div');
        text2Div.classList.add('cart_table_second_row_text_2');
        text2Div.textContent = item.product_price;
        
        const text3Div = document.createElement('div');
        text3Div.classList.add('cart_table_second_row_text');
        text3Div.textContent = item.quantity;
        
        const text4Div = document.createElement('div');
        text4Div.classList.add('cart_table_second_row_text');
        const icon = document.createElement('i');
        let cleanedString = item.product_price.replace(/[^\d,.-]/g, '');
        cleanedString = cleanedString.replace(',', '.');
        let priceNumber = parseFloat(cleanedString);
        tovar_sum=cleanedString * item.quantity;
        resultSum=resultSum+tovar_sum
        icon.textContent = tovar_sum.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});
        text4Div.appendChild(icon);
        
        rowDiv.appendChild(text1Div);
        rowDiv.appendChild(text2Div);
        rowDiv.appendChild(text3Div);
        rowDiv.appendChild(text4Div);
        
        cartTableContainer.appendChild(rowDiv);
    });
    document.getElementById('cart_table_third_row_left').innerHTML="Итого: " + resultSum.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});

    document.querySelectorAll('.del_cart1').forEach(button => {
        button.addEventListener('click', removeFromCart1);
    });
}

function removeFromCart1(event) {
	const productId = event.target.getAttribute('data-id');
    let cartItems = JSON.parse(localStorage.getItem('korzina')) || [];
    
    cartItems = cartItems.filter(item => item.id !== productId);
    
    localStorage.setItem('korzina', JSON.stringify(cartItems));

    displayCartItems();
    
    let spisok_tovarov = document.getElementById('full_shop_center_empty')
	let korzina_btn = document.getElementById('korzina_btn')
	let zakaz_btn = document.getElementById('zakaz_btn')
    if (spisok_tovarov.style.display!="none") {
		korzina_btn.style.display="none"
		zakaz_btn.style.display="none"
	} else {
		korzina_btn.style.display="block"
		zakaz_btn.style.display="block"
	}
}

window.addEventListener('DOMContentLoaded', displayCartItems);
/*Конец блока cart*/

/*Начало блока buy*/
function go_to_shop() {
	window.location.href="/buy"	
}

function displayKorzinaItems() {
	if (window.location.pathname=="/buy/") {
	    const cartItems = JSON.parse(localStorage.getItem('korzina')) || [];
	    const korzinaContainer = document.getElementById('korzinaContainer');
	    
	    if (!korzinaContainer) {
	        console.error('Элемент korzinaContainer не найден в DOM.');
	        return;
	    }
	    
	    korzinaContainer.innerHTML = '';
	    let resultSum=0
	    cartItems.forEach(item => {
	        const korzinaDiv = document.createElement('div');
	        korzinaDiv.classList.add('buy_cont_right_korzina');
	        
	        const nameDiv = document.createElement('div');
	        nameDiv.classList.add('buy_cont_right_korzina_name');
	        nameDiv.textContent = `${item.product_name} × ${item.quantity}`;
	        
	        const priceDiv = document.createElement('div');
	        priceDiv.classList.add('buy_cont_right_korzina_kolvo');
	        let cleanedString = item.product_price.replace(/[^\d,.-]/g, '');
	        cleanedString = cleanedString.replace(',', '.');
	        let priceNumber = parseFloat(cleanedString);
	        tovar_sum=cleanedString * item.quantity;
	        resultSum=resultSum+tovar_sum

	        priceDiv.textContent = tovar_sum.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});
	        

	        korzinaDiv.appendChild(nameDiv);
	        korzinaDiv.appendChild(priceDiv);
	        
	        korzinaContainer.appendChild(korzinaDiv);
	    });
	    document.getElementById('buy_cont_right_itogo_sum').innerHTML=resultSum.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});
	}
}

window.addEventListener('DOMContentLoaded', displayKorzinaItems);

document.addEventListener('DOMContentLoaded', function () {
	if (window.location.pathname=="/buy/") {
		const phoneInput = document.getElementById('id_phone');

	    phoneInput.addEventListener('input', function () {
	        const currentValue = phoneInput.value;
	        const numbers = currentValue.replace(/\D/g, '');

	        let formattedValue = '+7 (';
	        if (numbers.length > 1) {
	            formattedValue += numbers.substring(1, 4);
	        }
	        if (numbers.length >= 5) {
	            formattedValue += ') ' + numbers.substring(4, 7);
	        }
	        if (numbers.length >= 8) {
	            formattedValue += '-' + numbers.substring(7, 9);
	        }
	        if (numbers.length >= 10) {
	            formattedValue += '-' + numbers.substring(9, 11);
	        }

	        phoneInput.value = formattedValue;
	    });

	    phoneInput.addEventListener('focus', function () {
	        if (phoneInput.value === '') {
	            phoneInput.value = '+7 (';
	        }
	    });

	    phoneInput.addEventListener('blur', function () {
	        if (phoneInput.value === '+7 (') {
	            phoneInput.value = '';
	        }
	    });
	}	
});

function make_buy() {
    const csrftoken = getCookie('csrftoken');
    let data = JSON.parse(localStorage.getItem('korzina'));
    
    fetch('/buy/get_json_from_storage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken 
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {    
    })
    .catch(error => {
    });
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
/*Конец блока buy*/