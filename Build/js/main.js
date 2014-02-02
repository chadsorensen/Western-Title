(function() {
  var closeModal, flyOut, init, setupModal;

  $(window).load(function() {
    return init();
  });

  init = function() {
    var $flyOutButtons, $modalTrigger;
    $modalTrigger = $('.modal-button');
    $flyOutButtons = $('.btn-flyout');
    $modalTrigger.on('click', function(e) {
      var $click;
      e.preventDefault();
      $click = $(e.currentTarget);
      return setupModal($click);
    });
    return $flyOutButtons.on('click', function(e) {
      var $click;
      $click = $(e.currentTarget);
      return flyOut($click);
    });
  };

  setupModal = function($click) {
    var $modal;
    $modal = $('#modal');
    $modal.fadeIn();
    return closeModal();
  };

  closeModal = function($click) {
    var $closeBtn, $modal;
    $closeBtn = $('.close-button');
    $modal = $('#modal');
    return $modal.on('click', function(e) {
      var $background;
      $background = $modal.get(0);
      if (e.target === $background || e.target === $closeBtn.get(0)) {
        return $modal.fadeOut();
      }
    });
  };

  flyOut = function($click) {
    var $body, $sideContent, section;
    console.log('$click', $click);
    $body = $('body');
    $sideContent = $('.side-content');
    if ($body.hasClass('open')) {
      $body.removeClass('open');
      return $sideContent.fadeOut();
    } else {
      console.log('flyin out');
      $body.addClass('open');
      console.log('$click', $click);
      section = $click.data('section');
      $(section).show();
      return console.log('$(section)', $(section));
    }
  };

}).call(this);
