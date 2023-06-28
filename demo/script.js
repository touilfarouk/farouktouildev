/* PDM Course: Sound Unit

Example of Tone.js Reverb Effect

Code by Anthony T. Marasco [2018]
*/

let player;

let reverb;
let button;
let roomSlider;
let wetMix;

let baseURL = "https://s3-us-west-1.amazonaws.com/leesamples/samples/";

/*Here is where we build our audio effect, and connect its output directly to the master output */
reverb = new Tone.JCReverb({
  roomSize: 0.8,
  wet: 0.5,
}).toDestination();

/* Here is where we build our Samplers and connect their outputs to the input of the audio effect. We do this using the .connect() method, and passing in the variable name of the effect we want to connect to*/

player = new Tone.Player(
  baseURL + "Rhythmics/60+bpm/Ping+Pong+Ping.mp3"
).connect(reverb);

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
