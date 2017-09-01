---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  $('a.about-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
      $('.content-wrapper').removeClass('content-wrapper__hidden')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
      $('.content-wrapper').removeClass('content-wrapper__hidden')
    }
  })

  if (window.location.hash && window.location.hash == '#about') {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('.content-wrapper').removeClass('content-wrapper__hidden')
  }

  // Prevent scrolling until panel-cover is collapsed
  if ($('.panel-cover').is('.panel-cover--collapsed')) {
    console.log('panel-cover is collapsed')
    $('.content-wrapper').attr('overflow','scroll')
  }
/*
  if (window.location.pathname !== '{{ site.baseurl }}' && window.location.pathname !== '{{ site.baseurl }}index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }
*/
  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .about-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
})
