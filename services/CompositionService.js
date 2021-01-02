export class Composition {
    constructor(synth, bpm){
        this.synth = synth;
        this.bpm = bpm;
        this.playEvents = [];
        this.currentTime = 0;
        // Create Part
        this.part = new Tone.Part((time, value) => {
		    this.synth.triggerAttackRelease(value.note, value.length, time);
        });
    }

    configurePart(playEvents){
        for(let playEvent of playEvents){
            if(playEvent.note !== 'X'){
                this.part.add({note: playEvent.note, time: this.currentTime, length: playEvent.length});
            }
            this.currentTime += new Tone.Time(playEvent.length);
        }
    }

    configureLoop(times){
        this.part.loopStart = 0;
        this.part.loopEnd = this.currentTime;
        this.part.loop = times;
    }

    play(){
        Tone.Transport.bpm.value = this.bpm;
        this.part.start();
        Tone.Transport.start();
    }

}

export class PlayEvent {
    constructor(note, length){
        this.length = length;
        this.note = note
    }
}