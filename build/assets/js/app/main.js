//Use strict
//-------------------------------/

var website = website || {};

website.core = (function () {

    var page = {
        init: function () {
            console.log('app script: Loaded');
        }
    };

    return {
        run: function () {
            page.init();
        }
    };

}());

$(document).ready(function() {
    website.core.run();
});
