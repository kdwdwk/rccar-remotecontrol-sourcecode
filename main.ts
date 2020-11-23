radio.setGroup(2)
basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        radio.sendNumber(1)
    } else {
        if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P1)) {
            radio.sendNumber(2)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else {
            if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P0)) {
                radio.sendNumber(3)
                basic.showLeds(`
                    . . # . .
                    . # . . .
                    # # # # #
                    . # . . .
                    . . # . .
                    `)
            } else {
                if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P1)) {
                    radio.sendNumber(4)
                    basic.showLeds(`
                        . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
                        `)
                } else {
                    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
                        radio.sendNumber(5)
                        basic.showLeds(`
                            # # # # .
                            # # . . .
                            # . # . .
                            # . . # .
                            . . . . #
                            `)
                    } else {
                        if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P1)) {
                            radio.sendNumber(6)
                            basic.showLeds(`
                                . # # # #
                                . . . # #
                                . . # . #
                                . # . . #
                                # . . . .
                                `)
                        } else {
                            if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P0)) {
                                radio.sendNumber(7)
                                basic.showLeds(`
                                    . . . . #
                                    # . . # .
                                    # . # . .
                                    # # . . .
                                    # # # # .
                                    `)
                            } else {
                                if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P1)) {
                                    radio.sendNumber(8)
                                    basic.showLeds(`
                                        # . . . .
                                        . # . . #
                                        . . # . #
                                        . . . # #
                                        . # # # #
                                        `)
                                } else {
                                    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P0)) {
                                        radio.sendNumber(9)
                                        basic.showLeds(`
                                            # # # # #
                                            # . . . #
                                            # . # . #
                                            . # # . #
                                            # # # . #
                                            `)
                                    } else {
                                        if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P1)) {
                                            radio.sendNumber(10)
                                            basic.showLeds(`
                                                # # # # #
                                                # . . . #
                                                # . # . #
                                                # . # # .
                                                # . # # #
                                                `)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
