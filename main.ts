let Lukket = false
input.onButtonPressed(Button.A, function () {
    Lukket = false
})
input.onButtonPressed(Button.B, function () {
    Lukket = true
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P0) && Lukket == true) {
        while (tinkercademy.PIR(DigitalPin.P0) && Lukket == true) {
            music.playMelody("C D E F G A B C5 ", 1300)
        }
    }
})
