## Test Node.js id3 library speeds

The current libraries I am testing are:

[musicmetadata](https://github.com/leetreveil/musicmetadata) - leetreveil's fork (currently active)

- Reads all data + images
- Mostly implemented support for duration support
- at the time of writing, 1 open issue. Last commit less than a day ago

[node-taglib](https://github.com/nikhilm/node-taglib) - by nikhilm.

- Reads metadata and normalises (no image support)
- Write support for metadata read
- Song length is calculated and is present on every song
- at the time of writing, 13 open issues. Last commit a month ago

[id3js](https://github.com/43081j/id3) - by 43081j

- Read support including image reading
- No duration support
- at the time of writing, 3 open issues. Last commit 10 days ago

If I have left out your library please let me know in an issue.
### Rules for libraries to qualify:
- Must be native JS or of comparable speed (i.e. node-taglib). Libraries that execute external programs will not be included.
- Library must be available through npm

### Song Credit - Social Club
The song I used for testing contained all the basic attributes as well as being freely available from the [Social Club website](http://martymar.goodcitymusic.com/album/misfit-b-sides)

Its details:
```
Title: Hawaiian Punch
Artist: Social Club
Album: MISFIT B-Sides
Year: 2012
Cover art: Present
```