if (Meteor.isClient) {

  Template.registerHelper("isLoggedIn", function(){
    if (Meteor.userId()){
      return true;
    } else {
      return false;
    }
  });

}
