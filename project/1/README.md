# Responsive Images: 1 #

With one simple change, layout now responds to viewport size: `img: max-width: 100%` is your friend! Check in emulation mode from the Dev Tools: the page looks pretty good on a variety of devices.

To reiterate, `img: max-width: 100%` means 'expand the image display size to fit the element that contains it, but no larger than the natural width of the image'.

## To do ##

* Page weight is no better. Open the page with the Dev Tools, open the Network panel, check Disable cache and reload – all those images add up to over 3MB. What kind of compromise should you make? Save images smaller or with lower quality? Display images smaller?
* Layout still needs to be improved. There's not enough whitespace: no 'air' around the text and the images. In a larger window, reading is difficult because lines of text are very wide.

