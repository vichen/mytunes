describe('SongQueueView', function() {
  var view, fakeSongs;

  beforeEach(function() {
    fakeSongs = new SongQueue([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title: 'test song'
      },
      {
        artist: 'data',
        url: '/test/testsong2.mp3',
        title: 'test song 2'
      }
    ]);
  });

<<<<<<< HEAD
  it('creates SongQueueEntryViews for each queued song & renders them', function() {
=======

  it ('creates SongQueueEntryViews for each queued song & renders them', function() {
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff
    sinon.spy(SongQueueEntryView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.render();
    expect(SongQueueEntryView.prototype.render).to.have.been.called;
  });

<<<<<<< HEAD
  it('renders when add or remove event fires from the song queue collection', function() {
=======

  it ('renders when add or remove event fires from the song queue collection', function() {
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff
    sinon.spy(SongQueueView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.collection.add({
      artist: 'data',
      url: '/test/testsong3.mp3',
      title: 'test song 3'
    });
    view.collection.pop();
    expect(view.render).to.have.been.called;
  });

});
