(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,a,n){e.exports=n.p+"static/media/spacex-logo.37a39b35.png"},46:function(e,a,n){e.exports=n(64)},51:function(e,a,n){},62:function(e,a,n){},64:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n.n(t),c=n(33),r=n.n(c),s=(n(51),n(43)),m=n(7),o=n(19),i=n(6),u=n(34),h=n.n(u),E=n(35),d=n(36),p=n(45),g=n(44),f=n(22),y=n(18),b=n.n(y),_=n(65),N=n(37),v=n.n(N),k=function(e){var a=e.launch,n=a.flight_number,t=a.mission_name,c=a.launch_date_local,r=a.launch_success;return l.a.createElement("div",{className:"card card-body mb-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9 d-flex flex-column justify-content-center align-items-start"},l.a.createElement("h4",{style:{color:"#FFF4EA"}},"Mission: ",l.a.createElement("span",{style:{color:r?"#9CCd62":"#FF5976"}},t)),l.a.createElement("p",null,"Date: ",l.a.createElement(v.a,{format:"YYYY-MM-DD HH:mm"},c))),l.a.createElement("div",{className:"col-md-3 d-flex align-items-center justify-content-center"},l.a.createElement(o.b,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details"))))},F=function(){return l.a.createElement("div",{className:"my-3"},l.a.createElement("p",null,l.a.createElement("span",{className:"px-3 mr-2",style:{backgroundColor:"#9CCd62"}})," = Success"),l.a.createElement("p",null,l.a.createElement("span",{className:"px-3 mr-2",style:{backgroundColor:"#FF5976"}})," = Fail"))};function x(){var e=Object(f.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return x=function(){return e},e}var w=b()(x()),C=function(e){Object(p.a)(n,e);var a=Object(g.a)(n);function n(){return Object(E.a)(this,n),a.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return l.a.createElement(t.Fragment,null,l.a.createElement("h1",{className:"display-4 my-3"},"Launches"),l.a.createElement(F,null),l.a.createElement(_.a,{query:w},(function(e){var a=e.loading,n=e.error,c=e.data;return a?l.a.createElement("h4",null,"Loading..."):(n&&console.log(n),console.log(c),l.a.createElement(t.Fragment,{className:"my-3"},c.launches.map((function(e){return l.a.createElement(k,{key:e.flight_number,launch:e})}))))})))}}]),n}(t.Component);function L(){var e=Object(f.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return L=function(){return e},e}var j=b()(L()),D=function(e){var a=e.match.params.id,n=parseInt(a);return console.log(n),l.a.createElement(t.Fragment,null,l.a.createElement(_.a,{query:j,variables:{flight_number:n}},(function(e){var a=e.loading,n=e.error,t=e.data;if(a)return l.a.createElement("h4",null,"Loading...");n&&console.log(n);var c=t.launch,r=c.mission_name,s=c.flight_number,m=c.launch_year,i=c.launch_success,u=c.rocket,h=u.rocket_id,E=u.rocket_name,d=u.rocket_type;return l.a.createElement("div",null,l.a.createElement("h1",{className:"display-4 my-3"},l.a.createElement("span",{className:"text-dark"},"Mission: ",l.a.createElement("span",null,r))),l.a.createElement("h4",{className:"mb-3"},"Launch Details"),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),l.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),l.a.createElement("li",{className:"list-group-item"},"Launch Successful: ",l.a.createElement("span",{style:{color:i?"#9CCd62":"#FF5976"}},i?"Yes":"No"))),l.a.createElement("h4",{className:"my-3"},"Rocket Details"),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",h),l.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",E),l.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",d)),l.a.createElement("hr",null),l.a.createElement(o.b,{to:"/",className:"btn btn-secondary"},"Back"))})))},O=(n(62),new s.a({uri:"/graphql"}));var Y=function(){return l.a.createElement(m.a,{client:O},l.a.createElement(o.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:h.a,style:{width:"300px",display:"block",margin:"20px auto"},alt:""}),l.a.createElement(i.a,{exact:!0,path:"/",component:C}),l.a.createElement(i.a,{exact:!0,path:"/launch/:id",component:D}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.8d8efbf4.chunk.js.map