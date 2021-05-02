(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{46:function(e,t,s){},47:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(38),r=s.n(i),c=(s(46),s(47),s(6)),l=s(7),o=s(16),h=s(15),d=s(2),u=s(9),b=s(8),j=s.n(b),g="http://localhost:8080/assignment2",m=new(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"getFighters",value:function(){return j.a.get("".concat(g,"/fightersList"))}},{key:"insertFighter",value:function(e){return j.a.post("".concat(g,"/fightersTable"),e)}},{key:"updateFighters",value:function(e){return j.a.put("".concat(g,"/updateFighters/").concat(e))}},{key:"getArrivalTestDate",value:function(){return j.a.get("".concat(g,"/getArrivalTestDate"))}},{key:"sendArrivalTestDate",value:function(e){return j.a.post("".concat(g,"/sendArrivalTestDate/").concat(e))}}]),e}()),v="http://localhost:8080/assignment2",O=new(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"getCovidTests",value:function(){return j.a.get("".concat(v,"/covidtestsList"))}},{key:"insertCovidTest",value:function(e){return j.a.post("".concat(v,"/covidtestsTable"),e)}}]),e}()),f=s(0),y=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).state={firstName:"",lastName:"",weight:"",inIsolation:"Yes",scheduled:"No",arrivalTestDate:"",message:null,errorMessage:null},n.onSubmit=n.onSubmit.bind(Object(d.a)(n)),n.validate=n.validate.bind(Object(d.a)(n)),n.getArrivalTestDate=n.getArrivalTestDate.bind(Object(d.a)(n)),n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.getArrivalTestDate()}},{key:"getArrivalTestDate",value:function(){var e=this;m.getArrivalTestDate().then((function(t){e.setState({arrivalTestDate:t.data}),console.log(t)}))}},{key:"onSubmit",value:function(e){var t=this;if(this.setState({errorMessage:null}),this.setState({message:null}),this.state.arrivalTestDate){var s={firstName:e.firstName,lastName:e.lastName,weight:parseFloat(e.weight),inIsolation:"Yes",scheduled:"No"};m.insertFighter(s).then((function(n){var a={fighterFirstName:e.firstName,fighterLastName:e.lastName,arrivalTest:"Negative",arrivalTestDate:t.state.arrivalTestDate,secondTest:null,secondTestDate:null};O.insertCovidTest(a).then((function(e){t.setState({message:"Fighter "+s.firstName+" "+s.lastName+" was successfully registered."}),t.setState({errorMessage:null})}))})).catch((function(e){t.setState({errorMessage:e.response.data}),t.setState({message:null})}))}else this.setState({errorMessage:"The registration period has not yet started. No new tournaments have been announced"}),this.setState({message:null})}},{key:"validate",value:function(e){var t={};return e.firstName?/^[a-zA-Z]+$/.test(e.firstName)||(t.firstName="The First Name field has to contain only letters"):t.firstName="The First Name field cannot be empty",e.lastName?/^[a-zA-Z]+$/.test(e.lastName)||(t.lastName="Please enter a valid last name containing only letters"):t.lastName="The Last Name field has to contain only letters",e.weight?/[0-9]+.?[0-9]?/.test(e.weight)||(t.weight="The Weight field has to contain a real number"):t.weight="The Weight field cannot be empty",t&&this.setState({message:null}),t}},{key:"render",value:function(){var e=this.state,t=e.firstName,s=e.lastName,n=e.weight;return Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),Object(f.jsx)("h1",{align:"center",children:"Fighter Registration Form"}),Object(f.jsx)("hr",{}),Object(f.jsx)("hr",{}),Object(f.jsx)("br",{}),this.state.message&&Object(f.jsx)("div",{className:"alert alert-success",children:this.state.message}),this.state.errorMessage&&Object(f.jsx)("div",{className:"alert alert-danger",children:this.state.errorMessage}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(u.d,{initialValues:{firstName:t,lastName:s,weight:n},onSubmit:this.onSubmit,validateOnChange:!1,validateOnBlur:!1,validate:this.validate,enableReinitialize:!0,children:function(e){return Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{name:"firstName",component:"div",className:"alert alert-danger"}),Object(f.jsx)(u.a,{name:"lastName",component:"div",className:"alert alert-danger"}),Object(f.jsx)(u.a,{name:"weight",component:"div",className:"alert alert-danger"}),Object(f.jsxs)("fieldset",{className:"form-group",children:[Object(f.jsx)("label",{children:"First Name"}),Object(f.jsx)(u.b,{className:"form-control",type:"text",name:"firstName"})]}),Object(f.jsxs)("fieldset",{className:"form-group",children:[Object(f.jsx)("label",{children:"Last Name"}),Object(f.jsx)(u.b,{className:"form-control",type:"text",name:"lastName"})]}),Object(f.jsxs)("fieldset",{className:"form-group",children:[Object(f.jsx)("label",{children:"Weight"}),Object(f.jsx)(u.b,{className:"form-control",type:"text",name:"weight"})]}),Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsx)("button",{className:"btn btn-success registerFighterButton",type:"submit",children:"Register"})})]})}})})]})}}]),s}(n.Component),x=s(41),p=s(3),k=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).fighterClicked=n.fighterClicked.bind(Object(d.a)(n)),n.administratorClicked=n.administratorClicked.bind(Object(d.a)(n)),n.forumClicked=n.forumClicked.bind(Object(d.a)(n)),n}return Object(l.a)(s,[{key:"fighterClicked",value:function(){this.props.history.push("/fighter/register")}},{key:"administratorClicked",value:function(){this.props.history.push("/administrator")}},{key:"forumClicked",value:function(){this.props.history.push("/forum")}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("br",{}),Object(f.jsx)("h1",{align:"center",children:" Main Panel"}),Object(f.jsx)("hr",{}),Object(f.jsx)("hr",{}),Object(f.jsx)("br",{}),Object(f.jsx)("h4",{align:"center",children:" Choose the user type"}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"mainPanelButtons",children:[Object(f.jsx)("button",{className:"btn mp1",onClick:function(){return e.fighterClicked()},children:"Fighter"}),Object(f.jsx)("button",{className:"btn mp2",onClick:function(){return e.administratorClicked()},children:"Administrator"})]}),Object(f.jsx)("div",{className:"mainPanelButtons",children:Object(f.jsx)("button",{className:"btn mp3",onClick:function(){return e.forumClicked()},children:"Forum"})})]})}}]),s}(n.Component),N="http://localhost:8080/assignment2",T=new(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"getEvents",value:function(){return j.a.get("".concat(N,"/eventsList"))}},{key:"generateEvents",value:function(e,t){return j.a.post("".concat(N,"/eventsTable/").concat(e,"/").concat(t))}},{key:"resetWeek",value:function(){return j.a.put("".concat(N,"/resetWeek"))}},{key:"nextWeek",value:function(e){return j.a.post("".concat(N,"/eventsTable/next/").concat(e))}},{key:"previousWeek",value:function(e){return j.a.post("".concat(N,"/eventsTable/previous/").concat(e))}}]),e}()),D="http://localhost:8080/assignment2",S=new(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"getForumMessage",value:function(){return j.a.get("".concat(D,"/getInvite"))}},{key:"sendForumMessage",value:function(e){return j.a.post("".concat(D,"/sendInvite/").concat(e))}}]),e}()),F=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).state={startingDate:"",tournamentType:"",fighters:[],events:[],message:null,errorMessage:null,fighterHideCounter:0,eventHideCounter:0},n.onSubmit=n.onSubmit.bind(Object(d.a)(n)),n.validate=n.validate.bind(Object(d.a)(n)),n.getEvents=n.getEvents.bind(Object(d.a)(n)),n.getFighters=n.getFighters.bind(Object(d.a)(n)),n.hideFightersTable=n.hideFightersTable.bind(Object(d.a)(n)),n.switchButtonsVisibility=n.switchButtonsVisibility.bind(Object(d.a)(n)),n.sendMessage=n.sendMessage.bind(Object(d.a)(n)),n.testFighters=n.testFighters.bind(Object(d.a)(n)),n.sendArrivalTestDate=n.sendArrivalTestDate.bind(Object(d.a)(n)),n.generateSchedule=n.generateSchedule.bind(Object(d.a)(n)),n.nextWeekEvents=n.nextWeekEvents.bind(Object(d.a)(n)),n.previousWeeksEvents=n.previousWeeksEvents.bind(Object(d.a)(n)),n.switchButtonsVisibility=n.switchButtonsVisibility.bind(Object(d.a)(n)),n}return Object(l.a)(s,[{key:"nextWeekEvents",value:function(){var e=this;T.nextWeek(this.state.startingDate).then((function(t){document.getElementById("eventTableID").style.visibility="visible",e.setState({events:t.data}),console.log(e.state.events)})).catch((function(){e.setState({errorMessage:"No events to display"})}))}},{key:"previousWeeksEvents",value:function(){var e=this;T.previousWeek(this.state.startingDate).then((function(t){document.getElementById("eventTableID").style.visibility="visible",e.setState({events:t.data}),console.log(e.state.events)})).catch((function(){e.setState({errorMessage:"No events to display"})}))}},{key:"componentDidMount",value:function(){T.resetWeek().then((function(){console.log("week reset")})),document.getElementById("fighterTableID").style.visibility="hidden",document.getElementById("eventTableID").style.visibility="hidden",this.switchButtonsVisibility(1),this.setState({fighterHideCounter:1})}},{key:"generateSchedule",value:function(){var e=this;T.generateEvents(this.state.startingDate,this.state.tournamentType).then((function(t){e.setState({events:t.data}),e.setState({errorMessage:null}),document.getElementById("eventTableID").style.visibility="visible"})).catch((function(t){e.setState({errorMessage:null}),e.setState({message:"The schedule is finished"}),e.setState({events:e.state.events}),console.log(e.state.events)}))}},{key:"sendArrivalTestDate",value:function(){var e=this;m.sendArrivalTestDate(this.state.startingDate).then((function(){console.log(e.state.startingDate)}))}},{key:"getEvents",value:function(){var e=this;T.getEvents().then((function(t){e.setState({events:t.data})}))}},{key:"getFighters",value:function(){var e=this;m.getFighters().then((function(t){e.setState({fighters:t.data})}))}},{key:"sendMessage",value:function(){var e=this,t="Dear Fighters,The UFC International commitee is happy to announce that the annual UFC Tournament will start the registering period beginning with the date of "+this.state.startingDate+". Because of the current  Coronavirus pandemic, fighters are required to present themselves at the tournament with a negative Covid Test, where further examinations will take place. Thank you for your cooperation.                   Good luck to you all !";S.sendForumMessage(t).then((function(){e.setState({message:"Invitations have been sent"}),e.setState({errorMessage:null})}))}},{key:"switchButtonsVisibility",value:function(e){var t=document.getElementById("fightersButtonID"),s=document.getElementById("generateScheduleButtonID"),n=document.getElementById("fightersTableButtonID"),a=document.getElementById("prevID"),i=document.getElementById("nextID");0==e?(t.remove(),s.style.visibility="visible",n.style.visibility="visible",a.style.visibility="visible",i.style.visibility="visible"):(t.style.visibility="visible",s.style.visibility="hidden",n.style.visibility="hidden",a.style.visibility="hidden",i.style.visibility="hidden")}},{key:"hideFightersTable",value:function(){(console.log(this.state.fighterHideCounter),this.state.fighterHideCounter%2===0)?(this.setState({fighters:[]}),document.getElementById("fighterTableID").style.visibility="hidden"):(this.getFighters(),document.getElementById("fighterTableID").style.visibility="visible");this.setState({fighterHideCounter:this.state.fighterHideCounter+1})}},{key:"testFighters",value:function(){var e=this;this.state.startingDate?m.updateFighters(this.state.startingDate).then((function(t){e.setState({message:t.data}),e.setState({errorMessage:null}),console.log(e.state.fighterHideCounter),document.getElementById("fighterTableID").style.visibility="visible",document.getElementById("fightersTableButtonID").style.visibility="visible",e.getFighters(),e.setState({fighterHideCounter:0}),"All the fighters are ready. The tournament can begin"===t.data&&e.switchButtonsVisibility(0)})).catch((function(t){e.setState({errorMessage:t.response.data}),e.setState({message:null})})):(this.setState({errorMessage:"The invitations for the tournament have not yet been sent"}),this.setState({message:null}))}},{key:"onSubmit",value:function(e){this.setState({startingDate:e.startingDate}),this.setState({tournamentType:e.tournamentType}),this.sendMessage(),this.sendArrivalTestDate()}},{key:"validate",value:function(e){var t={};return e.startingDate||(t.startingDate="The Date field cannot be empty"),e.tournamentType||(t.tournamentType="The Tournament you wish to generate must have a type"),t}},{key:"render",value:function(){var e=this.state,t=e.startingDate,s=e.tournamentType;return Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),Object(f.jsx)("h1",{align:"center",children:"Administrator Panel"}),Object(f.jsx)("hr",{}),Object(f.jsx)("hr",{}),Object(f.jsx)("br",{}),this.state.message&&Object(f.jsx)("div",{className:"alert alert-success",children:this.state.message}),this.state.errorMessage&&Object(f.jsx)("div",{className:"alert alert-danger",children:this.state.errorMessage}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(u.d,{initialValues:{startingDate:t,tournamentType:s},onSubmit:this.onSubmit,validateOnChange:!1,validateOnBlur:!1,validate:this.validate,enableReinitialize:!0,children:function(e){return Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{name:"startingDate",component:"div",className:"alert alert-danger"}),Object(f.jsx)(u.a,{name:"tournamentType",component:"div",className:"alert alert-danger"}),Object(f.jsxs)("fieldset",{className:"startingDate",children:[Object(f.jsx)("label",{children:"Registration Date"}),Object(f.jsx)(u.b,{className:"form-control",type:"date",name:"startingDate"})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("fieldset",{className:"form-group",children:[Object(f.jsx)("label",{children:"Select the type of tournament you wish to generate"}),Object(f.jsxs)("div",{role:"group","aria-labelledby":"my-radio-group",children:[Object(f.jsxs)("label",{children:[Object(f.jsx)(u.b,{type:"radio",name:"tournamentType",value:"Weekly",id:"weeklyRadio"}),"Weekly"]}),Object(f.jsx)("br",{}),Object(f.jsxs)("label",{children:[Object(f.jsx)(u.b,{type:"radio",name:"tournamentType",value:"Monthly",id:"monthlyRadio"}),"Monthly"]})]})]}),Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsx)("button",{className:"btn sendInvitationsButton",type:"submit",children:"Send Invitations"})})]})}})}),Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsx)("button",{className:"btn testFightersButton",onClick:this.testFighters,id:"fightersButtonID",children:"Test Fighters"})}),Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsx)("button",{className:"btn fightersTableButton",onClick:this.hideFightersTable,id:"fightersTableButtonID",children:"Fighters Table"})}),Object(f.jsxs)("div",{className:"table",align:"center",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{id:"fighterTableID",children:[Object(f.jsx)("th",{children:"First Name"}),Object(f.jsx)("th",{children:"Last Name"}),Object(f.jsx)("th",{children:"Weight"}),Object(f.jsx)("th",{children:"In Isolation"}),Object(f.jsx)("th",{children:"Scheduled"})]})}),Object(f.jsx)("tbody",{children:this.state.fighters.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.firstName}),Object(f.jsx)("td",{children:e.lastName}),Object(f.jsx)("td",{children:e.weight}),Object(f.jsx)("td",{children:e.inIsolation}),Object(f.jsx)("td",{children:e.scheduled})]},e.idFighter)}))})]}),Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsx)("button",{className:"btn generateScheduleButton",onClick:this.generateSchedule,id:"generateScheduleButtonID",children:"Generate Schedule"})}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"weekButtons",children:[Object(f.jsx)("button",{className:"btn btn1",onClick:this.previousWeeksEvents,id:"prevID",children:"Previous week"}),Object(f.jsx)("button",{className:"btn btn2",onClick:this.nextWeekEvents,id:"nextID",children:"Next week"})]}),Object(f.jsxs)("div",{className:"table",align:"center",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{id:"eventTableID",children:[Object(f.jsx)("th",{children:"Location"}),Object(f.jsx)("th",{children:"Date"}),Object(f.jsx)("th",{children:"Hour"}),Object(f.jsx)("th",{children:"Fighter One"}),Object(f.jsx)("th",{children:"Fighter Two"}),Object(f.jsx)("th",{children:"Week"})]})}),Object(f.jsx)("tbody",{children:this.state.events.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.location}),Object(f.jsx)("td",{children:e.date}),Object(f.jsx)("td",{children:e.hour}),Object(f.jsx)("td",{children:e.fighterOne}),Object(f.jsx)("td",{children:e.fighterTwo}),Object(f.jsx)("td",{children:e.week})]},e.idEvent)}))})]})]})}}]),s}(n.Component),I=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).state={message:""},n.getMessage=n.getMessage.bind(Object(d.a)(n)),n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.getMessage()}},{key:"getMessage",value:function(){var e=this;S.getForumMessage().then((function(t){e.setState({message:t.data})}))}},{key:"render",value:function(){var e=this.state.message;return Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),Object(f.jsx)("h1",{align:"center",children:"Forum"}),Object(f.jsx)("hr",{}),Object(f.jsx)("hr",{}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("h3",{class:"forumMessage",children:e})})]})}}]),s}(n.Component),w=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(f.jsx)(x.a,{children:Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(p.c,{children:[Object(f.jsx)(p.a,{path:"/fighter/register",component:y}),Object(f.jsx)(p.a,{path:"/",exact:!0,component:k}),Object(f.jsx)(p.a,{path:"/administrator",component:F}),Object(f.jsx)(p.a,{path:"/forum",component:I})]})})})}}]),s}(n.Component);var C=function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(w,{})})},B=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,72)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(C,{})}),document.getElementById("root")),B()}},[[71,1,2]]]);
//# sourceMappingURL=main.b35a15c1.chunk.js.map