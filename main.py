def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_ir_button_pressed():
    global switch_
    serial.write_value("x", 0)
    if makerbit.ir_button() == 160:
        switch_ = 1
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P0, 0)
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
    elif makerbit.ir_button() == 80:
        switch_ = 2
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.show_leds("""
            . # # # .
            # . . . #
            # . . . #
            . . # . #
            . # # # #
            """)
    elif True:
        pass
makerbit.on_ir_button(IrButton.ANY, IrButtonAction.PRESSED, on_ir_button_pressed)

switch_ = 0
switch_ = 1
makerbit.connect_ir_receiver(DigitalPin.P2, IrProtocol.KEYESTUDIO)
basic.show_leds("""
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    """)