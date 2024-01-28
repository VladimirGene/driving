const swiper = new Swiper(".swiper", {
  // Optional parameters
  effect: "cube",
  grabCursor: true,
  speed: 1000,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

(function () {
  const modal = document.querySelector(".modal");
  const modalBlack = document.querySelector(".modal-black");
  const btnModal = document.querySelector(".control__button");
  const btnFooter = document.querySelector(".footer__button");
  

  btnModal.addEventListener("click", openModal);
  btnFooter.addEventListener("click", openFooter);
  modal.addEventListener("click", closeModal);
  modalBlack.addEventListener("click", closeFooter);
  
  function openModal(e) {
    e.preventDefault();
    document.body.classList.toggle("modal--open");
  }
  function openFooter(e) {
    e.preventDefault();
    document.body.classList.toggle("modal--open-black");
  }
  function closeModal(e) {
    e.preventDefault();
    if (e.target.classList.contains("modal")) {
      document.body.classList.remove("modal--open");
    }
  }
  function closeFooter(e) {
    e.preventDefault();
    if (e.target.classList.contains("modal-black")) {
      document.body.classList.remove("modal--open-black");
    }
  }
  
  


  // ACCARDEON===============================


  const accardeons = document.querySelectorAll(".accordeon");

  accardeons.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const content = self.querySelector(".accordeon__content");

      self.classList.toggle("open");

      if (self.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });

    //  TIMER=====================================


    document.addEventListener('DOMContentLoaded', function() {
      // конечная дата, например 1 июля 2021
      const deadline = new Date(2024, 2, 4);
      // id таймера
      let timerId = null;
      // склонение числительных
      function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
      }
      // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
      function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
          clearInterval(timerId);
        }
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
        $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
      }
      // получаем элементы, содержащие компоненты даты
      const $hours = document.querySelector('.timer__hours');
      const $minutes = document.querySelector('.timer__minutes');
      const $seconds = document.querySelector('.timer__seconds');
      // вызываем функцию countdownTimer
      countdownTimer();
      // вызываем функцию countdownTimer каждую секунду
      timerId = setInterval(countdownTimer, 1000);
    });

  });

// маска телефона
$('.modal__tel-black').mask('+7 (999) 999-99-99');
$('.modal__tel').mask('+7 (999) 999-99-99');


$.fn.setCursorPosition = function (pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};


$('input[type="tel"]').click(function () {
  $(this).setCursorPosition(4);  // set position number
});

})();
