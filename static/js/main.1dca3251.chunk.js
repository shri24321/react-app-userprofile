(this["webpackJsonpreact-app-fetchdata"]=this["webpackJsonpreact-app-fetchdata"]||[]).push([[0],{55:function(e,t,a){e.exports=a(71)},60:function(e,t,a){},64:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),o=(a(60),a(20)),i=a(12),s=a(21),u=a(22),m=a(24),d=a(101),h=a(103),p=a(104),E=a(32),b=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}}));function f(){var e=b();return r.a.createElement("div",{className:e.root},r.a.createElement(h.a,{position:"static"},r.a.createElement(p.a,{variant:"dense"},r.a.createElement(E.a,{variant:"h6",color:"inherit"},"UserProfileApp"))))}a(64);var y=a(114),g=a(45),v=a.n(g),j=a(105),x=a(106),O=a(107),k=a(108),w=a(47),C=a.n(w),R=a(50),S=a.n(R),D=a(49),F=a.n(D),L=a(48),N=a.n(L),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,user:null},a.useStyles=Object(d.a)({card:{maxWidth:345},media:{height:140}}),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users/".concat(this.props.match.params.id)).then((function(e){return e.json()})).then((function(t){e.setState({loading:!0,user:t})}))}},{key:"render",value:function(){if(!this.state.loading)return console.log(this.state.user),r.a.createElement(y.a,{color:"secondary"});var e=this.state.user;this.useStyles;return r.a.createElement(n.Fragment,null,r.a.createElement(j.a,{style:{color:"red",fontFamily:"Caveat"}},r.a.createElement(v.a,{to:"/",style:{color:"white",textDecoration:"none",border:"1px solid black",padding:"4px",margin:"8px",backgroundColor:"black"}},"Go Back")),r.a.createElement("div",null),r.a.createElement("center",null,r.a.createElement(x.a,{style:{maxWidth:600}},r.a.createElement(O.a,null,r.a.createElement(k.a,{style:{fontFamily:"Caveat",fontSize:"50px"}},r.a.createElement("div",{style:{backgroundColor:"pink",borderRadius:"5%"}},r.a.createElement("img",{src:"https://source.unsplash.com/random",style:{width:"50%",maxWidth:"200px",Height:"auto",display:"block",marginLeft:"auto",marginRight:"auto",borderRadius:"10%"}})),"Id:",e.id,r.a.createElement("br",null),"Name:",e.name,r.a.createElement("br",null),"UserName:",e.username,r.a.createElement("br",null),r.a.createElement(C.a,{style:{height:"40px",width:"40px",color:"green"}}),e.phone,r.a.createElement("br",null),r.a.createElement(N.a,{style:{height:"40px",width:"40px",color:"black"}}),e.website,r.a.createElement("br",null),r.a.createElement(F.a,{style:{height:"40px",width:"40px",color:"orange"}}),e.email,r.a.createElement("br",null),r.a.createElement(S.a,{style:{height:"40px",width:"40px",color:"red"}}),r.a.createElement("br",null),"St.:",e.address.street,",",e.address.suite,",",e.address.city,",",r.a.createElement("br",null),"ZipCode:",e.address.zipcode,r.a.createElement("br",null))))))}}]),t}(n.Component),B=a(28),W=a(109),z=a(115),G=a(111),I=a(112),J=a(110),M=a(113),U=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props.userid),r.a.createElement("div",null,this.props.users.map((function(e){return r.a.createElement("div",null,r.a.createElement(j.a,{style:{width:"100%"}},r.a.createElement(B.b,{style:{textDecoration:"none"},to:"/userdata/".concat(e.id)},r.a.createElement(W.a,{component:"nav","aria-label":"main mailbox folders"},r.a.createElement(z.a,null,r.a.createElement(J.a,null,r.a.createElement(M.a,{alt:"Remy Sharp",src:"https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"})),r.a.createElement(G.a,{primary:e.name})))," ")),r.a.createElement(I.a,null))})))}}]),t}(n.Component),H=a(16),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={userdata:[],user:null,isLoaded:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,userdata:t})}))}},{key:"render",value:function(){var e=this;return console.log(this.state.userdata),this.state.isLoaded?r.a.createElement(B.a,null,r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(H.Route,{path:"/",exact:!0,render:function(t){return r.a.createElement(U,{users:e.state.userdata})}}),r.a.createElement(H.Route,{path:"/userdata/:id",render:function(e){return r.a.createElement(A,e)}})))):r.a.createElement(y.a,{color:"secondary"})}}]),t}(n.Component);c.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.1dca3251.chunk.js.map