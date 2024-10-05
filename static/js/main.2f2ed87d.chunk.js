(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a(10),s=a.n(n),o=a(16),i=a(45),c=a(88);const r="CREATE",d="UPDATE",j="DELETE",p="FETCH_ALL",u="LIKE",b="AUTH";var g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("posts",e),t.type){case p:return t.payload;case u:return console.log("like",t),e.map((e=>e._id===t.payload._id?t.payload:e));case r:return console.log("create",t),[...e,t.payload];case d:return console.log("update",t),e.map((e=>e._id===t.payload._id?t.payload:e));case j:return console.log("delete",t),e.filter((e=>e._id!==t.payload));default:return e}};var m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return console.log(null===t||void 0===t?void 0:t.data),localStorage.setItem("profile",JSON.stringify({...null===t||void 0===t?void 0:t.data})),{...e,authData:null===t||void 0===t?void 0:t.data};case"LOGOUT":return localStorage.clear(),{...e,authData:null};default:return e}},h=Object(i.b)({posts:g,auth:m}),x=a(181),O=a(40),v=a(11),f=a(169),y=a(134),C=a(171),S=a(186),w=a(172),N=a(165),k=a(168),I=Object(N.a)((e=>({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(k.a[500]),backgroundColor:k.a[500]}}))),_=a.p+"static/media/memories.9cfa8a46.png",T=a(80),E=a(2);var F=()=>{const e=I(),[t,a]=Object(l.useState)(JSON.parse(localStorage.getItem("profile"))),n=Object(o.b)(),s=Object(v.f)(),i=Object(v.g)(),c=Object(l.useCallback)((()=>{n({type:"LOGOUT"}),s.push("/"),a(null)}),[n,s]);return Object(l.useEffect)((()=>{const e=null===t||void 0===t?void 0:t.token;if(e){1e3*Object(T.a)(e).exp<(new Date).getTime()&&c()}a(JSON.parse(localStorage.getItem("profile")))}),[i,c,null===t||void 0===t?void 0:t.token]),Object(E.jsxs)(f.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(E.jsxs)("div",{className:e.brandContainer,children:[Object(E.jsx)(y.a,{component:O.b,to:"/",className:e.heading,variant:"h2",align:"center",children:"Memories"}),Object(E.jsx)("img",{className:e.image,src:_,alt:"icon",height:"60"})]}),Object(E.jsx)(C.a,{className:e.toolbar,children:t?Object(E.jsxs)("div",{className:e.profile,children:[Object(E.jsx)(S.a,{className:e.purple,alt:t.result.name,src:t.result.imageUrl,children:t.result.name}),Object(E.jsx)(y.a,{className:e.userName,variant:"h6",children:t.result.email}),Object(E.jsx)(w.a,{variant:"contained",className:e.logout,color:"secondary",onClick:c,children:"Logout"})]}):Object(E.jsx)(w.a,{component:O.b,to:"/auth",variant:"contained",color:"primary",children:"Sign In"})})]})},A=a(180),D=a(179),L=a(178),P=a(174),R=a(175),U=a(176),W=a(177),B=a(83),z=a.n(B),H=a(64),$=a.n(H),M=a(84),J=a.n(M),q=a(85),G=a.n(q),K=a(81),V=a.n(K),Y=a(82);const Z=a.n(Y).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/Memories",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL||"http://localhost:5001"});Z.interceptors.request.use((e=>{const t=localStorage.getItem("profile");return t&&(e.headers.Authorization=`Bearer ${JSON.parse(t).token}`),e}));const Q=()=>async e=>{try{const{data:t}=await Z.get("/posts");console.log("data",t),e({type:p,payload:t.data})}catch(t){console.log(t)}},X=e=>async t=>{try{const{data:l}=await(a=e,Z.post("/posts",a));console.log("new data",l),t({type:r,payload:l})}catch(l){console.log(l)}var a},ee=(e,t)=>async a=>{try{const{data:l}=await((e,t)=>Z.patch(`/posts/${e}`,t))(e,t);a({type:d,payload:l})}catch(l){console.log(l)}},te=e=>async t=>{try{await(e=>Z.delete(`/posts/${e}`))(e),t({type:j,payload:e})}catch(a){console.log(a)}},ae=e=>async t=>{console.log("id",e);try{const{data:a}=await(e=>Z.patch(`/posts/${e}/likePost`))(e);console.log("data",a),t({type:u,payload:a})}catch(a){console.log(a)}};var le=Object(N.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),ne=a(185),se=a(173),oe=a(135);const ie=Object(N.a)((e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},image:{maxWidth:"90%",maxHeight:"90%"}})));var ce=e=>{let{open:t,handleClose:a,imageUrl:l}=e;const n=ie();return Object(E.jsx)(ne.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:n.modal,open:t,onClose:a,closeAfterTransition:!0,BackdropComponent:se.a,BackdropProps:{timeout:500},children:Object(E.jsx)(oe.a,{in:t,children:Object(E.jsx)("div",{className:n.paper,children:Object(E.jsx)("img",{src:l,alt:"Post",className:n.image})})})})};var re=e=>{var t,a,n,s;let{post:i,setCurrentId:c}=e;const r=le(),d=Object(o.b)(),j=JSON.parse(localStorage.getItem("profile")),[p,u]=Object(l.useState)(!1),b=()=>i.likes.length>0?i.likes.find((e=>{var t,a;return e===((null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.googleId)||(null===j||void 0===j||null===(a=j.result)||void 0===a?void 0:a._id))}))?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(z.a,{fontSize:"small"}),"\xa0",i.likes.length>2?`You and ${i.likes.length-1} others`:`${i.likes.length} like${i.likes.length>1?"s":""}`]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)($.a,{fontSize:"small"}),"\xa0",i.likes.length," ",1===i.likes.length?"Like":"Likes"]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)($.a,{fontSize:"small"}),"\xa0Like"]});return Object(E.jsxs)(P.a,{className:r.card,children:[Object(E.jsx)(R.a,{className:r.media,image:i.selectedFile,title:i.title,src:i.title,onClick:()=>{u(!0)}}),Object(E.jsxs)("div",{className:r.overlay,children:[Object(E.jsx)(y.a,{variant:"h6",children:i.name}),Object(E.jsx)(y.a,{variant:"body2",children:V()(i.createdAt).fromNow()})]}),((null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.googleId)===(null===i||void 0===i?void 0:i.creator)||(null===j||void 0===j||null===(a=j.result)||void 0===a?void 0:a._id)===(null===i||void 0===i?void 0:i.creator))&&Object(E.jsx)("div",{className:r.overlay2,children:Object(E.jsxs)(w.a,{style:{color:"white"},size:"small",onClick:()=>c(i._id),children:[Object(E.jsx)(J.a,{})," "]})}),Object(E.jsx)("div",{className:r.details,children:Object(E.jsx)(y.a,{variant:"body2",color:"textSecondary",children:i.tags.map((e=>`#${e.trim()} `))})}),Object(E.jsx)(y.a,{className:r.title,variant:"h5",gutterBottom:!0,children:i.title}),Object(E.jsx)(U.a,{children:Object(E.jsx)(y.a,{variant:"body2",color:"textSecondary",component:"p",children:i.message})}),Object(E.jsxs)(W.a,{className:r.cardActions,children:[Object(E.jsx)(w.a,{size:"small",color:"primary",disabled:!(null===j||void 0===j?void 0:j.result),onClick:()=>d(ae(i._id)),children:Object(E.jsx)(b,{})}),((null===j||void 0===j||null===(n=j.result)||void 0===n?void 0:n.googleId)===(null===i||void 0===i?void 0:i.creator)||(null===j||void 0===j||null===(s=j.result)||void 0===s?void 0:s._id)===(null===i||void 0===i?void 0:i.creator))&&Object(E.jsxs)(w.a,{size:"small",color:"primary",onClick:()=>d(te(i._id)),children:[Object(E.jsx)(G.a,{fontSize:"small"})," Delete"]})]}),Object(E.jsx)(ce,{open:p,handleClose:()=>{u(!1)},imageUrl:i.selectedFile})]})},de=Object(N.a)((e=>({mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}})));var je=e=>{let{setCurrentId:t}=e,a=Object(o.c)((e=>e.posts));console.log("posts",a);const l=de();return(null===a||void 0===a?void 0:a.length)?Object(E.jsx)(D.a,{className:l.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((e=>Object(E.jsx)(D.a,{item:!0,xs:12,sm:6,children:Object(E.jsx)(re,{post:e,setCurrentId:t})},e._id)))}):Object(E.jsx)(L.a,{})},pe=a(90),ue=a(184),be=Object(N.a)((e=>({root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{margin:"10px 0"},buttonSubmit:{marginBottom:10}})));var ge=e=>{var t;let{currentId:a,setCurrentId:n}=e;const[s,i]=Object(l.useState)({title:"",message:"",tags:"",selectedFile:""}),c=Object(o.c)((e=>a?e.posts.find((e=>e._id===a)):null)),r=be(),d=Object(o.b)(),j=JSON.parse(localStorage.getItem("profile"));Object(l.useEffect)((()=>{c&&i(c)}),[c]);if(!(null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.email))return Object(E.jsx)(pe.a,{className:r.paper,children:Object(E.jsx)(y.a,{variant:"h6",align:"center",children:"Please sign in to like or create your own memories."})});const p=()=>{n(null),i({title:"",message:"",tags:"",selectedFile:""})};return Object(E.jsx)(pe.a,{className:r.paper,children:Object(E.jsxs)("form",{autoComplete:"off",noValidate:!0,className:`${r.root} ${r.form}`,onSubmit:e=>{var t,l;(e.preventDefault(),a)?d(ee({...a,name:null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.name},s)):d(X({...s,name:null===j||void 0===j||null===(l=j.result)||void 0===l?void 0:l.name}));p()},children:[Object(E.jsxs)(y.a,{variant:"h6",children:[a?"Editing":"Creating"," a Memory"]}),Object(E.jsx)(ue.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:e=>i({...s,title:e.target.value})}),Object(E.jsx)(ue.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:s.message,onChange:e=>i({...s,message:e.target.value})}),Object(E.jsx)(ue.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:s.tags,onChange:e=>i({...s,tags:e.target.value.split(",")})}),Object(E.jsxs)("div",{className:r.fileInput,children:[Object(E.jsx)("input",{accept:"image/*",className:r.input,id:"contained-button-file",type:"file",onChange:e=>{const t=e.target.files[0],a=new FileReader;a.onloadend=()=>{i({...s,selectedFile:a.result})},t&&a.readAsDataURL(t)},style:{display:"none"}}),Object(E.jsx)("label",{htmlFor:"contained-button-file",children:Object(E.jsx)(w.a,{variant:"contained",color:"default",component:"span",style:{borderRadius:"20px",backgroundColor:"#f0f0f0"},children:"Choose File"})})]}),Object(E.jsx)(w.a,{className:r.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,style:{borderRadius:"20px"},children:"Submit"}),Object(E.jsx)(w.a,{variant:"contained",color:"secondary",size:"small",onClick:p,fullWidth:!0,style:{borderRadius:"20px"},children:"Clear"})]})})};var me=()=>{const[e,t]=Object(l.useState)(null),a=Object(o.b)();return Object(l.useEffect)((()=>{console.log("in useeffect"),a(Q())}),[e,a]),Object(E.jsx)(A.a,{in:!0,children:Object(E.jsx)(x.a,{children:Object(E.jsxs)(D.a,{container:!0,justifyContent:"space-between",alignItems:"stretch",spacing:3,children:[Object(E.jsx)(D.a,{item:!0,xs:12,sm:7,children:Object(E.jsx)(je,{setCurrentId:t})}),Object(E.jsx)(D.a,{item:!0,xs:12,sm:4,children:Object(E.jsx)(ge,{currentId:e,setCurrentId:t})})]})})})},he=a(86),xe=Object(N.a)((e=>({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}))),Oe=a(87),ve=a.n(Oe),fe=a(182),ye=a(183),Ce=a(59),Se=a.n(Ce);var we=e=>{let{name:t,handleChange:a,autoFocus:l,type:n,handleShowPassword:s,half:o,label:i}=e;return Object(E.jsx)(D.a,{item:!0,xs:12,sm:o?6:12,children:Object(E.jsx)(ue.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:i,autoFocus:l,type:n,InputProps:"password"===t?{endAdornment:Object(E.jsx)(fe.a,{position:"end",children:Object(E.jsx)(ye.a,{onClick:s,children:Object(E.jsx)(Se.a,{})})})}:null})})};var Ne=()=>Object(E.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(E.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})});const ke=(e,t)=>async a=>{try{const{data:l}=await(e=>Z.post("/user/signin",e))(e);a({type:b,data:l}),t.push("/")}catch(l){console.log(l)}},Ie=(e,t)=>async a=>{try{const{data:l}=await(e=>Z.post("/user/signup",e))(e);a({type:b,data:l}),t.push("/")}catch(l){console.log(l)}},_e={firstName:"",lastName:"",email:"",password:"",confirmPassword:""};var Te=()=>{const e=xe(),[t,a]=Object(l.useState)(!1),[n,s]=Object(l.useState)(!1),[i,c]=Object(l.useState)(_e),r=Object(o.b)(),d=Object(v.f)(),j=e=>{c({...i,[e.target.name]:e.target.value})};return Object(E.jsx)(x.a,{component:"main",maxWidth:"xs",children:Object(E.jsxs)(pe.a,{className:e.paper,elevation:3,children:[Object(E.jsx)(S.a,{className:e.avatar,children:Object(E.jsx)(ve.a,{})}),Object(E.jsx)(y.a,{variant:"h5",children:n?"Sign Up":"Sign In"}),Object(E.jsxs)("form",{className:e.form,onSubmit:e=>{e.preventDefault(),r(n?Ie(i,d):ke(i,d))},children:[Object(E.jsxs)(D.a,{container:!0,spacing:2,children:[n&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(we,{name:"firstName",label:"First Name",handleChange:j,autoFocus:!0,half:!0}),Object(E.jsx)(we,{name:"lastName",label:"Last Name",handleChange:j,half:!0})]}),Object(E.jsx)(we,{name:"email",label:"Email Address",handleChange:j,type:"email"}),Object(E.jsx)(we,{name:"password",label:"Password",handleChange:j,type:t?"text":"password",handleShowPassword:()=>{a((e=>!e))}}),n&&Object(E.jsx)(we,{name:"confirmPassword",label:"Repeat Password",handleChange:j,type:"password"})]}),Object(E.jsx)(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:n?"Sign Up":"Sign In"}),Object(E.jsx)(he.GoogleLogin,{clientId:"293664759215-mq85kir3of6mrqcq7a3ejislc205uru7.apps.googleusercontent.com",render:t=>Object(E.jsx)(w.a,{className:e.googleButton,color:"primary",fullWidth:!0,onClick:t.onClick,disabled:t.disabled,startIcon:Object(E.jsx)(Ne,{}),variant:"contained",children:"Google Sign In"}),onSuccess:async e=>{const t=null===e||void 0===e?void 0:e.profileObj,a=null===e||void 0===e?void 0:e.tokenId;try{r({type:"AUTH",data:{result:t,token:a}}),d.push("/")}catch(l){console.log(l)}},onFailure:()=>{console.log("Google Sign In was unsuccessful. Try again later")},cookiePolicy:"single_host_origin"}),Object(E.jsx)(D.a,{container:!0,justifyContent:"flex-end",children:Object(E.jsx)(D.a,{item:!0,children:Object(E.jsx)(w.a,{onClick:()=>{s((e=>!e)),a(!1)},children:n?"Allready have an account? Sign In":"Don't have an account? Sign Up"})})})]})]})})};var Ee=()=>Object(E.jsx)(O.a,{children:Object(E.jsxs)(x.a,{maxWidth:"lg",children:[Object(E.jsx)(F,{}),Object(E.jsxs)(v.c,{children:[Object(E.jsx)(v.a,{path:"/",exact:!0,component:me}),Object(E.jsx)(v.a,{path:"/auth",exact:!0,component:Te})]})]})});a(131);const Fe=Object(i.d)(h,Object(i.c)(Object(i.a)(c.a)));s.a.render(Object(E.jsx)(o.a,{store:Fe,children:Object(E.jsx)(Ee,{})}),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.2f2ed87d.chunk.js.map