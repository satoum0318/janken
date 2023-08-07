input.onButtonPressed(Button.A, function () {
    let dice = 0
    if (dice == 1) {
        kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, 90)
        basic.pause(500)
    } else if (0 == 0) {
        kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo2, 90)
        basic.pause(500)
    } else {
        kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo3, 90)
        basic.pause(500)
    }
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # .
        # . . . #
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C D E C D E F G ", 180), music.PlaybackMode.UntilDone)
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, 29)
    basic.pause(500)
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo2, 23)
    basic.pause(500)
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo3, 23)
    basic.pause(500)
    basic.showLeds(`
        # # # # .
        # . . . #
        # # # # .
        # . . . #
        # # # # .
        `)
})
basic.forever(function () {
	
})
