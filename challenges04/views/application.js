var AppointmentView = Backbone.View.extend({
  template: _.template('<span class="<% if(cancelled) print("cancelled") %>">' +
                        '<%= title %></span>' +
                        '<a href="#">x</a>'),

  events:  { "click a": "cancel" },
  initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
  },
  remove: function() {
      this.$el.remove();
},
  cancel: function(){
    this.model.cancel();
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});
