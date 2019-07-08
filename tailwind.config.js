module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'outline-inner': 'inset 0 0 0 3px rgba(66,153,225,0.5)'
      },
      letterSpacing: {
        snug: '-.0125em'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
}
