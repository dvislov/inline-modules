# FAQ accordeon

$(document).ready ->
  $('.m-faq-header').click ->

    if ($(this).hasClass('active'))
      $(this).removeClass('active')
      $(this).next('.m-faq-content').hide(400)
    else
      $('.m-faq-header').removeClass('active')
      $('.m-faq-content').hide()

      $(this).addClass('active')
      $(this).next('.m-faq-content').show(400)


# Form popups

$(document).ready ->
  $('.m-nyromodal-form-link').nyroModal
    closeButton: '<a href="#" class="nyroModalClose nyroModalCloseButton nmReposition" title="close">&times;</a>'
    stack: true


# News grid

$(window).resize ->
  if (parseInt($('body').width()) > 960)
    getMetroItemSize(5)

$(document).ready ->
  if (parseInt($('body').width()) > 960)
    getMetroItemSize(5)

getMetroItemSize = (num) ->
  boxItemSize = Math.round(parseInt($('.metro-grid-' + num + ' .metro-row').width()) / num - 10)
  $('.metro-grid-' + num + ' .metro-row').css
    height: boxItemSize + 'px'
