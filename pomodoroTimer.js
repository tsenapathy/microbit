
/*********************
  Pomodoro timer
  25 min cycle

***********************/

basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    for(let row = 0; row <= 4; row++) {
        for(let col = 0; col <= 4; col++) {
            basic.pause(1000)
            led.unplot(col, row)
        }
    }
})
