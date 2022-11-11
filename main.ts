let x = 0
input.onButtonPressed(Button.A, function () {
    x = input.lightLevel()
    basic.showNumber(x)
    if (x < 50) {
        led.setBrightness(255)
    } else if (x == 200) {
        led.setBrightness(0)
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
