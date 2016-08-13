/*global CurriculumVitae, Backbone*/

CurriculumVitae.Collections = CurriculumVitae.Collections || {};

(function () {
  'use strict';

  CurriculumVitae.Collections.CurriculumVitae = Backbone.Collection.extend({

    localStorage: new Backbone.LocalStorage("CurriculumVitaeCollection"),
    model: CurriculumVitae.Models.CurriculumVitae

  });

})();
