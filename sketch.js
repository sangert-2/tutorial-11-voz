/* eslint-disable no-undef, no-unused-vars */

// Variable donde se almacena el sintetizador de voz
let speech;

function setup() {
  createCanvas(250, 250);
  speech = new p5.Speech();
  speech.setLang("es");
  speech.setRate(1.3);
  speech.onLoad = function () {
    speech.listVoices();
    speech.setVoice("Google português do Brasil")
  };
}

function draw() {
  fill(0);
  noStroke();
  rect(0, 0, 250, 250);
  fill(255);
  textStyle(BOLD);
  textSize(95);
  text("ASM", 10, 150);
}

function mouseClicked() {
  speech.speak("Curso de Arquitectura de Sistemas Multimedia");
}