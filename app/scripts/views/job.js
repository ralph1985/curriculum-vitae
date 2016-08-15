/*global CurriculumVitae, Backbone, JST*/

CurriculumVitae.Views = CurriculumVitae.Views || {};

(function () {
    'use strict';

    CurriculumVitae.Views.Job = Backbone.View.extend({
        template: JST['app/scripts/templates/job.ejs'],
        tagName: 'div',
        id: '',
        className: '',
        events: {},
        initialize: function () {
            // this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'sync', this.render);
        },
        render: function () {
            return this.template({
                job: this.model.toJSON()
            });
        }
    });
})();