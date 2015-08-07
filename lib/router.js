Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', function(){
  this.render('home');
},
{
    name: 'home',
    waitOn: function(){
      return [Meteor.subscribe('userData')];
    }
});


