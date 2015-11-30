module.exports = {

  first: function(array) {
    return array[0];
  },

  last: function(array){
    return array[2];
  },

  empty: function(array){
    if(array.length === 0){
      return true;
    } else {
      return false;
    }
  }
}
