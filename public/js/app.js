(function() {
  $(document).ready(function() {
    var createTask, generateHTML, getAllTasks, getId, getNames, initialize, markAllDone, markDone, priorities, setAllTasks, setNewTask, showTasks, timeout, undoLast, undoUX, updateAttr;
    timeout = 0;
    priorities = ['minor', 'major', 'blocker'];
    initialize = function() {
      var allTasks;
      allTasks = getAllTasks();
      showTasks(allTasks);
      return $("#new-task").focus();
    };
    createTask = function(name) {
      var task;
      return task = {
        isDone: false,
        name: name,
        priority: 'minor'
      };
    };
    getAllTasks = function() {
      var allTasks;
      allTasks = localStorage.getItem("todo");
      allTasks = JSON.parse(allTasks) || [
        {
          "isDone": false,
          "name": "Add a new task above",
          'priority': 'major'
        }, {
          "isDone": false,
          "name": "Refresh and see your task is still here",
          'priority': 'minor'
        }, {
          "isDone": false,
          "name": "Click a task to complete it",
          'priority': 'minor'
        }, {
          "isDone": false,
          "name": "Follow <a href='http://twitter.com/humphreybc' target='_blank'>@humphreybc</a> on Twitter",
          'priority': 'minor'
        }
      ];
      return allTasks;
    };
    setNewTask = function() {
      var allTasks, name, newTask;
      name = $("#new-task").val();
      if (name !== '') {
        newTask = createTask(name);
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
      localStorage.setItem("todo", JSON.stringify(allTasks));
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
        html[i] = '<li><label><input type="checkbox" id="task' + i + '" />' + task.name + '</label><a class="priority" priority="' + task.priority + '">' + task.priority + '</a></li>';
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
    return $(document).on("click", ".priority", function(e) {
      var currentIndex, currentPriority, li, self;
      self = $(this);
      currentPriority = self.attr('priority');
      currentIndex = $.inArray(currentPriority, priorities);
      if (currentIndex === priorities.length - 1) {
        currentIndex = -1;
      }
      currentPriority = priorities[currentIndex + 1];
      self.attr('priority', currentPriority);
      self.text(currentPriority);
      li = $(this).closest('li');
      return updateAttr(li, 'priority', currentPriority);
    });
  });

}).call(this);
