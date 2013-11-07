$(document).ready(function() {
  var changeAttr, db_key, duedates, generateHTML, getAllTasks, getId, getNames, initialize, markAllDone, markDone, priorities, setAllTasks, setNewTask, showTasks, timeout, undoLast, undoUX, updateAttr;
  db_key = 'todo';
  timeout = 0;
  priorities = ['minor', 'major', 'blocker'];
  duedates = ['today', 'tomorrow', 'this week', 'next week', 'this month'];
  initialize = function() {
    var allTasks;
    allTasks = getAllTasks();
    showTasks(allTasks);
    return $("#new-task").focus();
  };
  getAllTasks = function() {
    var allTasks;
    allTasks = localStorage.getItem(db_key);
    allTasks = JSON.parse(allTasks) || [
      {
        "isDone": false,
        "name": "Add a new task above",
        'priority': 'major',
        'duedate': 'today'
      }, {
        "isDone": false,
        "name": "Refresh and see your task is still here",
        'priority': 'minor',
        'duedate': 'today'
      }, {
        "isDone": false,
        "name": "Click a task to complete it",
        'priority': 'minor',
        'duedate': 'tomorrow'
      }, {
        "isDone": false,
        "name": "Follow <a href='http://twitter.com/humphreybc' target='_blank'>@humphreybc</a> on Twitter",
        'priority': 'major',
        'duedate': 'today'
      }
    ];
    return allTasks;
  };
  setNewTask = function() {
    var allTasks, name, newTask;
    name = $("#new-task").val();
    if (name !== '') {
      newTask = Task.createTask(name);
      allTasks = getAllTasks();
      allTasks.push(newTask);
      return setAllTasks(allTasks);
    }
  };
  updateAttr = function(li, attr, value) {
    var allTasks, id, task;
    id = getId(li);
    allTasks = getAllTasks();
    task = allTasks[id];
    task[attr] = value;
    return setAllTasks(allTasks);
  };
  setAllTasks = function(allTasks) {
    localStorage.setItem(db_key, JSON.stringify(allTasks));
    showTasks(allTasks);
    return $("#new-task").val('');
  };
  getId = function(li) {
    var id;
    id = $(li).find('input').attr('id').replace('task', '');
    return parseInt(id);
  };
  markDone = function(id) {
    var allTasks, toDelete;
    allTasks = getAllTasks();
    toDelete = allTasks[id];
    toDelete['position'] = id;
    localStorage.setItem("undo", JSON.stringify(toDelete));
    $("#undo").fadeIn(150);
    timeout = setTimeout(function() {
      $("#undo").fadeOut(250);
      return localStorage.removeItem("undo");
    }, 5000);
    allTasks = getAllTasks();
    allTasks.splice(id, 1);
    return setAllTasks(allTasks);
  };
  markAllDone = function() {
    return setAllTasks([]);
  };
  getNames = function(allTasks) {
    var names, task, _i, _len;
    names = [];
    for (_i = 0, _len = allTasks.length; _i < _len; _i++) {
      task = allTasks[_i];
      names.push(task['name']);
    }
    return names;
  };
  generateHTML = function(tasks) {
    var html, i, task, _i, _len;
    html = [];
    for (i = _i = 0, _len = tasks.length; _i < _len; i = ++_i) {
      task = tasks[i];
      html[i] = '<li><label><input type="checkbox" id="task' + i + '" />' + task.name + '</label><a class="duedate" type="duedate" duedate="' + task.duedate + '">' + task.duedate + '</a>' + '<a class="priority" type="priority" priority="' + task.priority + '">' + task.priority + '</a></li>';
    }
    return html;
  };
  showTasks = function(allTasks) {
    var html;
    html = generateHTML(allTasks);
    return $("#task-list").html(html);
  };
  undoLast = function() {
    var allTasks, position, redo;
    redo = localStorage.getItem("undo");
    redo = JSON.parse(redo);
    allTasks = getAllTasks();
    position = redo.position;
    delete redo['position'];
    allTasks.splice(position, 0, redo);
    setAllTasks(allTasks);
    localStorage.removeItem("undo");
    return undoUX(allTasks);
  };
  undoUX = function(allTasks) {
    showTasks(allTasks);
    clearTimeout(timeout);
    return $("#undo").hide();
  };
  initialize();
  $("#task-submit").click(function(e) {
    e.preventDefault();
    return setNewTask();
  });
  $("#mark-all-done").click(function(e) {
    e.preventDefault();
    if (confirm("Are you sure you want to mark all tasks as done?")) {
      return markAllDone();
    } else {

    }
  });
  $("#undo").click(function(e) {
    return undoLast();
  });
  $(document).on("click", "#task-list li label input", function(e) {
    var self;
    self = $(this).closest('li');
    return $(self).fadeOut(500, function() {
      return markDone(getId(self));
    });
  });
  $(document).on('click', '.priority, .duedate', function(e) {
    var li, type_attr, value;
    type_attr = $(e.currentTarget).attr('type');
    value = $(this).attr(type_attr);
    li = $(this).closest('li');
    return changeAttr(li, type_attr, value);
  });
  return changeAttr = function(li, attr, value) {
    var array, currentIndex;
    if (attr === 'priority') {
      array = priorities;
    } else if (attr === 'duedate') {
      array = duedates;
    }
    currentIndex = $.inArray(value, array);
    if (currentIndex === array.length - 1) {
      currentIndex = -1;
    }
    value = array[currentIndex + 1];
    return updateAttr(li, attr, value);
  };
});

var Task;

Task = (function() {
  function Task() {}

  Task.createTask = function(name) {
    var task;
    return task = {
      isDone: false,
      name: name,
      priority: 'minor',
      duedate: 'today'
    };
  };

  return Task;

})();
