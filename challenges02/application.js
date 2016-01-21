var Appointment = Backbone.Model.extend({
    defaults: function() {
        return {
        title: 'Checkup',
        date: new Date()
    }
    urlRoot: '/appointments',
}});

var appointment = new Appointment({id: 1});
appointment.on('change:cancelled', function(){
    alert('Your appointment has been cancelled.');
});
appointment.fetch();

appointment.set('cancelled', true);
appointment.save();

console.log(appointment.toJSON());
