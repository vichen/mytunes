// SongQueue.js - Defines a backbone model class for the song queue.
//collection of songs to be queued
var SongQueue = Songs.extend({
  //songQueue = new Songqueue( { song });
  initialize: function() {
    //what happens on initializing songqueue????

    //if there is a song in the Sonqueue? play it
    // this.on('add', this.playFirst, this);
    // this.playFirst();

    //check if songQueue has any songs.
      //play firstSong if it does.
    if (this.length > 0) {
      this.playFirst();
    }
    //listens to add event and makes a check
      //if songQueue is only one song, play it. 
      //otherwise do nothing.
    this.on('add', this.check, this);
  },


  //listens for when a song is added

  //play song if it is the only song in queue or first

  //end function. removes song from queue 
    //current song 

  //if length > 1, plays first song


  //if length === 0. do nothing

  //dequeue -> removes song
  check: function(song) {
    if (this.length === 1) {
      this.playFirst(song);
    }
  },

  //playFirst -> plays first song in queue

  playFirst: function() {
    var firstSong = this.at(0);
    firstSong.play();
  }


});