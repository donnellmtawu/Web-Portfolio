const words = [
"Software Developer",
"Web Developer",
"Cloud Computing Enthusiast",
"IT Graduate"
];

let wordIndex = 0;
let letterIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect(){

if(letterIndex < words[wordIndex].length){

typingElement.textContent += words[wordIndex].charAt(letterIndex);

letterIndex++;

setTimeout(typeEffect,100);

}
else{

setTimeout(deleteEffect,1500);

}

}

function deleteEffect(){

if(letterIndex > 0){

typingElement.textContent =
words[wordIndex].substring(0,letterIndex-1);

letterIndex--;

setTimeout(deleteEffect,50);

}
else{

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

setTimeout(typeEffect,300);

}

}

typeEffect();