(this["webpackJsonpweather-route"]=this["webpackJsonpweather-route"]||[]).push([[0],{129:function(e,a,t){},130:function(e,a,t){},145:function(e,a,t){"use strict";t.r(a);t(129),t(130);var n=t(0),r=t.n(n),s=t(35),i=t.n(s),o=t(14),c=t(48),l=t(25),u=t(46),d=t(108),m=Object(d.a)({apiKey:"AIzaSyCyk-8pQIXG4EJOyRa3QT0yzUfr661yuyI",authDomain:"weather-route-e1a9c.firebaseapp.com",projectId:"weather-route-e1a9c",storageBucket:"weather-route-e1a9c.appspot.com",messagingSenderId:"184699653844",appId:"1:184699653844:web:74997c51e6e4b49ed83541"}),j=Object(u.b)(m),h=function(){return Object(u.d)(j)},b=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,p=240,f={home:"/home",presets:"/presets",profile:"/profile",security:"/security",signIn:"/signin",signUp:"/signup"},x=t(110),O=t.n(x),v=t(211),g=t(214),w=t(192),y=t(208),V=t(203),S=t(216),C=t(209),P=t(201),I=t(210),M=t(212),k=t(207),T=t(213),W=t(1);function B(){var e=n.useState(!1),a=Object(o.a)(e,2),t=a[0],r=a[1],s=function(){r(!t)},i=[{title:"Home",url:f.home,icon:"home"},{title:"Presets",url:f.presets,icon:"star"}],l=[{title:"Profile",url:f.profile,icon:"account_circle"},{title:"Security",url:f.security,icon:"lock"}],u=Object(W.jsxs)("div",{children:[Object(W.jsx)(k.a,{}),Object(W.jsx)(y.a,{}),Object(W.jsx)(C.a,{onClick:s,children:i.map((function(e){return Object(W.jsxs)(P.a,{button:!0,component:c.b,to:e.url,children:[Object(W.jsx)(I.a,{children:Object(W.jsx)(v.a,{children:e.icon})}),Object(W.jsx)(M.a,{primary:e.title})]},e.title)}))}),Object(W.jsx)(y.a,{}),Object(W.jsxs)(C.a,{onClick:s,children:[l.map((function(e){return Object(W.jsxs)(P.a,{button:!0,component:c.b,to:e.url,children:[Object(W.jsx)(I.a,{children:Object(W.jsx)(v.a,{children:e.icon})}),Object(W.jsx)(M.a,{primary:e.title})]},e.title)})),Object(W.jsxs)(P.a,{button:!0,onClick:h,children:[Object(W.jsx)(I.a,{children:Object(W.jsx)(v.a,{children:"logout"})}),Object(W.jsx)(M.a,{primary:"Sign Out"})]})]})]});return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(g.a,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(p,"px)")},ml:{sm:"".concat(p,"px")}},children:Object(W.jsxs)(k.a,{children:[Object(W.jsx)(S.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:s,sx:{mr:2,display:{sm:"none"}},children:Object(W.jsx)(O.a,{})}),Object(W.jsx)(T.a,{variant:"h6",noWrap:!0,component:"div",children:"Weather Route"})]})}),Object(W.jsxs)(w.a,{component:"nav",sx:{width:{sm:p},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[Object(W.jsx)(V.a,{container:void 0,variant:"temporary",open:t,onClose:s,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:p}},children:u}),Object(W.jsx)(V.a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:p}},open:!0,children:u})]})]})}var U=t(194),q=t(70);function z(e){var a,t=e.start,n=e.end,s=r.a.useRef(0),i=r.a.useState(null),c=Object(o.a)(i,2),l=c[0],u=c[1],d=Object(q.d)({id:"google-map-script",googleMapsApiKey:null!==(a="AIzaSyC7z_by3P2gLvavfO81-W_1AqGmqSQkkoc")?a:""}).isLoaded;return Object(W.jsx)(U.a,{height:"100%",children:d&&Object(W.jsxs)(q.c,{mapContainerStyle:{width:"100%",height:"100%"},children:[Object(W.jsx)(q.b,{options:{origin:t,destination:n,travelMode:google.maps.TravelMode.DRIVING},callback:function(e){console.log(e),null!==e&&s.current<2&&(s.current+=1,u(e))}}),l&&Object(W.jsx)(q.a,{options:{directions:l}})]})})}var D=r.a.memo(z);function F(){return Object(W.jsx)(D,{start:"logan, ut",end:"ogden, ut"})}var A=r.a.memo(F),N=t(217);function R(){return Object(W.jsxs)(N.a,{children:[Object(W.jsx)(T.a,{variant:"h1",children:"Presets"}),Object(W.jsx)("p",{children:"This is the page for saving favorite routes to quickly reuse."})]})}var E,L=t(21);t(72);!function(e){e.auth="auth",e.user="user"}(E||(E={}));var G=function(e){var a=J[e.code];return null!==a&&void 0!==a?a:e.message.replace("Firebase: ","").replace(" (".concat(e.code,")"),"")},J={"auth/email-already-exists":"An account already exists with this email.","auth/requires-recent-login":"Recent login required. Please sign out then sign back in to perform this action","auth/weak-password":"This password is too weak","auth/invalid-password":"This password is invalid.","auth/invalid-email":"Email address is invalid","auth/user-not-found":"Account does not exist for this email address","auth/wrong-password":"Incorrect password","auth/email-already-in-use":"An account already exists with this email"},Q=function(e){return e?{id:e.uid,name:e.displayName,email:e.email,phone:e.phoneNumber,lastSignIn:e.metadata.lastSignInTime&&new Date(e.metadata.lastSignInTime)||void 0}:null},_=t(26);function K(e){var a,t={values:{},messages:{},isValid:{},touched:{},validators:{},formValid:!1,formMessage:"",attemptedSubmit:!1},n=Object(_.a)(e);try{for(n.s();!(a=n.n()).done;){var r=a.value;t.values[r]="",t.messages[r]="",t.isValid[r]=!1,t.touched[r]=!1,t.validators[r]=function(){return t}}}catch(s){n.e(s)}finally{n.f()}return t}function Z(e){for(var a in(e=$(e)).touched)e.touched[a]=!0;return e.attemptedSubmit=!0,e.formValid||(e.formMessage="Please fix the errors in the form"),e}function $(e){var a=!0;for(var t in e.validators)(e=e.validators[t](e)).isValid[t]||(a=!1);return e.formValid=a,e}function H(e,a){var t=e.target.name,n=e.target.value;a.isValid[t]||(a=a.validators[t](a));var r=a.values;return r[t]=n,Object(L.a)(Object(L.a)({},a),{},{values:r})}var X=t(197),Y=t(200),ee=t(204),ae=t(218),te=["name","email"],ne=function(e){return e.isValid.email=!!e.values.email.match(b),e.messages.email=e.isValid.email?"":"Invalid email address",Object(L.a)({},e)},re=function(e){return e.isValid.name=e.values.name.length>0,e.messages.name=e.isValid.name?"":"Required",Object(L.a)({},e)};var se=function(){var e=Object(n.useContext)(me),a=e.user,t=e.updateUser,s=r.a.useState(!1),i=Object(o.a)(s,2),c=i[0],l=i[1],d=r.a.useState(function(e){var a,t;return Object(L.a)(Object(L.a)({},K(te)),{},{values:{name:null!==(a=e.name)&&void 0!==a?a:"",email:null!==(t=e.email)&&void 0!==t?t:""},validators:{email:ne,name:re}})}(a)),m=Object(o.a)(d,2),h=m[0],b=m[1],p=r.a.useState(!1),f=Object(o.a)(p,2),x=f[0],O=f[1];return Object(n.useEffect)((function(){return O(a.name!==h.values.name||a.email!==h.values.email)}),[h]),Object(W.jsxs)(U.a,{component:"form",onSubmit:function(e){var n,r;e.preventDefault(),b((function(e){return Z(e)})),h.formValid&&(l(!0),Promise.all([a.name!==h.values.name?(r=h.values.name,j.currentUser?Object(u.g)(j.currentUser,{displayName:r}):Promise.reject()):Promise.resolve(),a.email!==h.values.email?(n=h.values.email,j.currentUser?Object(u.e)(j.currentUser,n):Promise.reject()):Promise.resolve()]).then((function(){return t()})).catch((function(e){return b((function(a){return Object(L.a)(Object(L.a)({},a),{},{formMessage:G(e)})}))})).finally((function(){return l(!1)})))},noValidate:!0,children:[Object(W.jsx)(X.a,{variant:"standard",fullWidth:!0,label:"Name",name:"name",defaultValue:a.name,margin:"normal",onChange:function(e){return b((function(a){return H(e,a)}))},onBlur:function(){h.touched.name=!0,b((function(e){return $(e)}))},error:h.touched.name&&!h.isValid.name,helperText:h.touched.name&&h.messages.name}),Object(W.jsx)(X.a,{variant:"standard",fullWidth:!0,label:"Email",type:"email",name:"email",defaultValue:a.email,margin:"normal",onChange:function(e){return b((function(a){return H(e,a)}))},onBlur:function(){h.touched.email=!0,b((function(e){return $(e)}))},error:h.touched.email&&!h.isValid.email,helperText:h.touched.email&&h.messages.email}),h.attemptedSubmit&&h.formMessage&&Object(W.jsx)(Y.a,{sx:{mt:2},severity:"error",children:h.formMessage||"Form error"}),Object(W.jsx)(ee.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:2,display:x?"default":"none"},children:c?Object(W.jsx)(ae.a,{size:24,color:"inherit"}):"Save Changes"})]})};function ie(){return Object(W.jsxs)(N.a,{children:[Object(W.jsx)(T.a,{variant:"h1",children:"Edit Profile"}),Object(W.jsx)(se,{})]})}var oe=["password1","password2"],ce=function(e){return e.isValid.password1=e.values.password1.length>0,e.messages.password1=e.isValid.password1?"":"Required",Object(L.a)({},e)},le=function(e){return e.isValid.password2=e.values.password1===e.values.password2,e.messages.password2=e.isValid.password2?"":"Passwords do not match",Object(L.a)({},e)};var ue=function(){var e=Object(n.useContext)(me).updateUser,a=r.a.useState(!1),t=Object(o.a)(a,2),s=t[0],i=t[1],c=r.a.useState(Object(L.a)(Object(L.a)({},K(oe)),{},{validators:{password1:ce,password2:le}})),l=Object(o.a)(c,2),d=l[0],m=l[1];return Object(W.jsxs)(U.a,{component:"form",onSubmit:function(a){var t;a.preventDefault(),m((function(e){return Z(e)})),d.formValid&&(i(!0),(t=d.values.password1,j.currentUser?Object(u.f)(j.currentUser,t):Promise.reject()).then((function(){return e()})).catch((function(e){return m((function(a){return Object(L.a)(Object(L.a)({},a),{},{formMessage:G(e)})}))})).finally((function(){return i(!1)})))},noValidate:!0,children:[Object(W.jsx)(X.a,{variant:"standard",fullWidth:!0,label:"New Password",type:"password",name:"password1",margin:"normal",onChange:function(e){return m((function(a){return H(e,a)}))},onBlur:function(){d.touched.password1=!0,m((function(e){return $(e)}))},error:d.touched.password1&&!d.isValid.password1,helperText:d.touched.password1&&d.messages.password1}),Object(W.jsx)(X.a,{variant:"standard",fullWidth:!0,label:"Confirm New Password",type:"password",name:"password2",margin:"normal",onChange:function(e){return m((function(a){return H(e,a)}))},onBlur:function(){d.touched.password2=!0,m((function(e){return $(e)}))},error:d.touched.password2&&!d.isValid.password2,helperText:d.touched.password2&&d.messages.password2}),d.attemptedSubmit&&d.formMessage&&Object(W.jsx)(Y.a,{sx:{mt:2},severity:"error",children:d.formMessage||"Form error"}),Object(W.jsx)(ee.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:2},children:s?Object(W.jsx)(ae.a,{size:24,color:"inherit"}):"Change Password"})]})};function de(){return Object(W.jsxs)(N.a,{children:[Object(W.jsx)(T.a,{variant:"h1",children:"Change Password"}),Object(W.jsx)(ue,{})]})}var me,je=t(195);var he=function(e){var a=Object(n.useState)(e.user),t=Object(o.a)(a,2),s=t[0],i=t[1],u=function(){var e=Q(j.currentUser);e&&i(e)};return me=r.a.createContext({user:s,updateUser:u}),Object(W.jsx)(me.Provider,{value:{user:s,updateUser:u},children:Object(W.jsx)(w.a,{sx:{display:"flex",height:"100vh"},children:Object(W.jsxs)(c.a,{basename:"/",children:[Object(W.jsx)(B,{}),Object(W.jsx)(w.a,{component:"main",sx:{height:"100%",flexGrow:1,width:{sm:"calc(100% - ".concat(p,"px)")}},children:Object(W.jsxs)(je.a,{height:"100%",children:[Object(W.jsx)(k.a,{}),Object(W.jsxs)(l.d,{children:[Object(W.jsx)(l.b,{exact:!0,path:f.home,component:A}),Object(W.jsx)(l.b,{exact:!0,path:f.presets,component:R}),Object(W.jsx)(l.b,{exact:!0,path:f.profile,component:ie}),Object(W.jsx)(l.b,{exact:!0,path:f.security,component:de}),Object(W.jsx)(l.b,{path:"/",children:Object(W.jsx)(l.a,{to:f.home})})]})]})})]})})})},be=t(219),pe=["email","password"],fe=function(e){return e.isValid.email=!!e.values.email.match(b),e.messages.email=e.isValid.email?"":"Invalid email address",Object(L.a)({},e)},xe=function(e){return e.isValid.password=e.values.password.length>0,e.messages.password=e.isValid.password?"":"Required",Object(L.a)({},e)};var Oe=function(){var e=r.a.useState(!1),a=Object(o.a)(e,2),t=a[0],n=a[1],s=r.a.useState(Object(L.a)(Object(L.a)({},K(pe)),{},{validators:{email:fe,password:xe}})),i=Object(o.a)(s,2),c=i[0],l=i[1];return Object(W.jsxs)(w.a,{component:"form",onSubmit:function(e){var a,t;e.preventDefault(),l((function(e){return Z(e)})),c.formValid&&(n(!0),(a=c.values.email,t=c.values.password,Object(u.c)(j,a,t).then((function(){return Promise.resolve()}))).catch((function(e){return l((function(a){return Object(L.a)(Object(L.a)({},a),{},{formMessage:G(e)})}))})).finally((function(){return n(!1)})))},noValidate:!0,sx:{mt:1},children:[Object(W.jsx)(X.a,{margin:"normal",required:!0,fullWidth:!0,type:"email",id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return l((function(a){return H(e,a)}))},onBlur:function(){c.touched.email=!0,l((function(e){return $(e)}))},error:c.touched.email&&!c.isValid.email,helperText:c.touched.email&&c.messages.email}),Object(W.jsx)(X.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return l((function(a){return H(e,a)}))},onBlur:function(){c.touched.password=!0,l((function(e){return $(e)}))},error:c.touched.password&&!c.isValid.password,helperText:c.touched.password&&c.messages.password}),c.attemptedSubmit&&c.formMessage&&Object(W.jsx)(Y.a,{sx:{mt:2},severity:"error",children:c.formMessage||"Form error"}),Object(W.jsx)(ee.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:2,mb:2},children:t?Object(W.jsx)(ae.a,{size:24,color:"inherit"}):"Sign In"}),Object(W.jsx)(be.a,{href:f.signUp,variant:"body2",children:"Don't have an account? Sign Up"})]})},ve=t(111),ge=t.n(ve),we=t(205);function ye(){return Object(W.jsx)(N.a,{children:Object(W.jsxs)(w.a,{sx:{mt:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(W.jsx)(we.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(W.jsx)(ge.a,{})}),Object(W.jsx)(T.a,{component:"h1",variant:"h5",children:"Sign In"}),Object(W.jsx)(Oe,{})]})})}var Ve=["name","email","password1","password2"],Se=function(e){return e.isValid.name=e.values.name.length>0,e.messages.name=e.isValid.name?"":"Required",Object(L.a)({},e)},Ce=function(e){return e.isValid.email=!!e.values.email.match(b),e.messages.email=e.isValid.email?"":"Invalid email address",Object(L.a)({},e)},Pe=function(e){return e.isValid.password1=e.values.password1.length>4,e.messages.password1=e.isValid.password1?"":"Must be at least 5 characters long",Object(L.a)({},e)},Ie=function(e){return e.isValid.password2=e.values.password2===e.values.password1,e.messages.password2=e.isValid.password2?"":"Passwords do not match",Object(L.a)({},e)},Me=function(){return Object(L.a)(Object(L.a)({},K(Ve)),{},{validators:{name:Se,email:Ce,password1:Pe,password2:Ie}})};var ke=function(){var e=n.useState(!1),a=Object(o.a)(e,2),t=a[0],r=a[1],s=n.useState(Me),i=Object(o.a)(s,2),c=i[0],l=i[1];return Object(W.jsxs)(w.a,{component:"form",onSubmit:function(e){var a,t,n;e.preventDefault(),l((function(e){return Z(e)})),c.formValid&&(r(!0),(a=c.values.email,t=c.values.password1,n=c.values.name,Object(u.a)(j,a,t).then((function(e){return Object(u.g)(e.user,{displayName:n})}))).catch((function(e){return l((function(a){return Object(L.a)(Object(L.a)({},a),{},{formMessage:G(e)})}))})).finally((function(){return r(!1)})))},noValidate:!0,sx:{mt:1},children:[Object(W.jsx)(X.a,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"name",autoFocus:!0,onChange:function(e){return l((function(a){return H(e,a)}))},onBlur:function(){c.touched.name=!0,l((function(e){return $(e)}))},error:c.touched.name&&!c.isValid.name,helperText:c.touched.name&&c.messages.name}),Object(W.jsx)(X.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",type:"email",autoComplete:"email",onChange:function(e){return l((function(a){return H(e,a)}))},onBlur:function(){c.touched.email=!0,l((function(e){return $(e)}))},error:c.touched.email&&!c.isValid.email,helperText:c.touched.email&&c.messages.email}),Object(W.jsx)(X.a,{margin:"normal",required:!0,fullWidth:!0,name:"password1",label:"Password",type:"password",id:"password1",autoComplete:"new-password",onChange:function(e){return l((function(a){return H(e,a)}))},onBlur:function(){c.touched.password1=!0,l((function(e){return $(e)}))},error:c.touched.password1&&!c.isValid.password1,helperText:c.touched.password1&&c.messages.password1}),Object(W.jsx)(X.a,{margin:"normal",required:!0,fullWidth:!0,name:"password2",label:"Confirm Password",type:"password",id:"password2",autoComplete:"new-password",onChange:function(e){return l((function(a){return H(e,a)}))},onBlur:function(){c.touched.password2=!0,l((function(e){return $(e)}))},error:c.touched.password2&&!c.isValid.password2,helperText:c.touched.password2&&c.messages.password2}),c.attemptedSubmit&&c.formMessage&&Object(W.jsx)(Y.a,{sx:{mt:2},severity:"error",children:c.formMessage||"Form error"}),Object(W.jsx)(ee.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:2,mb:2},children:t?Object(W.jsx)(ae.a,{size:24,color:"inherit"}):"Sign Up"}),Object(W.jsx)(be.a,{href:f.signIn,variant:"body2",children:"Already have an account? Sign In"})]})},Te=t(112),We=t.n(Te);function Be(){return Object(W.jsx)(N.a,{children:Object(W.jsxs)(w.a,{sx:{mt:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(W.jsx)(we.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(W.jsx)(We.a,{})}),Object(W.jsx)(T.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(W.jsx)(ke,{})]})})}var Ue=function(){return Object(W.jsx)("div",{className:"app-unauthorized",children:Object(W.jsx)(c.a,{basename:"/",children:Object(W.jsxs)(l.d,{children:[Object(W.jsx)(l.b,{exact:!0,path:f.signIn,component:ye}),Object(W.jsx)(l.b,{exact:!0,path:f.signUp,component:Be}),Object(W.jsx)(l.a,{push:!0,to:f.signIn})]})})})},qe=t(114),ze=t(98),De=r.a.forwardRef((function(e,a){var t=e.href,n=Object(qe.a)(e,["href"]);return Object(W.jsx)(c.b,Object(L.a)({ref:a,to:t},n))}));De.displayName="LinkBehavior";var Fe=Object(ze.a)({palette:{primary:{main:"#2a8544"},secondary:{main:"#f50057"}},components:{MuiLink:{defaultProps:{component:De}},MuiButtonBase:{defaultProps:{LinkComponent:De}}},typography:{h1:{color:"#2a8544",fontSize:"2.5rem",fontWeight:"500",marginTop:"1.5rem"}}}),Ae=t(196),Ne=t(206),Re=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,221)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),n(e),r(e),s(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));j.onAuthStateChanged((function(e){var a=Q(e);a?i.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsxs)(Ne.a,{theme:Fe,children:[Object(W.jsx)(Ae.a,{}),Object(W.jsx)(he,{user:a})]})}),document.getElementById("root")):i.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsxs)(Ne.a,{theme:Fe,children:[Object(W.jsx)(Ae.a,{}),Object(W.jsx)(Ue,{})]})}),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Re()}},[[145,1,2]]]);
//# sourceMappingURL=main.fcaba584.chunk.js.map