(this["webpackJsonpceramic-overlay-fs"]=this["webpackJsonpceramic-overlay-fs"]||[]).push([[0],{248:function(e){e.exports=JSON.parse('{"definitions":{"m\xefmis":"ceramic://kjzl6cwe1jw14634js8evp6y8jmxnsfdyku4307hffoz49tnz0ncv4qy7r9k3rw"},"schemas":{"M\xefmis":"ceramic://k3y52l7qbv1frybb0i893pf9i70gwmbdjziqwfod2ajo4sf506cmqwss90hjqys5c"}}')},384:function(e,t){},439:function(e,t){},440:function(e,t){},497:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(146),i=n.n(a),s=n(15),u=n.n(s),o=n(76),l=n(13),d=n(279),b=n(518),j=n(520),f=n(330),h=n.n(f),m=n(331),x=n.n(m),v=n(332),p=n(337),O=n(248),k=n(53),g=n(18),w=n(104),y=n(35),C=n(517),D=n(521),S=n(510),z=n(511),q=n(519),I=n(513),P=n(514),E=n(515),F=n(516),T=n(87),N=c.a.createContext(null);N.displayName="IDX";var W=n(30),B=0,K=["gray","red","orange","yellow","green","teal","blue","cyan","purple","pink"],M=function(){var e,t,n=Object(r.useContext)(N),c=Object(r.useState)([]),a=Object(l.a)(c,2),i=a[0],s=a[1],d=Object(r.useState)(""),b=Object(l.a)(d,2),j=b[0],f=b[1],h=Object(r.useState)("did:3:kjzl6cwe1jw147zr02h32lkdp666opzg0kp0sibzvumtn0z4k1wdxb6yb7ix4ie"),m=Object(l.a)(h,2),x=m[0],v=m[1],p=function(e){var t=e.did,n=Object(r.useState)({path:[],string:""}),c=Object(l.a)(n,2),a=c[0],i=c[1],s=Object(r.useContext)(N),d=Object(r.useState)([]),b=Object(l.a)(d,2),j=b[0],f=b[1],h=Object(r.useCallback)(Object(o.a)(u.a.mark((function e(){var n,r,c,i,o,l,d,b;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=32;break}return e.next=3,s.get("m\xefmis",t);case 3:n=e.sent,r=n?[n]:[],c=Object(w.a)(a.path),e.prev=6,c.s();case 8:if((i=c.n()).done){e.next=21;break}if(l=i.value,d=null===(o=n)||void 0===o?void 0:o[l],!Boolean(d)){e.next=18;break}return e.next=14,T.TileDocument.load(s.ceramic,d);case 14:(n=e.sent.content)&&r.push(n),e.next=19;break;case 18:return e.abrupt("break",21);case 19:e.next=8;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(6),c.e(e.t0);case 26:return e.prev=26,c.f(),e.finish(26);case 29:b=[],r.length-1===a.path.length&&(b=Object.keys(r[r.length-1]),""!==a.string&&(b=b.filter((function(e){return e.startsWith(a.string)})))),f(b);case 32:case"end":return e.stop()}}),e,null,[[6,23,26,29]])}))),[a,s,t]);return Object(r.useEffect)((function(){return h()}),[h]),[j,i]}({did:x}),M=Object(l.a)(p,2),A=M[0],J=M[1],L=Object(C.a)(),R=function(){var e=Object(o.a)(u.a.mark((function e(t){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.target.value,c=r.trim(),!t.ctrlKey||!t.shiftKey||"Enter"!==t.key){e.next=8;break}return e.next=5,n.set("m\xefmis",{});case 5:L({title:"Reset File Paths.",description:"The filesystem has been cleared.",status:"success",duration:5e3,isClosable:!0}),e.next=15;break;case 8:if(!t.ctrlKey||"Enter"!==t.key){e.next=14;break}return e.next=11,X(i);case 11:L({title:"Created Path.",description:"".concat(i[i.length-1]," has been added."),status:"success",duration:5e3,isClosable:!0}),e.next=15;break;case 14:"Enter"===t.key&&""!==c?U(c):(f(r),J((function(e){return{path:e.path,string:r}})));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(e){s((function(t){var n=[].concat(Object(y.a)(t),[e]);return J({path:n,string:""}),n})),f("")},X=function(){var e=Object(o.a)(u.a.mark((function e(t){var r,c,a,i,s,o,l,d,b,j,f,h,m,v,p,y,C,D,S,z;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:if(n.ceramic.did){e.next=6;break}L({title:"Connect to Ceramic.",description:"Creating paths requires connecting to the Ceramic network.",status:"error",duration:5e3,isClosable:!0}),e.next=63;break;case 6:return e.next=8,n.get("m\xefmis",x);case 8:r=e.sent,c=[],a=Object(w.a)(t),e.prev=11,a.s();case 13:if((i=a.n()).done){e.next=26;break}if(b=i.value,j=null!==(s=null===(o=r)||void 0===o?void 0:o[b])&&void 0!==s?s:null===(l=r)||void 0===l||null===(d=l.content)||void 0===d?void 0:d[b],!Boolean(j)){e.next=23;break}return e.next=19,T.TileDocument.load(n.ceramic,j);case 19:r=e.sent,c.push(r),e.next=24;break;case 23:return e.abrupt("break",26);case 24:e.next=13;break;case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(11),a.e(e.t0);case 31:return e.prev=31,a.f(),e.finish(31);case 34:f=t.slice(c.length,t.length).reverse(),h=[],m=Object(w.a)(f),e.prev=37,m.s();case 39:if((v=m.n()).done){e.next=47;break}return y=v.value,e.next=43,T.TileDocument.create(n.ceramic,Object(g.a)({},y,null!==(p=h[0])&&void 0!==p?p:null),{controllers:[n.ceramic.did.id],family:"M\xefmis Node",schema:O.schemas.M\u00efmis});case 43:C=e.sent,h.unshift(C.id.toUrl());case 45:e.next=39;break;case 47:e.next=52;break;case 49:e.prev=49,e.t1=e.catch(37),m.e(e.t1);case 52:return e.prev=52,m.f(),e.finish(52);case 55:if(0!==c.length){e.next=59;break}h.length>0&&n.merge("m\xefmis",Object(g.a)({},t[0],h[1])),e.next=63;break;case 59:return S=c[c.length-1],z=Object(k.a)(Object(k.a)({},S.content),{},Object(g.a)({},t[c.length],null!==(D=h[1])&&void 0!==D?D:null)),e.next=63,S.update(z);case 63:case"end":return e.stop()}}),e,null,[[11,28,31,34],[37,49,52,55]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e,t;(null===n||void 0===n||null===(e=n.ceramic)||void 0===e||null===(t=e.did)||void 0===t?void 0:t.id)&&v(n.ceramic.did.id)}),[null===n||void 0===n||null===(e=n.ceramic)||void 0===e||null===(t=e.did)||void 0===t?void 0:t.id]),Object(W.jsxs)(D.a,{mr:"10em",children:[Object(W.jsxs)(S.a,{maxW:"42rem",m:"auto",mt:5,children:[Object(W.jsx)(z.a,{children:"DID",title:"Decentralized Identifier"}),Object(W.jsx)(q.a,{borderWidth:3,textAlign:"center",value:x,onChange:function(e){return v(e.target.value)}})]}),Object(W.jsxs)(I.a,{justify:"center",mt:5,children:[i.map((function(e,t){return Object(W.jsxs)(P.a,{grow:3,variant:"solid",colorScheme:K[t%K.length],title:e,mr:1,children:[Object(W.jsx)(P.c,{children:e}),Object(W.jsx)(P.b,{onClick:function(){return function(e){s((function(t){var n=Object(y.a)(t);return n.splice(e,1),J({path:n,string:j}),n}))}(t)}})]},++B)})),Object(W.jsx)(q.a,{maxW:"20rem",borderWidth:3,autoFocus:!0,grow:1,onKeyPress:R,value:j,onChange:R})]}),0===A.length?Object(W.jsx)(E.a,{textAlign:"center",children:"No path completions found\u2026"}):Object(W.jsxs)(F.a,{children:[Object(W.jsx)(F.e,{children:Object(W.jsx)(F.f,{children:Object(W.jsx)(F.d,{children:"Name"})})}),Object(W.jsx)(F.b,{children:A.map((function(e,t){return Object(W.jsx)(F.f,{children:Object(W.jsx)(F.c,{onClick:function(){return U(e)},cursor:"pointer",children:e})},t)}))})]})]})},A=function(){var e=new x.a("http://localhost:7007"),t={"m\xefmis":O.definitions.m\u00efmis},n=Object(r.useState)(new p.a({ceramic:e,aliases:t})),c=Object(l.a)(n,2),a=c[0],i=c[1],s=new d.b,f=Object(r.useState)(!1),m=Object(l.a)(f,2),k=(m[0],m[1]),g=function(){var t=Object(o.a)(u.a.mark((function t(){var n,r,c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return n=t.sent,r=n[0],c=new d.a(window.ethereum,r),t.next=7,s.connect(c);case 7:return a=new v.DID({provider:s.getDidProvider(),resolver:h.a.getResolver(e)}),t.next=10,a.authenticate();case 10:e.setDID(a),k((function(e){return!e}));case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){i(null)};return Object(W.jsx)(N.Provider,{value:a,children:Object(W.jsxs)(b.a,{children:[function(){var e,t=a.ceramic.did?["Disconnect",w]:["Connect",g],n=Object(l.a)(t,2),r=n[0],c=n[1];return Object(W.jsx)(j.a,{position:"fixed",right:5,top:5,onClick:c,title:null===(e=a.ceramic.did)||void 0===e?void 0:e.id,children:r})}(),Object(W.jsx)(M,{})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,522)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(W.jsx)(c.a.StrictMode,{children:Object(W.jsx)(A,{})}),document.getElementById("root")),J()}},[[497,1,2]]]);
//# sourceMappingURL=main.5dfae834.chunk.js.map