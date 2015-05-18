# Tourbus

class Tour

  @createTour: ->
    $('#tour').tourbus
      onStop: Views.finishTour
      onLegStart: (leg, bus) ->
        window.tourRunning = bus.running
        leg.$el.addClass('animated fadeInDown')


  @nextTourBus: (tour) ->
    if window.tourRunning
      tour.trigger('next.tourbus')