define(["jquery"], function ($) {

    //Use strict
    //-------------------------------/
    var website = website || {}, fn = {};

    website.core = (function () {

        fn.page = {
            init: function () {
                console.log('app script: Loaded');
            }
        }

        return {
            run: function () {
                fn.page.init();
            }
        }

    }());

    $(function () {
        website.core.run();
    });

});
