# IBM Flickr

## A simple app grabing the IBM Flickr images using the Flickr API

This project took on a number of different incarnations. At first I tried to build it in Angular, which ended up being more of a struggle than I anticipated. It would work about half the time and the other half it wouldn't load the data from the API into the controller. I did learn a lot about setting up an Angular app though, and next time I try to build one I will not use an outside API. Just get used to building with my own data.

So after a few different Angular attempts I went back to what I know. An AJAX request for the data and rendering it with jQuery.

One of the big things I had to get familiar with while trying out Angular was a build system, which is not something I had had to use before. So I figured out how to use Gulp with Sass and Auto-Prefixer. That was probably one of the biggest things I will take away from this exercise.

In terms of the app logic I decided to go with fairly simple filters. I was debating whether or not to make them more complicated, but a lot of the complications would have relied on my hard coding keywords that might not have applied to future images that were added to Flickr by IBM. So I wanted to keep things as future proof as possible right off the bat with the possility of expanding upon them later.

In order to make the site responsive I worked with flexbox. I wanted to keep the code as simple as possible and not add any code that I would not use, so a framework seemed like a bit of overkill.

The app is live at www.arthur-wright.com/ibm

If you have any questions please do not hesitate to ask.