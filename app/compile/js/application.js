(function() {
  var getMetroItemSize;

  $(document).ready(function() {
    return $('.m-faq-header').click(function() {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        return $(this).next('.m-faq-content').hide(400);
      } else {
        $('.m-faq-header').removeClass('active');
        $('.m-faq-content').hide();
        $(this).addClass('active');
        return $(this).next('.m-faq-content').show(400);
      }
    });
  });

  $(document).ready(function() {
    return $('.m-nyromodal-form-link').nyroModal({
      closeButton: '<a href="#" class="nyroModalClose nyroModalCloseButton nmReposition" title="close">&times;</a>',
      stack: true
    });
  });

  $(document).ready(function() {
    var fMargin;
    if (parseInt($('body').width()) > 960) {
      fMargin = 20;
    } else {
      fMargin = 0;
    }
    return $('.m-fancybox').fancybox({
      padding: [15, 78, 15, 78],
      margin: fMargin,
      helpers: {
        overlay: {
          css: {
            'background': 'rgba(0, 0, 0, 0.5)'
          }
        },
        title: {
          type: 'inside'
        }
      },
      afterLoad: function() {
        return this.title = '<div class="vote-block"><a class="vote-button" href="javascript:void(0);">Голосовать</a><div class="votes">' + 397 + '</div></div><div class="photo-title">' + this.title + '</div><div class="clearfix"></div>';
      }
    });
  });

  $(window).resize(function() {
    if (parseInt($('body').width()) > 960) {
      return getMetroItemSize(5);
    }
  });

  $(document).ready(function() {
    if (parseInt($('body').width()) > 960) {
      return getMetroItemSize(5);
    }
  });

  getMetroItemSize = function(num) {
    var boxItemSize;
    boxItemSize = Math.round(parseInt($('.metro-grid-' + num + ' .metro-row').width()) / num - 10);
    return $('.metro-grid-' + num + ' .metro-row').css({
      height: boxItemSize + 'px'
    });
  };

}).call(this);
