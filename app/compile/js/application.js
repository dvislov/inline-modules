(function() {
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

}).call(this);
