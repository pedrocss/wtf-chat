ENTER_KEY = 13;
Messages = new Meteor.Collection('messages');

if (Meteor.isClient) {
  Template.messages.messages = function(){
    return Messages.find();
  };

  Template.messageForm.events = {
    "keydown #message": function(event){
      if(event.which == ENTER_KEY){
        var name = document.getElementById('name');
        var message = document.getElementById('message');

        if(name.value != '' && message.value != ''){
          Messages.insert({
            name: name.value,
            message: message.value,
            datetime: new Date()
          });

          name.value = '';
          message.value = '';
        }
      }
    }
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
