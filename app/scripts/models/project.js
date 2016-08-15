/*global CurriculumVitae, Backbone*/

CurriculumVitae.Models = CurriculumVitae.Models || {};

(function () {
    'use strict';

    CurriculumVitae.Models.Project = Backbone.Model.extend({
        initialize: function () {
        },
        defaults: {
            id: '',
            name: '',
            description: ''
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
            return response;
        }
    });
})();
