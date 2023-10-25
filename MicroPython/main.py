"""
Created by: Liya Getachew
Created on: Oct 2023
This module is a Micro:bit MicroPython program compares 2 random numbers from 0-99.
"""

from microbit import *
from random import *

# variables
first_number = randint(0, 99)
second_number = randint(0, 99)

display.clear()
display.show(Image.DUCK)

while True:
    # show 1st number
    if button_a.is_pressed():
        display.clear()
        display.scroll("#1 : " + str(first_number))

    # show 2nd number
    if button_b.is_pressed():
        display.clear()
        display.scroll("#2 : " + str(second_number))

    # compare both numbers
    if accelerometer.was_gesture("shake"):
        display.clear()
        if first_number < second_number:
            display.scroll(str(first_number) + " < " + str(second_number))
        else:
            display.scroll(str(first_number) + " > " + str(second_number))
        display.show(Image.SILLY)
