(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{58:function(e,t,a){},59:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(4),o=a(2),r=a.n(o),i=a(19),c=a.n(i),s=(a(58),a(59),a(12)),l=a(91),b=a(93),p=a(94),d=a(95),j=Object(l.a)((function(e){var t,a;return{root:{background:"#f8f9fa",flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:(t={color:"#007bff",padding:".5vw 1vw",fontSize:"100%"},Object(s.a)(t,e.breakpoints.down("sm"),{fontSize:"90%"}),Object(s.a)(t,e.breakpoints.between("sm","md"),{fontSize:"80%"}),Object(s.a)(t,e.breakpoints.between("md","lg"),{fontSize:"70%"}),Object(s.a)(t,e.breakpoints.up("lg"),{fontSize:"100%"}),t),brand:(a={display:"inline-block",paddingTop:".3125rem",paddingBottom:".3125rem",lineHeight:"inherit",whiteSpace:"nowrap",color:"rgba(0,0,0,.9)",fontSize:"120%"},Object(s.a)(a,e.breakpoints.down("sm"),{fontSize:"110%"}),Object(s.a)(a,e.breakpoints.between("sm","md"),{fontSize:"100%"}),Object(s.a)(a,e.breakpoints.between("md","lg"),{fontSize:"90%"}),Object(s.a)(a,e.breakpoints.up("lg"),{fontSize:"120%"}),a)}}));function u(){var e=j();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(b.a,{position:"static",children:Object(n.jsxs)(p.a,{style:{background:"#f8f9fa",display:"flex",justifyContent:"space-between"},children:[Object(n.jsx)("span",{className:e.brand,children:"#SIFII"}),Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsx)(d.a,{variant:"span",className:e.title,children:"              About Me                "}),Object(n.jsx)(d.a,{variant:"span",className:e.title,children:"      Skills               "}),Object(n.jsx)(d.a,{variant:"span",className:e.title,children:"        Projects           "}),Object(n.jsx)(d.a,{variant:"span",className:e.title,children:"     Resume                 "})]})]})})})}Object(l.a)((function(e){return{photo:{backgroundColor:"#4E5158"}}}));a(42),Object(l.a)((function(e){return{footer:{display:"flex",minHeight:"50px",fontWeight:"bold",fontSize:"100%",background:"black",color:"white",margin:"auto",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",position:"absolute",bottom:0,right:0,left:0},text:{display:"flex",margin:"auto"}}}));var f=a(27),m=a(96),h=a(97),O=a(100),g=a(99),x=a(98),v=a(101),w=Object(l.a)((function(e){return{root:Object(s.a)({maxWidth:345},e.breakpoints.down("sm"),{padding:0}),media:{height:140},productName:Object(s.a)({whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},e.breakpoints.down("sm"),{whiteSpace:"break-spaces"})}}));function k(e){var t=w();console.log("project: ",e);var a=e.item,o=(a.company,a.companyWebsite,a.productName),r=a.productSummary,i=a.productThumbnailUrl,c=a.productUrl,s=a.productWebsite;a.tags;return Object(n.jsxs)(m.a,{className:t.root,children:[Object(n.jsxs)(h.a,{children:[Object(n.jsx)(x.a,{className:t.media,image:i,title:"Contemplative Reptile"}),Object(n.jsxs)(g.a,{children:[Object(n.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",className:t.productName,children:o}),Object(n.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"p",children:r})]})]}),Object(n.jsx)(O.a,{children:Object(n.jsx)(v.a,{variant:"contained",color:"primary",href:c||s,target:"_blank",children:"         Live"})})]})}var y=a(32),S=a.n(y),N=a(17),z=a(43),C=a(33);try{C.a.initializeApp({apiKey:"AIzaSyDQLQYBI8C7Ya13pv8ibtrKqCt-YFkKuv8",authDomain:"githubpage-fa457.firebaseapp.com",databaseURL:"https://githubpage-fa457.firebaseio.com"})}catch(E){console.error(E)}var I=function(){var e=Object(z.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=C.a.database(),a=t.ref("Jobs"),e.abrupt("return",new Promise((function(e,t){a.on("value",(function(a){var n=a.val();n||t([]),console.log(n);var o=[];Object.entries(n).map((function(e){o=[].concat(Object(N.a)(o),Object(N.a)(e[1].projects))})),e(o||[])}))})));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=a(102),B=Object(l.a)((function(e){return{root:{display:"flex",justifyContent:"center"},photo:{backgroundColor:"#4E5158"}}}));function L(){var e=B(),t=r.a.useState([]),a=Object(f.a)(t,2),o=a[0],i=a[1];return r.a.useEffect((function(){try{I().then((function(e){console.log(e),i(e)}))}catch(E){console.error(E)}}),[]),Object(n.jsx)("div",{id:"projects",className:e.root,children:Object(n.jsx)(F.a,{container:!0,direction:"row",justify:"start",alignItems:"center",spacing:2,xl:10,sm:10,md:10,children:(o||[]).map((function(e,t){return Object(n.jsx)(F.a,{item:!0,children:Object(n.jsx)(k,{item:e})},"project"+t)}))})})}var T=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(u,{}),Object(n.jsx)(L,{})]})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,104)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),o(e),r(e),i(e)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root")),A()}},[[71,1,2]]]);
//# sourceMappingURL=main.fc606d8a.chunk.js.map