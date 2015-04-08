# jquery.filterSearch
Simple jQuery search filter plugin.

    $('input#mysearchfield').filterSearch('ul#mystufftosearch', callback);
Entering "foo bar" into search box will then hide all results that contain neither "foo" nor "bar", then 'callback' will be called.

    $('input#mysearchfield').filterSearch('ul#mystufftosearch', timeout);
Entering "foo bar" into search box will then hide all results that contain neither "foo" nor "bar", once the timeout period has elapsed without further keypresses.

    $('input#mysearchfield').filterSearch('ul#mystufftosearch', timeout, callback);
Combination of the above; waits for timeout, then also calls callback.