var __slice = [].slice;

(function($) {
  var Bus, Leg, methods, tourbus, uniqueId, _addRule, _assemble, _busses, _dataProp, _include, _tours;
  tourbus = $.tourbus = function() {
    var args, method;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    method = args[0];
    if (methods.hasOwnProperty(method)) {
      args = args.slice(1);
    } else if (method instanceof $) {
      method = 'build';
    } else if (typeof method === 'string') {
      method = 'build';
      args[0] = $(args[0]);
    } else {
      $.error("Unknown method of $.tourbus --", args);
    }
    return methods[method].apply(this, args);
  };
  $.fn.tourbus = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return this.each(function() {
      args.unshift($(this));
      tourbus.apply(null, ['build'].concat(__slice.call(args)));
      return this;
    });
  };
  methods = {
    build: function(el, options) {
      var built;
      if (options == null) {
        options = {};
      }
      options = $.extend(true, {}, tourbus.defaults, options);
      built = [];
      if (!(el instanceof $)) {
        el = $(el);
      }
      el.each(function() {
        return built.push(_assemble(this, options));
      });
      if (built.length === 0) {
        $.error("" + el.selector + " was not found!");
      }
      if (built.length === 1) {
        return built[0];
      }
      return built;
    },
    destroyAll: function() {
      var bus, index, _results;
      _results = [];
      for (index in _busses) {
        bus = _busses[index];
        _results.push(bus.destroy());
      }
      return _results;
    },
    expose: function(global) {
      return global.tourbus = {
        Bus: Bus,
        Leg: Leg
      };
    }
  };
  tourbus.defaults = {
    debug: false,
    autoDepart: false,
    target: 'body',
    startAt: 0,
    onDepart: function() {
      return null;
    },
    onStop: function() {
      return null;
    },
    onLegStart: function() {
      return null;
    },
    onLegEnd: function() {
      return null;
    },
    leg: {
      scrollTo: null,
      scrollSpeed: 150,
      scrollContext: 100,
      orientation: 'bottom',
      align: 'left',
      width: 'auto',
      margin: 10,
      top: null,
      left: null,
      arrow: "50%"
    }
  };
  /* Internal*/

  Bus = (function() {
    function Bus(el, options) {
      this.id = uniqueId();
      this.$target = $(options.target);
      this.$el = $(el);
      this.$el.data({
        tourbus: this
      });
      this.options = options;
      this.currentLegIndex = null;
      this.legs = null;
      this.legEls = this.$el.children('li');
      this.totalLegs = this.legEls.length;
      this._setupEvents();
      if (this.options.autoDepart) {
        this.$el.trigger('depart.tourbus');
      }
      this._log('built tourbus with el', el.toString(), 'and options', this.options);
    }

    Bus.prototype.depart = function() {
      this.running = true;
      this.options.onDepart(this);
      this._log('departing', this);
      this.legs = this._buildLegs();
      this.currentLegIndex = this.options.startAt;
      return this.showLeg();
    };

    Bus.prototype.stop = function() {
      if (!this.running) {
        return;
      }
      if (this.legs) {
        $.each(this.legs, $.proxy(this.hideLeg, this));
      }
      this.currentLegIndex = this.options.startAt;
      this.options.onStop(this);
      return this.running = false;
    };

    Bus.prototype.on = function(event, selector, fn) {
      return this.$target.on(event, selector, fn);
    };

    Bus.prototype.currentLeg = function() {
      if (this.currentLegIndex === null) {
        return null;
      }
      return this.legs[this.currentLegIndex];
    };

    Bus.prototype.showLeg = function(index) {
      var leg, preventDefault;
      if (index == null) {
        index = this.currentLegIndex;
      }
      leg = this.legs[index];
      this._log('showLeg:', leg);
      preventDefault = this.options.onLegStart(leg, this);
      if (preventDefault !== false) {
        return leg.show();
      }
    };

    Bus.prototype.hideLeg = function(index) {
      var leg, preventDefault;
      if (index == null) {
        index = this.currentLegIndex;
      }
      leg = this.legs[index];
      this._log('hideLeg:', leg);
      preventDefault = this.options.onLegEnd(leg, this);
      if (preventDefault !== false) {
        return leg.hide();
      }
    };

    Bus.prototype.repositionLegs = function() {
      if (this.legs) {
        return $.each(this.legs, function() {
          return this.reposition();
        });
      }
    };

    Bus.prototype.next = function() {
      this.hideLeg();
      this.currentLegIndex++;
      if (this.currentLegIndex > this.totalLegs - 1) {
        return this.stop();
      }
      return this.showLeg();
    };

    Bus.prototype.prev = function(cb) {
      this.hideLeg();
      this.currentLegIndex--;
      if (this.currentLegIndex < 0) {
        return this.stop();
      }
      return this.showLeg();
    };

    Bus.prototype.destroy = function() {
      if (this.legs) {
        $.each(this.legs, function() {
          return this.destroy();
        });
      }
      this.legs = null;
      delete _busses[this.id];
      return this._teardownEvents();
    };

    Bus.prototype._buildLegs = function() {
      var _this = this;
      if (this.legs) {
        $.each(this.legs, function(_, leg) {
          return leg.destroy();
        });
      }
      return $.map(this.legEls, function(legEl, i) {
        var $legEl, data, leg;
        $legEl = $(legEl);
        data = $legEl.data();
        leg = new Leg({
          content: $legEl.html(),
          target: data.el || 'body',
          bus: _this,
          index: i,
          rawData: data
        });
        leg.render();
        _this.$target.append(leg.$el);
        leg._position();
        leg.hide();
        return leg;
      });
    };

    Bus.prototype._log = function() {
      if (!this.options.debug) {
        return;
      }
      return console.log.apply(console, ["TOURBUS " + this.id + ":"].concat(__slice.call(arguments)));
    };

    Bus.prototype._setupEvents = function() {
      this.$el.on('depart.tourbus', $.proxy(this.depart, this));
      this.$el.on('stop.tourbus', $.proxy(this.stop, this));
      this.$el.on('next.tourbus', $.proxy(this.next, this));
      return this.$el.on('prev.tourbus', $.proxy(this.prev, this));
    };

    Bus.prototype._teardownEvents = function() {
      return this.$el.off('.tourbus');
    };

    return Bus;

  })();
  Leg = (function() {
    function Leg(options) {
      this.bus = options.bus;
      this.rawData = options.rawData;
      this.content = options.content;
      this.index = options.index;
      this.options = options;
      this.$target = $(options.target);
      if (this.$target.length === 0) {
        throw "" + this.$target.selector + " is not an element!";
      }
      this._setupOptions();
      this._configureElement();
      this._configureTarget();
      this._configureScroll();
      this._setupEvents();
      this.bus._log("leg " + this.index + " made with options", this.options);
    }

    Leg.prototype.render = function() {
      var arrowClass, html;
      arrowClass = this.options.orientation === 'centered' ? '' : 'tourbus-arrow';
      this.$el.addClass(" " + arrowClass + " tourbus-arrow-" + this.options.orientation + " ");
      html = "<div class='tourbus-leg-inner'>\n  " + this.content + "\n</div>";
      this.$el.css({
        width: this.options.width
      }).html(html);
      return this;
    };

    Leg.prototype.destroy = function() {
      this.$el.remove();
      return this._teardownEvents();
    };

    Leg.prototype.reposition = function() {
      this._configureTarget();
      return this._position();
    };

    Leg.prototype._position = function() {
      var css, keys, rule, selector;
      if (this.options.orientation !== 'centered') {
        rule = {};
        keys = {
          top: 'left',
          bottom: 'left',
          left: 'top',
          right: 'top'
        };
        if (typeof this.options.arrow === 'number') {
          this.options.arrow += 'px';
        }
        rule[keys[this.options.orientation]] = this.options.arrow;
        selector = "#" + this.id + ".tourbus-arrow";
        this.bus._log("adding rule for " + this.id, rule);
        _addRule("" + selector + ":before, " + selector + ":after", rule);
      }
      css = this._offsets();
      this.bus._log('setting offsets on leg', css);
      return this.$el.css(css);
    };

    Leg.prototype.show = function() {
      this.$el.css({
        visibility: 'visible',
        opacity: 1.0,
        zIndex: 9999
      });
      return this.scrollIntoView();
    };

    Leg.prototype.hide = function() {
      if (this.bus.options.debug) {
        return this.$el.css({
          visibility: 'visible',
          opacity: 0.4,
          zIndex: 0
        });
      } else {
        return this.$el.css({
          visibility: 'hidden'
        });
      }
    };

    Leg.prototype.scrollIntoView = function() {
      var scrollTarget;
      if (!this.willScroll) {
        return;
      }
      scrollTarget = _dataProp(this.options.scrollTo, this.$el);
      this.bus._log('scrolling to', scrollTarget, this.scrollSettings);
      return $.scrollTo(scrollTarget, this.scrollSettings);
    };

    Leg.prototype._setupOptions = function() {
      var globalOptions;
      globalOptions = this.bus.options.leg;
      this.options.top = _dataProp(this.rawData.top, globalOptions.top);
      this.options.left = _dataProp(this.rawData.left, globalOptions.left);
      this.options.scrollTo = _dataProp(this.rawData.scrollTo, globalOptions.scrollTo);
      this.options.scrollSpeed = _dataProp(this.rawData.scrollSpeed, globalOptions.scrollSpeed);
      this.options.scrollContext = _dataProp(this.rawData.scrollContext, globalOptions.scrollContext);
      this.options.margin = _dataProp(this.rawData.margin, globalOptions.margin);
      this.options.arrow = this.rawData.arrow || globalOptions.arrow;
      this.options.align = this.rawData.align || globalOptions.align;
      this.options.width = this.rawData.width || globalOptions.width;
      return this.options.orientation = this.rawData.orientation || globalOptions.orientation;
    };

    Leg.prototype._configureElement = function() {
      this.id = "tourbus-leg-id-" + this.bus.id + "-" + this.options.index;
      this.$el = $("<div class='tourbus-leg'></div>");
      this.el = this.$el[0];
      this.$el.attr({
        id: this.id
      });
      return this.$el.css({
        zIndex: 9999
      });
    };

    Leg.prototype._setupEvents = function() {
      this.$el.on('click', '.tourbus-next', $.proxy(this.bus.next, this.bus));
      this.$el.on('click', '.tourbus-prev', $.proxy(this.bus.prev, this.bus));
      return this.$el.on('click', '.tourbus-stop', $.proxy(this.bus.stop, this.bus));
    };

    Leg.prototype._teardownEvents = function() {
      return this.$el.off('click');
    };

    Leg.prototype._configureTarget = function() {
      this.targetOffset = this.$target.offset();
      if (_dataProp(this.options.top, false)) {
        this.targetOffset.top = this.options.top;
      }
      if (_dataProp(this.options.left, false)) {
        this.targetOffset.left = this.options.left;
      }
      this.targetWidth = this.$target.outerWidth();
      return this.targetHeight = this.$target.outerHeight();
    };

    Leg.prototype._configureScroll = function() {
      this.willScroll = $.fn.scrollTo && this.options.scrollTo !== false;
      return this.scrollSettings = {
        offset: -this.options.scrollContext,
        easing: 'linear',
        axis: 'y',
        duration: this.options.scrollSpeed
      };
    };

    Leg.prototype._offsets = function() {
      var dimension, elHalf, elHeight, elWidth, offsets, targetHalf, targetHeightOverride, validOrientations;
      elHeight = this.$el.height();
      elWidth = this.$el.width();
      offsets = {};
      switch (this.options.orientation) {
        case 'centered':
          targetHeightOverride = $(window).height();
          offsets.top = this.options.top;
          if (!_dataProp(offsets.top, false)) {
            offsets.top = (targetHeightOverride / 2) - (elHeight / 2);
          }
          offsets.left = (this.targetWidth / 2) - (elWidth / 2);
          break;
        case 'left':
          offsets.top = this.targetOffset.top;
          offsets.left = this.targetOffset.left - elWidth - this.options.margin;
          break;
        case 'right':
          offsets.top = this.targetOffset.top;
          offsets.left = this.targetOffset.left + this.targetWidth + this.options.margin;
          break;
        case 'top':
          offsets.top = this.targetOffset.top - elHeight - this.options.margin;
          offsets.left = this.targetOffset.left;
          break;
        case 'bottom':
          offsets.top = this.targetOffset.top + this.targetHeight + this.options.margin;
          offsets.left = this.targetOffset.left;
      }
      validOrientations = {
        top: ['left', 'right'],
        bottom: ['left', 'right'],
        left: ['top', 'bottom'],
        right: ['top', 'bottom']
      };
      if (_include(this.options.orientation, validOrientations[this.options.align])) {
        switch (this.options.align) {
          case 'right':
            offsets.left += this.targetWidth - elWidth;
            break;
          case 'bottom':
            offsets.top += this.targetHeight - elHeight;
        }
      } else if (this.options.align === 'center') {
        if (_include(this.options.orientation, validOrientations.left)) {
          targetHalf = this.targetWidth / 2;
          elHalf = elWidth / 2;
          dimension = 'left';
        } else {
          targetHalf = this.targetHeight / 2;
          elHalf = elHeight / 2;
          dimension = 'top';
        }
        if (targetHalf > elHalf) {
          offsets[dimension] += targetHalf - elHalf;
        } else {
          offsets[dimension] -= elHalf - targetHalf;
        }
      }
      return offsets;
    };

    return Leg;

  })();
  _tours = 0;
  uniqueId = function() {
    return _tours++;
  };
  _busses = {};
  _assemble = function() {
    var bus;
    bus = (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Bus, arguments, function(){});
    _busses[bus.id] = bus;
    return bus;
  };
  _dataProp = function(possiblyFalsy, alternative) {
    if (possiblyFalsy === null || typeof possiblyFalsy === 'undefined') {
      return alternative;
    }
    return possiblyFalsy;
  };
  _include = function(value, array) {
    return $.inArray(value, array || []) !== -1;
  };
  return _addRule = (function(styleTag) {
    var sheet;
    styleTag.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(styleTag);
    sheet = document.styleSheets[document.styleSheets.length - 1];
    return function(selector, css) {
      var key, propText;
      propText = $.map((function() {
        var _results;
        _results = [];
        for (key in css) {
          _results.push(key);
        }
        return _results;
      })(), function(p) {
        return "" + p + ":" + css[p];
      }).join(';');
      try {
        if (sheet.insertRule) {
          sheet.insertRule("" + selector + " { " + propText + " }", (sheet.cssRules || sheet.rules).length);
        } else {
          sheet.addRule(selector, propText);
        }
      } catch (_error) {}
    };
  })(document.createElement('style'));
})(jQuery);

