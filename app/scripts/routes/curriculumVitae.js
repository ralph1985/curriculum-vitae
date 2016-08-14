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

        $container: $('#primary-content'),

        initialize: function () {

            this.collection = new CurriculumVitae.Collections.CurriculumVitae();
            this.collection.fetch({ajaxSync: false});

            // APP.helpers.debug(this.collection);

            // this.index();

            // start backbone watching url changes
            Backbone.history.start();

        },

        index: function () {
            // debugger;

            // this.$el.html(
            //     this.template({notes: this.collection.toJSON()})
            // );

            return this.$container.html('');
        },
        profile: function () {
            // debugger;
        },
        job: function (jobId, projectId) {

            var view = new CurriculumVitae.Views.Job({
                // model: this.collection.get(jobId)
                model: new CurriculumVitae.Models.Job()
            });

            return this.$container.html(view.render());
        }
    });

    CurriculumVitae.Routers.AppRouter = new CurriculumVitae.Routers.CurriculumVitae;

    CurriculumVitae.Routers.AppRouter.on('route:index', function (actions) {
        // debugger;
        // alert(actions);
    });

})();
