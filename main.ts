input.onButtonPressed(Button.A, function () {
	
})
makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    serial.writeValue("x", 0)
    if (makerbit.irButton() == 160) {
        switch_ = 1
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (makerbit.irButton() == 80) {
        switch_ = 2
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            . . # . #
            . # # # #
            `)
    } else if (makerbit.irButton() == 16) {
        switch_ = 3
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . # . .
            . # # # .
            `)
    }
})
let switch_ = 0
switch_ = 1
makerbit.connectIrReceiver(DigitalPin.P2, IrProtocol.Keyestudio)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
