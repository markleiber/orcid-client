Template.home.helpers({
    count: function(){
        return Meteor.users.find({}).count();
    }
});

Template.home.events({
  'click .orcidbio': function (event){
    $('.apiresults').val('Loading...');
    Meteor.call('getOrcidBio', Meteor.user().services.orcid.id, function (error, result){
      if (error){
        $('.apiresults').val(error);
      } else {
        $('.apiresults').val(result.content);
      } 
    });
  },
  'click .orcidworks': function (event){
    $('.apiresults').val('Loading...');
    Meteor.call('getOrcidWorks', Meteor.user().services.orcid.id, function (error, result){
      if (error){
        $('.apiresults').val(error);
      } else {
        $('.apiresults').val(result.content);
      }
    });
  },
  'click .orcidprofile': function (event){
    $('.apiresults').val('Loading...');
    Meteor.call('getOrcidProfile', Meteor.user().services.orcid.id, function (error, result){
      if (error){
        $('.apiresults').val(error);
      } else {
        $('.apiresults').val(result.content);
      }
    });
  },
  'click .orcidsearch': function (event){
    $('.apiresults').val('Loading...');
    Meteor.call('getSearchResults', $('.orcidsearchterm').val(), function (error, result){
      if (error){
        $('.apiresults').val(error);
      } else {
        $('.apiresults').val(result.content);
      }
    });
  }
});
