/*global CurriculumVitae, $*/

console.time('test');

window.CurriculumVitae = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Config: {},
    init: function () {
        'use strict';

        this.Routers.AppRouter = new CurriculumVitae.Routers.CurriculumVitae();

        // CurriculumVitae.Routers.AppRouter.on('route:index', function (actions) {
        //     console.log(actions);
        // });

        var mainMenuView = new CurriculumVitae.Views.Menu();
        mainMenuView.render();

        console.trace();

        console.timeEnd('test');

        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';

    $.when(CurriculumVitae.Config.loadLocales())
        .done(function () {
            CurriculumVitae.init();
        });
});
