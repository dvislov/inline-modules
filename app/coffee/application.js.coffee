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


# Gallery lightbox

$(document).ready ->
  if (parseInt($('body').width()) > 960)
    fMargin = 20
  else
    fMargin = 0

  $('.m-fancybox').fancybox
    padding: [15,78,15,78]
    margin: fMargin
    helpers:
      overlay:
        css:
          'background': 'rgba(0, 0, 0, 0.5)'
      title:
        type: 'inside'
    afterLoad: ->
      this.title = '<div class="vote-block"><a class="vote-button" href="javascript:void(0);">Голосовать</a><div class="votes">' + 397 + '</div></div><div class="photo-title">' + this.title + '</div><div class="clearfix"></div>';


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
