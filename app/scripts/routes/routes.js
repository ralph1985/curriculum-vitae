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

            var _self = this,

                renderView = function () {

                    // Load the jobs list
                    var jobsListView = new CurriculumVitae.Views.JobsList({
                        collection: _self.listJobs
                    });

                    _self.$container.html(jobsListView.render());


                    // Load the selected job
                    if (!!jobId) {
                        var jobView = new CurriculumVitae.Views.Job({
                            model: _self.listJobs.get(jobId)
                        });

                        _self.$container.find('#job-content').html(jobView.render());
                    } else {
                        _self.$container.find('#job-content').html('');
                    }


                    // Load the selected project
                    if (!!projectId) {

                    }
                };


            if (_self.listJobs.length === 0) {

                _self.listJobs.fetch({
                    success: function () {
                        console.log('JSON file (jobs.json) load was successful', _self.listJobs);
                    },
                    error: function () {
                        console.log('There was some error in loading and processing the JSON file (jobs.json)');
                    }
                }).done(function () {
                    renderView();
                });

            } else {
                renderView();
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
