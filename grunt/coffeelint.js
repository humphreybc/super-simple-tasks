module.exports = {
  app: ['src/js/*.coffee'],
  options: {
    indentation: {
      value: 2,
      level: 'error'
    },
    max_line_length: {
      value: 120,
      level: 'error'
    },
    cyclomatic_complexity: {
      level: 'warn'
    },
    no_unnecessary_double_quotes: {
      level: 'warn'
    },
    no_unnecessary_fat_arrows: {
      level: 'warn'
    }
  }
};