$(document).ready(function() {
  var initialize, new_task_input;
  new_task_input = $('#new-task');
  initialize = function() {
    var allTasks, tour;
    allTasks = Task.getAllTasks();
    Views.showTasks(allTasks);
    new_task_input.focus();
    $('body').css('opacity', '100');
    tour = $('#tour').tourbus({
      onStop: Views.finishTour
    });
    if ((localStorage.getItem('sst-tour') === null) && ($(window).width() > 600) && (allTasks.length > 0)) {
      return tour.trigger('depart.tourbus');
    }
  };
  $('#task-submit').click(function(e) {
    var name;
    e.preventDefault();
    name = new_task_input.val();
    Task.setNewTask(name);
    return $('#new-task').val('');
  });
  $('#mark-all-done').click(function(e) {
    var allTasks;
    e.preventDefault();
    allTasks = Task.getAllTasks();
    if (allTasks.length === 0) {
      return confirm('No tasks to mark done!');
    } else {
      if (confirm('Are you sure you want to mark all tasks as done?')) {
        return Task.markAllDone();
      } else {

      }
    }
  });
  $('#undo').click(function(e) {
    return Task.undoLast();
  });
  $(document).on('click', '#task-list li label input', function(e) {
    var li;
    li = $(this).closest('li');
    return li.slideToggle(function() {
      return Task.markDone(Views.getId(li));
    });
  });
  $(document).on('click', '.priority, .duedate', function(e) {
    var li, type_attr, value;
    type_attr = $(e.currentTarget).attr('type');
    value = $(this).attr(type_attr);
    li = $(this).closest('li');
    return Task.changeAttr(li, type_attr, value);
  });
  return initialize();
});

