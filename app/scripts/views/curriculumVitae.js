/*global CurriculumVitae, Backbone, JST*/

CurriculumVitae.Views = CurriculumVitae.Views || {};

(function () {
  'use strict';

  CurriculumVitae.Views.CurriculumVitae = Backbone.View.extend({

    template: JST['app/scripts/templates/curriculumVitae.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    }

  });

})();
