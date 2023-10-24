/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Liya Getachew
 * Created on: Oct 2023
 * This program compares 2 random numbers from 0-99.
*/

basic.clearScreen()
basic.showIcon(IconNames.Heart)

// variables
let firstNumber = randint(0, 99)
let secondNumber = randint(0, 99)

// show 1st number
input.onButtonPressed(Button.A, function( ) {
  basic.clearScreen()
  basic.showString('#1 : ' + firstNumber)
})

// show 2nd number
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.showString('#2 : ' + secondNumber)
})

// compare both numbers
input.onGesture(Gesture.Shake, function() {
  if (firstNumber < secondNumber) {
    basic.showString(firstNumber + '<' + secondNumber)
  } else {
    basic.showString(firstNumber + '>' + secondNumber)
  }
})