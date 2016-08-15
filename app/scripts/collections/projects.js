/*global CurriculumVitae, Backbone*/

CurriculumVitae.Collections = CurriculumVitae.Collections || {};

(function () {
    'use strict';

    CurriculumVitae.Collections.Projects = Backbone.Collection.extend({
        model: CurriculumVitae.Models.Project
    });

})();
