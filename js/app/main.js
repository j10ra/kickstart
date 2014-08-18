
//Use strict
//-------------------------------/
var website = website || {}, fn = {};

website.core = (function () {

    fn.page = {
        init: function () {
            console.log('app script: Loaded');
            if (window.jQuery) {
                console.log('jquery: Loaded');
            }
        }
    }

    return {
        run: function () {
            fn.page.init();
        }
    }

}());
