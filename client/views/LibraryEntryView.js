// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
<<<<<<< HEAD
      this.model.enqueue();
    }
=======

      this.model.enqueue();
          }
>>>>>>> a87e19cdba4dfd1e60c0a0503865a1dc8ca4b3ff
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
