// SongQueue.js - Defines a backbone model class for the song queue.
//collection of songs to be queued
var SongQueue = Songs.extend({
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

});