function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    // if the key press does not correspond to an audio file, exit the funciton
    if(!audio) return; 
    console.log(`audio: ${audio}`);
    
    // reset the audio file to the beginning
    audio.currentTime = 0; 
    audio.play();
    console.log(`key: ${key}`);
    
    // add the class for styling
    key.classList.add('playing');
}

function removeTransition(event) {
    console.log(`event: ${event}`);
    
    // if the transition is not 'transform', end
    if (event.propertyName !== 'transform') return;
    console.log(`property name: ${event.propertyName}`);

    // this is equal to whatever was called against it (the key)
    console.log(`this: ${this}`);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);