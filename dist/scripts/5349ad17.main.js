window.CurriculumVitae={Models:{},Collections:{},Views:{},Routers:{},init:function(){"use strict";console.log("Hello from Backbone!")}},$(document).ready(function(){"use strict";CurriculumVitae.init()}),this.JST=this.JST||{},this.JST["app/scripts/templates/job.ejs"]=function(obj){obj||(obj={});var __t,__p="";_.escape,Array.prototype.join;with(obj)__p+="<div>\n    <h2>"+(null==(__t=job.name)?"":__t)+"</h2>\n\n    <p>"+(null==(__t=job.description)?"":__t)+"</p>\n\n    <div>\n        <ul>\n            ",_.each(job.projects,function(a){__p+='\n            <li>\n                <a href="#jobs/'+(null==(__t=job.id)?"":__t)+"/"+(null==(__t=a.id)?"":__t)+'">\n                    '+(null==(__t=a.name)?"":__t)+"\n                </a>\n            </li>\n            "}),__p+='\n        </ul>\n    </div>\n\n    <div id="project-content"></div>\n</div>\n';return __p},this.JST["app/scripts/templates/jobs-list.ejs"]=function(obj){obj||(obj={});var __t,__p="";_.escape,Array.prototype.join;with(obj)__p+="<div>\n    <div>\n        <ul>\n            ",_.each(jobs,function(a){__p+='\n            <li>\n                <a href="#jobs/'+(null==(__t=a.id)?"":__t)+'">\n                    '+(null==(__t=a.name)?"":__t)+"\n                </a>\n            </li>\n            "}),__p+='\n        </ul>\n    </div>\n\n    <div>\n        <div id="job-content"></div>\n    </div>\n</div>\n';return __p},this.JST["app/scripts/templates/project.ejs"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+="<div>\n    <h3>"+(null==(__t=project.name)?"":__t)+"</h3>\n\n    <p>"+(null==(__t=project.description)?"":__t)+"</p>\n</div>\n";return __p},CurriculumVitae.Views=CurriculumVitae.Views||{},function(){"use strict";CurriculumVitae.Views.Project=Backbone.View.extend({template:JST["app/scripts/templates/project.ejs"],tagName:"div",id:"",className:"",events:{},initialize:function(){this.listenTo(this.model,"sync",this.render)},render:function(){return this.template({project:this.model.toJSON()})}})}(),CurriculumVitae.Models=CurriculumVitae.Models||{},function(){"use strict";CurriculumVitae.Models.Project=Backbone.Model.extend({initialize:function(){},defaults:{id:"",name:"",description:""},idAttribute:"id",validate:function(a){var b={};return a.id||(b.id='"id" is mandatory.'),a.name||(b.name='"name" is mandatory.'),a.description||(b.description='"description" is mandatory.'),_.isEmpty(b)?void 0:b},parse:function(a){return a}})}(),CurriculumVitae.Collections=CurriculumVitae.Collections||{},function(){"use strict";CurriculumVitae.Collections.Projects=Backbone.Collection.extend({model:CurriculumVitae.Models.Project})}(),CurriculumVitae.Views=CurriculumVitae.Views||{},function(){"use strict";CurriculumVitae.Views.Job=Backbone.View.extend({template:JST["app/scripts/templates/job.ejs"],tagName:"div",id:"",className:"",events:{},initialize:function(){this.listenTo(this.model,"sync",this.render)},render:function(){return this.template({job:this.model.toJSON()})}})}(),CurriculumVitae.Views=CurriculumVitae.Views||{},function(){"use strict";CurriculumVitae.Views.JobsList=Backbone.View.extend({template:JST["app/scripts/templates/jobs-list.ejs"],tagName:"div",id:"",className:"",events:{},initialize:function(){this.listenTo(this.collection,"sync",this.render)},render:function(){return this.template({jobs:this.collection.toJSON()})}})}(),CurriculumVitae.Models=CurriculumVitae.Models||{},function(){"use strict";CurriculumVitae.Models.Job=Backbone.Model.extend({initialize:function(){},defaults:{id:"",name:"",description:"",projects:new CurriculumVitae.Collections.Projects},idAttribute:"id",validate:function(a){var b={};return a.id||(b.id='"id" is mandatory.'),a.name||(b.name='"name" is mandatory.'),a.description||(b.description='"description" is mandatory.'),_.isEmpty(b)?void 0:b},parse:function(a){return a}})}(),CurriculumVitae.Collections=CurriculumVitae.Collections||{},function(){"use strict";CurriculumVitae.Collections.Jobs=Backbone.Collection.extend({url:"data/jobs.json",model:CurriculumVitae.Models.Job})}(),CurriculumVitae.Routers=CurriculumVitae.Routers||{},function(){"use strict";CurriculumVitae.Routers.CurriculumVitae=Backbone.Router.extend({routes:{"":"index",profile:"profile",jobs:"jobs","jobs/:jobId":"jobs","jobs/:jobId/:projectId":"jobs",contact:"contact"},$container:$("#primary-content"),initialize:function(){var a=this;a.listJobs=new CurriculumVitae.Collections.Jobs,Backbone.history.start()},index:function(){return this.$container.html("")},profile:function(){return this.$container.html("")},jobs:function(a,b){var c=this,d=function(){var d=new CurriculumVitae.Views.JobsList({collection:c.listJobs});c.$container.html(d.render());var e=c.$container.find("#job-content");if(a){var f=c.listJobs.get(a),g=new CurriculumVitae.Views.Job({model:f});e.html(g.render());var h=e.find("#project-content");if(b){var i=new CurriculumVitae.Collections.Projects(f.get("projects")),j=new CurriculumVitae.Views.Project({model:i.get(b)});h.html(j.render())}else h.html("")}else e.html("")};return 0===c.listJobs.length?c.listJobs.fetch({success:function(){console.log("JSON file (jobs.json) load was successful",c.listJobs)},error:function(){console.log("There was some error in loading and processing the JSON file (jobs.json)")}}).done(function(){d()}):d(),this},contact:function(){return this.$container.html("")}}),CurriculumVitae.Routers.AppRouter=new CurriculumVitae.Routers.CurriculumVitae}();