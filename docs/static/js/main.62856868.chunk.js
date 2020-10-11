(this["webpackJsonptareas-del-hogar"]=this["webpackJsonptareas-del-hogar"]||[]).push([[0],{124:function(e,a,t){e.exports=t(222)},220:function(e,a,t){},221:function(e,a,t){},222:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),l=t.n(c),o=t(14),i=t(43),s=t(105),m="[Auth] Login",u="[Auth] Logout",d="[Task] Delete Task",p="[Task] Get all Tasks",E="[UI] Set Error",f="[UI] Remove Error",b="[UI] Start loading",v="[UI] Finish loading",h=t(115),g=t(17),y={tareas:[]},N={loading:!1,msgError:null},O="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,w=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case m:return{uid:a.payload.uid,name:a.payload.displayName,photoURL:a.payload.photoURL};case u:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E:return Object(g.a)(Object(g.a)({},e),{},{msgError:a.payload});case f:return Object(g.a)(Object(g.a)({},e),{},{msgError:null});case b:return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case v:return Object(g.a)(Object(g.a)({},e),{},{loading:!1});default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case p:return Object(g.a)(Object(g.a)({},e),{},{tareas:Object(h.a)(a.payload)});case d:return Object(g.a)(Object(g.a)({},e),{},{tareas:e.tareas.filter((function(e){return e.id!==a.payload}))});default:return e}}}),j=Object(i.e)(w,O(Object(i.a)(s.a))),x=t(113),C=t(270),k=t(269),S=t(73),R=t(18),T=t.n(R),U=t(25),A=t(12),L=t(23),D=t(15),I=t(44),W=t.n(I);t(134),t(138),t(223),t(224);W.a.initializeApp({apiKey:"AIzaSyDmdwOkcsyyRMD_ETbUWyUad-Gko-c7a5o",authDomain:"tareasdelhogar-cc.firebaseapp.com",databaseURL:"https://tareasdelhogar-cc.firebaseio.com",projectId:"tareasdelhogar-cc",storageBucket:"tareasdelhogar-cc.appspot.com",messagingSenderId:"607482429115",appId:"1:607482429115:web:b3b5673272b260042bf39e",measurementId:"G-SPNTYJECZE"}),W.a.analytics();var B=W.a.firestore(),z=W.a.storage(),P=new W.a.auth.GoogleAuthProvider,_=t(254),G=t(258),F=t(259),J=t(271),M=t(261),q=t(262),X=t(260),K=t(107),V=t.n(K),Y=t(61),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(n.useState)(e),t=Object(A.a)(a,2),r=t[0],c=t[1],l=function(){c(e)},o=function(e){var a=e.target;c(Object(g.a)(Object(g.a)({},r),{},Object(Y.a)({},a.name,a.value)))};return[r,o,l]},H=t(29),Q=t.n(H),$=function(e){return{type:E,payload:e}},ee=function(){return{type:b}},ae=function(){return{type:v}},te=function(e,a,t){return{type:m,payload:{uid:e,displayName:a,photoURL:t}}},ne=function(){return{type:u}},re=function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.ui})).loading,t=Z(),n=Object(A.a)(t,2),c=n[0],l=n[1],i=c.email,s=c.password;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 mx-auto m-5"},r.a.createElement(_.a,{elevation:5,style:{borderRadius:25}},r.a.createElement(G.a,{className:"text-center",title:"Login",style:{backgroundColor:"#f5f5f5"}}),r.a.createElement(F.a,null,r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e(function(e,a){return function(t){t(ee()),W.a.auth().signInWithEmailAndPassword(e,a).then((function(e){var a=e.user;t(te(a.uid,a.displayName)),t(ae())})).catch((function(e){t(ae()),console.log(e.code),"auth/wrong-password"===e.code?Q.a.fire("Error","Contrase\xf1a incorrecta.","error"):"auth/user-not-found"===e.code?Q.a.fire("Error","Usuario no registrado.","error"):Q.a.fire("Error",e.message,"error")}))}}(i,s))}},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(J.a,{id:"email",type:"email",onChange:l,fullWidth:!0,label:"Email",name:"email",variant:"outlined"})),r.a.createElement("div",{className:"col-lg-12 mt-3"},r.a.createElement(J.a,{id:"password",type:"password",onChange:l,fullWidth:!0,label:"Clave",name:"password",variant:"outlined"})),r.a.createElement("div",{className:"container text-center"},r.a.createElement("div",{className:"row"},a&&r.a.createElement("div",{className:"col-md-12 mt-2"},r.a.createElement(X.a,null)),r.a.createElement("div",{className:"col-md-12"},r.a.createElement(M.a,{className:"mt-3",variant:"contained",color:"primary",style:{color:"white"},type:"submit",disabled:a},"Ingresar"))))),r.a.createElement(V.a,{className:"mt-3 mx-auto",label:"Continuar con Google",onClick:function(a){e((function(e){W.a.auth().signInWithPopup(P).then((function(a){var t=a.user;e(te(t.uid,t.displayName))}))}))}})),r.a.createElement(q.a,null,r.a.createElement("div",{className:"container text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 text-left"},r.a.createElement(L.b,{to:"/auth/recoverPassword",style:{fontSize:"12px",textDecoration:"none"}},"Olvidaste tu contrase\xf1a?")),r.a.createElement("div",{className:" col-md-6 text-right"},r.a.createElement(L.b,{to:"/auth/register",style:{fontSize:"12px",textDecoration:"none"}},"Reg\xedstrate")))))))))},ce=function(){var e=Object(o.c)((function(e){return e.ui})).loading,a=Z(),t=Object(A.a)(a,2),n=t[0],c=t[1],l=n.email;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 mx-auto m-5"},r.a.createElement(_.a,{elevation:5,style:{borderRadius:25}},r.a.createElement(G.a,{className:"text-center",title:"Recuperaci\xf3n de Clave",style:{backgroundColor:"#f5f5f5"}}),r.a.createElement(F.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),W.a.auth().sendPasswordResetEmail(l).then((function(){Q.a.fire("Bien!","Revisa tu casilla de correo","success")})).catch((function(e){Q.a.fire("Atenci\xf3n!","Ese email no se encuentra registrado.","warning")}))}},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(J.a,{id:"email",type:"email",onChange:c,fullWidth:!0,label:"Email",name:"email",variant:"outlined"})),r.a.createElement("div",{className:"container text-center"},r.a.createElement("div",{className:"row"},e&&r.a.createElement("div",{className:"col-md-12 mt-2"},r.a.createElement(X.a,null)),r.a.createElement("div",{className:"col-md-12"},r.a.createElement(M.a,{className:"mt-3",variant:"contained",color:"primary",style:{color:"white"},type:"submit",disabled:e},"Recuperar"))))))))))},le=t(273),oe=t(111),ie=t.n(oe),se=function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.ui})),t=a.loading,n=a.msgError,c=Z({name:"claudio",email:"claudio_ceja009@hotmail.com",password:"123456",password2:"123456"}),l=Object(A.a)(c,2),i=l[0],s=l[1],m=i.name,u=i.email,d=i.password,p=i.password2,E=function(){return 0===m.trim().length?(e($("Nombre es requerido.")),!1):ie.a.isEmail(u)&&0!==u.trim().length?d<=4?(e($("La contrase\xf1a debe ser de al menos 6 caracteres.")),!1):d!==p?(e($("Las contrase\xf1as no coinciden")),!1):(e({type:f}),!0):(e($("Se requiere un email valido.")),!1)};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 mx-auto m-5"},r.a.createElement(_.a,{elevation:5},r.a.createElement(G.a,{className:"text-center",title:"Registro",style:{backgroundColor:"#f5f5f5"}}),r.a.createElement(F.a,null,n&&r.a.createElement(le.a,{className:"mb-3",variant:"filled",severity:"error"},n),r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),E()&&e(function(e,a,t){return function(n){n(ee()),W.a.auth().createUserWithEmailAndPassword(e,a).then(function(){var e=Object(U.a)(T.a.mark((function e(a){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.user,e.next=3,r.updateProfile({displayName:t});case 3:n(te(r.uid,r.displayName)),n(ae());case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),n(ae()),"auth/email-already-in-use"===e.code&&Q.a.fire("Error","El email ya se encuentra registrado.","error")}))}}(u,d,m))}},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(J.a,{value:m,id:"name",type:"text",onChange:s,fullWidth:!0,label:"Nombre",name:"name",variant:"outlined"})),r.a.createElement("div",{className:"col-lg-12 mt-3"},r.a.createElement(J.a,{value:u,id:"email",type:"email",onChange:s,fullWidth:!0,label:"Email",name:"email",variant:"outlined"})),r.a.createElement("div",{className:"col-lg-12 mt-3"},r.a.createElement(J.a,{value:d,id:"password",type:"password",onChange:s,fullWidth:!0,label:"Clave",name:"password",variant:"outlined"})),r.a.createElement("div",{className:"col-lg-12 mt-3"},r.a.createElement(J.a,{value:p,id:"password2",type:"password",onChange:s,fullWidth:!0,label:"Confirmar Clave",name:"password2",variant:"outlined"})),r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"row"},t&&r.a.createElement("div",{className:"col-md-12 mt-2"},r.a.createElement(X.a,null)),r.a.createElement("div",{className:"col-md-12"},r.a.createElement(M.a,{className:"mt-3",type:"submit",variant:"contained",color:"primary",style:{color:"white"}},"Registrarse"))))))))))},me=function(){return r.a.createElement("div",null,r.a.createElement(D.d,null,r.a.createElement(D.b,{path:"/auth/login",component:re}),r.a.createElement(D.b,{path:"/auth/register",component:se}),r.a.createElement(D.b,{path:"/auth/recoverPassword",component:ce}),r.a.createElement(D.a,{to:"/auth/login"})))},ue=t(274),de=t(264),pe=t(265),Ee=t(266),fe=t(267),be=t(112),ve=t.n(be),he=function(){var e=Object(U.a)(T.a.mark((function e(a){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("consulta a la bdd"),e.next=3,B.collection("Users/".concat(a,"/Lista de Tareas/")).get();case 3:return t=e.sent,n=[],t.forEach((function(e){n.push(Object(g.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),ge=function(){var e=Object(U.a)(T.a.mark((function e(a,t,n){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.doc("Users/".concat(a,"/Lista de Tareas/").concat(t)).get();case 2:return r=e.sent,n.push(Object(g.a)({id:r.id},r.data())),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),ye=function(e,a){return function(){var t=Object(U.a)(T.a.mark((function t(n,r){var c,l,o,i,s;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.uid,l=r().tasks.tareas,o={nombre:e,descripcion:a,date:(new Date).getTime()},t.next=5,B.collection("Users/".concat(c,"/Lista de Tareas/")).add(o);case 5:return i=t.sent,t.next=8,ge(c,i.id,l);case 8:s=t.sent,n(Oe(s));case 10:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},Ne=function(e){return function(){var a=Object(U.a)(T.a.mark((function a(t){var n;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("LoadTasks"),a.next=3,he(e);case 3:n=a.sent,t(Oe(n));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},Oe=function(e){return{type:p,payload:e}},we=function(e){return{type:d,payload:e}},je=function(){var e=Object(o.b)(),a=Object(n.useState)(!1),t=Object(A.a)(a,2),c=t[0],l=t[1],i=Z(),s=Object(A.a)(i,2),m=s[0],u=s[1],d=m.tarea,p=m.description,E=function(){l(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,{open:c,onClose:E,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e(ye(d,void 0===p?"":p)),E()}},r.a.createElement(de.a,{className:"text-center"}," Tarea Nueva"),r.a.createElement(pe.a,null,r.a.createElement("div",{className:"mb-3"},r.a.createElement(J.a,{id:"outlined-basic",label:"Actividad",name:"tarea",onChange:u,variant:"outlined"})),r.a.createElement(J.a,{id:"outlined-multiline-static",label:"Descripci\xf3n Opcional",name:"description",multiline:!0,rows:5,onChange:u,variant:"outlined"})),r.a.createElement(Ee.a,{className:"center"},r.a.createElement(M.a,{size:"small",type:"submit"},"Agregar")))),r.a.createElement(fe.a,{color:"secondary","aria-label":"add",style:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed",outline:0},onClick:function(){l(!0)}},r.a.createElement(ve.a,null)))},xe=t(268),Ce=function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.tasks})).tareas,t=Object(n.useState)(!1),c=Object(A.a)(t,2),l=c[0],i=c[1],s=Z(),m=Object(A.a)(s,1)[0],u=Object(n.useState)({id:"",nombre:"",descripcion:""}),d=Object(A.a)(u,2),p=d[0],E=d[1],f=p.id,b=p.nombre,v=p.descripcion,h=function(){i(!1)};return r.a.createElement("div",{className:"row"},r.a.createElement(ue.a,{open:l,onClose:h,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("enviado! ",f," ",b," y ",v),h()}},r.a.createElement(de.a,{className:"text-center"}," Tarea"),r.a.createElement(pe.a,null,r.a.createElement("div",{className:"mb-3"},r.a.createElement(J.a,{id:"outlined-basic",label:"Actividad",name:"tarea",value:p.nombre,onChange:m,variant:"outlined"})),r.a.createElement(J.a,{id:"outlined-multiline-static",label:"Descripci\xf3n Opcional",name:"description",value:p.descripcion,multiline:!0,rows:5,onChange:m,variant:"outlined"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(Ee.a,{className:"center"},r.a.createElement(M.a,{size:"small",type:"submit"},"Actualizar")),r.a.createElement(Ee.a,{className:"center"},r.a.createElement(M.a,{size:"small",onClick:function(a){a.preventDefault(),e(function(e){return function(){var a=Object(U.a)(T.a.mark((function a(t,n){var r;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=n().auth.uid,a.next=3,B.doc("Users/".concat(r,"/Lista de Tareas/").concat(e)).delete();case 3:t(we(e));case 4:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}(f)),h()}},"Borrar")))))),a.map((function(e){return r.a.createElement("div",{className:"col-lg-3 col-md-4 mt-5",key:e.id},r.a.createElement(_.a,{elevation:5,style:{borderRadius:25}},r.a.createElement(xe.a,{style:{outline:0},onClick:function(){return function(e){i(!0),E(e)}(e)}},r.a.createElement(G.a,{className:"text-center",title:e.nombre,style:{backgroundColor:"#f5f5f5"}}),r.a.createElement(F.a,null,e.descripcion))))})))},ke=function(){return r.a.createElement("div",{className:"container mb-3"},r.a.createElement("div",{className:" text-center"},r.a.createElement("h1",null,"Tareas")),r.a.createElement(Ce,null),r.a.createElement(je,null))},Se=t(72),Re=function(e){var a=e.isAuthenticated,t=e.component,n=Object(Se.a)(e,["isAuthenticated","component"]);return r.a.createElement(D.b,Object.assign({},n,{component:function(e){return a?r.a.createElement(t,e):r.a.createElement(D.a,{to:"/auth/login"})}}))},Te=function(e){var a=e.isAuthenticated,t=e.component,n=Object(Se.a)(e,["isAuthenticated","component"]);return r.a.createElement(D.b,Object.assign({},n,{component:function(e){return a?r.a.createElement(D.a,{to:"/"}):r.a.createElement(t,e)}}))},Ue=t(263),Ae=t(276),Le=t(114),De=t(277),Ie=t(275),We=(t(220),function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.auth})),t=a.uid,c=a.photoURL,l=Object(n.useState)(null),i=Object(A.a)(l,2),s=i[0],m=i[1],u=Boolean(s),d=function(){m(null)};return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light",style:{backgroundColor:"#03a9f4",color:"white"}},r.a.createElement(L.b,{to:"/auth/login",className:"links"},r.a.createElement(Ue.a,{color:"inherit",style:{outline:0}},r.a.createElement(Ie.a,null))),r.a.createElement("button",{className:"navbar-toggler itemBackground",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},void 0!==t?r.a.createElement("li",{className:"nav-item"},r.a.createElement(Ue.a,{color:"inherit",style:{outline:0},onClick:function(e){m(e.currentTarget)}},r.a.createElement(Ae.a,{alt:"Remy Sharp",sizes:"large",src:c})),r.a.createElement(Le.a,{id:"menu-appbar",anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:d},r.a.createElement(L.b,{to:"/ajustes",className:"links",style:{color:"black"}},r.a.createElement(De.a,{onClick:d},"Ajustes")),r.a.createElement(De.a,{onClick:function(){e(function(){var e=Object(U.a)(T.a.mark((function e(a){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.auth().signOut();case 2:a(ne());case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),d()}},"Salir"))):r.a.createElement("div",{className:"row"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(L.b,{to:"/auth/login",className:"links"},r.a.createElement(M.a,{style:{outline:0,color:"white",borderRadius:150}},"Iniciar Sesi\xf3n"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(L.b,{to:"/auth/register",className:"links"},r.a.createElement(M.a,{style:{outline:0,color:"white",borderRadius:150}},"Registrarse")))))))}),Be=function(){var e=Object(o.c)((function(e){return e.auth})),a=e.uid,t=e.photoURL,c=Object(n.useState)(),l=Object(A.a)(c,2),i=l[0],s=l[1],m=Object(n.useState)(),u=Object(A.a)(m,2),d=u[0],p=u[1];Object(n.useEffect)((function(){s(t),console.log("algo")}),[t]);var E=Z({name:"claudio",email:"claudio_ceja009@hotmail.com",password:"123456"}),f=Object(A.a)(E,2),b=f[0],v=f[1],h=b.name,g=b.email,y=b.password;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mx-auto"},r.a.createElement(_.a,{className:"mt-5"},r.a.createElement(G.a,{className:"text-center",title:"Datos Personales",style:{backgroundColor:"#f5f5f5"}}),r.a.createElement(F.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),Q.a.fire({title:"Est\xe1s seguro?",text:"Est\xe1s apunto de modificar tus datos.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Confirmar",cancelButtonText:"Cancelar"}).then((function(e){e.isConfirmed&&(z.ref().child("".concat(a,"/profile/")).put(d),Q.a.fire("Bien!!","Tus cambios se han guardado.","success"))}))}},r.a.createElement("div",{className:"text-center"},r.a.createElement("input",{accept:"image/*",style:{display:"none"},id:"raised-button-file",type:"file",onChange:function(e){s(URL.createObjectURL(e.target.files[0])),p(e.target.files[0])}}),r.a.createElement("label",{htmlFor:"raised-button-file"},r.a.createElement(M.a,{component:"span",style:{outline:0,borderRadius:150}},i?r.a.createElement("img",{src:i,height:"192",width:"192",className:"rounded",alt:"nose",style:{backgroundColor:"black",border:0}}):r.a.createElement("img",{src:"/user.png",className:"rounded",alt:"nose",style:{height:170,width:"auto",border:0}})))),r.a.createElement("div",{className:"col-lg-12 mt-3"},r.a.createElement(J.a,{value:h,id:"name",type:"text",onChange:v,fullWidth:!0,label:"Nombre",name:"name",variant:"outlined"})),r.a.createElement("div",{className:"col-lg-12 mt-3"},r.a.createElement(J.a,{value:g,id:"email",type:"email",onChange:v,fullWidth:!0,label:"Email",name:"email",variant:"outlined"})),r.a.createElement("div",{className:"col-lg-12 mt-3"},r.a.createElement(J.a,{value:y,id:"password",type:"password",onChange:v,fullWidth:!0,label:"Clave",name:"password",variant:"outlined"})),r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(M.a,{className:"mt-3",type:"submit",variant:"contained",color:"primary",style:{color:"white"}},"Confirmar Cambios"))))))))))},ze=function(){var e=Object(o.b)(),a=Object(n.useState)(!0),t=Object(A.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(!1),s=Object(A.a)(i,2),m=s[0],u=s[1];return Object(n.useEffect)((function(){W.a.auth().onAuthStateChanged(function(){var a=Object(U.a)(T.a.mark((function a(t){var n;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(null===t||void 0===t?void 0:t.uid)){a.next=15;break}return a.prev=1,a.next=4,z.ref().child("".concat(t.uid,"/profile/")).getDownloadURL();case 4:n=a.sent,a.next=10;break;case 7:a.prev=7,a.t0=a.catch(1),n="";case 10:e(te(t.uid,t.displayName,n)),u(!0),e(Ne(t.uid)),a.next=16;break;case 15:u(!1);case 16:l(!1);case 17:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(e){return a.apply(this,arguments)}}())}),[e,l,u]),c?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mx-auto m-5"},r.a.createElement("div",{className:"col-lg-3 mx-auto"},r.a.createElement(_.a,null,r.a.createElement(F.a,null,r.a.createElement("div",{className:"col-lg-12 text-center"},"Cargando, Espere..."),r.a.createElement("div",{className:"col-lg-12 text-center"},r.a.createElement(X.a,null))))))):r.a.createElement(L.a,null,r.a.createElement(We,{isLoggedIn:m}),r.a.createElement("div",null,r.a.createElement(D.d,null,r.a.createElement(Te,{isAuthenticated:m,path:"/auth",component:me}),r.a.createElement(Re,{isAuthenticated:m,exact:!0,path:"/",component:ke}),r.a.createElement(Re,{isAuthenticated:m,exact:!0,path:"/ajustes",component:Be}),r.a.createElement(D.a,{to:"/auth/login"}))))};t(221);var Pe=function(){var e=Object(x.a)({palette:{primary:k.a,secondary:{main:S.a[500]}}});return r.a.createElement(o.a,{store:j},r.a.createElement(C.a,{theme:e},r.a.createElement(ze,null)))};l.a.render(r.a.createElement(Pe,null),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.62856868.chunk.js.map