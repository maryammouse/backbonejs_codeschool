var Appointment = Backbone.Model.extend({});
var AppointmentList = Backbone.Collection.extend({
    model: Appointment,
    url: '/appointments'
});


var appointments = new AppointmentList();

appointments.on('reset', function(){
    alert(this.length);
});

appointments.on('add', function(appointment) {
    console.log(appointment.get('title'));
});


var json = [
  {title: 'Back pain'},
  {title: 'Dry mouth'},
  {title: 'Headache'}
];

appointments.fetch({silent: true});

var titles = appointments.map(function(appointment) {
    return appointment.get('title');
});
