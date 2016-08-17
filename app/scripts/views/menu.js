/*global CurriculumVitae, Backbone, JST, $*/

CurriculumVitae.Views = CurriculumVitae.Views || {};

(function () {
    'use strict';

    CurriculumVitae.Views.Menu = Backbone.View.extend({
        template: JST['app/scripts/templates/menu.ejs'],
        tagName: 'ul',
        id: '',
        className: '',
        events: {},

        $container: $('#main-menu'),

        initialize: function () {
        },

        render: function () {
            this.$container.html(this.template());
            this.bindEvents();
            return this;
        },

        bindEvents: function () {
            this.$container.find('#select-languages')
                .off()
                .on('change', this.changeLanguage);
        },

        changeLanguage: function (ev) {
            ev.preventDefault();

            CurriculumVitae.Config.changeSelectedLanguage($(ev.target).val());

            window.location.reload();
        }
    });
})();
