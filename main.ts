input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (S1 == 0) {
        S1 = 90
        for (let Index = 0; Index <= S1; Index++) {
            pins.servoWritePin(AnalogPin.P3, Index)
            basic.pause(50)
        }
    } else {
        S1 = 90
        for (let Index = 0; Index <= S1; Index++) {
            Winkel = S1 - Index
            pins.servoWritePin(AnalogPin.P3, Winkel)
            basic.pause(50)
        }
        S1 = 0
    }
})
let Winkel = 0
let S1 = 0
basic.showString("HI2")
S1 = 0
pins.servoWritePin(AnalogPin.P3, S1)
