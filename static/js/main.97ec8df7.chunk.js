(this["webpackJsonpceramic-overlay-fs"]=this["webpackJsonpceramic-overlay-fs"]||[]).push([[0],{366:function(e,t,n){"use strict";var r=n(166);Object.defineProperty(t,"__esModule",{value:!0}),t.IDXContext=void 0;var a=r(n(0)).default.createContext(null);t.IDXContext=a,a.displayName="IDX"},452:function(e){e.exports=JSON.parse('{"definitions":{"m\xefmis":"ceramic://kjzl6cwe1jw14634js8evp6y8jmxnsfdyku4307hffoz49tnz0ncv4qy7r9k3rw"},"schemas":{"M\xefmis":"ceramic://k3y52l7qbv1frybb0i893pf9i70gwmbdjziqwfod2ajo4sf506cmqwss90hjqys5c"}}')},531:function(e,t,n){"use strict";var r=n(166),a=r(n(0)),i=r(n(159)),o=r(n(542)),c=r(n(872)),s=n(261);i.default.render((0,s.jsx)(a.default.StrictMode,{children:(0,s.jsx)(o.default,{})}),document.getElementById("root")),(0,c.default)()},542:function(e,t,n){"use strict";var r=n(380),a=n(166);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(5)),o=a(n(176)),c=a(n(3)),s=n(875),u=n(340),l=a(n(572)),d=a(n(614)),f=n(626),h=r(n(0)),p=n(877),v=a(n(452)),x=a(n(681)),m=n(366),b=n(261);t.default=function(){var e,t=(0,h.useState)(null!==(e=Object({NODE_ENV:"production",PUBLIC_URL:"/ceramic-fs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CERAMIC_URI)&&void 0!==e?e:"https://ceramic-clay.3boxlabs.com"),n=(0,c.default)(t,2),r=n[0],a=n[1],g=(0,h.useMemo)((function(){return new d.default(r)}),[r]),k=(0,h.useMemo)((function(){return{"m\xefmis":v.default.definitions.m\u00efmis}}),[]),C=(0,h.useMemo)((function(){return new p.IDX({ceramic:g,aliases:k})}),[k,g]),j=(0,h.useState)(null),S=(0,c.default)(j,2),w=S[0],I=S[1],y=new s.ThreeIdConnect,R=(0,h.useState)(!1)[1],D=function(){var e=(0,o.default)(i.default.mark((function e(){var t,n,r,a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return t=e.sent,n=t[0],I(n),r=new s.EthereumAuthProvider(window.ethereum,n),e.next=8,y.connect(r);case 8:return a=new f.DID({provider:y.getDidProvider(),resolver:l.default.getResolver(g)}),e.next=11,a.authenticate();case 11:g.setDID(a),R((function(e){return!e}));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){g.setDID(void 0),R((function(e){return!e}))};return(0,b.jsx)(m.IDXContext.Provider,{value:C,children:(0,b.jsxs)(u.ChakraProvider,{children:[function(){var e=C.ceramic.did?["Disconnect",T,"red"]:["Connect",D,"green"],t=(0,c.default)(e,3),n=t[0],r=t[1],a=t[2];return(0,b.jsx)(u.Button,{position:"fixed",right:5,top:5,onClick:r,colorScheme:a,title:w,children:n})}(),(0,b.jsx)(x.default,{ceramicURI:r,setCeramicURI:a})]})})}},580:function(e,t){},634:function(e,t){},635:function(e,t){},681:function(e,t,n){"use strict";var r=n(166);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(434)),i=r(n(14)),o=r(n(150)),c=r(n(49)),s=r(n(5)),u=r(n(176)),l=r(n(3)),d=n(340),f=n(0),h=n(175),p=n(682),v=n(868),x=n(366),m=r(n(452)),b=r(n(869)),g=r(n(870)),k=n(261),C=0,j=["gray","red","orange","yellow","green","teal","blue","cyan","purple","pink"];t.default=function(e){var t,n,r,S=e.ceramicURI,w=e.setCeramicURI,I=(0,f.useContext)(x.IDXContext),y=(0,f.useState)([]),R=(0,l.default)(y,2),D=R[0],T=R[1],_=(0,f.useState)(""),F=(0,l.default)(_,2),E=F[0],O=F[1],U=(0,f.useState)("did:3:kjzl6cwe1jw147zr02h32lkdp666opzg0kp0sibzvumtn0z4k1wdxb6yb7ix4ie"),P=(0,l.default)(U,2),M=P[0],B=P[1],A=(0,f.useState)(!0),N=(0,l.default)(A,2),W=N[0],z=N[1],K=(0,v.useSuggestions)({did:M}),L=(0,l.default)(K,2),H=L[0],q=L[1],X=(0,f.useRef)(null),J=(0,f.useRef)(null),V=(0,f.useState)(null!==(t=Object({NODE_ENV:"production",PUBLIC_URL:"/ceramic-fs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_IPFS_URI)&&void 0!==t?t:"/ip4/127.0.0.1/tcp/5001"),G=(0,l.default)(V,2),Y=G[0],$=G[1],Q=(0,p.create)(Y),Z=(0,d.useToast)(),ee=(0,d.useDisclosure)(),te=ee.isOpen,ne=ee.onOpen,re=ee.onClose,ae=function(){var e=(0,u.default)(s.default.mark((function e(t){var n,r;return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.value,r=n.trim(),z(!0),!t.ctrlKey||!t.shiftKey||"Enter"!==t.key){e.next=15;break}if(!window.confirm("Clear All Data\u203d")){e.next=12;break}if(I.ceramic.did){e.next=9;break}alert("\xa1Connect to Ceramic!"),e.next=12;break;case 9:return e.next=11,I.set("m\xefmis",{});case 11:Z({title:"Reset File Paths.",description:"The filesystem has been cleared.",status:"success",duration:5e3,isClosable:!0});case 12:z(!1),e.next=30;break;case 15:if(!t.ctrlKey||"Enter"!==t.key){e.next=29;break}return e.prev=16,e.next=19,oe({path:D});case 19:Z({title:"Created Path.",description:"".concat(D[D.length-1]," has been added."),status:"success",duration:5e3,isClosable:!0}),e.next=24;break;case 22:e.prev=22,e.t0=e.catch(16);case 24:return e.prev=24,z(!1),e.finish(24);case 27:e.next=30;break;case 29:/^(Arrow)?(Right|Up)$/.test(t.key)?W||1!==H.length||(E===H[0]?ie(r):(O(H[0]),z(!1))):"Enter"===t.key&&""!==r?ie(r):t.key||(O(n),q((function(e){return{path:e.path,string:n}})));case 30:case"end":return e.stop()}}),e,null,[[16,22,24,27]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(e){z(!0),T((function(t){var n=[].concat((0,c.default)(t),[e]);return q({path:n,string:""}),n})),O("")},oe=function(){var e=(0,u.default)(s.default.mark((function e(t){var n,r,c,u,d,f,p,v,x,b,g,k,C,j,S,w,y,R,D,T,_,F,E,O,U,P,B,A,N,W,z,K,L,H,q,X,J,V,G,Y,$;return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.path,r=t.cid,c=void 0===r?null:r,u=t.filename,d=void 0===u?null:u,0!==n.length){e.next=3;break}return e.abrupt("return");case 3:if(I.ceramic.did){e.next=8;break}throw Z({title:"Connect to Ceramic.",description:"Creating paths requires connecting to the Ceramic network.",status:"error",duration:5e3,isClosable:!0}),new Error("Not Connected");case 8:return p=[],e.next=11,I.get("m\xefmis",M);case 11:if(v=e.sent,b=[],g=null===(f=x=v)||void 0===f?void 0:f[n[0]],p.push(g),!Boolean(g)){e.next=20;break}return e.next=19,h.TileDocument.load(I.ceramic,g);case 19:x=e.sent;case 20:k=(0,o.default)(n.slice(1)),e.prev=21,k.s();case 23:if((C=k.n()).done){e.next=37;break}if(w=C.value,y=null===(j=x)||void 0===j||null===(S=j.content)||void 0===S?void 0:S[w],p.push(y),!Boolean(y)){e.next=34;break}return b.push(x),e.next=31,h.TileDocument.load(I.ceramic,y);case 31:x=e.sent,e.next=35;break;case 34:return e.abrupt("break",37);case 35:e.next=23;break;case 37:e.next=42;break;case 39:e.prev=39,e.t0=e.catch(21),k.e(e.t0);case 42:return e.prev=42,k.f(),e.finish(42);case 45:R=!(null===v||void 0===v?void 0:v[n[0]]),D=R?0:b.length+1,console.info("FWD",{path:n,urls:p,found:D},b.map((function(e){return[e.id.toUrl(),e.content]}))),T=n.slice(Math.max(1,D),n.length).reverse(),console.info("NON",T),_=[],F=(0,o.default)(T),e.prev=52,F.s();case 54:if((E=F.n()).done){e.next=63;break}return P=E.value,console.info("BKWRD",{found:D,backward:_,elem:P}),e.next=59,h.TileDocument.create(I.ceramic,(0,i.default)({},P,null!==(O=null===(U=_[0])||void 0===U?void 0:U.id.toUrl())&&void 0!==O?O:null),{controllers:[I.ceramic.did.id],family:"M\xefmis Context Node",schema:m.default.schemas.M\u00efmis});case 59:B=e.sent,_.unshift(B);case 61:e.next=54;break;case 63:e.next=68;break;case 65:e.prev=65,e.t1=e.catch(52),F.e(e.t1);case 68:return e.prev=68,F.f(),e.finish(68);case 71:if(console.table({name:"DCKS",f:b.map((function(e){return e.content})),b:_.map((function(e){return e.content})),found:D,path:n,pl:n.length,fl:b.length}),!R){e.next=80;break}if(!(b.length>0)){e.next=75;break}throw new Error("\xbfNo Root, but Forward Walked?");case 75:return console.info("ROOT",(0,i.default)({},n[0],null!==(A=null===(N=_[0])||void 0===N?void 0:N.id.toUrl())&&void 0!==A?A:null)),e.next=78,I.merge("m\xefmis",(0,i.default)({},n[0],null!==(W=null===(z=_[0])||void 0===z?void 0:z.id.toUrl())&&void 0!==W?W:null));case 78:e.next=95;break;case 80:if(!(D<n.length)){e.next=94;break}return console.info("HERE"),K=b.slice(-1),L=(0,l.default)(K,1),H=L[0],q=_[0],console.info("PF",n[D-1]),e.next=87,h.TileDocument.load(I.ceramic,H.content[n[D-1]]);case 87:return X=e.sent,console.table({pf:n[D],pf1:n[D+1],name:"CHAIN",pid:H.id.toUrl(),pcon:H.content,cid:q.id.toUrl(),ccon:q.content,content:X.content,exe:(0,a.default)((0,a.default)({},X.content),q.content)}),e.next=91,X.update((0,a.default)((0,a.default)({},X.content),q.content));case 91:console.info("NEW",X.content),e.next=95;break;case 94:console.info("No Changes");case 95:if(!c){e.next=107;break}if(d){e.next=98;break}throw new Error("Filename not set.");case 98:return V=_.slice(-1),G=(0,l.default)(V,1),Y=G[0],Y=null!==(J=Y)&&void 0!==J?J:b.slice(-1)[0],e.next=102,h.TileDocument.load(I.ceramic,Y[n.slice(-1)[0]]);case 102:return $=e.sent,console.table({name:"DOC",p:Y.content,c:$.content,exe:(0,a.default)((0,a.default)({},$.content),{},(0,i.default)({},d,"ipfs://".concat(c.toString())))}),e.next=106,$.update((0,a.default)((0,a.default)({},$.content),{},(0,i.default)({},d,"ipfs://".concat(c.toString()))));case 106:console.table({p:Y.id.toUrl(),c:Y.commitId.toUrl(),cc:$.content});case 107:case"end":return e.stop()}}),e,null,[[21,39,42,45],[52,65,68,71]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=(0,u.default)(s.default.mark((function e(t){var n,r,a,i,c,u,l,d;return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.files,r=t.target.value,0!==n.length){e.next=4;break}throw new Error("No file is selected");case 4:a=(0,o.default)(n),e.prev=5,a.s();case 7:if((i=a.n()).done){e.next=17;break}return c=i.value,e.next=11,Q.add(c,{progress:function(e){return console.info("received: ".concat(e))}});case 11:u=e.sent,l=r.split(".").slice(-1),d="".concat(l),oe({path:D,cid:u.cid,filename:d});case 15:e.next=7;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(5),a.e(e.t0);case 22:return e.prev=22,a.f(),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[5,19,22,25]])})));return function(t){return e.apply(this,arguments)}}();return(0,f.useEffect)((function(){z(!1)}),[H]),(0,f.useEffect)((function(){var e,t;(null===I||void 0===I||null===(e=I.ceramic)||void 0===e||null===(t=e.did)||void 0===t?void 0:t.id)&&B(I.ceramic.did.id)}),[null===I||void 0===I||null===(n=I.ceramic)||void 0===n||null===(r=n.did)||void 0===r?void 0:r.id]),(0,k.jsxs)(k.Fragment,{children:[I.ceramic.did&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(d.Button,{position:"fixed",top:"25vh",right:"3vw",colorScheme:"orange",onClick:function(){return X.current.click()},children:"\u2795"}),(0,k.jsx)(d.Input,{type:"file",ref:X,style:{display:"none"},onChange:ce})]}),(0,k.jsx)(d.Button,{position:"fixed",top:"50vh",right:"3vw",colorScheme:"teal",fontSize:42,pt:1,onClick:ne,children:"\u2699"}),(0,k.jsx)(g.default,{isOpen:te,onClose:re,ipfsURI:Y,setIPFSURI:$,ceramicURI:S,setCeramicURI:w,finalFocusRef:J}),(0,k.jsx)(d.Link,{href:"//github.com/dysbulic/ceramic-fs/",children:(0,k.jsx)(d.Image,{src:b.default,position:"fixed",boxSize:"5vw",bottom:0,right:6})}),(0,k.jsxs)(d.Box,{mr:"10em",children:[(0,k.jsxs)(d.InputGroup,{maxW:"42rem",m:"auto",mt:5,children:[(0,k.jsx)(d.InputLeftAddon,{children:"DID",title:"Decentralized Identifier"}),(0,k.jsx)(d.Input,{borderWidth:3,textAlign:"center",value:M,onChange:function(e){return B(e.target.value)}})]}),(0,k.jsxs)(d.Wrap,{justify:"center",mt:5,children:[D.map((function(e,t){return(0,k.jsxs)(d.Tag,{grow:3,variant:"solid",colorScheme:j[t%j.length],title:e,mr:1,children:[(0,k.jsx)(d.TagLabel,{children:e}),(0,k.jsx)(d.TagCloseButton,{onClick:function(){return function(e){z(!0),T((function(t){var n=(0,c.default)(t).slice(0,e);return q({path:n,string:E}),n}))}(t)}})]},++C)})),(0,k.jsx)(d.Input,{maxW:"20rem",borderWidth:3,autoFocus:!0,grow:1,onKeyDown:ae,value:E,ref:J,onChange:ae})]}),W?(0,k.jsx)(d.Box,{align:"center",children:(0,k.jsx)(d.Spinner,{size:"xl",colorScheme:"blue",m:"auto",mt:40})}):0===H.length?(0,k.jsx)(d.Box,{mt:"30vh",children:(0,k.jsx)(d.Text,{textAlign:"center",fontFamily:"'Odibee Sans'",fontSize:65,children:"No path completions found\u2026"})}):(0,k.jsxs)(d.Table,{children:[(0,k.jsx)(d.Thead,{children:(0,k.jsx)(d.Tr,{children:(0,k.jsx)(d.Th,{children:"Name"})})}),(0,k.jsx)(d.Tbody,{children:H.sort().map((function(e,t){return(0,k.jsx)(d.Tr,{_hover:{bg:"#FFF70022"},children:(0,k.jsx)(d.Td,{onClick:function(){return ie(e)},cursor:"pointer",children:e})},t)}))})]})]})]})}},688:function(e,t){},694:function(e,t){},705:function(e,t){},706:function(e,t){},868:function(e,t,n){"use strict";var r=n(166);Object.defineProperty(t,"__esModule",{value:!0}),t.useSuggestions=void 0;var a=r(n(5)),i=r(n(150)),o=r(n(176)),c=r(n(3)),s=n(0),u=n(175),l=n(366);t.useSuggestions=function(e){var t=e.did,n=(0,s.useState)({path:[],string:""}),r=(0,c.default)(n,2),d=r[0],f=r[1],h=(0,s.useContext)(l.IDXContext),p=(0,s.useState)([]),v=(0,c.default)(p,2),x=v[0],m=v[1],b=(0,s.useCallback)((0,o.default)(a.default.mark((function e(){var n,r,o,c,s,l,f,p;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=32;break}return e.next=3,h.get("m\xefmis",t);case 3:n=e.sent,r=n?[n]:[],o=(0,i.default)(d.path),e.prev=6,o.s();case 8:if((c=o.n()).done){e.next=21;break}if(l=c.value,f=null===(s=n)||void 0===s?void 0:s[l],!Boolean(f)){e.next=18;break}return e.next=14,u.TileDocument.load(h.ceramic,f);case 14:(n=e.sent.content)&&r.push(n),e.next=19;break;case 18:return e.abrupt("break",21);case 19:e.next=8;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(6),o.e(e.t0);case 26:return e.prev=26,o.f(),e.finish(26);case 29:p=[],r.length-1===d.path.length&&(p=Object.keys(r[r.length-1]),""!==d.string&&(p=p.filter((function(e){return e.includes(d.string)})))),m(p);case 32:case"end":return e.stop()}}),e,null,[[6,23,26,29]])}))),[d,h,t]);return(0,s.useEffect)((function(){return b()}),[b]),[x,f]}},869:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/octocat.6986f28e.svg"},870:function(e,t,n){"use strict";var r=n(380),a=n(166);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(3)),o=n(340),c=r(n(0)),s=n(261);t.default=function(e){var t=e.isOpen,n=e.onClose,r=e.finalFocusRef,a=e.ipfsURI,u=e.setIPFSURI,l=e.ceramicURI,d=e.setCeramicURI,f=c.default.useRef(),h=(0,c.useState)(a),p=(0,i.default)(h,2),v=p[0],x=p[1],m=(0,c.useState)(l),b=(0,i.default)(m,2),g=b[0],k=b[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.Modal,{initialFocusRef:f,finalFocusRef:r,isOpen:t,onClose:n,children:[(0,s.jsx)(o.ModalOverlay,{}),(0,s.jsxs)(o.ModalContent,{children:[(0,s.jsx)(o.ModalHeader,{textAlign:"center",children:"Configure Your Endpoints"}),(0,s.jsx)(o.ModalCloseButton,{}),(0,s.jsxs)(o.ModalBody,{pb:6,children:[(0,s.jsxs)(o.FormControl,{children:[(0,s.jsx)(o.FormLabel,{children:"IPFS URI"}),(0,s.jsx)(o.Input,{ref:f,placeholder:"IPFS URI",value:v,onChange:function(e){return x(e.target.value)}})]}),(0,s.jsxs)(o.FormControl,{mt:4,children:[(0,s.jsx)(o.FormLabel,{children:"Ceramic URI"}),(0,s.jsx)(o.Input,{placeholder:"Ceramic URI",value:g,onChange:function(e){return k(e.target.value)}})]})]}),(0,s.jsxs)(o.ModalFooter,{children:[(0,s.jsx)(o.Button,{colorScheme:"blue",mr:3,onClick:function(){u(v),d(g),n()},children:"Save"}),(0,s.jsx)(o.Button,{onClick:n,children:"Cancel"})]})]})]})})}},872:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,882)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))};t.default=r}},[[531,1,2]]]);
//# sourceMappingURL=main.97ec8df7.chunk.js.map