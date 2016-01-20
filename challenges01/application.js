var Appointment = Backbone.Model.extend({});

var appointment = new Appointment();
appointment.set('title', 'My Backbone Hurts');

var AppointmentView = Backbone.View.extend({
    render: function(){
        var html = '<li>' + this.model.get('title') + '</li>';
        $(this.el).html(html);
    }
});

var view = new AppointmentView({model: appointment});

appointmentView.render();
$('#app').html(appointmentView.el);
