(this["webpackJsonpweather-route"]=this["webpackJsonpweather-route"]||[]).push([[0],{166:function(e,t,a){},167:function(e,t,a){},199:function(e,t,a){"use strict";a.r(t);a(166),a(167);var n=a(1),r=a.n(n),s=a(45),i=a.n(s),o=a(14),c=a(55),u=a(29),l=a(54),d=a(138),m=a(50),j=Object(d.a)({apiKey:"AIzaSyCyk-8pQIXG4EJOyRa3QT0yzUfr661yuyI",authDomain:"weather-route-e1a9c.firebaseapp.com",projectId:"weather-route-e1a9c",storageBucket:"weather-route-e1a9c.appspot.com",messagingSenderId:"184699653844",appId:"1:184699653844:web:74997c51e6e4b49ed83541"}),b=Object(m.e)(),h=Object(l.b)(j),f=function(){return Object(l.d)(h)},p=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,O=240,x={home:"/home",savedRoutes:"/saved-routes",weather:"/weather",profile:"/profile",security:"/security",signIn:"/signin",signUp:"/signup"},v=a(142),g=a.n(v),w=a(264),y=a(265),S=a(244),V=a(239),C=a(257),P=a(267),k=a(263),I=a(256),M=a(240),W=a(241),T=a(262),B=a(82),E=a(2);function R(){var e=n.useState(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],s=function(){r(!a)},i=[{title:"Home",url:x.home,icon:"home"},{title:"Saved Routes",url:x.savedRoutes,icon:"star"},{title:"Weather",url:x.weather,icon:"wb_sunny"}],u=[{title:"Profile",url:x.profile,icon:"account_circle"},{title:"Security",url:x.security,icon:"lock"}],l=Object(E.jsxs)("div",{children:[Object(E.jsx)(T.a,{}),Object(E.jsx)(V.a,{}),Object(E.jsx)(k.a,{onClick:s,children:i.map((function(e){return Object(E.jsxs)(I.a,{button:!0,component:c.b,to:e.url,children:[Object(E.jsx)(M.a,{children:Object(E.jsx)(w.a,{children:e.icon})}),Object(E.jsx)(W.a,{primary:e.title})]},e.title)}))}),Object(E.jsx)(V.a,{}),Object(E.jsxs)(k.a,{onClick:s,children:[u.map((function(e){return Object(E.jsxs)(I.a,{button:!0,component:c.b,to:e.url,children:[Object(E.jsx)(M.a,{children:Object(E.jsx)(w.a,{children:e.icon})}),Object(E.jsx)(W.a,{primary:e.title})]},e.title)})),Object(E.jsxs)(I.a,{button:!0,onClick:f,children:[Object(E.jsx)(M.a,{children:Object(E.jsx)(w.a,{children:"logout"})}),Object(E.jsx)(W.a,{primary:"Sign Out"})]})]})]});return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(y.a,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(O,"px)")},ml:{sm:"".concat(O,"px")}},children:Object(E.jsxs)(T.a,{children:[Object(E.jsx)(P.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:s,sx:{mr:2,display:{sm:"none"}},children:Object(E.jsx)(g.a,{})}),Object(E.jsx)(B.a,{variant:"h6",noWrap:!0,component:"div",children:"Weather Route"})]})}),Object(E.jsxs)(S.a,{component:"nav",sx:{width:{sm:O},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[Object(E.jsx)(C.a,{container:void 0,variant:"temporary",open:a,onClose:s,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:O}},children:l}),Object(E.jsx)(C.a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:O}},open:!0,children:l})]})]})}var U=a(247),q=a(78);function N(e){var t,a=e.start,n=e.end,s=r.a.useRef(0),i=r.a.useState(null),c=Object(o.a)(i,2),u=c[0],l=c[1],d=Object(q.d)({id:"google-map-script",googleMapsApiKey:null!==(t="AIzaSyC7z_by3P2gLvavfO81-W_1AqGmqSQkkoc")?t:""}).isLoaded;return Object(E.jsx)(U.a,{height:"100%",children:d&&Object(E.jsxs)(q.c,{mapContainerStyle:{width:"100%",height:"100%"},children:[Object(E.jsx)(q.b,{options:{origin:a,destination:n,travelMode:google.maps.TravelMode.DRIVING},callback:function(e){null!==e&&s.current<2&&(s.current+=1,l(e))}}),u&&Object(E.jsx)(q.a,{options:{directions:u}})]})})}var z=r.a.memo(N);function D(){return Object(E.jsx)(z,{start:"logan, ut",end:"ogden, ut"})}var A,F=r.a.memo(D),L=a(22);a(87);!function(e){e.auth="auth",e.user="user"}(A||(A={}));var G=function(e){var t=_[e.code];return null!==t&&void 0!==t?t:e.message.replace("Firebase: ","").replace(" (".concat(e.code,")"),"")},_={"auth/email-already-exists":"An account already exists with this email.","auth/requires-recent-login":"Recent login required. Please sign out then sign back in to perform this action","auth/weak-password":"This password is too weak","auth/invalid-password":"This password is invalid.","auth/invalid-email":"Email address is invalid","auth/user-not-found":"Account does not exist for this email address","auth/wrong-password":"Incorrect password","auth/email-already-in-use":"An account already exists with this email"},J=function(e){return e?{id:e.uid,name:e.displayName,email:e.email,phone:e.phoneNumber,lastSignIn:e.metadata.lastSignInTime&&new Date(e.metadata.lastSignInTime)||void 0}:null},Q=function(){return J(h.currentUser)},H=a(15);function K(e){var t,a={values:{},messages:{},isValid:{},touched:{},validators:{},formValid:!1,formMessage:"",attemptedSubmit:!1},n=Object(H.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;a.values[r]="",a.messages[r]="",a.isValid[r]=!1,a.touched[r]=!1,a.validators[r]=function(){return a}}}catch(s){n.e(s)}finally{n.f()}return a}function Z(e){for(var t in(e=$(e)).touched)e.touched[t]=!0;return e.attemptedSubmit=!0,e.formValid||(e.formMessage="Please fix the errors in the form"),e}function $(e){var t=!0;for(var a in e.validators)(e=e.validators[a](e)).isValid[a]||(t=!1);return e.formValid=t,e}function X(e,t){var a=e.target.name,n=e.target.value;t.isValid[a]||(t=t.validators[a](t));var r=t.values;return r[a]=n,Object(L.a)(Object(L.a)({},t),{},{values:r})}var Y=a(253),ee=a(254),te=a(259),ae=a(268),ne=["name","email"],re=function(e){return e.isValid.email=!!e.values.email.match(p),e.messages.email=e.isValid.email?"":"Invalid email address",Object(L.a)({},e)},se=function(e){return e.isValid.name=e.values.name.length>0,e.messages.name=e.isValid.name?"":"Required",Object(L.a)({},e)};var ie=function(){var e=Object(n.useContext)(Ae),t=e.user,a=e.updateUser,s=r.a.useState(!1),i=Object(o.a)(s,2),c=i[0],u=i[1],d=r.a.useState(function(e){var t,a;return Object(L.a)(Object(L.a)({},K(ne)),{},{values:{name:null!==(t=e.name)&&void 0!==t?t:"",email:null!==(a=e.email)&&void 0!==a?a:""},validators:{email:re,name:se}})}(t)),m=Object(o.a)(d,2),j=m[0],b=m[1],f=r.a.useState(!1),p=Object(o.a)(f,2),O=p[0],x=p[1];return Object(n.useEffect)((function(){return x(t.name!==j.values.name||t.email!==j.values.email)}),[j]),Object(E.jsxs)(U.a,{component:"form",onSubmit:function(e){var n,r;e.preventDefault(),b((function(e){return Z(e)})),j.formValid&&(u(!0),Promise.all([t.name!==j.values.name?(r=j.values.name,h.currentUser?Object(l.g)(h.currentUser,{displayName:r}):Promise.reject()):Promise.resolve(),t.email!==j.values.email?(n=j.values.email,h.currentUser?Object(l.e)(h.currentUser,n):Promise.reject()):Promise.resolve()]).then((function(){return a()})).catch((function(e){return b((function(t){return Object(L.a)(Object(L.a)({},t),{},{formMessage:G(e)})}))})).finally((function(){return u(!1)})))},noValidate:!0,children:[Object(E.jsx)(Y.a,{variant:"standard",fullWidth:!0,label:"Name",name:"name",defaultValue:t.name,margin:"normal",onChange:function(e){return b((function(t){return X(e,t)}))},onBlur:function(){j.touched.name=!0,b((function(e){return $(e)}))},error:j.touched.name&&!j.isValid.name,helperText:j.touched.name&&j.messages.name}),Object(E.jsx)(Y.a,{variant:"standard",fullWidth:!0,label:"Email",type:"email",name:"email",defaultValue:t.email,margin:"normal",onChange:function(e){return b((function(t){return X(e,t)}))},onBlur:function(){j.touched.email=!0,b((function(e){return $(e)}))},error:j.touched.email&&!j.isValid.email,helperText:j.touched.email&&j.messages.email}),j.attemptedSubmit&&j.formMessage&&Object(E.jsx)(ee.a,{sx:{mt:2},severity:"error",children:j.formMessage||"Form error"}),Object(E.jsx)(te.a,{type:"submit",disabled:c,fullWidth:!0,variant:"contained",sx:{mt:2,display:O?"default":"none"},children:c?Object(E.jsx)(ae.a,{size:24,color:"inherit"}):"Save Changes"})]})},oe=a(269);function ce(){return Object(E.jsxs)(oe.a,{children:[Object(E.jsx)(B.a,{variant:"h1",children:"Edit Profile"}),Object(E.jsx)(ie,{})]})}var ue=a(274),le=a(147),de=a(118),me=r.a.forwardRef((function(e,t){var a=e.href,n=Object(le.a)(e,["href"]);return Object(E.jsx)(c.b,Object(L.a)({ref:t,to:a},n))}));me.displayName="LinkBehavior";var je=Object(de.a)({palette:{primary:{main:"#2a8544"},secondary:{main:"#f50057"}},components:{MuiLink:{defaultProps:{component:me}},MuiButtonBase:{defaultProps:{LinkComponent:me}}},typography:{h1:{color:"#2a8544",fontSize:"2.5rem",fontWeight:"500",marginTop:"1.5rem"},h2:{color:"#2a8544",fontSize:"1.5rem",fontWeight:"500",marginTop:"1.5rem"}}}),be=["name","start","end"],he=function(e){return e.isValid.name=e.values.name.length>0,e.messages.name=e.isValid.name?"":"Required",Object(L.a)({},e)},fe=function(e){return e.isValid.start=e.values.start.length>0,e.messages.start=e.isValid.start?"":"Required",Object(L.a)({},e)},pe=function(e){return e.isValid.end=e.values.end.length>0,e.messages.end=e.isValid.end?"":"Required",Object(L.a)({},e)},Oe="new-saved-route-form";var xe=function(e){var t=e.setSubmitting,a=e.submitCallback,n=r.a.useState(Object(L.a)(Object(L.a)({},K(be)),{},{validators:{name:he,start:fe,end:pe}})),s=Object(o.a)(n,2),i=s[0],c=s[1];return Object(E.jsxs)(U.a,{id:Oe,component:"form",onSubmit:function(e){e.preventDefault(),c((function(e){return Z(e)})),i.formValid&&(t(!0),function(e){var t=Q();if(!t)return Promise.reject();var a=Object(m.a)(b,t.id);return Object(m.f)(Object(m.c)(a),e).then((function(){return Promise.resolve()})).catch((function(){return Promise.reject()}))}({name:i.values.name,begin:{lat:parseInt(i.values.start),lon:parseInt(i.values.start)},end:{lat:parseInt(i.values.end),lon:parseInt(i.values.end)}}).then((function(){a()})).catch((function(e){return c((function(t){return Object(L.a)(Object(L.a)({},t),{},{formMessage:G(e)})}))})).finally((function(){return t(!1)})))},noValidate:!0,children:[Object(E.jsx)(Y.a,{variant:"standard",fullWidth:!0,label:"Route Name",name:"name",margin:"normal",onChange:function(e){return c((function(t){return X(e,t)}))},onBlur:function(){i.touched.name=!0,c((function(e){return $(e)}))},error:i.touched.name&&!i.isValid.name,helperText:i.touched.name&&i.messages.name}),Object(E.jsx)(Y.a,{variant:"standard",fullWidth:!0,label:"Start Location",name:"start",margin:"normal",onChange:function(e){return c((function(t){return X(e,t)}))},onBlur:function(){i.touched.start=!0,c((function(e){return $(e)}))},error:i.touched.start&&!i.isValid.start,helperText:i.touched.start&&i.messages.start}),Object(E.jsx)(Y.a,{variant:"standard",fullWidth:!0,label:"End Location",name:"end",margin:"normal",onChange:function(e){return c((function(t){return X(e,t)}))},onBlur:function(){i.touched.end=!0,c((function(e){return $(e)}))},error:i.touched.end&&!i.isValid.end,helperText:i.touched.end&&i.messages.end}),i.attemptedSubmit&&i.formMessage&&Object(E.jsx)(ee.a,{sx:{mt:2},severity:"error",children:i.formMessage||"Form error"})]})},ve=a(248),ge=a(270),we=a(249),ye=a(271),Se=a(272);function Ve(e){var t=e.open,a=e.onClose,n=Object(ve.a)(je.breakpoints.down("sm")),s=r.a.useState(!1),i=Object(o.a)(s,2),c=i[0],u=i[1];return Object(E.jsxs)(ge.a,{fullScreen:n,open:t,fullWidth:!0,maxWidth:"sm",children:[Object(E.jsx)(we.a,{children:"New Saved Route"}),Object(E.jsx)(ye.a,{dividers:!0,children:Object(E.jsx)(xe,{setSubmitting:u,submitCallback:a})}),Object(E.jsxs)(Se.a,{sx:{pb:n?3:"default"},children:[Object(E.jsx)(te.a,{onClick:a,children:"Cancel"}),Object(E.jsx)(te.a,{type:"submit",disabled:c,variant:"contained",form:Oe,children:c?Object(E.jsx)(ae.a,{size:24,color:"inherit"}):"Create Route"})]})]})}var Ce=a(250),Pe=a(146),ke=a(273);function Ie(e){var t=e.route,a=e.changeCallback,r=Object(n.useState)(null),s=Object(o.a)(r,2),i=s[0],c=s[1],u=Boolean(i);return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(I.a,{disablePadding:!0,secondaryAction:Object(E.jsx)(P.a,{onClick:function(e){c(e.currentTarget)},children:Object(E.jsx)(w.a,{children:"more_vert"})}),children:[Object(E.jsxs)(Ce.a,{children:[Object(E.jsx)(M.a,{children:Object(E.jsx)(w.a,{children:"directions"})}),Object(E.jsx)(W.a,{primary:t.name,secondary:Object(E.jsxs)("span",{children:[t.begin.lat,"\xba, ",t.begin.lon,"\xba \u2192 ",t.end.lat,"\xba,"," ",t.end.lon,"\xba"]})})]}),Object(E.jsx)(Pe.a,{id:"basic-menu",anchorEl:i,open:u,onClose:function(){c(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:Object(E.jsx)(ke.a,{onClick:function(){(function(e){var t=Q();return t?Object(m.b)(Object(m.c)(Object(m.a)(b,t.id),e)).then((function(){return Promise.resolve()})).catch((function(){return Promise.reject()})):Promise.reject()})(t.id).then((function(){return a()})).catch((function(){return alert("Error deleting saved route")}))},children:"Delete route"})})]})})}var Me=function(){var e=r.a.useState(),t=Object(o.a)(e,2),a=t[0],s=t[1],i=r.a.useState(),c=Object(o.a)(i,2),u=c[0],l=c[1],d=r.a.useState(!1),j=Object(o.a)(d,2),h=j[0],f=j[1];Object(n.useEffect)((function(){return p()}),[]);var p=function(){(function(){var e=Q();return e?Object(m.d)(Object(m.a)(b,e.id)).then((function(e){var t=[];return e.forEach((function(e){return t.push(Object(L.a)(Object(L.a)({},e.data()),{},{id:e.id}))})),Promise.resolve(t)})).catch((function(){return Promise.reject()})):Promise.reject()})().then((function(e){return s(e)})).catch((function(){return l("Error loading saved routes")}))};return Object(E.jsxs)(oe.a,{children:[Object(E.jsx)(B.a,{variant:"h1",sx:{mb:2},children:"Saved Routes"}),Object(E.jsx)(ue.a,{color:"primary",onClick:function(){return f(!0)},sx:{position:"fixed",bottom:"2rem",right:"1.5rem"},children:Object(E.jsx)(w.a,{children:"add"})}),u?Object(E.jsx)(ee.a,{severity:"error",children:u}):a?0===a.length?Object(E.jsxs)("p",{children:["No saved routes. Click the"," ",Object(E.jsx)(w.a,{sx:{fontSize:"1rem",fontWeight:"bold"},children:"add"})," icon to add a new one."]}):Object(E.jsx)(k.a,{children:a.map((function(e){return Object(E.jsx)("div",{children:Object(E.jsx)(Ie,{route:e,changeCallback:p})},e.id)}))}):Object(E.jsx)(ae.a,{sx:{display:"block",mx:"auto",mt:3}}),Object(E.jsx)(Ve,{open:h,onClose:function(){f(!1),p()}})]})},We=["password1","password2"],Te=function(e){return e.isValid.password1=e.values.password1.length>0,e.messages.password1=e.isValid.password1?"":"Required",Object(L.a)({},e)},Be=function(e){return e.isValid.password2=e.values.password1===e.values.password2,e.messages.password2=e.isValid.password2?"":"Passwords do not match",Object(L.a)({},e)};var Ee=function(){var e=Object(n.useContext)(Ae).updateUser,t=r.a.useState(!1),a=Object(o.a)(t,2),s=a[0],i=a[1],c=r.a.useState(Object(L.a)(Object(L.a)({},K(We)),{},{validators:{password1:Te,password2:Be}})),u=Object(o.a)(c,2),d=u[0],m=u[1];return Object(E.jsxs)(U.a,{component:"form",onSubmit:function(t){var a;t.preventDefault(),m((function(e){return Z(e)})),d.formValid&&(i(!0),(a=d.values.password1,h.currentUser?Object(l.f)(h.currentUser,a):Promise.reject()).then((function(){return e()})).catch((function(e){return m((function(t){return Object(L.a)(Object(L.a)({},t),{},{formMessage:G(e)})}))})).finally((function(){return i(!1)})))},noValidate:!0,children:[Object(E.jsx)(Y.a,{variant:"standard",fullWidth:!0,label:"New Password",type:"password",name:"password1",margin:"normal",onChange:function(e){return m((function(t){return X(e,t)}))},onBlur:function(){d.touched.password1=!0,m((function(e){return $(e)}))},error:d.touched.password1&&!d.isValid.password1,helperText:d.touched.password1&&d.messages.password1}),Object(E.jsx)(Y.a,{variant:"standard",fullWidth:!0,label:"Confirm New Password",type:"password",name:"password2",margin:"normal",onChange:function(e){return m((function(t){return X(e,t)}))},onBlur:function(){d.touched.password2=!0,m((function(e){return $(e)}))},error:d.touched.password2&&!d.isValid.password2,helperText:d.touched.password2&&d.messages.password2}),d.attemptedSubmit&&d.formMessage&&Object(E.jsx)(ee.a,{sx:{mt:2},severity:"error",children:d.formMessage||"Form error"}),Object(E.jsx)(te.a,{type:"submit",disabled:s,fullWidth:!0,variant:"contained",sx:{mt:2},children:s?Object(E.jsx)(ae.a,{size:24,color:"inherit"}):"Change Password"})]})};function Re(){return Object(E.jsxs)(oe.a,{children:[Object(E.jsx)(B.a,{variant:"h1",children:"Change Password"}),Object(E.jsx)(Ee,{})]})}function Ue(e){return Object(E.jsxs)(U.a,{sx:{mt:1},children:[Object(E.jsx)("b",{children:e.label}),Object(E.jsx)("br",{}),e.children]})}var qe=a(143),Ne=a.n(qe),ze=a(275);function De(){var e=r.a.useState(void 0),t=Object(o.a)(e,2),a=t[0],s=t[1],i=r.a.useState(),c=Object(o.a)(i,2),u=c[0],l=c[1],d=r.a.useState(),m=Object(o.a)(d,2),j=m[0],b=m[1],h=function(){var e,t;a&&(e=a.coords.latitude,t=a.coords.longitude,Ne()("".concat("https://api.openweathermap.org/data/2.5","/onecall"),{params:{lat:e,lon:t,appid:"9539a9cdf9b5b4f1827106f5cc5eafbf",units:"imperial"}}).then((function(e){return e.data}))).then((function(e){return l(e.current)})).catch((function(e){return b(e.response.data.message)}))};return Object(n.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){return s(e)}),(function(e){switch(e.code){case e.PERMISSION_DENIED:s(null),b("Location request denied");break;case e.POSITION_UNAVAILABLE:s(null),b("Location information is unavailable");break;case e.TIMEOUT:s(null),b("Location request timed out");break;default:s(null),b("An unknown error occurred while getting the location")}})):alert("Geolocation is not supported by this browser.")}),[]),Object(n.useEffect)((function(){a&&h()}),[a]),Object(E.jsxs)(oe.a,{children:[Object(E.jsx)(B.a,{variant:"h1",children:"Weather"}),Object(E.jsx)("p",{children:"Weather for current location"}),!j&&(!u||!a)&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(B.a,{variant:"overline",children:a?"Getting weather...":"Getting current location..."}),Object(E.jsx)(ze.a,{})]}),j&&Object(E.jsx)(ee.a,{severity:"error",children:j}),u&&Object(E.jsxs)("div",{children:[Object(E.jsxs)(Ue,{label:"Temperature",children:[null===u||void 0===u?void 0:u.temp,"\xbaF"]}),Object(E.jsxs)(Ue,{label:"Humidity",children:[null===u||void 0===u?void 0:u.humidity,"%"]}),Object(E.jsxs)(Ue,{label:"Cloud Cover",children:[null===u||void 0===u?void 0:u.clouds,"%"]})]})]})}var Ae,Fe=a(251);var Le=function(e){var t=Object(n.useState)(e.user),a=Object(o.a)(t,2),s=a[0],i=a[1],l=function(){var e=Q();e&&i(e)};return Ae=r.a.createContext({user:s,updateUser:l}),Object(E.jsx)(Ae.Provider,{value:{user:s,updateUser:l},children:Object(E.jsx)(S.a,{sx:{display:"flex",height:"100vh"},children:Object(E.jsxs)(c.a,{basename:"/",children:[Object(E.jsx)(R,{}),Object(E.jsx)(S.a,{component:"main",sx:{height:"100%",flexGrow:1,width:{sm:"calc(100% - ".concat(O,"px)")}},children:Object(E.jsxs)(Fe.a,{height:"100%",children:[Object(E.jsx)(T.a,{}),Object(E.jsxs)(u.d,{children:[Object(E.jsx)(u.b,{exact:!0,path:x.home,component:F}),Object(E.jsx)(u.b,{exact:!0,path:x.savedRoutes,component:Me}),Object(E.jsx)(u.b,{exact:!0,path:x.weather,component:De}),Object(E.jsx)(u.b,{exact:!0,path:x.profile,component:ce}),Object(E.jsx)(u.b,{exact:!0,path:x.security,component:Re}),Object(E.jsx)(u.b,{path:"/",children:Object(E.jsx)(u.a,{to:x.home})})]})]})})]})})})},Ge=a(276),_e=["email","password"],Je=function(e){return e.isValid.email=!!e.values.email.match(p),e.messages.email=e.isValid.email?"":"Invalid email address",Object(L.a)({},e)},Qe=function(e){return e.isValid.password=e.values.password.length>0,e.messages.password=e.isValid.password?"":"Required",Object(L.a)({},e)};var He=function(){var e=r.a.useState(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],s=r.a.useState(Object(L.a)(Object(L.a)({},K(_e)),{},{validators:{email:Je,password:Qe}})),i=Object(o.a)(s,2),c=i[0],u=i[1];return Object(E.jsxs)(S.a,{component:"form",onSubmit:function(e){var t,a;e.preventDefault(),u((function(e){return Z(e)})),c.formValid&&(n(!0),(t=c.values.email,a=c.values.password,Object(l.c)(h,t,a).then((function(){return Promise.resolve()}))).catch((function(e){return u((function(t){return Object(L.a)(Object(L.a)({},t),{},{formMessage:G(e)})}))})).finally((function(){return n(!1)})))},noValidate:!0,sx:{mt:1},children:[Object(E.jsx)(Y.a,{margin:"normal",required:!0,fullWidth:!0,type:"email",id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return u((function(t){return X(e,t)}))},onBlur:function(){c.touched.email=!0,u((function(e){return $(e)}))},error:c.touched.email&&!c.isValid.email,helperText:c.touched.email&&c.messages.email}),Object(E.jsx)(Y.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return u((function(t){return X(e,t)}))},onBlur:function(){c.touched.password=!0,u((function(e){return $(e)}))},error:c.touched.password&&!c.isValid.password,helperText:c.touched.password&&c.messages.password}),c.attemptedSubmit&&c.formMessage&&Object(E.jsx)(ee.a,{sx:{mt:2},severity:"error",children:c.formMessage||"Form error"}),Object(E.jsx)(te.a,{type:"submit",disabled:a,fullWidth:!0,variant:"contained",sx:{mt:2,mb:2},children:a?Object(E.jsx)(ae.a,{size:24,color:"inherit"}):"Sign In"}),Object(E.jsx)(Ge.a,{href:x.signUp,variant:"body2",children:"Don't have an account? Sign Up"})]})},Ke=a(144),Ze=a.n(Ke),$e=a(260);function Xe(){return Object(E.jsx)(oe.a,{children:Object(E.jsxs)(S.a,{sx:{mt:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(E.jsx)($e.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(E.jsx)(Ze.a,{})}),Object(E.jsx)(B.a,{component:"h1",variant:"h5",children:"Sign In"}),Object(E.jsx)(He,{})]})})}var Ye=["name","email","password1","password2"],et=function(e){return e.isValid.name=e.values.name.length>0,e.messages.name=e.isValid.name?"":"Required",Object(L.a)({},e)},tt=function(e){return e.isValid.email=!!e.values.email.match(p),e.messages.email=e.isValid.email?"":"Invalid email address",Object(L.a)({},e)},at=function(e){return e.isValid.password1=e.values.password1.length>4,e.messages.password1=e.isValid.password1?"":"Must be at least 5 characters long",Object(L.a)({},e)},nt=function(e){return e.isValid.password2=e.values.password2===e.values.password1,e.messages.password2=e.isValid.password2?"":"Passwords do not match",Object(L.a)({},e)},rt=function(){return Object(L.a)(Object(L.a)({},K(Ye)),{},{validators:{name:et,email:tt,password1:at,password2:nt}})};var st=function(){var e=n.useState(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],s=n.useState(rt),i=Object(o.a)(s,2),c=i[0],u=i[1];return Object(E.jsxs)(S.a,{component:"form",onSubmit:function(e){var t,a,n;e.preventDefault(),u((function(e){return Z(e)})),c.formValid&&(r(!0),(t=c.values.email,a=c.values.password1,n=c.values.name,Object(l.a)(h,t,a).then((function(e){return Object(l.g)(e.user,{displayName:n})}))).catch((function(e){return u((function(t){return Object(L.a)(Object(L.a)({},t),{},{formMessage:G(e)})}))})).finally((function(){return r(!1)})))},noValidate:!0,sx:{mt:1},children:[Object(E.jsx)(Y.a,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"name",autoFocus:!0,onChange:function(e){return u((function(t){return X(e,t)}))},onBlur:function(){c.touched.name=!0,u((function(e){return $(e)}))},error:c.touched.name&&!c.isValid.name,helperText:c.touched.name&&c.messages.name}),Object(E.jsx)(Y.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",type:"email",autoComplete:"email",onChange:function(e){return u((function(t){return X(e,t)}))},onBlur:function(){c.touched.email=!0,u((function(e){return $(e)}))},error:c.touched.email&&!c.isValid.email,helperText:c.touched.email&&c.messages.email}),Object(E.jsx)(Y.a,{margin:"normal",required:!0,fullWidth:!0,name:"password1",label:"Password",type:"password",id:"password1",autoComplete:"new-password",onChange:function(e){return u((function(t){return X(e,t)}))},onBlur:function(){c.touched.password1=!0,u((function(e){return $(e)}))},error:c.touched.password1&&!c.isValid.password1,helperText:c.touched.password1&&c.messages.password1}),Object(E.jsx)(Y.a,{margin:"normal",required:!0,fullWidth:!0,name:"password2",label:"Confirm Password",type:"password",id:"password2",autoComplete:"new-password",onChange:function(e){return u((function(t){return X(e,t)}))},onBlur:function(){c.touched.password2=!0,u((function(e){return $(e)}))},error:c.touched.password2&&!c.isValid.password2,helperText:c.touched.password2&&c.messages.password2}),c.attemptedSubmit&&c.formMessage&&Object(E.jsx)(ee.a,{sx:{mt:2},severity:"error",children:c.formMessage||"Form error"}),Object(E.jsx)(te.a,{type:"submit",disabled:a,fullWidth:!0,variant:"contained",sx:{mt:2,mb:2},children:a?Object(E.jsx)(ae.a,{size:24,color:"inherit"}):"Sign Up"}),Object(E.jsx)(Ge.a,{href:x.signIn,variant:"body2",children:"Already have an account? Sign In"})]})},it=a(145),ot=a.n(it);function ct(){return Object(E.jsx)(oe.a,{children:Object(E.jsxs)(S.a,{sx:{mt:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(E.jsx)($e.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(E.jsx)(ot.a,{})}),Object(E.jsx)(B.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(E.jsx)(st,{})]})})}var ut=function(){return Object(E.jsx)("div",{className:"app-unauthorized",children:Object(E.jsx)(c.a,{basename:"/",children:Object(E.jsxs)(u.d,{children:[Object(E.jsx)(u.b,{exact:!0,path:x.signIn,component:Xe}),Object(E.jsx)(u.b,{exact:!0,path:x.signUp,component:ct}),Object(E.jsx)(u.a,{push:!0,to:x.signIn})]})})})},lt=a(252),dt=a(261),mt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,277)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.onAuthStateChanged((function(e){var t=J(e);t?i.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsxs)(dt.a,{theme:je,children:[Object(E.jsx)(lt.a,{}),Object(E.jsx)(Le,{user:t})]})}),document.getElementById("root")):i.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsxs)(dt.a,{theme:je,children:[Object(E.jsx)(lt.a,{}),Object(E.jsx)(ut,{})]})}),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),mt()}},[[199,1,2]]]);
//# sourceMappingURL=main.99d7ed98.chunk.js.map