var Arrays, DB, Task;

DB = (function() {
  function DB() {}

  DB.db_key = 'todo';

  return DB;

})();

Arrays = (function() {
  function Arrays() {}

  Arrays.priorities = ['minor', 'major', 'blocker'];

  Arrays.duedates = ['today', 'tomorrow', 'this week', 'next week', 'this month'];

  Arrays.default_data = [
    {
      'isDone': false,
      'name': 'Add a new task above',
      'priority': 'major',
      'duedate': 'today'
    }, {
      'isDone': false,
      'name': 'Perhaps give it a priority or due date',
      'priority': 'minor',
      'duedate': 'today'
    }, {
      'isDone': false,
      'name': 'Refresh to see that your task is still here',
      'priority': 'minor',
      'duedate': 'today'
    }, {
      'isDone': false,
      'name': 'Follow <a href="http://twitter.com/humphreybc" target="_blank">@humphreybc</a> on Twitter',
      'priority': 'major',
      'duedate': 'today'
    }, {
      'isDone': false,
      'name': 'Click a task’s name to complete it',
      'priority': 'minor',
      'duedate': 'tomorrow'
    }
  ];

  return Arrays;

})();

Task = (function() {
  function Task() {}

  Task.getAllTasks = function() {
    var allTasks;
    allTasks = localStorage.getItem(DB.db_key);
    allTasks = JSON.parse(allTasks) || Arrays.default_data;
    return allTasks;
  };

  Task.createTask = function(name) {
    var task;
    return task = {
      isDone: false,
      name: name,
      priority: 'minor',
      duedate: 'today'
    };
  };

  Task.setNewTask = function(name) {
    var allTasks, newTask;
    if (name !== '') {
      newTask = this.createTask(name);
      allTasks = this.getAllTasks();
      allTasks.push(newTask);
      return this.setAllTasks(allTasks);
    }
  };

  Task.setAllTasks = function(allTasks) {
    localStorage.setItem(DB.db_key, JSON.stringify(allTasks));
    return Views.showTasks(allTasks);
  };

  Task.changeAttr = function(li, attr, value) {
    var array, currentIndex;
    if (attr === 'priority') {
      array = Arrays.priorities;
    } else if (attr === 'duedate') {
      array = Arrays.duedates;
    }
    currentIndex = $.inArray(value, array);
    if (currentIndex === array.length - 1) {
      currentIndex = -1;
    }
    value = array[currentIndex + 1];
    return this.updateAttr(li, attr, value);
  };

  Task.updateAttr = function(li, attr, value) {
    var allTasks, id, task;
    id = Views.getId(li);
    allTasks = this.getAllTasks();
    task = allTasks[id];
    task[attr] = value;
    return this.setAllTasks(allTasks);
  };

  Task.undoLast = function() {
    var allTasks, position, redo;
    redo = localStorage.getItem('undo');
    redo = JSON.parse(redo);
    allTasks = this.getAllTasks();
    position = redo.position;
    delete redo['position'];
    allTasks.splice(position, 0, redo);
    this.setAllTasks(allTasks);
    localStorage.removeItem('undo');
    return Views.undoUX(allTasks);
  };

  Task.markDone = function(id) {
    var allTasks, toDelete;
    allTasks = this.getAllTasks();
    toDelete = allTasks[id];
    toDelete['position'] = id;
    localStorage.setItem('undo', JSON.stringify(toDelete));
    Views.undoFade();
    allTasks = this.getAllTasks();
    allTasks.splice(id, 1);
    return this.setAllTasks(allTasks);
  };

  Task.markAllDone = function() {
    var allTasks;
    this.setAllTasks([]);
    allTasks = this.getAllTasks();
    return Views.showTasks(allTasks);
  };

  return Task;

})();

