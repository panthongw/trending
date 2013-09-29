if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to trending.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

var Twit = require('twit');

var T = new Twit({
    consumer_key:         'D20IkHAHTcjfmPXJt3qHg'
  , consumer_secret:      'zOd2yrX5mTP6b5QDihkh8l7qLWFh5mjlgMtneePA'
  , access_token:         'testyahoo'
  , access_token_secret:  'testyahoosecret'
});

T.get('/trends/place', { id: '2464592' }, function (err, reply) {
console.log(reply);
});

  });
}

