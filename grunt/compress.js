module.exports = {
  main: {
    options: {
      archive: 'build/build.zip'
    },
    files: [
      {cwd: 'public/', expand: true, src: ['**']}
    ]
  }
};