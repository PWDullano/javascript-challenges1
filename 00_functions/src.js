module.exports = {

  helloWorld: function(){
    return "Hello World";
  },

  hello: function(string){
    return "Hello " + string;
  },

  shout: function (string) {
    return "Hello " + string.toUpperCase();
  },

  whisper: function(){
    return "Hello " + 'Frog'.toLowerCase();
  },

  separate: function(){
      var a = "jumbo".split('');
      return a;
  },

  reverseJoin: function(){
    var a = 'jumbo'.split('').reverse().join();
    return a;
  },

  };
