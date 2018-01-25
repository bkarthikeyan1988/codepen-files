new Vue ({
  el: '#app',
  data: {
    title:  'Hello World',
    text: 'text',
    link: 'http://google.com',
    rawHTML: '<span>Raw HTML</span> <a href="http://google.com" target="_blank">Google</a>',
    counter: 0
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    changeText: function(event) {
      return 'New Text';
    },
    increase: function () {
      this.counter++;
    },
    increaseDouble: function (step) {
      this.counter += step;
    }
  }
})