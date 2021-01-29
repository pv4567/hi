basic.showString("hi I am bob the the dancing robot")
basic.showIcon(IconNames.StickFigure)
for (let index = 0; index < 2; index++) {
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . . #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        # . . # .
        `)
    basic.showLeds(`
        . . # . #
        . # # # .
        # . # . .
        . # . # .
        . # . . #
        `)
    basic.showLeds(`
        # . # . .
        . # # # .
        . . # . #
        . # . # .
        # . . # .
        `)
}
