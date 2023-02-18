let READING = 0
basic.forever(function () {
    READING = input.lightLevel()
    led.plotBarGraph(
    READING,
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(READING)
    }
})
