describe('SongModel', function() {
  var model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'data',
      url: '/test/testsong.mp3',
      title: 'test song'
    });
    sinon.spy(model, 'trigger');
  });

  describe('play', function() {
    it('triggers a "play" event', function() {
      model.play();
      expect(model.trigger).to.have.been.calledWith('play', model);
    });
  });

<<<<<<< HEAD
  describe('enqueue', function() {
=======

  describe ('enqueue', function() {
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff
    it('triggers an "enqueue" event', function() {
      model.enqueue();
      expect(model.trigger).to.have.been.calledWith('enqueue', model);
    });
  });

<<<<<<< HEAD
  describe('dequeue', function() {
=======

  describe ('dequeue', function() {
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff
    it('triggers a "dequeue" event', function() {
      model.dequeue();
      expect(model.trigger).to.have.been.calledWith('dequeue', model);
    });
  });

<<<<<<< HEAD
  describe('ended', function() {
=======

  describe ('ended', function() {
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff
    it('triggers an "ended" event', function() {
      model.play();
      model.ended();
      expect(model.trigger).to.have.been.calledWith('ended', model);
    });
  });
});
