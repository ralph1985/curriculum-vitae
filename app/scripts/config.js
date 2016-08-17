/*global CurriculumVitae, Polyglot, $*/

CurriculumVitae.Config = CurriculumVitae.Config || {};

(function () {
    'use strict';

    CurriculumVitae.Config.supportedLanguages = [
        'es',
        'en'
    ];

    CurriculumVitae.Config.defaultLanguage = 'es';

    CurriculumVitae.Config.initLanguage = function () {
        var browserLanguage = (window.navigator.userLanguage || window.navigator.language).substr(0, 2);

        if (this.supportedLanguages.indexOf(browserLanguage) !== -1) {
            this.selectedLanguage = browserLanguage;
        } else {
            this.selectedLanguage = this.defaultLanguage;
        }
    };

    CurriculumVitae.Config.initLanguage();

    CurriculumVitae.Config.loadLocales = function () {
        var _self = this;

        return $.getJSON('i18n/' + _self.selectedLanguage + '.json', function (data) {
            console.table(data);

            window.polyglot = new Polyglot({
                locale: _self.selectedLanguage,
                phrases: data
            });

            window.t = function (key) {
                return window.polyglot.t(key);
            };
        });
    };
})();
