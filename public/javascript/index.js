const video = document.querySelector('#video');
const p = document.querySelector('#canvas');
const snap = document.querySelector('#bild');

navigator.getMedia = (navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          navigator.msGetUserMedia);

navigator.getMedia( { video: true }, (stream) => {
  video.src = window.URL.createObjectURL(stream);
  video.play();
  },
  (err) => {
    console.error(err);
  }
);

// //variable --> hämtar från index.ejs
// const take_photo_btn = document.querySelector('#take-photo');

// //lyssnare om något händer och anropar funktionen.Skriver ut "take photo" när den aktiveras
// take_photo_btn.addEventListener("click", () => {
// 	console.log('take_photo')
// 	take_photo()

// })
// //funktion. gör något efter att den anropas, 
// const take_photo = () => {
	
// }

const takeSnapshot_btn = document.querySelector('#takeSnapshot');

takeSnapshot_btn.addEventListener("click", () => {
	console.log("Hejj")
	const img = takeSnapshot();
	console.log(snap)
	snap.setAttribute('src', img);
	snap.classList.add('visible');

})

const takeSnapshot = () => {

	const videoWidth = video.videoWidth;
	const videoHeight = video.videoHeight;

	console.log(videoWidth);
	console.log(videoHeight);

	console.log('funktion anropad')
	var p = document.getElementById("Canvas");
	var px = p.getContext("2d");
	var img = document.getElementById("video")

	p.width=videoWidth
	p.height=videoHeight

	px.drawImage(video, 0,0,videoWidth,videoHeight);
	return p.toDataURL("image/png")

}




