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
    return li.hide(function() {
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
    $('#undo').css('opacity', '100');
    return timeout = setTimeout(function() {
      $('#undo').css('opacity', '0');
      return localStorage.removeItem('undo');
    }, 5000);
  };

  Views.undoUX = function(allTasks) {
    this.showTasks(allTasks);
    clearTimeout(timeout);
    return $('#undo').css('opacity', '0');
  };

  return Views;

})();
