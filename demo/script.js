can you apply those effects to this recorder
let player;

let reverb;
let button;
let roomSlider;
let wetMix;

let baseURL = "./";

/*Here is where we build our audio effect, and connect its output directly to the master output */
reverb = new Tone.JCReverb({
  roomSize: 0.8,
  wet: 0.5,
}).toDestination();

/* Here is where we build our Samplers and connect their outputs to the input of the audio effect. We do this using the .connect() method, and passing in the variable name of the effect we want to connect to*/

player = new Tone.Player(baseURL + "output.wav").connect(reverb);

function setup() {
  createCanvas(windowWidth, windowHeight);

  wetMix = createSlider(0, 1, 1, 0);
  wetMix.style("width", "200px");
  wetMix.position(width / 2 - 100, height / 2 + 80);

  roomSlider = createSlider(0, 1, 0.5, 0);
  roomSlider.style("width", "200px");
  roomSlider.position(width / 2 - 100, height / 2 + 170);

  button = createButton("Play Sound");
  button.position(width / 2 - 50, height / 2);
  button.mousePressed(play1);
}

function draw() {
  /*Avoiding putting any sound triggering functions in draw() for this example
   */

  reverb.wet.value = wetMix.value();
  reverb.roomSize.value = roomSlider.value();
  background(92, 173, 191);
  textFont("Helvetica");
  textSize(17);
  text("Reverb Example", width / 2, height / 2 - 100);

  textSize(10);
  fill("white");
  textAlign(CENTER);
  text(
    int(wetMix.value() * 100) + "% effected sound",
    wetMix.x + 100,
    wetMix.y - 10
  );
  textAlign(CENTER);
  text(
    "Room size parameter: " + roomSlider.value().toFixed(2) + "%",
    roomSlider.x + 100,
    roomSlider.y - 20
  );
}

function play1() {
  player.start();
}
-------------------recorder code---------------

"""
const recordAudio = () =>
  new Promise(async (resolve) => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];
    mediaRecorder.addEventListener("dataavailable", (event) => {
      audioChunks.push(event.data);
    });

    const start = () => mediaRecorder.start();

    const stop = () =>
      new Promise((resolve) => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          const play = () => audio.play();
          resolve({ audioBlob, audioUrl, play });
        });
        mediaRecorder.stop();
      });
    resolve({ start, stop });
  });

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

var record = true;

const startRecording = async () => {
  const recording = await recordAudio();
  const recorder = document.getElementById("recorder");
  recorder.disabled = true;
  recording.start();
  while (record == true) {
    await sleep(1);
  }
  const audio = await recording.stop();
  await sleep(2000);
  audio.play();
  recorder.disabled = false;
};

document.getElementById("recorder").addEventListener("click", (e) => {
  if (document.getElementById("recorder").classList.contains("recording")) {
    document.getElementById("recorder").classList.remove("recording");
    document.getElementById("recorder").classList.add("download");
    record = false;
    setTimeout(function () {
      document.getElementById("recorder").classList.remove("download");
      document.getElementById("recorder").classList.add("out");
    }, 1000);
  } else if (
    !document.getElementById("recorder").classList.contains("recording") &&
    !document.getElementById("recorder").classList.contains("download")
  ) {
    document.getElementById("recorder").classList.remove("out");
    document.getElementById("recorder").classList.add("recording");
    record = true;
    startRecording();
  }
});
"""