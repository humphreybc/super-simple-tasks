module.exports = {
  main: {
    files: [
      {expand: true, cwd: 'src/', src: 'img/**', dest: 'public/'},
      {expand: true, cwd: 'src/', src: 'fonts/**', dest: 'public/'},
      {expand: true, cwd: 'src/', src: '*', dest: 'public/', filter: 'isFile'}
    ]
  }
};