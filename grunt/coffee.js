module.exports = {
  scripts: {
    files: {
      '.tmp/concat/js/app.js': ['src/js/utils.coffee',
                                'src/js/storage.coffee',
                                'src/js/remote_sync.coffee',
                                'src/js/analytics.coffee',
                                'src/js/task.coffee',
                                'src/js/views.coffee',
                                'src/js/list_view.coffee',
                                'src/js/task_view.coffee',
                                'src/js/extension.coffee',
                                'src/js/export.coffee',
                                'src/js/drag_drop.coffee',
                                'src/js/migrations.coffee',
                                'src/js/tour.coffee',
                                'src/js/app.coffee']
    },
    options: {
      bare: true
    }
  }
};