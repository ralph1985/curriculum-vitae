/*global CurriculumVitae, Backbone*/

CurriculumVitae.Collections = CurriculumVitae.Collections || {};

(function () {
    'use strict';

    CurriculumVitae.Collections.Jobs = Backbone.Collection.extend({
        url: 'data/' + CurriculumVitae.Config.selectedLanguage + '/jobs.json',
        model: CurriculumVitae.Models.Job
    });

})();
