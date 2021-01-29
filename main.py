basic.show_string("hi I am bob the the dancing robot")
basic.show_icon(IconNames.STICK_FIGURE)
for index in range(2):
    basic.show_leds("""
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        # . . . #
        """)
    basic.show_leds("""
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . . #
        """)
    basic.show_leds("""
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        # . . # .
        """)
    basic.show_leds("""
        . . # . #
        . # # # .
        # . # . .
        . # . # .
        . # . . #
        """)
    basic.show_leds("""
        # . # . .
        . # # # .
        . . # . #
        . # . # .
        # . . # .
        """)