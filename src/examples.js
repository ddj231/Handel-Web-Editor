export const Examples = {
    generative: `start
	save chords = |C3, E3, G3| G3, B3, D3| F3, A3, C3
    save notes = A3, B3, C3, D3, E3, F3, G3
    
    chunk backing 
    	block
        	play choose 1 from chords for 2b
        endblock loop for 4 
    endchunk
    
    chunk melodyline
    	block
        	play choose 1 from notes for 1b 
        endblock loop for 8 
    endchunk
    
    run backing with sound piano, loop for 30, volume 45
    run melodyline with sound piano, loop for 30, volume 45 
finish
    `,
    beethoven: `start
	chunk beethovenhelper
   		play G3 for 1b loop for 3
   		play Eb3 for 4b
   		play F3 for 1b loop for 3
   		play D3 for 4b
        play G#3 for 1b loop for 3
        play G3 for 1b
        play D#4 for 1b loop for 3
        play C3 for 4b
        play G#3 for 1b loop for 3
        play G3 for 1b
        play F4 for 1b loop for 3
        play D4 for 4b
        block
            play G3 for 1b loop for 2
            play F3 for 1b 
            play D#3 for 4b 
        endblock loop for 3
        play C3, D#3, F#3 for 4b
        play D3, G3 for 4b
    endchunk
    
    chunk beethoven
    	rest for 2b
        call beethovenhelper
	endchunk

	run beethoven with sound piano, bpm 300, loop for 2
finish`,
    major: `start
    chunk shiftscale using startnote
        save mynote = startnote
        block
            play mynote for 1b
            update mynote rshift 2
        endblock loop for 3
        update mynote lshift 1
        block
            play mynote for 1b
            update mynote rshift 2
        endblock loop for 4
        update mynote lshift 1
        play mynote for 1b
    endchunk
    save startnote = Bb2
    run shiftscale using startnote with sound piano, loop for 3
finish`,
    generativeSecond: `start
	save notes = F3, G3, Ab3, Bb3, C3, Db3, Eb3
	chunk example
    	save i = 0
    	block
        	save choice = choose i % 6 from notes
            update i = eval i + 1
       		play choice for 1b
        endblock loop while i < 100
    endchunk
    run example with sound piano, volume 45
finish`
}