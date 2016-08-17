/*global CurriculumVitae*/

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

})();
