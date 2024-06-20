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

    selectAllCheckbox.addEventListener('change', function() {
        itemCheckboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
        });
    });
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
catch (error) {
	console.log("")
}

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
/*Конец блока product*/

/*Начало блока catalog*/
document.addEventListener('DOMContentLoaded', function() {
    var likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(function(btn) {

        btn.addEventListener('click', function(e) {
            e.preventDefault(); // Предотвращаем стандартное действие перехода по ссылке

            var productId = this.getAttribute('data-product-id');

            fetch('/catalog/add_to_favorites', {
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