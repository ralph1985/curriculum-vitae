/*global CurriculumVitae, Backbone*/

CurriculumVitae.Collections = CurriculumVitae.Collections || {};

(function () {
  'use strict';

  CurriculumVitae.Collections.CurriculumVitae = Backbone.Collection.extend({

    model: CurriculumVitae.Models.CurriculumVitae

  });

})();
