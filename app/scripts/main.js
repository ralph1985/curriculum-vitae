/*global CurriculumVitae, $*/


window.CurriculumVitae = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Config: {},
    init: function () {
        'use strict';

        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';

    CurriculumVitae.init();
});
