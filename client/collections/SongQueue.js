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
    this.on('ended', this.playNext, this);  
    this.on('dequeue', this.remove, this);
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
    console.log('remove');
    var song = this.at(0);
    this.remove(song);
  },

  ended: function() {
  //   console.log('ended is called');
  //   if (this.length) {
  //     this.playFirst();
  },

  playNext: function() {
    if (this.length > 0) {
      this.playFirst();
    }
  }


});