var Views;

Views = (function() {
  var timeout;

  function Views() {}

  timeout = 0;

  Views.getId = function(li) {
    var id;
    id = $(li).find('input').attr('id').replace('task', '');
    return parseInt(id);
  };

  Views.generateHTML = function(allTasks) {
    var i, task, task_list, _i, _len;
    task_list = [];
    for (i = _i = 0, _len = allTasks.length; _i < _len; i = ++_i) {
      task = allTasks[i];
      task_list[i] = '<li><label><input type="checkbox" id="task' + i + '" />' + task.name + '</label><a class="duedate" type="duedate" duedate="' + task.duedate + '">' + task.duedate + '</a>' + '<a class="priority" type="priority" priority="' + task.priority + '">' + task.priority + '</a></li>';
    }
    return task_list;
  };

  Views.showTasks = function(allTasks) {
    var task_list;
    task_list = this.generateHTML(allTasks);
    $('#task-list').html(task_list);
    if (allTasks.length === 0) {
      $('#all-done').show();
      return $('#new-task').focus();
    } else {
      return $('#all-done').hide();
    }
  };

  Views.undoFade = function() {
    $('#undo').fadeIn();
    return timeout = setTimeout(function() {
      $('#undo').fadeOut();
      return localStorage.removeItem('undo');
    }, 5000);
  };

  Views.undoUX = function(allTasks) {
    this.showTasks(allTasks);
    clearTimeout(timeout);
    return $('#undo').fadeOut();
  };

  Views.finishTour = function() {
    return localStorage.setItem('sst-tour', 1);
  };

  return Views;

})();
