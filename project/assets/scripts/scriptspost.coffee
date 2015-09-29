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
