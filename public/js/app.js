$(document).ready(function() {
  var initialize, new_task_input;
  new_task_input = $('#new-task');
  initialize = function() {
    var allTasks;
    allTasks = Task.getAllTasks();
    Views.showTasks(allTasks);
    return new_task_input.focus();
  };
  $('#task-submit').click(function(e) {
    var name;
    e.preventDefault();
    name = new_task_input.val();
    Task.setNewTask(name);
    return $('#new-task').val('');
  });
  $('#mark-all-done').click(function(e) {
    e.preventDefault();
    if (confirm('Are you sure you want to mark all tasks as done?')) {
      return Task.markAllDone();
    } else {

    }
  });
  $('#undo').click(function(e) {
    return Task.undoLast();
  });
  $(document).on('click', '#task-list li label input', function(e) {
    var self;
    self = $(this).closest('li');
    return $(self).fadeOut(500, function() {
      return Task.markDone(Views.getId(self));
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

  DB.db_key = 'dev';

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
      'name': 'Refresh and see your task is still here',
      'priority': 'minor',
      'duedate': 'today'
    }, {
      'isDone': false,
      'name': 'Click a task to complete it',
      'priority': 'minor',
      'duedate': 'tomorrow'
    }, {
      'isDone': false,
      'name': 'Follow <a href="http://twitter.com/humphreybc" target="_blank">@humphreybc</a> on Twitter',
      'priority': 'major',
      'duedate': 'today'
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
    allTasks = Task.getAllTasks();
    task = allTasks[id];
    task[attr] = value;
    return this.setAllTasks(allTasks);
  };

  Task.setAllTasks = function(allTasks) {
    localStorage.setItem(DB.db_key, JSON.stringify(allTasks));
    return Views.showTasks(allTasks);
  };

  Task.markDone = function(id) {
    var allTasks, toDelete;
    allTasks = Task.getAllTasks();
    toDelete = allTasks[id];
    toDelete['position'] = id;
    localStorage.setItem('undo', JSON.stringify(toDelete));
    Views.undoFade();
    allTasks = Task.getAllTasks();
    allTasks.splice(id, 1);
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

  Task.markAllDone = function() {
    var allTasks;
    this.setAllTasks([]);
    allTasks = this.getAllTasks();
    return Views.showTasks(allTasks);
  };

  Task.getNames = function(allTasks) {
    var names, task, _i, _len;
    names = [];
    for (_i = 0, _len = allTasks.length; _i < _len; _i++) {
      task = allTasks[_i];
      names.push(task['name']);
    }
    return names;
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

  Views.generateHTML = function(tasks) {
    var html, i, task, _i, _len;
    html = [];
    for (i = _i = 0, _len = tasks.length; _i < _len; i = ++_i) {
      task = tasks[i];
      html[i] = '<li><label><input type="checkbox" id="task' + i + '" />' + task.name + '</label><a class="duedate" type="duedate" duedate="' + task.duedate + '">' + task.duedate + '</a>' + '<a class="priority" type="priority" priority="' + task.priority + '">' + task.priority + '</a></li>';
    }
    return html;
  };

  Views.showTasks = function(allTasks) {
    var html;
    html = this.generateHTML(allTasks);
    $('#task-list').html(html);
    if (allTasks.length === 0) {
      return $('#all-done').css('opacity', '100');
    } else {
      $('#all-done').hide();
      return timeout = setTimeout(function() {
        $('#all-done').css('opacity', '0');
        return $('#all-done').show();
      }, 500);
    }
  };

  Views.undoFade = function() {
    $('#undo').fadeIn(150);
    return timeout = setTimeout(function() {
      $('#undo').fadeOut(250);
      return localStorage.removeItem('undo');
    }, 5000);
  };

  Views.undoUX = function(allTasks) {
    this.showTasks(allTasks);
    clearTimeout(timeout);
    return $('#undo').hide();
  };

  return Views;

})();
