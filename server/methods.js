Meteor.methods({
  getOrcidBio: function (orcid){
    console.log('getOrcidBio called for ORCID / access_token: ' + orcid + ' / ' + Meteor.user().services.orcid.accessToken);
    try {
        return HTTP.get('http://pub.orcid.org/' + orcid + '/orcid-bio', {
            headers: {
                      /*'Authorization': 'Bearer ' + Meteor.user().services.orcid.accessToken, */
		      'Content-Type': 'application/vdn.orcid+xml'}
        });
    } catch (err) {
        throw new Error('Failed to fetch orcid-bio from ORCID. ' + err.message,
            {response: err.response});
    }
  },
  getOrcidWorks: function (orcid){
    console.log('getOrcidWorks called for ORCID / access_token: ' + orcid + ' / ' + Meteor.user().services.orcid.accessToken);
    try {
        return HTTP.get('http://pub.orcid.org/' + orcid + '/orcid-works', {
            headers: {
		      /*'Authorization': 'Bearer ' + Meteor.user().services.orcid.accessToken,*/
                      'Content-Type': 'application/vdn.orcid+xml'}
        });
    } catch (err) {
        throw new Error('Failed to fetch orcid-works from ORCID. ' + err.message,
            {response: err.response});
    }
  },
  getOrcidProfile: function (orcid){
    console.log('getOrcidProfile called for ORCID / access_token: ' + orcid + ' / ' + Meteor.user().services.orcid.accessToken);
    try {
        return HTTP.get('http://pub.orcid.org/' + orcid + '/orcid-profile', {
            headers: {
		      /*'Authorization': 'Bearer ' + Meteor.user().services.orcid.accessToken,*/
                      'Content-Type': 'application/vdn.orcid+xml'}
        });
    } catch (err) {
        throw new Error('Failed to fetch orcid-profile from ORCID. ' + err.message,
            {response: err.response});
    }
  },
  getSearchResults: function (searchTerm){
    console.log('getSearchResults called for ' + searchTerm + ' with access_token: ' + Meteor.user().services.orcid.accessToken);
    try {
        return HTTP.get('http://pub.orcid.org/search/orcid-bio/?rows=100&q=' + searchTerm, {
            headers: {'Authorization': 'Bearer ' + Meteor.user().services.orcid.accessToken,
                      'Content-Type': 'application/xml'}
        });
    } catch (err) {
        throw new Error('Failed to fetch orcid-profile from ORCID. ' + err.message,
            {response: err.response});
    }
  }
});
