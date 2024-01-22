// do not change the code below
class Album {
  constructor(title, artist, releaseYear) {
    this.title = title;
    this.artist = artist;
    this.releaseYear = releaseYear;
  }

  playSong(songName) {
    console.log(`Now playing "${songName}" by ${this.artist} from ${this.title} ${this.releaseYear} album`);
  }
}

// albumController.js
// Album model imported
// write your code below

const alb = new Album("The Contest Between Harmony and Invention", "Vivaldi", 1725)
console.log(alb.title)
console.log(alb.artist)
console.log(alb.releaseYear)
alb.playSong("Four Seasons")