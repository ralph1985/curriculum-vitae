/*global CurriculumVitae, Backbone, JST*/

CurriculumVitae.Views = CurriculumVitae.Views || {};

(function () {
    'use strict';

    CurriculumVitae.Views.JobsList = Backbone.View.extend({
        template: JST['app/scripts/templates/jobs-list.ejs'],
        tagName: 'div',
        id: '',
        className: '',
        events: {},
        initialize: function () {
            // this.listenTo(this.collection, 'change', this.render);
            this.listenTo(this.collection, 'sync', this.render);
        },
        render: function () {
            return this.template({
                jobs: this.collection
            });
        }
    });
})();
