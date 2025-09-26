input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(somar, cont)
            basic.pause(1000)
            somar += 1
        }
        cont += 1
        somar = 0
    }
})
let cont = 0
let somar = 0
somar = 0
cont = 0
basic.clearScreen()
