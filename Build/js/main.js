(function() {
  var closeModal, init, setupModal;

  $(window).load(function() {
    return init();
  });

  init = function() {
    var $modalTrigger;
    $modalTrigger = $('.modal-button');
    return $modalTrigger.on('click', function(e) {
      var $click;
      e.preventDefault();
      $click = e.currentTarget;
      setupModal($click);
      return closeModal();
    });
  };

  closeModal = function($click) {
    var $closeBtn, $modal;
    $closeBtn = $('.close-button');
    $modal = $('#modal');
    return $modal.on('click', function(e) {
      var $background;
      $background = $modal.get(0);
      console.log('currentTarget', e.target);
      console.log('close', $closeBtn.get(0));
      if (e.target === $background || e.target === $closeBtn.get(0)) {
        return $modal.fadeOut();
      }
    });
  };

  setupModal = function($click) {
    var $modal;
    $modal = $('#modal');
    return $modal.fadeIn();
  };

}).call(this);
