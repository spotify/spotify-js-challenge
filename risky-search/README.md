Risky search
============
![Spotify Logo](../resources/spotify-logo.png)

What could possibly go wrong with the following code, part of a client side search box?

**Points: 1**

Analyze the fragment of code that it's triggered when a user search music.
Tell us what problem can you identify, and how to solve it?

Client side code
================

```javascript
/**
 * Action triggered, when the user clicks on a search functionality,
 * that is linked with a text input box.
 *
 * @method onSearch
 * @public
 */
Spotify.UI.SearchBox.onSearch = function() {

    // We can get directly the search term from the input text or
    // from the url hash.
    // e.g https://what-can-possibly-go-wrong/#text-to-search
    var searchTerm = document.getElementById('search-text').value;
    if (searchTerm === '') {
        searchTerm = window.location.hash.substr(1);
    }

    Spotify.Ajax.call('./api/search-music.json?' + searchTerm).onCompleted(function(result) {
        var searchTitle = document.querySelector('.search-results-title');
        searchTitle.innerHTML = 'Search results for ' + searchTerm;
        Spotify.UI.SearchBox.renderResults(result);
    });

};
```
