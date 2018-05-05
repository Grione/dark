

// menu-mobile

var navMobile = document.querySelector('.mobile-nav');
const button = document.querySelector('.mobile-menu');


button.addEventListener('click', function (evt)
{   evt.preventDefault();
    navMobile.classList.add('mobile-nav_activ');
}
);

var buttonClose = document.querySelector('.mobile-nav_close');

buttonClose.addEventListener('click', function (evt)

{   evt.preventDefault();
    navMobile.classList.remove('mobile-nav_activ');
}
);

var itemMobile = $('.mobile-nav_link');

for (let i = 0; i < itemMobile.length; i++) {
    itemMobile[i].addEventListener("click", function(e) {

        e.preventDefault();

        this.closest('.mobile-nav').classList.remove("mobile-nav_activ");
    });
}; 
//team acco


var teamItem = document.querySelectorAll('.item-team');
const teamLink = document.querySelectorAll('.team-link');

for (let i = 0; i < teamLink.length; i++) {
    teamLink[i].addEventListener("click", function(e) {

        e.preventDefault();

        for (let j = 0; j < teamItem.length; j++) {
            if (j !== i) {
                teamItem[j].classList.remove("item-team_activ");
            };
        };

        this.closest('.item-team').classList.toggle("item-team_activ");
    });
}; 

// menu acco

var menuItem = document.querySelectorAll('.menu-item');
var menuLink = document.querySelectorAll('.menu-item_link');
var menuTxt = document.querySelectorAll('.menu-link_txt');

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("click", function(e) {

        e.preventDefault();

        for (let j = 0; j < menuItem.length; j++) {
            if (j !== i) {
                menuItem[j].classList.remove("menu-item_activ");
            };
        };

            
        this.closest('.menu-item').classList.toggle("menu-item_activ");
        
    });
};

//Модальное окно в отзывах

function openPopup(e) {
    e.preventDefault();
    $('.reviews-modul').toggleClass('reviews-modul_active');
};

$('.reviews-item_button-link').on('click', openPopup);
$('.window-close').on('click', openPopup);

//One page scroll

const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;

const setActiveMenuItem = itemEq => {
    $('.radio-buttons-link').eq(itemEq).addClass('radio-buttons-link__activ')
    .siblings().removeClass('radio-buttons-link__activ')
  } 

const performTransition = sectionEq => {
    const position = `${sectionEq * -100}%`;

    if (inScroll) return;
    if (!inScroll) {

    inScroll = true;

    sections.eq(sectionEq).addClass('active')
    .siblings().removeClass('active');

    display.css ({
        'transform' : `translate(0, ${position})` ,
        '-webkit-transform' : `translate(0, ${position})`
    })

    setTimeout(() => {
       inScroll = false; 
       setActiveMenuItem(sectionEq);
    }, 
1300); // продолжительность анимации + 300ms (инерция)
}
}

const scrollToSection = direction => {
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction == 'up' && prevSection.length) {
        performTransition(prevSection.index())
    }

    if (direction == 'down' && nextSection.length) {
        performTransition(nextSection.index())
    }
}


$(document).on({
    wheel: e => {
    const deltaY = e.originalEvent.deltaY;
    const direction = deltaY > 0 ? "down" : "up";
    
    scrollToSection(direction);
    },
    keydown: e => {
        switch (e.keyCode) {
            case 40 : scrollToSection('down');
            case 38 : scrollToSection('up');
        }
    },

    touchmove: e => e.preventDefault()

});

$('[data-scroll-to]').on('click' , e => {
    e.preventDefault();

    const target = $(e.currentTarget).attr('data-scroll-to');
    
    performTransition(target);
})

 $(document).swipe( {
      //Generic swipe handler for all directions
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        
        //плагин возвращает фактическое движение пальцев, нужно наоборот

        const scrollDirection = direction === 'down' ? 'up' : 'down';
        scrollToSection(scrollDirection);
      }
    });

    /// slider
    $(document).ready(function(){
        $('.dark-center').slick({
        
        });
      });

// test JQuery
$('.scroll-link').on('click', e => {
console.log("клик");
e.preventDefault();
});     

  