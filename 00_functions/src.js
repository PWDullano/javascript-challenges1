module.exports = {

  helloWorld: function(){
    return "Hello World";
  },

  hello: function(string){
    return "Hello " + string;
  },

  shout: function() {
    return "Hello " + 'Frog'.toUpperCase();
  },

  whisper: function(){
    return "Hello " + 'Frog'.toLowerCase();
  },

  separate: function(){
      var a = "jumbo".split('');
      return a;
  },

  };
