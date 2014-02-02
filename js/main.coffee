$(window).load ->
  init()

init = ->
  $modalTrigger = $('.modal-button')

  $modalTrigger.on 'click', (e) ->
    e.preventDefault()
    $click = (e.currentTarget)
    setupModal($click)
    closeModal()

closeModal = ($click) ->
  $closeBtn = $('.close-button')
  $modal = $('#modal')
  $modal.on 'click', (e) ->
    $background = $modal.get(0)
    console.log 'currentTarget', e.target
    console.log 'close', $closeBtn.get(0)
    if e.target is $background or e.target is $closeBtn.get(0)
      $modal.fadeOut()

setupModal = ($click) ->
  $modal = $('#modal')
  $modal.fadeIn()

