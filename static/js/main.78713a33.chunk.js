(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{135:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(10),l=a.n(n),o=a(17),i=a(46),c=a(92);const r="CREATE",d="UPDATE",j="DELETE",p="FETCH_ALL",b="LIKE",u="AUTH";var m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("posts",e),t.type){case p:return t.payload;case b:return console.log("like",t),e.map((e=>e._id===t.payload._id?t.payload:e));case r:return console.log("create",t),[...e,t.payload];case d:return console.log("update",t),e.map((e=>e._id===t.payload._id?t.payload:e));case j:return console.log("delete",t),e.filter((e=>e._id!==t.payload));default:return e}};var g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return console.log(null===t||void 0===t?void 0:t.data),localStorage.setItem("profile",JSON.stringify({...null===t||void 0===t?void 0:t.data})),{...e,authData:null===t||void 0===t?void 0:t.data};case"LOGOUT":return localStorage.clear(),{...e,authData:null};default:return e}},h=Object(i.b)({posts:m,auth:g}),x=a(187),O=a(41),v=a(12),f=a(173),y=a(138),C=a(175),w=a(190),N=a(176),S=a(169),k=a(172),I=Object(S.a)((e=>({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(k.a[500]),backgroundColor:k.a[500]}}))),L=a.p+"static/media/memories.9cfa8a46.png",F=a(58),T=a(2);var B=()=>{const e=I(),[t,a]=Object(s.useState)(JSON.parse(localStorage.getItem("profile"))),n=Object(o.b)(),l=Object(v.f)(),i=Object(v.g)(),c=Object(s.useCallback)((()=>{n({type:"LOGOUT"}),l.push("/"),a(null)}),[n,l]);return Object(s.useEffect)((()=>{const e=null===t||void 0===t?void 0:t.token;if(e){1e3*Object(F.a)(e).exp<(new Date).getTime()&&c()}a(JSON.parse(localStorage.getItem("profile")))}),[i,c,null===t||void 0===t?void 0:t.token]),Object(T.jsxs)(f.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(T.jsxs)("div",{className:e.brandContainer,children:[Object(T.jsx)(y.a,{component:O.b,to:"/",className:e.heading,variant:"h2",align:"center",children:"Memories"}),Object(T.jsx)("img",{className:e.image,src:L,alt:"icon",height:"60"})]}),Object(T.jsx)(C.a,{className:e.toolbar,children:t?Object(T.jsxs)("div",{className:e.profile,children:[Object(T.jsx)(w.a,{className:e.purple,alt:t.result.name,src:t.result.imageUrl,children:t.result.name}),Object(T.jsx)(y.a,{className:e.userName,variant:"h6",children:t.result.email}),Object(T.jsx)(N.a,{variant:"contained",className:e.logout,color:"secondary",onClick:c,children:"Logout"})]}):Object(T.jsx)(N.a,{component:O.b,to:"/auth",variant:"contained",color:"primary",children:"Sign In"})})]})},A=a(177),D=a(186),E=a(188),W=a(178),_=a(179),P=a(68),U=a(65);var R=e=>{let{onSearch:t}=e;const[a,n]=Object(s.useState)("");return Object(T.jsx)(E.a,{variant:"outlined",placeholder:"Search by name, message, tag, or title",fullWidth:!0,value:a,onChange:e=>{n(e.target.value),t(e.target.value)},InputProps:{startAdornment:Object(T.jsx)(W.a,{position:"start",children:Object(T.jsx)(P.a,{icon:U.a})}),endAdornment:a&&Object(T.jsx)(W.a,{position:"end",children:Object(T.jsx)(_.a,{onClick:()=>{n(""),t("")},children:Object(T.jsx)(P.a,{icon:U.b})})})}})},z=a(185),$=a(181),M=a(182),H=a(183),J=a(184),q=a(88),G=a.n(q),V=a(66),Y=a.n(V),K=a(89),Z=a.n(K),Q=a(90),X=a.n(Q),ee=a(85),te=a.n(ee),ae=a(86);const se=a.n(ae).a.create({baseURL:"https://stanley-memories.herokuapp.com"});se.interceptors.request.use((e=>{const t=localStorage.getItem("profile");return t&&(e.headers.Authorization=`Bearer ${JSON.parse(t).token}`),e}));const ne=()=>async e=>{try{const{data:t}=await se.get("/posts");console.log("data",t),e({type:p,payload:t.data})}catch(t){console.log(t)}},le=e=>async t=>{try{const{data:s}=await(a=e,se.post("/posts",a));console.log("new data",s),t({type:r,payload:s})}catch(s){console.log(s)}var a},oe=(e,t)=>async a=>{try{const{data:s}=await((e,t)=>se.patch(`/posts/${e}`,t))(e,t);a({type:d,payload:s})}catch(s){console.log(s)}},ie=e=>async t=>{try{await(e=>se.delete(`/posts/${e}`))(e),t({type:j,payload:e})}catch(a){console.log(a)}},ce=e=>async t=>{console.log("id",e);try{const{data:a}=await(e=>se.patch(`/posts/${e}/likePost`))(e);console.log("data",a),t({type:b,payload:a})}catch(a){console.log(a)}};var re=Object(S.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken",transition:"transform 0.3s ease","&:hover":{transform:"scale(1.03)"}},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative",transition:"transform 0.3s ease, box-shadow 0.3s ease",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)","&:hover":{transform:"translateY(-10px)",boxShadow:"0 10px 15px rgba(0, 0, 0, 0.3)"}},border:{border:"solid"},fullHeightCard:{height:"100%"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),de=a(189),je=a(180),pe=a(139),be=a(87),ue=a.n(be);const me=Object(S.a)((e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{position:"relative",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],display:"flex",justifyContent:"center",alignItems:"center",padding:0,maxWidth:"90%",maxHeight:"90%",overflow:"hidden"},image:{maxWidth:"100%",maxHeight:"100%",width:"auto",height:"auto",objectFit:"contain",display:"block"},closeButton:{position:"absolute",top:e.spacing(1),right:e.spacing(1),color:e.palette.grey[500]}})));var ge=e=>{let{open:t,handleClose:a,imageUrl:s}=e;const n=me();return Object(T.jsx)(de.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:n.modal,open:t,onClose:a,closeAfterTransition:!0,BackdropComponent:je.a,BackdropProps:{timeout:500},children:Object(T.jsx)(pe.a,{in:t,children:Object(T.jsxs)("div",{className:n.paper,children:[Object(T.jsx)(_.a,{className:n.closeButton,onClick:a,children:Object(T.jsx)(ue.a,{})}),Object(T.jsx)("img",{src:s,alt:"Post",className:n.image})]})})})};var he=e=>{var t,a,n,l;let{post:i,setCurrentId:c}=e;const r=re(),d=Object(o.b)(),j=JSON.parse(localStorage.getItem("profile")),[p,b]=Object(s.useState)(!1),u=()=>i.likes.length>0?i.likes.find((e=>{var t,a;return e===((null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.googleId)||(null===j||void 0===j||null===(a=j.result)||void 0===a?void 0:a._id))}))?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(G.a,{fontSize:"small"}),"\xa0",i.likes.length>2?`You and ${i.likes.length-1} others`:`${i.likes.length} like${i.likes.length>1?"s":""}`]}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Y.a,{fontSize:"small"}),"\xa0",i.likes.length," ",1===i.likes.length?"Like":"Likes"]}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Y.a,{fontSize:"small"}),"\xa0Like"]});return console.log("user",j),Object(T.jsxs)($.a,{className:r.card,children:[Object(T.jsx)(M.a,{className:r.media,image:i.selectedFile,title:i.title,src:i.title,onClick:()=>{b(!0)}}),Object(T.jsxs)("div",{className:r.overlay,children:[Object(T.jsx)(y.a,{variant:"h6",children:i.name}),Object(T.jsx)(y.a,{variant:"body2",children:te()(i.createdAt).fromNow()})]}),((null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.googleId)===(null===i||void 0===i?void 0:i.creator)||(null===j||void 0===j||null===(a=j.result)||void 0===a?void 0:a._id)===(null===i||void 0===i?void 0:i.creator))&&Object(T.jsx)("div",{className:r.overlay2,children:Object(T.jsxs)(N.a,{style:{color:"white"},size:"small",onClick:()=>c(i._id),children:[Object(T.jsx)(Z.a,{})," "]})}),Object(T.jsx)("div",{className:r.details,children:Object(T.jsx)(y.a,{variant:"body2",color:"textSecondary",children:i.tags.map((e=>`#${e.trim()} `))})}),Object(T.jsx)(y.a,{className:r.title,variant:"h5",gutterBottom:!0,children:i.title}),Object(T.jsx)(H.a,{children:Object(T.jsx)(y.a,{variant:"body2",color:"textSecondary",component:"p",children:i.message})}),Object(T.jsxs)(J.a,{className:r.cardActions,children:[Object(T.jsx)(N.a,{size:"small",color:"primary",disabled:!(null!==j&&void 0!==j&&j.result),onClick:()=>d(ce(i._id)),children:Object(T.jsx)(u,{})}),((null===j||void 0===j||null===(n=j.result)||void 0===n?void 0:n.sub)===(null===i||void 0===i?void 0:i.creator)||(null===j||void 0===j||null===(l=j.result)||void 0===l?void 0:l._id)===(null===i||void 0===i?void 0:i.creator))&&Object(T.jsxs)(N.a,{size:"small",color:"primary",onClick:()=>d(ie(i._id)),children:[Object(T.jsx)(X.a,{fontSize:"small"})," Delete"]})]}),Object(T.jsx)(ge,{open:p,handleClose:()=>{b(!1)},imageUrl:i.selectedFile})]})},xe=Object(S.a)((e=>({mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}})));var Oe=e=>{let{setCurrentId:t,posts:a}=e;console.log("posts",a);const s=xe();return null!==a&&void 0!==a&&a.length?Object(T.jsx)(D.a,{className:s.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((e=>Object(T.jsx)(D.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(he,{post:e,setCurrentId:t})},e._id)))}):Object(T.jsx)(z.a,{})},ve=a(94),fe=Object(S.a)((e=>({root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{margin:"10px 0"},buttonSubmit:{marginBottom:10}})));var ye=e=>{var t;let{currentId:a,setCurrentId:n}=e;const[l,i]=Object(s.useState)({title:"",message:"",tags:"",selectedFile:""}),c=Object(o.c)((e=>a?e.posts.find((e=>e._id===a)):null)),r=fe(),d=Object(o.b)(),j=JSON.parse(localStorage.getItem("profile"));Object(s.useEffect)((()=>{c&&i(c)}),[c]);if(null===j||void 0===j||null===(t=j.result)||void 0===t||!t.email)return Object(T.jsx)(ve.a,{className:r.paper,children:Object(T.jsx)(y.a,{variant:"h6",align:"center",children:"Please sign in to like or create your own memories."})});const p=()=>{n(null),i({title:"",message:"",tags:"",selectedFile:""})};return Object(T.jsx)(ve.a,{className:r.paper,children:Object(T.jsxs)("form",{autoComplete:"off",noValidate:!0,className:`${r.root} ${r.form}`,onSubmit:e=>{var t,s;(e.preventDefault(),a)?d(oe({...a,name:null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.name},l)):d(le({...l,name:null===j||void 0===j||null===(s=j.result)||void 0===s?void 0:s.name}));p()},children:[Object(T.jsxs)(y.a,{variant:"h6",children:[a?"Editing":"Creating"," a Memory"]}),Object(T.jsx)(E.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:l.title,onChange:e=>i({...l,title:e.target.value})}),Object(T.jsx)(E.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:l.message,onChange:e=>i({...l,message:e.target.value})}),Object(T.jsx)(E.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:l.tags,onChange:e=>i({...l,tags:e.target.value.split(",")})}),Object(T.jsxs)("div",{className:r.fileInput,children:[Object(T.jsx)("input",{accept:"image/*",className:r.input,id:"contained-button-file",type:"file",onChange:e=>{const t=e.target.files[0],a=new FileReader;a.onloadend=()=>{i({...l,selectedFile:a.result})},t&&a.readAsDataURL(t)},style:{display:"none"}}),Object(T.jsx)("label",{htmlFor:"contained-button-file",children:Object(T.jsx)(N.a,{variant:"contained",color:"default",component:"span",style:{borderRadius:"20px",backgroundColor:"#f0f0f0"},children:"Choose File"})})]}),Object(T.jsx)(N.a,{className:r.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,style:{borderRadius:"20px"},children:"Submit"}),Object(T.jsx)(N.a,{variant:"contained",color:"secondary",size:"small",onClick:p,fullWidth:!0,style:{borderRadius:"20px"},children:"Clear"})]})})},Ce=Object(S.a)((e=>({spacer:{marginBottom:e.spacing(3)}})));var we=()=>{const[e,t]=Object(s.useState)(null),a=Object(o.b)(),[n,l]=Object(s.useState)(""),i=Object(o.c)((e=>e.posts)),c=Ce();Object(s.useEffect)((()=>{a(ne())}),[e,a]);const r=i.filter((e=>e.name&&e.name.toLowerCase().includes(n.toLowerCase())||e.message&&e.message.toLowerCase().includes(n.toLowerCase())||e.tags&&e.tags.some((e=>e.toLowerCase().includes(n.toLowerCase())))||e.title&&e.title.toLowerCase().includes(n.toLowerCase())));return Object(T.jsx)(A.a,{in:!0,children:Object(T.jsxs)(x.a,{className:c.container,children:[Object(T.jsx)("div",{className:c.spacer}),Object(T.jsx)(R,{onSearch:e=>{l(e)}}),Object(T.jsx)("div",{className:c.spacer})," ",Object(T.jsxs)(D.a,{container:!0,justifyContent:"space-between",alignItems:"stretch",spacing:3,children:[Object(T.jsx)(D.a,{item:!0,xs:12,sm:7,children:Object(T.jsx)(Oe,{setCurrentId:t,posts:r})}),Object(T.jsx)(D.a,{item:!0,xs:12,sm:4,children:Object(T.jsx)(ye,{currentId:e,setCurrentId:t})})]})]})})},Ne=Object(S.a)((e=>({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}))),Se=a(91),ke=a.n(Se),Ie=a(60),Le=a.n(Ie);var Fe=e=>{let{name:t,handleChange:a,autoFocus:s,type:n,handleShowPassword:l,half:o,label:i}=e;return Object(T.jsx)(D.a,{item:!0,xs:12,sm:o?6:12,children:Object(T.jsx)(E.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:i,autoFocus:s,type:n,InputProps:"password"===t?{endAdornment:Object(T.jsx)(W.a,{position:"end",children:Object(T.jsx)(_.a,{onClick:l,children:Object(T.jsx)(Le.a,{})})})}:null})})};var Te=()=>Object(T.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(T.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})});const Be=(e,t)=>async a=>{try{const{data:s}=await(e=>se.post("/user/signin",e))(e);a({type:u,data:s}),t.push("/")}catch(s){console.log(s)}},Ae=(e,t)=>async a=>{try{const{data:s}=await(e=>se.post("/user/signup",e))(e);a({type:u,data:s}),t.push("/")}catch(s){console.log(s)}};var De=a(67);const Ee={firstName:"",lastName:"",email:"",password:"",confirmPassword:""};var We=()=>{const e=Ne(),[t,a]=Object(s.useState)(!1),[n,l]=Object(s.useState)(!1),[i,c]=Object(s.useState)(Ee),r=Object(o.b)(),d=Object(v.f)(),j=e=>{c({...i,[e.target.name]:e.target.value})};return Object(T.jsx)(x.a,{component:"main",maxWidth:"xs",children:Object(T.jsxs)(ve.a,{className:e.paper,elevation:3,children:[Object(T.jsx)(w.a,{className:e.avatar,children:Object(T.jsx)(ke.a,{})}),Object(T.jsx)(y.a,{variant:"h5",children:n?"Sign Up":"Sign In"}),Object(T.jsxs)("form",{className:e.form,onSubmit:e=>{e.preventDefault(),r(n?Ae(i,d):Be(i,d))},children:[Object(T.jsxs)(D.a,{container:!0,spacing:2,children:[n&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Fe,{name:"firstName",label:"First Name",handleChange:j,autoFocus:!0,half:!0}),Object(T.jsx)(Fe,{name:"lastName",label:"Last Name",handleChange:j,half:!0})]}),Object(T.jsx)(Fe,{name:"email",label:"Email Address",handleChange:j,type:"email"}),Object(T.jsx)(Fe,{name:"password",label:"Password",handleChange:j,type:t?"text":"password",handleShowPassword:()=>{a((e=>!e))}}),n&&Object(T.jsx)(Fe,{name:"confirmPassword",label:"Repeat Password",handleChange:j,type:"password"})]}),Object(T.jsx)(N.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:n?"Sign Up":"Sign In"}),Object(T.jsxs)(D.a,{item:!0,xs:12,style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"15px 0"},children:[Object(T.jsx)("div",{style:{borderBottom:"1px solid #e0e0e0",flex:1}}),Object(T.jsx)(y.a,{variant:"body1",style:{margin:"0 10px"},children:"OR"}),Object(T.jsx)("div",{style:{borderBottom:"1px solid #e0e0e0",flex:1}})]}),Object(T.jsx)(De.b,{clientId:"293664759215-mq85kir3of6mrqcq7a3ejislc205uru7.apps.googleusercontent.com",children:Object(T.jsx)(D.a,{container:!0,justifyContent:"center",children:Object(T.jsx)(D.a,{item:!0,xs:12,style:{display:"flex",justifyContent:"center"},children:Object(T.jsx)(De.a,{onSuccess:async e=>{const t=e.credential,a=Object(F.a)(t);console.log("result",a);try{r({type:"AUTH",data:{result:a,token:t}}),d.push("/")}catch(s){console.log(s)}},onError:()=>{console.log("Google Sign In was unsuccessful. Try again later")},render:t=>Object(T.jsx)(N.a,{className:e.googleButton,color:"primary",onClick:t.onClick,disabled:t.disabled,startIcon:Object(T.jsx)(Te,{}),variant:"contained",fullWidth:!0,style:{margin:"10px 0",padding:"10px"},children:"Google Sign In"})})})})}),Object(T.jsx)(D.a,{container:!0,justifyContent:"flex-end",children:Object(T.jsx)(D.a,{item:!0,children:Object(T.jsx)(N.a,{onClick:()=>{l((e=>!e)),a(!1)},style:{textTransform:"none",color:"#3f51b5"},children:n?"Already have an account? Login":"Don't have an account? Sign Up"})})})]})]})})};var _e=()=>Object(T.jsx)(O.a,{basename:"/Memories",children:Object(T.jsxs)(x.a,{maxWidth:"lg",children:[Object(T.jsx)(B,{}),Object(T.jsxs)(v.c,{children:[Object(T.jsx)(v.a,{path:"/",exact:!0,component:we}),Object(T.jsx)(v.a,{path:"/auth",exact:!0,component:We})]})]})});a(135);const Pe=Object(i.d)(h,Object(i.c)(Object(i.a)(c.a)));l.a.render(Object(T.jsx)(o.a,{store:Pe,children:Object(T.jsx)(_e,{})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.78713a33.chunk.js.map