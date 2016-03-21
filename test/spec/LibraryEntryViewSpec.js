describe('LibraryEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
    view = new LibraryEntryView({model: model});
    view.render();
  });

  // This spec passes already, but it's mutually exclusive with the one below.
  // Comment it out when implementing the song queue.
<<<<<<< HEAD
  // it ('plays clicked songs', function() {
  //   sinon.spy(SongModel.prototype, 'play');
=======

  xit  ('plays clicked songs', function() {
    sinon.spy(SongModel.prototype, 'play');
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff

  //   view.$el.children().first().click();
  //   expect(model.play).to.have.been.called;

  //   SongModel.prototype.play.restore();
  // });

<<<<<<< HEAD
  it('queues clicked songs', function() {
=======

  it ('queues clicked songs', function() {
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff
    sinon.spy(SongModel.prototype, 'enqueue');

    view.$el.children().first().click();
    expect(model.enqueue).to.have.been.called;

    SongModel.prototype.enqueue.restore();
  });

});
