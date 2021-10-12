(this["webpackJsonpspacex-mission-data"]=this["webpackJsonpspacex-mission-data"]||[]).push([[0],{14:function(e,s,t){},21:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t.n(c),n=t(8),r=t.n(n),i=(t(14),t(2)),l=t.n(i),o=t(5),j=t(6),d=t(9),u=t.n(d),h=t(0),b=function(e){var s=e.flightNumber,t=e.type,c=e.mission,a=e.details,n=e.rocket,r=e.crew,i=e.launchDate,l=e.launchPad,o=e.payloadType,j=e.customers,d=e.orbit,u=e.payloadMass,b=e.landSuccess,m=(e.launchSuccess,e.img),p=e.webcast;return Object(h.jsxs)("div",{className:"log masonry-item",children:[Object(h.jsxs)("h3",{children:[t," - ",c]}),Object(h.jsx)("img",{src:m,alt:"Mission Badge"}),"Upcoming"===t?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h4",{children:[Object(h.jsx)("strong",{children:c})," will use the ",Object(h.jsx)("strong",{children:n})," and launch on ",Object(h.jsx)("strong",{children:i.dateGB})," at"," ",Object(h.jsx)("strong",{children:i.time12HourGB})]}),Object(h.jsx)("p",{className:"details",children:a})]}):Object(h.jsx)("p",{className:"details",children:a}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Flight Number:"})," ",s]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Rocket:"})," ",n]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Crew:"})," ",r]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Launch Date:"})," ",i.dateGB," -"," ",i.time12HourGB]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"launch Pad:"})," ",l]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Customer:"})," ",j]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Orbit:"})," ",d]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Payload Type:"})," ",o]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Payload Mass:"})," ",u]}),"Upcoming"!==t&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Land Success:"})," ",Object(h.jsx)("span",{className:b?"yes":"no",children:b?"Yes":"No"})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Launch Success:"})," ",Object(h.jsx)("span",{className:b?"yes":"no",children:b?"Yes":"No"})]})]})]}),Object(h.jsx)("a",{className:p?"webcast-button":"webcast-button disabled",href:p||"",target:p?"_blank":"_self",rel:"noreferrer",children:p?"Watch Stream":"Stream Not Available"})]})},m=function(){return Object(h.jsx)("div",{className:"skeleton-log masonry-item"})},p=function(e){var s=new Date;return s.setTime(1e3*e),{dateGB:s.toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),time12HourGB:s.toLocaleString("en-GB",{hour:"numeric",minute:"numeric",hour12:!0})}},g=function(){var e=Object(o.a)(l.a.mark((function e(s,t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.spacexdata.com/v5/launches/query",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){t(e.docs)})).catch((function(e){console.log("Error",e)})));case 1:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),O=function(){new u.a(".logs",{itemSelector:".masonry-item",horizontalOrder:!0,gutter:20,fitWidth:!0})},x=function(){var e=Object(c.useState)(0),s=Object(j.a)(e,2),t=s[0],a=s[1],n=Object(c.useState)(0),r=Object(j.a)(n,2),i=r[0],d=r[1];return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g({query:{upcoming:!0},options:{populate:["rocket","launchpad","payloads"],sort:{flight_number:"asc"},limit:1}},a);case 2:return O(),e.next=5,g({query:{upcoming:!1},options:{populate:["rocket","launchpad","payloads","cores"],sort:{flight_number:"desc"},limit:100}},d);case 5:O();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),O()}),[]),Object(h.jsxs)("div",{className:"logs",children:[t?Object(h.jsx)(b,{flightNumber:t[0].flight_number,details:t[0].details,type:"Upcoming",mission:t[0].name,rocket:t[0].rocket.name,crew:t[0].crew.length>0?t[0].crew.length:"No crew",launchDate:p(t[0].date_unix),launchPad:t[0].launchpad.full_name||"TBA",payloadType:t[0].payloads[0].type||"N/A",customers:t[0].payloads[0].customers.length?t[0].payloads[0].customers:"N/A",orbit:t[0].payloads[0].orbit||"N/A",payloadMass:t[0].payloads[0].mass_kg||"N/A",landSuccess:"",launchSuccess:"",img:t[0].links.patch.small||"/SpaceX-Mission-Data/images/geostationary_orbit.png",webcast:t[0].links.webcast},t[0].id):Object(h.jsx)(m,{}),i?i.map((function(e,s){var t=0===s?"Latest":"Past";return Object(h.jsx)(b,{flightNumber:e.flight_number,type:t,mission:e.name,details:e.details,rocket:e.rocket.name,crew:e.crew.length>0?e.crew.length:"No crew",launchDate:p(e.date_unix),launchPad:e.launchpad.full_name||"TBA",payloadType:e.payloads[0].type||"N/A",customers:e.payloads[0].customers.length?e.payloads[0].customers:"N/A",orbit:e.payloads[0].orbit||"N/A",payloadMass:e.payloads[0].mass_kg?"".concat(e.payloads[0].mass_kg," kg"):"N/A",landSuccess:e.cores[0].landing_success,launchSuccess:e.success,img:e.links.patch.small||"/SpaceX-Mission-Data/images/geostationary_orbit.png",webcast:e.links.webcast},e.id)})):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{}),Object(h.jsx)(m,{}),Object(h.jsx)(m,{}),Object(h.jsx)(m,{}),Object(h.jsx)(m,{})]})]})},y=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)("img",{className:"logo",src:"/SpaceX-Mission-Data/images/spacex-logo.png",alt:"Logo"})}),Object(h.jsxs)("main",{children:[Object(h.jsx)("div",{className:"bg",children:Object(h.jsx)("div",{className:"stars"})}),Object(h.jsx)(x,{})]})]})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.069a8f35.chunk.js.map