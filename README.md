# jquery.filterSearch

Simple jQuery 'inclusive OR' search filter plugin. Requires jQuery, obvs. Probably fine with all versions of jQuery but let me know if not!

##Usage:

    $(searchBoxElement).filterSearch($(listElement), optionalTimeout, optionalCallback);
    
If you opt for a callback but no timeout it will still work without you having to put a zero timeout value.

##Examples:

###HTML Markup

    <input id="mysearchfield" placeholder="Type to filter">
    <ul id="mystufftosearch">
        <li>a 1</li>
        <li>a 2</li>
        <li>a 3</li>
        <li>b 1</li>
        <li>b 2</li>
        <li>b 3</li>
        <li>c 1</li>
        <li>c 2</li>
        <li>c 3</li>
    </ul>
    <script src="path/to/jquery.filterSearch.js" type="text/javascript"></script>
    
###JavaScript code

####Example A

        $('input#mysearchfield').filterSearch('ul#mystufftosearch');

Once initialised like this, entering "c 2" into search box will then hide all results that contain neither "c" nor "2", leaving the following results visible:

        a 2
        b 2
        c 1
        c 2
        c 3
    
####Example B

    $('input#mysearchfield').filterSearch(
            'ul#mystufftosearch',
            function() { 
                alert("it werks!");
            }
        );
    
As above, but after each change to the contents of the search box the "alert('...')" callback will be called.

####Example C

        $('input#mysearchfield').filterSearch('ul#mystufftosearch', 500);
    
Entering "c 2" into search box will then hide all results that contain neither "c" nor "2", once the timeout period of 500ms has elapsed without any further keypresses. This minimises the load on the browser as it only does the filtering once you stop typing for a moment as opposed to after every single keypress. In turn, as long as you find the ideal timeout value it can make the filter feel much more responsive to the end-user.

####Example D

        $('input#mysearchfield').filterSearch(
            'ul#mystufftosearch',
            500,
            function() {
                alert("it werks with timeout too!");
            }
        );
    
Combination of the above; waits for timeout, filters list data, then also calls 'alert' callback.
