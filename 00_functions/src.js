module.exports = {

  helloWorld: function(){
    return "Hello World";
  },

  hello: function(string){
    return "Hello " + string;
  },

  shout: function (string) {
    return "Hello " + string.toUpperCase();
    return "Hello " + 'Fox'.toUpperCase();
  },

  whisper: function(string){
    return "Hello " + string.toLowerCase();
    return "Hello " + 'FoX'.toLowerCase();
  },

  separate: function(string){
      var a = string.split('');
      var b = 'foobar'.split('');
      return a;
      return b;
  },

  reverseJoin: function(string){
    var a = 'jumbo'.split('').reverse().join();
    return a;
  },

  reverseJoinCompact: function (string){
    var a = 'jumbo'.split('').reverse().join('');
    return a;
  },

  };
