# Responsive Images: 2 #

In this version all the content is in an article element with `max-width: 50em`. 50em means 50 times the font size. In Chrome the default size for an article element is 16px, so the max width of the article is 800px. Try experimenting with other values.

Em values are used in case you decide to change the font size. A bigger font size would mean fewer words per line. This in turn would mean that the line width (in typographic terms, the 'measure') could be bigger. Vice versa for smaller font sizes – give it a try!

Now you know the maximum display width of the images, you can figure out what size to save them. Images will never be shown larger than 800px wide, so on a 2x display the maximum pixel width required will be 2 x 800 = 1600px. If you plan to optimize for 2x and less, that means you can reduce the saved size of several of the images.

The Volt photo, for example, was over 3000px wide – a lot of wasted pixels. Even the grasshopper was a bit bigger than necessary: 1944 x 2592px. That may not sound like much, but cutting the width to 1600px results in a surprisingly large reduction in the number of pixels. (Try working it out!) Especially on a slow connection, for a site with a lot of images, this will make a significant difference.

As for quality – only you can decide... How low can you go?

By reducing image widths to 1600px and saving at the lowest possible quality, total page weight is now reduced from 3.1MB to 1.3MB. Turning on DSL throttling in Dev Tools emulation mode, shows page load time reduced from over 12 seconds to less than 6.

## Problems ##

* The images don't have any captions. What's the right way to add these?
