var Record = function(artist, title, genre, price) {
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
  this.properties = function(){
    return `${this.title} by ${this.artist} costs £${this.price}, and is of the ${this.genre} genre`;
  };
};

module.exports = Record;
