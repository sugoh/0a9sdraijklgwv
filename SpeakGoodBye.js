// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2

(function (window) {
  let speakWord = "Good Bye";
  let byeSpeaker = {
    speak: function (speakerName) {
      console.log(speakWord + " " + speakerName);
    },
  };
  window.byeSpeaker = byeSpeaker;
})(window);
