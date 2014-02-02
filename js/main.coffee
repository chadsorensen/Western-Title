$(window).load ->
  init()

init = ->
  $modalTrigger = $('.modal-button')
  $flyOutButtons = $('.btn-flyout')

  $modalTrigger.on 'click', (e) ->
    e.preventDefault()
    $click = $(e.currentTarget)
    setupModal($click)

  $flyOutButtons.on 'click', (e) ->
    $click = $(e.currentTarget)
    flyOut($click)

setupModal = ($click) ->
  $modal = $('#modal')
  # We can load our content in here
  # loadModal()
  # and then fade in the modal in the callback
  $modal.fadeIn()
  closeModal()

closeModal = ($click) ->
  $closeBtn = $('.close-button')
  $modal = $('#modal')
  $modal.on 'click', (e) ->
    $background = $modal.get(0)
    if e.target is $background or e.target is $closeBtn.get(0)
      $modal.fadeOut()

flyOut = ($click) ->
  console.log '$click', $click
  $body = $('body')
  $sideContent = $('.side-content')
  if $body.hasClass 'open'
    $body.removeClass 'open'
    $sideContent.fadeOut()

  else
    console.log 'flyin out'
    $body.addClass 'open'
    console.log '$click', $click
    section = $click.data 'section'
    $(section).show()
    console.log '$(section)', $(section)
