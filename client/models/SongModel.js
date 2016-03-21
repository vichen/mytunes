// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

<<<<<<< HEAD
  initialize: function() {
    
  },
=======
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },
<<<<<<< HEAD

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  }
=======
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  }
  
});
