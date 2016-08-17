/*global CurriculumVitae, Backbone, JST*/

CurriculumVitae.Views = CurriculumVitae.Views || {};

(function () {
    'use strict';

    CurriculumVitae.Views.Menu = Backbone.View.extend({
        template: JST['app/scripts/templates/menu.ejs'],
        tagName: 'div',
        id: '',
        className: '',
        events: {},
        initialize: function () {
        },
        render: function () {
            return this.template();
        }
    });
})();
