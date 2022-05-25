radio.onReceivedNumber(function (receivedNumber) {
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(receivedNumber)
    }
})
let tenplnt = 0
radio.setGroup(20)
basic.forever(function () {
    tenplnt = input.temperature()
    tenplnt = tenplnt + 0
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(tenplnt)
    }
})
