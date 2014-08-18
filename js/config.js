// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
        'common': 'common/',
        'plugins': 'plugins/',
        'app': '../app'
    }
});

// Load the main app module to start the app
requirejs([
    'common/jquery',
    'common/modernizr',
    'app/main'
], function () {
    website.core.run();
});