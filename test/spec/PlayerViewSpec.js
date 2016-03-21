describe('PlayerView', function() {
  var library, appView;

  beforeEach(function() {

    library = new Songs([
      {
        url: 'mp3s/08 4 Page Letter.mp3',
        title: '4 Page Letter',
        artist: 'Aaliyah'
      },
      {
        url: 'mp3s/11 We Need A Resolution.mp3',
        title: 'We Need A Resolution',
        artist: 'Aaliyah'
      },
      {
        url: 'mp3s/A Third Song.mp3',
        title: 'The Third Song',
        artist: 'Aaliyah'
      }
    ]);
    // playerView is created in AppView initialize
    // access with appView.playerView
    appView = new AppView({model: new AppModel({library: library})});
  });

  it('gets its model property set to any song that is played', function() {
    expect(appView.playerView.model).to.not.equal(library.at(0));
    library.at(0).play();
    expect(appView.playerView.model).to.equal(library.at(0));
  });

  describe('Song transitions', function() {
<<<<<<< HEAD
    it('dequeues a song when finished playing & plays the next song', function() {
=======

    it ('dequeues a song when finished playing & plays the next song', function() {
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff
      var firstSong = library.at(0);
      var secondSong = library.at(1);
      var thirdSong = library.at(2);
      var songQueue = appView.model.get('songQueue');
      // Set up a queue of three songs
      songQueue.add(firstSong);
      songQueue.add(secondSong);
      songQueue.add(thirdSong);
      // play the first song
      songQueue.playFirst();
      expect(appView.playerView.model).to.equal(firstSong);
      console.log(firstSong);
      // Simulate the end of the first song
      $(appView.playerView.el).trigger('ended');
      expect(appView.playerView.model).to.equal(secondSong);
      console.log(secondSong);
      // Simulate the end of the second song
      $(appView.playerView.el).trigger('ended');
      expect(appView.playerView.model).to.equal(thirdSong);
      console.log(thirdSong);
    });
  });

});
