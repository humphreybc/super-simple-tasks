# Tourbus

class Tour

  @createTour: ->
    $('#tour').tourbus
      onStop: Views.finishTour
      onLegStart: (leg, bus) ->
        SST.tourRunning = bus.running
        leg.$el.addClass('animated fadeInDown')


  @nextTourBus: (tour) ->
    if SST.tourRunning
      tour.trigger('next.tourbus')