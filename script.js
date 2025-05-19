const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

let isPlaying = false;
let currentTrack = 0;

const songs = [
  { title: "Song One", artist: "Artist A", file: "songs/song1.mp3" },
  { title: "Song Two", artist: "Artist B", file: "songs/song2.mp3" },
  { title: "Song Three", artist: "Artist C", file: "songs/song3.mp3" }
];

function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.file;
}

function playPause() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
  }
}

function nextSong() {
  currentTrack = (currentTrack + 1) % songs.length;
  loadSong(currentTrack);
  audio.play();
  isPlaying = true;
}

function prevSong() {
  currentTrack = (currentTrack - 1 + songs.length) % songs.length;
  loadSong(currentTrack);
  audio.play();
  isPlaying = true;
}

// Load the first song on page load
loadSong(currentTrack);
