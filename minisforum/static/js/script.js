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
}

document.querySelectorAll('.home3_tabl_card_shop').forEach(button => {
    button.addEventListener('click', addToCart);
});

document.querySelectorAll('.home3_tabl_card_shop').forEach(button => {
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
}

function addToCart1(event) {
    const productElement = event.target.closest('.catalog_right_product_1');
    
    const id = productElement.getAttribute('data-id');
    const img = productElement.querySelector('.front-side-img1').getAttribute('src');
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
	window.location.href = '/my_accaunt';
}
/*конец блока shop*/

/*Начало блока my_accaunt*/
function my_accaunt1_btns_zakazi(){
	var my_accaunt1_zakazi=document.getElementById('my_accaunt1_zakazi');
	var my_accaunt1_adress=document.getElementById('my_accaunt1_adress');
	var my_accaunt1_anketa=document.getElementById('my_accaunt1_anketa');
	var my_accaunt1_spisok=document.getElementById('my_accaunt1_spisok');

	my_accaunt1_zakazi.style.display="grid";
	my_accaunt1_adress.style.display="none";
	my_accaunt1_anketa.style.display="none";
	my_accaunt1_spisok.style.display="none";
}

function my_accaunt1_btns_adress(){
	var my_accaunt1_zakazi=document.getElementById('my_accaunt1_zakazi');
	var my_accaunt1_adress=document.getElementById('my_accaunt1_adress');
	var my_accaunt1_anketa=document.getElementById('my_accaunt1_anketa');
	var my_accaunt1_spisok=document.getElementById('my_accaunt1_spisok');

	my_accaunt1_zakazi.style.display="none";
	my_accaunt1_adress.style.display="block";
	my_accaunt1_anketa.style.display="none";
	my_accaunt1_spisok.style.display="none";
}

function show_adress() {
	var my_accaunt1_adress_none_adress = document.getElementById('my_accaunt1_adress_none-adress')
	var my_accaunt1_adress_add = document.getElementById('my_accaunt1_adress_add')

	my_accaunt1_adress_add.style.display = "block"
	my_accaunt1_adress_none_adress.style.display = "none"
}

function my_accaunt1_btns_anketa() {
	var my_accaunt1_zakazi=document.getElementById('my_accaunt1_zakazi');
	var my_accaunt1_adress=document.getElementById('my_accaunt1_adress');
	var my_accaunt1_anketa=document.getElementById('my_accaunt1_anketa');
	var my_accaunt1_spisok=document.getElementById('my_accaunt1_spisok');


	my_accaunt1_zakazi.style.display="none";
	my_accaunt1_adress.style.display="none";
	my_accaunt1_anketa.style.display="block";
	my_accaunt1_spisok.style.display="none";
}

function my_accaunt1_btns_wants() {
	var my_accaunt1_zakazi=document.getElementById('my_accaunt1_zakazi');
	var my_accaunt1_adress=document.getElementById('my_accaunt1_adress');
	var my_accaunt1_anketa=document.getElementById('my_accaunt1_anketa');
	var my_accaunt1_spisok=document.getElementById('my_accaunt1_spisok');


	my_accaunt1_zakazi.style.display="none";
	my_accaunt1_adress.style.display="none";
	my_accaunt1_anketa.style.display="none";
	my_accaunt1_spisok.style.display="block";
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

    zoomImage.style.transform = `translate(-${x}%, -${y}%) scale(2)`; 
	});

	container.addEventListener('mouseleave', function() {
	    zoomImage.style.transform = 'translate(0, 0) scale(1)'; 
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
        return false; // Останавливаем отправку формы
    }

    return true; // Продолжаем отправку формы
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
            e.preventDefault(); // Предотвращаем стандартное действие перехода по ссылке

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
                // Обработка успешного ответа
                var heartIcon = this;
                if (data.error) {
                	auth_user_like_already=document.getElementById('auth_user_like_already')
                	var dark_back=document.getElementById('dark_back');
                	dark_back.style.display="block"
                	dark_back.style.opacity=1
                	auth_user_like_already.style.display='block'
                } else {
                	heartIcon.classList.add('liked'); // Пример добавления класса при успешном добавлении в избранное
                }
            })

            .catch(error => {
	            // Обработка ошибки
	            console.error('Ошибка:', error);

	            // Изменяем стиль элемента при ошибке
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
	    
	    // Очищаем контейнер перед добавлением новых элементов
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
    // Получаем CSRF токен из cookies
    const csrftoken = getCookie('csrftoken');
    let data = JSON.parse(localStorage.getItem('korzina'));
    // Отправляем запрос с CSRF токеном
    fetch('/get_json_from_storage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken  // Добавляем CSRF токен в заголовок запроса
        },
        body: JSON.stringify(data)

    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Функция для получения CSRF токена из cookies
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