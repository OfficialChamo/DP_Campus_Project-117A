input.onButtonPressed(Button.A, function () {
    basic.showNumber(game.score())
})
input.onGesture(Gesture.LogoUp, function () {
    Index = randint(0, text_list.length - 1)
    basic.showString("" + (text_list[Index]))
})
input.onGesture(Gesture.ScreenUp, function () {
    list += -1
    basic.showIcon(IconNames.No)
    if (Index < 0) {
        basic.showString("Game Over Press B to Restart")
    }
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
input.onButtonPressed(Button.B, function () {
    game.setScore(0)
    Life = 3
})
let list = 0
let Index = 0
let Life = 0
let text_list: string[] = []
text_list = [
"Apple",
"Orange",
"Mango",
"Banana",
"Pineapple",
"Grapes",
"Water Melon",
"Avacado",
"Starfruit",
"Stroberi"
]
Life = 3
game.setScore(0)
