// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

<<<<<<< HEAD
  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('remove', this.render, this);
    this.collection.on('add', this.render, this);

=======

  tagName: 'table',

  initialize: function() {
    this.collection.on('add remove', this.render, this);
    this.render();
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff
  },
  
  render: function() {
<<<<<<< HEAD
=======

    this.$el.children().detach();

    return this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
      }
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff

    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/


    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
    // return this.$el;
  }
});
