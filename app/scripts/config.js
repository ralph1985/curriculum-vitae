/*global CurriculumVitae, Polyglot, $, _*/

CurriculumVitae.Config = CurriculumVitae.Config || {};

(function () {
    'use strict';

    CurriculumVitae.Config.supportedLanguages = [
        {
            id: 'es',
            name: 'Español'
        }, {
            id: 'en',
            name: 'English'
        }
    ];


    CurriculumVitae.Config.defaultLanguage = 'es';


    /**
     *
     * @param browserLanguage
     * @returns {boolean}
     */
    CurriculumVitae.Config.isSupportedLanguage = function (browserLanguage) {
        return !!_.find(this.supportedLanguages, function (language) {
            return language.id === browserLanguage;
        });
    };


    /**
     *
     * @param language
     */
    CurriculumVitae.Config.changeSelectedLanguage = function (language) {
        if (this.isSupportedLanguage(language)) {
            window.localStorage.setItem('selectedLanguage', language);
        } else {
            window.localStorage.setItem('selectedLanguage', this.defaultLanguage);
        }
    };


    /**
     *
     */
    CurriculumVitae.Config.initLanguage = function () {
        try {
            var selectedLanguage = window.localStorage.getItem('selectedLanguage');

            if (!!selectedLanguage && this.isSupportedLanguage(selectedLanguage)) {
                // Set selected language
                this.selectedLanguage = selectedLanguage;
                this.changeSelectedLanguage(this.selectedLanguage);
                return;
            }

            // Get brower language ('es-ES' => 'es', 'en-GB' => 'en')
            var browserLanguage = (window.navigator.userLanguage || window.navigator.language).substr(0, 2);

            if (!!browserLanguage && this.isSupportedLanguage(browserLanguage)) {
                // Set browser language
                this.selectedLanguage = browserLanguage;
                this.changeSelectedLanguage(this.selectedLanguage);
                return;
            }

            // Set default language
            this.selectedLanguage = this.defaultLanguage;
            this.changeSelectedLanguage(this.selectedLanguage);

        } catch (e) {
            console.error(e);
        }
    };


    /**
     *
     * @returns {*}
     */
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


    CurriculumVitae.Config.initLanguage();
})();
