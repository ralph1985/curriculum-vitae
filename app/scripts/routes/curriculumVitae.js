/*global CurriculumVitae, Backbone*/

CurriculumVitae.Routers = CurriculumVitae.Routers || {};

(function () {
    'use strict';

    CurriculumVitae.Routers.CurriculumVitae = Backbone.Router.extend({
        routes: {
            '': 'index',
            'profile': 'profile',           // #profile
            'job/:jobId': 'job',            // #mo2o
            'job/:jobId/:projectId': 'job'  // #mo2o/iberostar
        },
        index: function () {
            // debugger;
        },
        profile: function () {
            // debugger;
        },
        job: function (jobId, projectId) {
            // debugger;
        }
    });

    CurriculumVitae.Routers.AppRouter = new CurriculumVitae.Routers.CurriculumVitae;

    CurriculumVitae.Routers.AppRouter.on('route:index', function (actions) {
        // debugger;
        // alert(actions);
    });

    Backbone.history.start();

})();
