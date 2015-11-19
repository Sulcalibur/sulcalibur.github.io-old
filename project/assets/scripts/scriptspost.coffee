# Scripts to run at the end of the page load

(($) ->
  $ ->
    $('#scroller').simplyScroll frameRate: 60
    return
  return
) jQuery


$(document).ready ->
  jQuery(window).scroll ->
    threshold = 700
    if jQuery(window).scrollTop() >= 830
      $('.logo').addClass 'active'
    else
      $('.logo').removeClass 'active'
    return
  return

# $(document).ready ->
#   jQuery(window).scroll ->
#     threshold = 700
#     if jQuery(window).scrollTop() >= 830
#       $('.navbar').addClass 'active'
#     else
#       $('.navbar').removeClass 'active'
#     return
#   return

# Formspree Ajax

# $.ajax
#   url: '//formspree.io/suleiman.leadbitter@gmail.com'
#   method: 'POST'
#   data: message: 'hello!'
#   dataType: 'json'


$('.showmenu').bind 'click', ->
  $('.menusection').toggleClass 'show'
  return
$('.menulink').bind 'click', ->
  $('.menusection').toggleClass 'show'
  return
$(document).click (e) ->
  if !$('.menusection').is(e.target) and $('.menusection').has(e.target).length == 0
    # Clicked outside, close menu
    $('.menusection').removeClass 'show'
  return
