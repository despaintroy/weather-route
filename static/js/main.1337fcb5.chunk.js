(this["webpackJsonpweather-route"]=this["webpackJsonpweather-route"]||[]).push([[0],{166:function(e,t,a){},167:function(e,t,a){},199:function(e,t,a){"use strict";a.r(t);a(166),a(167);var n=a(1),r=a.n(n),s=a(55),i=a.n(s),o=a(12),c=a(53),l=a(29),u=a(52),d=a(138),j=a(49),m=Object(d.a)({apiKey:"AIzaSyCyk-8pQIXG4EJOyRa3QT0yzUfr661yuyI",authDomain:"weather-route-e1a9c.firebaseapp.com",projectId:"weather-route-e1a9c",storageBucket:"weather-route-e1a9c.appspot.com",messagingSenderId:"184699653844",appId:"1:184699653844:web:74997c51e6e4b49ed83541"}),b=Object(j.e)(),h=Object(u.b)(m),f=function(){return Object(u.d)(h)},p=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,O=240,x={home:"/home",savedRoutes:"/saved-routes",weather:"/weather",profile:"/profile",security:"/security",signIn:"/signin",signUp:"/signup"},v=a(142),g=a.n(v),w=a(264),y=a(265),S=a(244),C=a(239),V=a(257),k=a(267),P=a(263),M=a(256),I=a(240),W=a(241),T=a(262),E=a(81),R=a(2);function A(){var e=n.useState(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],s=function(){r(!a)},i=[{title:"Home",url:x.home,icon:"home"},{title:"Saved Routes",url:x.savedRoutes,icon:"star"},{title:"Weather",url:x.weather,icon:"wb_sunny"}],l=[{title:"Profile",url:x.profile,icon:"account_circle"},{title:"Security",url:x.security,icon:"lock"}],u=Object(R.jsxs)("div",{children:[Object(R.jsx)(T.a,{}),Object(R.jsx)(C.a,{}),Object(R.jsx)(P.a,{onClick:s,children:i.map((function(e){return Object(R.jsxs)(M.a,{button:!0,component:c.b,to:e.url,children:[Object(R.jsx)(I.a,{children:Object(R.jsx)(w.a,{children:e.icon})}),Object(R.jsx)(W.a,{primary:e.title})]},e.title)}))}),Object(R.jsx)(C.a,{}),Object(R.jsxs)(P.a,{onClick:s,children:[l.map((function(e){return Object(R.jsxs)(M.a,{button:!0,component:c.b,to:e.url,children:[Object(R.jsx)(I.a,{children:Object(R.jsx)(w.a,{children:e.icon})}),Object(R.jsx)(W.a,{primary:e.title})]},e.title)})),Object(R.jsxs)(M.a,{button:!0,onClick:function(){return location.reload()},children:[Object(R.jsx)(I.a,{children:Object(R.jsx)(w.a,{children:"refresh"})}),Object(R.jsx)(W.a,{primary:"Refresh"})]}),Object(R.jsxs)(M.a,{button:!0,onClick:f,children:[Object(R.jsx)(I.a,{children:Object(R.jsx)(w.a,{children:"logout"})}),Object(R.jsx)(W.a,{primary:"Sign Out"})]})]})]});return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(y.a,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(O,"px)")},ml:{sm:"".concat(O,"px")}},children:Object(R.jsxs)(T.a,{children:[Object(R.jsx)(k.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:s,sx:{mr:2,display:{sm:"none"}},children:Object(R.jsx)(g.a,{})}),Object(R.jsx)(E.a,{variant:"h6",noWrap:!0,component:"div",children:"Weather Route"})]})}),Object(R.jsxs)(S.a,{component:"nav",sx:{width:{sm:O},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[Object(R.jsx)(V.a,{container:void 0,variant:"temporary",open:a,onClose:s,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:O}},children:u}),Object(R.jsx)(V.a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:O}},open:!0,children:u})]})]})}var B=a(247),U=a(97),L=r.a.forwardRef((function(e,t){return Object(R.jsx)("div",{ref:t,style:{height:"100%"}})}));function N(e){var t,a=e.start,r=e.end,s=e.beginEndCallback,i=e.sx,c=Object(n.useState)(null),l=Object(o.a)(c,2),u=l[0],d=l[1],j=Object(n.useCallback)((function(e){e&&d(e)}),[]);return Object(R.jsx)(B.a,{height:"100%",sx:i,children:Object(R.jsxs)(U.a,{googleMapsAPIKey:null!==(t="AIzaSyC7z_by3P2gLvavfO81-W_1AqGmqSQkkoc")?t:"",mapContainer:u,options:{zoom:8,fullscreenControl:!1,streetViewControl:!1,zoomControl:!1,mapTypeControl:!1},onLoad:function(e){return e.setZoom(4)},children:[Object(R.jsx)(L,{ref:j}),a&&r&&Object(R.jsx)(q,{start:a,end:r,beginEndCallback:s})]})})}function q(e){var t=e.start,a=e.end,r=e.beginEndCallback,s=(Object(U.c)().map,Object(U.b)({renderOnMap:!0,renderOptions:{}})),i=(s.directionsService,s.findRoute,s.findAndRenderRoute);s.renderRouteOfIndex;return Object(n.useEffect)((function(){i&&i({origin:t,destination:a,travelMode:google.maps.TravelMode.DRIVING}).then((function(e){var t=e.routes[0];console.log(t),r&&r({beginLocation:{lat:t.legs[0].start_location.lat(),lon:t.legs[0].start_location.lng()},endLocation:{lat:t.legs[0].end_location.lat(),lon:t.legs[0].end_location.lng()},beginAddress:t.legs[0].start_address,endAddress:t.legs[0].end_address})}))}),[t,a]),Object(R.jsx)(R.Fragment,{})}L.displayName="MapCanvas",N.displayName="Map";var z=r.a.memo(N);function F(){return Object(R.jsx)(z,{start:"logan, ut",end:"ogden, ut"})}var D,_=r.a.memo(F),G=a(22);a(85);!function(e){e.auth="auth",e.user="user"}(D||(D={}));var J=function(e){var t=Q[e.code];return null!==t&&void 0!==t?t:e.message.replace("Firebase: ","").replace(" (".concat(e.code,")"),"")},Q={"auth/email-already-exists":"An account already exists with this email.","auth/requires-recent-login":"Recent login required. Please sign out then sign back in to perform this action","auth/weak-password":"This password is too weak","auth/invalid-password":"This password is invalid.","auth/invalid-email":"Email address is invalid","auth/user-not-found":"Account does not exist for this email address","auth/wrong-password":"Incorrect password","auth/email-already-in-use":"An account already exists with this email"},Z=function(e){return e?{id:e.uid,name:e.displayName,email:e.email,phone:e.phoneNumber,lastSignIn:e.metadata.lastSignInTime&&new Date(e.metadata.lastSignInTime)||void 0}:null},H=function(){return Z(h.currentUser)},K=a(14),$=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Math.round(e*Math.pow(10,t))/Math.pow(10,t)};function X(e){var t,a={values:{},messages:{},isValid:{},touched:{},validators:{},formValid:!1,formMessage:"",attemptedSubmit:!1},n=Object(K.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;a.values[r]="",a.messages[r]="",a.isValid[r]=!1,a.touched[r]=!1,a.validators[r]=function(){return a}}}catch(s){n.e(s)}finally{n.f()}return a}function Y(e){for(var t in(e=ee(e)).touched)e.touched[t]=!0;return e.attemptedSubmit=!0,e.formValid||(e.formMessage="Please fix the errors in the form"),e}function ee(e){var t=!0;for(var a in e.validators)(e=e.validators[a](e)).isValid[a]||(t=!1);return e.formValid=t,e}function te(e,t){var a=e.target.name,n=e.target.value;t.isValid[a]||(t=t.validators[a](t));var r=t.values;return r[a]=n,Object(G.a)(Object(G.a)({},t),{},{values:r})}var ae=a(253),ne=a(254),re=a(259),se=a(268),ie=["name","email"],oe=function(e){return e.isValid.email=!!e.values.email.match(p),e.messages.email=e.isValid.email?"":"Invalid email address",Object(G.a)({},e)},ce=function(e){return e.isValid.name=e.values.name.length>0,e.messages.name=e.isValid.name?"":"Required",Object(G.a)({},e)};var le=function(){var e=Object(n.useContext)(ze),t=e.user,a=e.updateUser,s=r.a.useState(!1),i=Object(o.a)(s,2),c=i[0],l=i[1],d=r.a.useState(function(e){var t,a;return Object(G.a)(Object(G.a)({},X(ie)),{},{values:{name:null!==(t=e.name)&&void 0!==t?t:"",email:null!==(a=e.email)&&void 0!==a?a:""},validators:{email:oe,name:ce}})}(t)),j=Object(o.a)(d,2),m=j[0],b=j[1],f=r.a.useState(!1),p=Object(o.a)(f,2),O=p[0],x=p[1];return Object(n.useEffect)((function(){return x(t.name!==m.values.name||t.email!==m.values.email)}),[m]),Object(R.jsxs)(B.a,{component:"form",onSubmit:function(e){var n,r;e.preventDefault(),b((function(e){return Y(e)})),m.formValid&&(l(!0),Promise.all([t.name!==m.values.name?(r=m.values.name,h.currentUser?Object(u.g)(h.currentUser,{displayName:r}):Promise.reject()):Promise.resolve(),t.email!==m.values.email?(n=m.values.email,h.currentUser?Object(u.e)(h.currentUser,n):Promise.reject()):Promise.resolve()]).then((function(){return a()})).catch((function(e){return b((function(t){return Object(G.a)(Object(G.a)({},t),{},{formMessage:J(e)})}))})).finally((function(){return l(!1)})))},noValidate:!0,children:[Object(R.jsx)(ae.a,{variant:"standard",fullWidth:!0,label:"Name",name:"name",defaultValue:t.name,margin:"normal",onChange:function(e){return b((function(t){return te(e,t)}))},onBlur:function(){m.touched.name=!0,b((function(e){return ee(e)}))},error:m.touched.name&&!m.isValid.name,helperText:m.touched.name&&m.messages.name}),Object(R.jsx)(ae.a,{variant:"standard",fullWidth:!0,label:"Email",type:"email",name:"email",defaultValue:t.email,margin:"normal",onChange:function(e){return b((function(t){return te(e,t)}))},onBlur:function(){m.touched.email=!0,b((function(e){return ee(e)}))},error:m.touched.email&&!m.isValid.email,helperText:m.touched.email&&m.messages.email}),m.attemptedSubmit&&m.formMessage&&Object(R.jsx)(ne.a,{sx:{mt:2},severity:"error",children:m.formMessage||"Form error"}),Object(R.jsx)(re.a,{type:"submit",disabled:c,fullWidth:!0,variant:"contained",sx:{mt:2,display:O?"default":"none"},children:c?Object(R.jsx)(se.a,{size:24,color:"inherit"}):"Save Changes"})]})},ue=a(269);function de(){return Object(R.jsxs)(ue.a,{children:[Object(R.jsx)(E.a,{variant:"h1",children:"Edit Profile"}),Object(R.jsx)(le,{})]})}var je=a(274),me=a(147),be=a(118),he=r.a.forwardRef((function(e,t){var a=e.href,n=Object(me.a)(e,["href"]);return Object(R.jsx)(c.b,Object(G.a)({ref:t,to:a},n))}));he.displayName="LinkBehavior";var fe=Object(be.a)({palette:{primary:{main:"#2a8544"},secondary:{main:"#f50057"}},components:{MuiLink:{defaultProps:{component:he}},MuiButtonBase:{defaultProps:{LinkComponent:he}}},typography:{h1:{color:"#2a8544",fontSize:"2.5rem",fontWeight:"500",marginTop:"1.5rem"},h2:{color:"#2a8544",fontSize:"1.5rem",fontWeight:"500",marginTop:"1.5rem"}}}),pe=a(248),Oe=["name","start","end"],xe=function(e){return e.isValid.name=e.values.name.length>0,e.messages.name=e.isValid.name?"":"Required",Object(G.a)({},e)},ve=function(e){return e.isValid.start=e.values.start.length>0,e.messages.start=e.isValid.start?"":"Required",Object(G.a)({},e)},ge=function(e){return e.isValid.end=e.values.end.length>0,e.messages.end=e.isValid.end?"":"Required",Object(G.a)({},e)},we="new-saved-route-form";var ye=function(e){var t=e.setSubmitting,a=e.submitCallback,n=r.a.useState(Object(G.a)(Object(G.a)({},X(Oe)),{},{validators:{name:xe,start:ve,end:ge}})),s=Object(o.a)(n,2),i=s[0],c=s[1],l=r.a.useState({start:"",end:""}),u=Object(o.a)(l,2),d=u[0],m=u[1],h=r.a.useState(),f=Object(o.a)(h,2),p=f[0],O=f[1];function x(){m({start:i.values.start,end:i.values.end})}return Object(R.jsxs)(pe.a,{gap:2,children:[Object(R.jsxs)(B.a,{id:we,component:"form",onSubmit:function(e){e.preventDefault(),c((function(e){return Y(e)})),i.formValid&&(p?(t(!0),function(e){var t=H();if(!t)return Promise.reject();var a=Object(j.a)(b,t.id);return Object(j.f)(Object(j.c)(a),e).then((function(){return Promise.resolve()})).catch((function(){return Promise.reject()}))}(Object(G.a)({name:i.values.name},p)).then((function(){a()})).catch((function(e){return c((function(t){return Object(G.a)(Object(G.a)({},t),{},{formMessage:J(e)})}))})).finally((function(){return t(!1)}))):c((function(e){return Object(G.a)(Object(G.a)({},e),{},{formMessage:"No route found"})})))},noValidate:!0,sx:{height:"100%"},children:[Object(R.jsx)(ae.a,{variant:"standard",fullWidth:!0,label:"Route Name",name:"name",margin:"normal",onChange:function(e){return c((function(t){return te(e,t)}))},onBlur:function(){i.touched.name=!0,c((function(e){return ee(e)}))},error:i.touched.name&&!i.isValid.name,helperText:i.touched.name&&i.messages.name}),Object(R.jsx)(ae.a,{variant:"standard",fullWidth:!0,label:"Start Location",name:"start",margin:"normal",onChange:function(e){return c((function(t){return te(e,t)}))},onBlur:function(){i.touched.start=!0,c((function(e){return ee(e)})),x()},error:i.touched.start&&!i.isValid.start,helperText:i.touched.start&&i.messages.start}),Object(R.jsx)(ae.a,{variant:"standard",fullWidth:!0,label:"End Location",name:"end",margin:"normal",onChange:function(e){return c((function(t){return te(e,t)}))},onBlur:function(){i.touched.end=!0,c((function(e){return ee(e)})),x()},error:i.touched.end&&!i.isValid.end,helperText:i.touched.end&&i.messages.end}),i.attemptedSubmit&&i.formMessage&&Object(R.jsx)(ne.a,{sx:{mt:2},severity:"error",children:i.formMessage||"Form error"})]}),(null===d||void 0===d?void 0:d.start)&&(null===d||void 0===d?void 0:d.end)&&Object(R.jsx)(z,{start:d.start,end:d.end,beginEndCallback:function(e){console.log(e),O(e)},sx:{height:"20rem"}})]})},Se=a(249),Ce=a(270),Ve=a(250),ke=a(271),Pe=a(272);function Me(e){var t=e.open,a=e.onClose,n=Object(Se.a)(fe.breakpoints.down("sm")),s=r.a.useState(!1),i=Object(o.a)(s,2),c=i[0],l=i[1];return Object(R.jsxs)(Ce.a,{fullScreen:n,open:t,fullWidth:!0,maxWidth:"sm",scroll:"paper",children:[Object(R.jsx)(Ve.a,{children:"New Saved Route"}),Object(R.jsx)(ke.a,{dividers:!0,children:Object(R.jsx)(ye,{setSubmitting:l,submitCallback:a})}),Object(R.jsxs)(Pe.a,{sx:{pb:n?5:"default"},children:[Object(R.jsx)(re.a,{onClick:a,children:"Cancel"}),Object(R.jsx)(re.a,{type:"submit",disabled:c,variant:"contained",form:we,children:c?Object(R.jsx)(se.a,{size:24,color:"inherit"}):"Create Route"})]})]})}var Ie=a(251),We=a(146),Te=a(273);function Ee(e){var t=e.route,a=e.changeCallback,r=Object(n.useState)(null),s=Object(o.a)(r,2),i=s[0],c=s[1],l=Boolean(i);return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(M.a,{disablePadding:!0,secondaryAction:Object(R.jsx)(k.a,{onClick:function(e){c(e.currentTarget)},children:Object(R.jsx)(w.a,{children:"more_vert"})}),children:[Object(R.jsxs)(Ie.a,{children:[Object(R.jsx)(I.a,{children:Object(R.jsx)(w.a,{children:"directions"})}),Object(R.jsx)(W.a,{primary:t.name,secondary:Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("span",{style:{display:"block"},children:t.beginAddress?t.beginAddress.replace(", USA",""):"".concat($(t.beginLocation.lat),"\xba, ").concat($(t.beginLocation.lon),"\xba")}),Object(R.jsx)("span",{style:{display:"block"},children:t.endAddress?t.endAddress.replace(", USA",""):"".concat($(t.endLocation.lat),"\xba, ").concat($(t.endLocation.lon),"\xba")})]})})]}),Object(R.jsx)(We.a,{id:"basic-menu",anchorEl:i,open:l,onClose:function(){c(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:Object(R.jsx)(Te.a,{onClick:function(){(function(e){var t=H();return t?Object(j.b)(Object(j.c)(Object(j.a)(b,t.id),e)).then((function(){return Promise.resolve()})).catch((function(){return Promise.reject()})):Promise.reject()})(t.id).then((function(){return a()})).catch((function(){return alert("Error deleting saved route")}))},children:"Delete route"})})]})})}var Re=function(){var e=r.a.useState(),t=Object(o.a)(e,2),a=t[0],s=t[1],i=r.a.useState(),c=Object(o.a)(i,2),l=c[0],u=c[1],d=r.a.useState(!1),m=Object(o.a)(d,2),h=m[0],f=m[1];Object(n.useEffect)((function(){return p()}),[]);var p=function(){(function(){var e=H();return e?Object(j.d)(Object(j.a)(b,e.id)).then((function(e){var t=[];return e.forEach((function(e){return t.push(Object(G.a)(Object(G.a)({},e.data()),{},{id:e.id}))})),Promise.resolve(t)})).catch((function(){return Promise.reject()})):Promise.reject()})().then((function(e){return s(e)})).catch((function(){return u("Error loading saved routes")}))};return Object(R.jsxs)(ue.a,{children:[Object(R.jsx)(E.a,{variant:"h1",sx:{mb:2},children:"Saved Routes"}),Object(R.jsx)(je.a,{color:"primary",onClick:function(){return f(!0)},sx:{position:"fixed",bottom:"2rem",right:"1.5rem"},children:Object(R.jsx)(w.a,{children:"add"})}),l?Object(R.jsx)(ne.a,{severity:"error",children:l}):a?0===a.length?Object(R.jsxs)("p",{children:["No saved routes. Click the"," ",Object(R.jsx)(w.a,{sx:{fontSize:"1rem",fontWeight:"bold"},children:"add"})," icon to add a new one."]}):Object(R.jsx)(P.a,{children:a.map((function(e){return Object(R.jsx)("div",{children:Object(R.jsx)(Ee,{route:e,changeCallback:p})},e.id)}))}):Object(R.jsx)(se.a,{sx:{display:"block",mx:"auto",mt:3}}),Object(R.jsx)(Me,{open:h,onClose:function(){f(!1),p()}})]})},Ae=["password1","password2"],Be=function(e){return e.isValid.password1=e.values.password1.length>0,e.messages.password1=e.isValid.password1?"":"Required",Object(G.a)({},e)},Ue=function(e){return e.isValid.password2=e.values.password1===e.values.password2,e.messages.password2=e.isValid.password2?"":"Passwords do not match",Object(G.a)({},e)};var Le=function(){var e=Object(n.useContext)(ze).updateUser,t=r.a.useState(!1),a=Object(o.a)(t,2),s=a[0],i=a[1],c=r.a.useState(Object(G.a)(Object(G.a)({},X(Ae)),{},{validators:{password1:Be,password2:Ue}})),l=Object(o.a)(c,2),d=l[0],j=l[1];return Object(R.jsxs)(B.a,{component:"form",onSubmit:function(t){var a;t.preventDefault(),j((function(e){return Y(e)})),d.formValid&&(i(!0),(a=d.values.password1,h.currentUser?Object(u.f)(h.currentUser,a):Promise.reject()).then((function(){return e()})).catch((function(e){return j((function(t){return Object(G.a)(Object(G.a)({},t),{},{formMessage:J(e)})}))})).finally((function(){return i(!1)})))},noValidate:!0,children:[Object(R.jsx)(ae.a,{variant:"standard",fullWidth:!0,label:"New Password",type:"password",name:"password1",margin:"normal",onChange:function(e){return j((function(t){return te(e,t)}))},onBlur:function(){d.touched.password1=!0,j((function(e){return ee(e)}))},error:d.touched.password1&&!d.isValid.password1,helperText:d.touched.password1&&d.messages.password1}),Object(R.jsx)(ae.a,{variant:"standard",fullWidth:!0,label:"Confirm New Password",type:"password",name:"password2",margin:"normal",onChange:function(e){return j((function(t){return te(e,t)}))},onBlur:function(){d.touched.password2=!0,j((function(e){return ee(e)}))},error:d.touched.password2&&!d.isValid.password2,helperText:d.touched.password2&&d.messages.password2}),d.attemptedSubmit&&d.formMessage&&Object(R.jsx)(ne.a,{sx:{mt:2},severity:"error",children:d.formMessage||"Form error"}),Object(R.jsx)(re.a,{type:"submit",disabled:s,fullWidth:!0,variant:"contained",sx:{mt:2},children:s?Object(R.jsx)(se.a,{size:24,color:"inherit"}):"Change Password"})]})};function Ne(){return Object(R.jsxs)(ue.a,{children:[Object(R.jsx)(E.a,{variant:"h1",children:"Change Password"}),Object(R.jsx)(Le,{})]})}function qe(e){return Object(R.jsxs)(B.a,{sx:{mt:1},children:[Object(R.jsx)("b",{children:e.label}),Object(R.jsx)("br",{}),e.children]})}var ze,Fe=a(143),De=a.n(Fe),_e=a(275);function Ge(){var e=r.a.useState(void 0),t=Object(o.a)(e,2),a=t[0],s=t[1],i=r.a.useState(),c=Object(o.a)(i,2),l=c[0],u=c[1],d=r.a.useState(),j=Object(o.a)(d,2),m=j[0],b=j[1],h=function(){var e,t;a&&(e=a.coords.latitude,t=a.coords.longitude,De()("".concat("https://api.openweathermap.org/data/2.5","/onecall"),{params:{lat:e,lon:t,appid:"9539a9cdf9b5b4f1827106f5cc5eafbf",units:"imperial"}}).then((function(e){return e.data}))).then((function(e){return u(e.current)})).catch((function(e){return b(e.response.data.message)}))};return Object(n.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){return s(e)}),(function(e){switch(e.code){case e.PERMISSION_DENIED:s(null),b("Location request denied");break;case e.POSITION_UNAVAILABLE:s(null),b("Location information is unavailable");break;case e.TIMEOUT:s(null),b("Location request timed out");break;default:s(null),b("An unknown error occurred while getting the location")}})):alert("Geolocation is not supported by this browser.")}),[]),Object(n.useEffect)((function(){a&&h()}),[a]),Object(R.jsxs)(ue.a,{children:[Object(R.jsx)(E.a,{variant:"h1",children:"Weather"}),Object(R.jsx)("p",{children:"Weather for current location"}),!m&&(!l||!a)&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(E.a,{variant:"overline",children:a?"Getting weather...":"Getting current location..."}),Object(R.jsx)(_e.a,{})]}),m&&Object(R.jsx)(ne.a,{severity:"error",children:m}),l&&Object(R.jsxs)("div",{children:[Object(R.jsxs)(qe,{label:"Temperature",children:[null===l||void 0===l?void 0:l.temp,"\xbaF"]}),Object(R.jsxs)(qe,{label:"Humidity",children:[null===l||void 0===l?void 0:l.humidity,"%"]}),Object(R.jsxs)(qe,{label:"Cloud Cover",children:[null===l||void 0===l?void 0:l.clouds,"%"]})]})]})}var Je=function(e){var t=Object(n.useState)(e.user),a=Object(o.a)(t,2),s=a[0],i=a[1],u=function(){var e=H();e&&i(e)};return ze=r.a.createContext({user:s,updateUser:u}),Object(R.jsx)(ze.Provider,{value:{user:s,updateUser:u},children:Object(R.jsx)(S.a,{sx:{display:"flex",height:"100vh"},children:Object(R.jsxs)(c.a,{basename:"/",children:[Object(R.jsx)(A,{}),Object(R.jsx)(S.a,{component:"main",sx:{height:"100%",flexGrow:1,width:{sm:"calc(100% - ".concat(O,"px)")}},children:Object(R.jsxs)(pe.a,{height:"100%",children:[Object(R.jsx)(T.a,{}),Object(R.jsxs)(l.d,{children:[Object(R.jsx)(l.b,{exact:!0,path:x.home,component:_}),Object(R.jsx)(l.b,{exact:!0,path:x.savedRoutes,component:Re}),Object(R.jsx)(l.b,{exact:!0,path:x.weather,component:Ge}),Object(R.jsx)(l.b,{exact:!0,path:x.profile,component:de}),Object(R.jsx)(l.b,{exact:!0,path:x.security,component:Ne}),Object(R.jsx)(l.b,{path:"/",children:Object(R.jsx)(l.a,{to:x.home})})]})]})})]})})})},Qe=a(276),Ze=["email","password"],He=function(e){return e.isValid.email=!!e.values.email.match(p),e.messages.email=e.isValid.email?"":"Invalid email address",Object(G.a)({},e)},Ke=function(e){return e.isValid.password=e.values.password.length>0,e.messages.password=e.isValid.password?"":"Required",Object(G.a)({},e)};var $e=function(){var e=r.a.useState(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],s=r.a.useState(Object(G.a)(Object(G.a)({},X(Ze)),{},{validators:{email:He,password:Ke}})),i=Object(o.a)(s,2),c=i[0],l=i[1];return Object(R.jsxs)(S.a,{component:"form",onSubmit:function(e){var t,a;e.preventDefault(),l((function(e){return Y(e)})),c.formValid&&(n(!0),(t=c.values.email,a=c.values.password,Object(u.c)(h,t,a).then((function(){return Promise.resolve()}))).catch((function(e){return l((function(t){return Object(G.a)(Object(G.a)({},t),{},{formMessage:J(e)})}))})).finally((function(){return n(!1)})))},noValidate:!0,sx:{mt:1},children:[Object(R.jsx)(ae.a,{margin:"normal",required:!0,fullWidth:!0,type:"email",id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return l((function(t){return te(e,t)}))},onBlur:function(){c.touched.email=!0,l((function(e){return ee(e)}))},error:c.touched.email&&!c.isValid.email,helperText:c.touched.email&&c.messages.email}),Object(R.jsx)(ae.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return l((function(t){return te(e,t)}))},onBlur:function(){c.touched.password=!0,l((function(e){return ee(e)}))},error:c.touched.password&&!c.isValid.password,helperText:c.touched.password&&c.messages.password}),c.attemptedSubmit&&c.formMessage&&Object(R.jsx)(ne.a,{sx:{mt:2},severity:"error",children:c.formMessage||"Form error"}),Object(R.jsx)(re.a,{type:"submit",disabled:a,fullWidth:!0,variant:"contained",sx:{mt:2,mb:2},children:a?Object(R.jsx)(se.a,{size:24,color:"inherit"}):"Sign In"}),Object(R.jsx)(Qe.a,{href:x.signUp,variant:"body2",children:"Don't have an account? Sign Up"})]})},Xe=a(144),Ye=a.n(Xe),et=a(260);function tt(){return Object(R.jsx)(ue.a,{children:Object(R.jsxs)(S.a,{sx:{mt:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(R.jsx)(et.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(R.jsx)(Ye.a,{})}),Object(R.jsx)(E.a,{component:"h1",variant:"h5",children:"Sign In"}),Object(R.jsx)($e,{})]})})}var at=["name","email","password1","password2"],nt=function(e){return e.isValid.name=e.values.name.length>0,e.messages.name=e.isValid.name?"":"Required",Object(G.a)({},e)},rt=function(e){return e.isValid.email=!!e.values.email.match(p),e.messages.email=e.isValid.email?"":"Invalid email address",Object(G.a)({},e)},st=function(e){return e.isValid.password1=e.values.password1.length>4,e.messages.password1=e.isValid.password1?"":"Must be at least 5 characters long",Object(G.a)({},e)},it=function(e){return e.isValid.password2=e.values.password2===e.values.password1,e.messages.password2=e.isValid.password2?"":"Passwords do not match",Object(G.a)({},e)},ot=function(){return Object(G.a)(Object(G.a)({},X(at)),{},{validators:{name:nt,email:rt,password1:st,password2:it}})};var ct=function(){var e=n.useState(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],s=n.useState(ot),i=Object(o.a)(s,2),c=i[0],l=i[1];return Object(R.jsxs)(S.a,{component:"form",onSubmit:function(e){var t,a,n;e.preventDefault(),l((function(e){return Y(e)})),c.formValid&&(r(!0),(t=c.values.email,a=c.values.password1,n=c.values.name,Object(u.a)(h,t,a).then((function(e){return Object(u.g)(e.user,{displayName:n})}))).catch((function(e){return l((function(t){return Object(G.a)(Object(G.a)({},t),{},{formMessage:J(e)})}))})).finally((function(){return r(!1)})))},noValidate:!0,sx:{mt:1},children:[Object(R.jsx)(ae.a,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"name",autoFocus:!0,onChange:function(e){return l((function(t){return te(e,t)}))},onBlur:function(){c.touched.name=!0,l((function(e){return ee(e)}))},error:c.touched.name&&!c.isValid.name,helperText:c.touched.name&&c.messages.name}),Object(R.jsx)(ae.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",type:"email",autoComplete:"email",onChange:function(e){return l((function(t){return te(e,t)}))},onBlur:function(){c.touched.email=!0,l((function(e){return ee(e)}))},error:c.touched.email&&!c.isValid.email,helperText:c.touched.email&&c.messages.email}),Object(R.jsx)(ae.a,{margin:"normal",required:!0,fullWidth:!0,name:"password1",label:"Password",type:"password",id:"password1",autoComplete:"new-password",onChange:function(e){return l((function(t){return te(e,t)}))},onBlur:function(){c.touched.password1=!0,l((function(e){return ee(e)}))},error:c.touched.password1&&!c.isValid.password1,helperText:c.touched.password1&&c.messages.password1}),Object(R.jsx)(ae.a,{margin:"normal",required:!0,fullWidth:!0,name:"password2",label:"Confirm Password",type:"password",id:"password2",autoComplete:"new-password",onChange:function(e){return l((function(t){return te(e,t)}))},onBlur:function(){c.touched.password2=!0,l((function(e){return ee(e)}))},error:c.touched.password2&&!c.isValid.password2,helperText:c.touched.password2&&c.messages.password2}),c.attemptedSubmit&&c.formMessage&&Object(R.jsx)(ne.a,{sx:{mt:2},severity:"error",children:c.formMessage||"Form error"}),Object(R.jsx)(re.a,{type:"submit",disabled:a,fullWidth:!0,variant:"contained",sx:{mt:2,mb:2},children:a?Object(R.jsx)(se.a,{size:24,color:"inherit"}):"Sign Up"}),Object(R.jsx)(Qe.a,{href:x.signIn,variant:"body2",children:"Already have an account? Sign In"})]})},lt=a(145),ut=a.n(lt);function dt(){return Object(R.jsx)(ue.a,{children:Object(R.jsxs)(S.a,{sx:{mt:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(R.jsx)(et.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(R.jsx)(ut.a,{})}),Object(R.jsx)(E.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(R.jsx)(ct,{})]})})}var jt=function(){return Object(R.jsx)("div",{className:"app-unauthorized",children:Object(R.jsx)(c.a,{basename:"/",children:Object(R.jsxs)(l.d,{children:[Object(R.jsx)(l.b,{exact:!0,path:x.signIn,component:tt}),Object(R.jsx)(l.b,{exact:!0,path:x.signUp,component:dt}),Object(R.jsx)(l.a,{push:!0,to:x.signIn})]})})})},mt=a(252),bt=a(261),ht=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,277)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.onAuthStateChanged((function(e){var t=Z(e);t?i.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsxs)(bt.a,{theme:fe,children:[Object(R.jsx)(mt.a,{}),Object(R.jsx)(Je,{user:t})]})}),document.getElementById("root")):i.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsxs)(bt.a,{theme:fe,children:[Object(R.jsx)(mt.a,{}),Object(R.jsx)(jt,{})]})}),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),ht()}},[[199,1,2]]]);
//# sourceMappingURL=main.1337fcb5.chunk.js.map