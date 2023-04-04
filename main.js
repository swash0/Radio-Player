'use strict';

const datas = [
  {
    url: "http://streaming.softnep.net:8037/;stream.nsv&type=mp3",
    name: "Capital FM"
  },
  {
    url: "http://streaming.softnep.net:8115/;stream.nsv&type=mp3",
    name: "Radio Sarangi Morang"
  },
  {
    url: "http://streaming.softnep.net:8091/;stream.nsv&type=mp3",
    name: "Radio Annapurna Nepal"
  },
  {
    url: "http://stream.zenolive.com/2w81t82wx3duv",
    name: "Radio Audio "
  },
  {
    url: "http://streaming.softnep.net:8139/;stream.nsv&type=mp3",
    name: "Radio Makwanpur Gorkha"
  },
  {
    url: "http://streaming.softnep.net:8141/;stream.nsv&type=mp3",
    name: "Radio Myagdi Kali"
  },
  {
    url: "http://streaming.softnep.net:8003/;stream.nsv&type=mp3",
    name: "Butwal FM"
  },
  {
    url: "http://streaming.softnep.net:8065/;stream.nsv&type=mp3",
    name: "Unique FM Rukum"
  },
  {
    url: "http://streaming.softnep.net:8103/;stream.nsv&type=mp3",
    name: "Afno FM Okhaldhunga"
  },
  {
    url: "http://streaming.softnep.net:8051/;stream.nsv&type=mp3",
    name: "Radio Melamchi"
  },
  {
    url: "http://streaming.softnep.net:8091/;stream.nsv&type=mp3",
    name: "Citizen FM",
    image: "http://radio.nepal.fm/wp-content/uploads/Citizen-FM.jpg"
  }
];

const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const audioImg = document.querySelector('.audio-img');
const audioTitle = document.querySelector('.audio-title');
const audioPlayer = document.querySelector('.audio');
const playPauseBtn = document.querySelector('.play-pause');

let count = 0;

const renderChannel = () => {
  audioTitle.textContent = datas[count].name;
  audioImg.src = datas[count].image || 'radioimage.jpg';
  audioPlayer.src = datas[count].url;
  audioPlayer.play();
};

renderChannel();

const updateChannel = (offset) => {
  count += offset;
  if (count < 0) {
    count = datas.length - 1;
  } else if (count >= datas.length) {
    count = 0;
  }
  renderChannel();
  playPauseBtn.classList.remove('change-to-pause');
};

nextBtn.addEventListener('click', () => {
  updateChannel(1);
});

previousBtn.addEventListener('click', () => {
  updateChannel(-1);
});

playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.classList.remove('change-to-pause');
  } else {
    audioPlayer.pause();
    playPauseBtn.classList.add('change-to-pause');
  }
});
