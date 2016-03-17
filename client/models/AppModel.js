// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({
  //params = {library: library}
  //library = var songData = [ songs, songs, songs, songs]
  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song) {
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song) {
      var currentQueue = this.get('songQueue');
      currentQueue.add(song);
      this.set('songQueue', currentQueue);
    }, this);
  },

  // play: function(song) {
  //   //play the song

  // },

  // enqueue: function() {
  //   //lines it up for the next to be played

  // }
});
