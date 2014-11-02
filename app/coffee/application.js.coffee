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
