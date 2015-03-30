# jquery.filterSearch
Simple jQuery search filter plugin.

    $('input#mysearchfield').filterSearch('ul#mystufftosearch', callback);

Entering "foo bar" into search box will then hide all results that contain neither "foo" nor "bar", then 'callback' will be called.
