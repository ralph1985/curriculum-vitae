/*global CurriculumVitae, Backbone, $*/

CurriculumVitae.Routers = CurriculumVitae.Routers || {};

(function () {
    'use strict';

    CurriculumVitae.Routers.CurriculumVitae = Backbone.Router.extend({
        routes: {
            '': 'index',
            'profile': 'profile',               // #profile
            'jobs': 'jobs',                     // #jobs
            'jobs/:jobId': 'jobs',              // #jobs/mo2o
            'jobs/:jobId/:projectId': 'jobs',   // #jobs/mo2o/iberostar
            'contact': 'contact',               // #contact
        },

        $container: $('#primary-content'),

        initialize: function () {
            var _self = this;

            _self.listJobs = new CurriculumVitae.Collections.Jobs();
            _self.listJobs.fetch({
                success: function () {
                    console.log('JSON file (jobs.json) load was successful', _self.listJobs);
                },
                error: function () {
                    console.log('There was some error in loading and processing the JSON file (jobs.json)');
                }
            });

            // this.index();

            Backbone.history.start();
        },

        index: function () {
            return this.$container.html('');
        },
        profile: function () {
            return this.$container.html('');
        },
        jobs: function (jobId, projectId) {

            var jobsListView = new CurriculumVitae.Views.JobsList({
                collection: this.listJobs
            });

            this.$container.html(jobsListView.render());


            // Load selected job
            if (!!jobId) {
                var jobView = new CurriculumVitae.Views.Job({
                    model: this.listJobs.get(jobId)
                });

                this.$container.find('#job-content').html(jobView.render());
            } else {
                this.$container.find('#job-content').html('');
            }


            // Load selected project
            if (!!projectId) {

            }


            return this;
        },
        contact: function () {
            return this.$container.html('');
        }
    });

    CurriculumVitae.Routers.AppRouter = new CurriculumVitae.Routers.CurriculumVitae();

    // CurriculumVitae.Routers.AppRouter.on('route:index', function (actions) {
    //     console.log(actions);
    // });

})();
