Top 50 tracks
=============
![Spotify Logo](../resources/spotify-logo.png)

Generate a top 50 track list, sorted by popularity, in real time.

**Points: 4**

Add the necessary code to the file [toplist.js](./toplist.js) so that the top 50 list sorted by popularity is updated in realtime whenever the embedded iframe sends a track to its parent container.

[index.html](./index.html) contains an iframe that periodically emits messages with tracks information to its parent using postMessage (https://developer.mozilla.org/en-US/docs/Web/API/window.postMessage).

You must:

1) Implement ```Spotify.TopList.listenForIncomingMessages``` so that whenever a message is received from the iframe the ```Spotify.TopList.handleIncomingTrack``` method is called with a ```Spotify.Track``` object. You can create a ```Spotify.Track``` object from a message using the constructor in [track.js](./track.js).

2) Implement ```Spotify.TopList.handleIncomingTrack``` and ```Spotify.TopList.insertTrack``` so that whenever a track is received, it's inserted in the top 50 list if necessary. Use ```Spotify.TopList.toHTMLElement``` to generate the element to be inserted. The list must be sorted by popularity and contain 50 tracks maximum. The list must not contain repeated tracks.

Strive for an optimal solution.