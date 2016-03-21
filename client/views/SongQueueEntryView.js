// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
<<<<<<< HEAD
=======

>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
<<<<<<< HEAD
      this.render();
      console.log('helllooooo');
=======
      this.model.dequeue();
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
<<<<<<< HEAD
});
=======

  });
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff
