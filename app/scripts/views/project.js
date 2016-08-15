/*global CurriculumVitae, Backbone, JST*/

CurriculumVitae.Views = CurriculumVitae.Views || {};

(function () {
    'use strict';

    CurriculumVitae.Views.Project = Backbone.View.extend({
        template: JST['app/scripts/templates/project.ejs'],
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
                project: this.model.toJSON()
            });
        }
    });
})();
