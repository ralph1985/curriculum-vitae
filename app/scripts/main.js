/*global curriculumVitae, $*/


window.curriculumVitae = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');
  }
};

$(document).ready(function () {
  'use strict';
  curriculumVitae.init();
});
