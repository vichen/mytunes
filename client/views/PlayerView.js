// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

<<<<<<< HEAD
  // initialize: function() {
  //   this.on('ended', this.model.dequeue, this);
  // },

  events: {
    'ended': function() {
      this.model.dequeue();
    }
  },
=======
  initialize: function() {

    this.$el.on('ended', (function () { this.model.ended(); }).bind(this) );
      },
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff

  setSong: function(song) {
    this.model = song;

    if (!this.model) {
      this.el.pause();
    }
        this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
