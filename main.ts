let A = 0
let abietocerrado = 2
basic.forever(function () {
    if (abietocerrado == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            # . # . #
            . # . # .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . # . # .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        abietocerrado += 1
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        abietocerrado += 2
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    A = PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)
})
basic.forever(function () {
    if (A < 20) {
        neZha.stopAllMotor()
        basic.pause(100)
        neZha.setMotorSpeed(neZha.MotorList.M1, 0)
        neZha.setMotorSpeed(neZha.MotorList.M4, 20)
    } else {
        neZha.setMotorSpeed(neZha.MotorList.M1, 10)
        neZha.setMotorSpeed(neZha.MotorList.M4, 10)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        neZha.setMotorSpeed(neZha.MotorList.M2, -3)
        basic.pause(500)
        neZha.stopMotor(neZha.MotorList.M2)
    }
    if (input.buttonIsPressed(Button.B)) {
        neZha.setMotorSpeed(neZha.MotorList.M3, -3)
        basic.pause(500)
        neZha.stopMotor(neZha.MotorList.M3)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        neZha.setMotorSpeed(neZha.MotorList.M2, 3)
        basic.pause(500)
        neZha.stopMotor(neZha.MotorList.M2)
    }
    if (input.buttonIsPressed(Button.A)) {
        neZha.setMotorSpeed(neZha.MotorList.M3, 3)
        basic.pause(500)
        neZha.stopMotor(neZha.MotorList.M3)
    }
})
