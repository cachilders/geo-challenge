# Challenge results

Okie doke. Here's my pass at the challenge below.

Run it locally with `npm i && npm start` followed by pointing your browser to `localhost:8888`.

Another option is to simply point your browser to [this deployment](http://geo-challenge.herokuapp.com). It may take a sec to spin up.

This implementation is by no means perfect. It processes the distance for every available location from the target (thanks Pythagoras!) and sorts them all in kind. Given more available time I'd tighten that leak. Additionally, I'd do a bit more with validation and error-handling. That said, the MapBox API by which I'm snagging the coordinates is mighty generous in interpreting input.

# ---

## Coding challenge

In this repo there is store-locations.csv

This is a tabular dataset of the locations of every store of a major national retail chain.

## Deliverables

You can either fork this repo OR just download the file and you can create your own repo.

Then, write a script or application that, given a reasonably well-formed address string like:

1770 Union St, San Francisco, CA 94115

Returns the address of the geographically closest store from the dataset.

Also please write up a paragraph or two about how your solution works, any assumptions you made, or caveats about your implementation, and put it in this readme file.

Send me a github link to the final project.

## Notes

Feel free to do this in whatever language you would like, and focus on the problem itself; the way data gets input into the program is not important. Command line, GUI application, or even editing an obvious variable at the top of a file. Whatever. As long as it's reasonably easy for me to run your code and there are clear instructions for doing so.

You might need to use external APIs or services to get a working solution. That's fine. Also fine to make it work entirely offline. To the extent you need any algorithms, I'm obviously not expecting you to reinvent anything from scratch, so use Google judiciously, as well as any libraries you find.

If you do add cool polish or go above an beyond in some way, feel free, but *by far the most important thing is delivering working software that solves the problem of finding the closest location of this store*.

I know which one is closest to my house, and the first thing I'll do is verify that it returns the address I expect.

I'm hoping this will take well under 2 hours; I did it in a language I know well and (with about 12 tabs open and tons of google searching) got a rough implementation working very quickly.

There are a ton of different ways to do this -- be creative!
