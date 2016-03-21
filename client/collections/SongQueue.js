// SongQueue.js - Defines a backbone model class for the song queue.
//collection of songs to be queued
var SongQueue = Songs.extend({
<<<<<<< HEAD
  //songQueue = new Songqueue( { song });
  initialize: function() {

    if (this.length > 0) {
      this.playFirst();
    }

    this.on('add', this.initCheck, this);
    this.on('ended', this.dequeue, this);
    this.on('dequeue', this.dequeue, this);
  },

  playFirst: function() {
    var firstSong = this.at(0);
    firstSong.play();
  },

  initCheck: function(song) {
    if (this.length === 1) {
      this.playFirst();
    } 
  },
  
  dequeue: function() {
    var song = this.at(0);
    this.remove(song);
    if (this.length > 0) {
      this.playFirst();
    }
  }
=======


  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
  },

  enqueue: function(song) {
    if (this.length === 1) {
      this.playFirst();
    }
  },
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff

  dequeue: function(song) {
    if (this.at(0) === song) {
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  playNext: function() {
    this.shift();
    if (this.length >= 1) {
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  },

  playFirst: function() {
    this.at(0).play();
  }
  
});