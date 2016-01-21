// Challenge 01-02

var AppointmentView = Backbone.View.extend({
    tagName: 'li',
    className: 'appointment'
});


// Challenge 03-

var AppointmentView = Backbone.View.extend({
      template: _.template('<span><%= title %></span>'),
      events: {
          "dblclick span" : "alertTitle"
      },

      alertTitle: function() {
        alert(this.model.get('title'));
      },

    render: function(){
        var attributes = this.model.toJSON();
        this.$el.html(this.template(attributes));
  }
});

