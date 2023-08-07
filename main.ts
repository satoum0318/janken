let dice: number[] = []
input.onButtonPressed(Button.A, function () {
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, 29)
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo2, 29)
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo3, 29)
    dice = [1, 2, 3]
    if (dice._pickRandom() == 1) {
        kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, 90)
        basic.pause(500)
    } else if (dice._pickRandom() == 2) {
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
