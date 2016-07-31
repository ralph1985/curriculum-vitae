/*global CurriculumVitae, Backbone*/

CurriculumVitae.Models = CurriculumVitae.Models || {};

(function () {
  'use strict';

  CurriculumVitae.Models.CurriculumVitae = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
