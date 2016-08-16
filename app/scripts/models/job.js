/*global CurriculumVitae, Backbone*/

CurriculumVitae.Models = CurriculumVitae.Models || {};

(function () {
    'use strict';

    CurriculumVitae.Models.Job = Backbone.Model.extend({
        // url: 'data/jobs.json',
        initialize: function () {
        },
        defaults: {
            id: '',
            name: '',
            description: '',
            projects: new CurriculumVitae.Collections.Projects()
        },
        idAttribute: 'id',
        validate: function (attrs/*, options*/) {
            var errors = {};

            if (!attrs.id) {
                errors.id = '"id" is mandatory.';
            }
            if (!attrs.name) {
                errors.name = '"name" is mandatory.';
            }
            if (!attrs.description) {
                errors.description = '"description" is mandatory.';
            }

            if (!_.isEmpty(errors)) {
                return errors;
            }
        },
        parse: function (response/*, options*/) {

            // Parse projects as "Collections.Projects"
            response.projects = new CurriculumVitae.Collections.Projects(response.projects);

            return response;
        }
    });
})();
