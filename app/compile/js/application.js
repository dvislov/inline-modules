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
