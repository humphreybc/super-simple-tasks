(function() {
  $(document).ready(function() {
    var clickedTimers, createToDo, generateHTML, getAllTodos, getId, getNames, initialize, markAllDone, markDone, setAllTodos, setNewTodo, showTodos, timeout, undoLast, undoUX;
    clickedTimers = {};
    timeout = 0;
    initialize = function() {
      var allTodos;
      allTodos = getAllTodos();
      showTodos(allTodos);
      return $("#new-todo").focus();
    };
    createToDo = function(name) {
      var todo;
      return todo = {
        isDone: false,
        name: name
      };
    };
    getAllTodos = function() {
      var allTodos;
      allTodos = localStorage.getItem("todo");
      allTodos = JSON.parse(allTodos) || [
        {
          "isDone": false,
          "name": "Add a new task above"
        }, {
          "isDone": false,
          "name": "Refresh and see your task is still here"
        }, {
          "isDone": false,
          "name": "Click a task to complete it"
        }, {
          "isDone": false,
          "name": "Follow <a href='http://twitter.com/humphreybc' target='_blank'>@humphreybc</a> on Twitter"
        }
      ];
      return allTodos;
    };
    setNewTodo = function() {
      var allTodos, name, newTodo;
      name = $("#new-todo").val();
      if (name !== '') {
        newTodo = createToDo(name);
        allTodos = getAllTodos();
        allTodos.push(newTodo);
        return setAllTodos(allTodos);
      }
    };
    setAllTodos = function(allTodos) {
      localStorage.setItem("todo", JSON.stringify(allTodos));
      showTodos(allTodos);
      return $("#new-todo").val('');
    };
    getId = function(li) {
      var id;
      id = $(li).find('input').attr('id').replace('todo', '');
      return parseInt(id);
    };
    markDone = function(id) {
      var allTodos, toDelete;
      allTodos = getAllTodos();
      toDelete = allTodos[id];
      toDelete['position'] = id;
      localStorage.setItem("undo", JSON.stringify(toDelete));
      $("#undo").fadeIn(150);
      timeout = setTimeout(function() {
        $("#undo").fadeOut(250);
        return localStorage.removeItem("undo");
      }, 5000);
      allTodos = getAllTodos();
      allTodos.splice(id, 1);
      return setAllTodos(allTodos);
    };
    markAllDone = function() {
      return setAllTodos([]);
    };
    getNames = function(allTodos) {
      var names, todo, _i, _len;
      names = [];
      for (_i = 0, _len = allTodos.length; _i < _len; _i++) {
        todo = allTodos[_i];
        names.push(todo['name']);
      }
      return names;
    };
    generateHTML = function(allTodos) {
      var i, name, names, _i, _len;
      names = getNames(allTodos);
      for (i = _i = 0, _len = names.length; _i < _len; i = ++_i) {
        name = names[i];
        names[i] = '<li><label><input type="checkbox" id="todo' + i + '" />' + name + '</label></li>';
      }
      return names;
    };
    showTodos = function(allTodos) {
      var html;
      html = generateHTML(allTodos);
      return $("#todo-list").html(html);
    };
    undoLast = function() {
      var allTodos, position, redo;
      redo = localStorage.getItem("undo");
      redo = JSON.parse(redo);
      allTodos = getAllTodos();
      position = redo.position;
      delete redo['position'];
      allTodos.splice(position, 0, redo);
      setAllTodos(allTodos);
      localStorage.removeItem("undo");
      return undoUX(allTodos);
    };
    undoUX = function(allTodos) {
      showTodos(allTodos);
      clearTimeout(timeout);
      return $("#undo").hide();
    };
    initialize();
    $("#todo-submit").click(function(e) {
      e.preventDefault();
      return setNewTodo();
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
    return $(document).on("click", "#todo-list li", function(e) {
      var self;
      e.stopPropagation();
      self = this;
      return $(self).fadeOut(500, function() {
        return markDone(getId(self));
      });
    });
  });

}).call(this);
