(this["webpackJsonpceramic-overlay-fs"]=this["webpackJsonpceramic-overlay-fs"]||[]).push([[0],{366:function(e,t,n){"use strict";var r=n(166);Object.defineProperty(t,"__esModule",{value:!0}),t.IDXContext=void 0;var i=r(n(0)).default.createContext(null);t.IDXContext=i,i.displayName="IDX"},452:function(e){e.exports=JSON.parse('{"definitions":{"m\xefmis":"ceramic://kjzl6cwe1jw14634js8evp6y8jmxnsfdyku4307hffoz49tnz0ncv4qy7r9k3rw"},"schemas":{"M\xefmis":"ceramic://k3y52l7qbv1frybb0i893pf9i70gwmbdjziqwfod2ajo4sf506cmqwss90hjqys5c"}}')},531:function(e,t,n){"use strict";var r=n(166),i=r(n(0)),a=r(n(159)),s=r(n(542)),o=r(n(872)),c=n(261);a.default.render((0,c.jsx)(i.default.StrictMode,{children:(0,c.jsx)(s.default,{})}),document.getElementById("root")),(0,o.default)()},542:function(e,t,n){"use strict";var r=n(380),i=n(166);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(5)),s=i(n(176)),o=i(n(3)),c=n(875),l=n(340),u=i(n(572)),d=i(n(614)),f=n(626),h=r(n(0)),v=n(877),p=i(n(452)),x=i(n(681)),m=n(366),b=n(261);t.default=function(){var e,t=(0,h.useState)(null!==(e=Object({NODE_ENV:"production",PUBLIC_URL:"/ceramic-fs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CERAMIC_URI)&&void 0!==e?e:"https://ceramic-clay.3boxlabs.com"),n=(0,o.default)(t,2),r=n[0],i=n[1],g=(0,h.useMemo)((function(){return new d.default(r)}),[r]),k=(0,h.useMemo)((function(){return{"m\xefmis":p.default.definitions.m\u00efmis}}),[]),j=(0,h.useMemo)((function(){return new v.IDX({ceramic:g,aliases:k})}),[k,g]),C=(0,h.useState)(null),w=(0,o.default)(C,2),I=w[0],y=w[1],S=(0,h.useState)(!1),T=(0,o.default)(S,2),D=T[0],R=T[1],_=new c.ThreeIdConnect,F=(0,h.useState)(!1)[1],E=function(){var e=(0,s.default)(a.default.mark((function e(){var t,n,r,i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return t=e.sent,n=t[0],y(n),r=new c.EthereumAuthProvider(window.ethereum,n),e.next=8,_.connect(r);case 8:return i=new f.DID({provider:_.getDidProvider(),resolver:u.default.getResolver(g)}),e.next=11,i.authenticate();case 11:g.setDID(i),F((function(e){return!e}));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){g.setDID(void 0),F((function(e){return!e}))};return(0,h.useEffect)((function(){R(!1)}),[j.ceramic.did]),(0,b.jsx)(m.IDXContext.Provider,{value:j,children:(0,b.jsxs)(l.ChakraProvider,{children:[function(){var e=j.ceramic.did?["Disconnect",P,"red"]:["Connect",E,"green"],t=(0,o.default)(e,3),n=t[0],r=t[1],i=t[2];return(0,b.jsx)(l.Button,{position:"fixed",right:5,top:5,colorScheme:i,onClick:function(e){R(!0),r(e)},title:I,isDisabled:D,children:n})}(),(0,b.jsx)(x.default,{ceramicURI:r,setCeramicURI:i})]})})}},580:function(e,t){},634:function(e,t){},635:function(e,t){},681:function(e,t,n){"use strict";var r=n(166);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(5)),a=r(n(434)),s=r(n(14)),o=r(n(150)),c=r(n(176)),l=r(n(49)),u=r(n(3)),d=n(340),f=n(0),h=n(175),v=n(682),p=n(868),x=n(366),m=r(n(452)),b=r(n(869)),g=r(n(870)),k=n(261),j=0,C=["gray","red","orange","yellow","green","teal","blue","cyan","purple","pink"];t.default=function(e){var t,n,r,w,I=e.ceramicURI,y=e.setCeramicURI,S=(0,f.useContext)(x.IDXContext),T=(0,f.useState)([]),D=(0,u.default)(T,2),R=D[0],_=D[1],F=(0,f.useState)(""),E=(0,u.default)(F,2),P=E[0],O=E[1],A=new URLSearchParams(window.location.search),U=(0,f.useState)(null!==(t=A.get("did"))&&void 0!==t?t:"did:3:bafyreifdypkct7falt5aqkeahfl552ktoxlyh7lmrf6pttlwnfseufh4fe"),M=(0,u.default)(U,2),L=M[0],B=M[1],W=(0,f.useState)(!0),N=(0,u.default)(W,2),q=N[0],z=N[1],K=(0,f.useState)(null),H=(0,u.default)(K,2),X=H[0],$=H[1],J=(0,p.useSuggestions)({did:L,setLoading:z}),G=(0,u.default)(J,2),V=G[0],Y=G[1],Q=(0,f.useRef)(null),Z=(0,f.useRef)(null),ee=(0,f.useState)(null!==(n=Object({NODE_ENV:"production",PUBLIC_URL:"/ceramic-fs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_IPFS_URI)&&void 0!==n?n:"/ip4/127.0.0.1/tcp/5001"),te=(0,u.default)(ee,2),ne=te[0],re=te[1],ie=(0,v.create)(ne),ae=(0,d.useToast)(),se=(0,d.useDisclosure)(),oe=se.isOpen,ce=se.onOpen,le=se.onClose,ue=(0,f.useCallback)((function(e){z(!0),_((function(t){var n=[].concat((0,l.default)(t),[e]);return Y({path:n,string:""}),n})),O("")}),[Y]),de=(0,f.useCallback)((function(e){z(!0),_((function(t){var n=(0,l.default)(t).slice(0,e);return Y({path:n,string:P}),n}))}),[P,Y]),fe=(0,f.useCallback)((function(e){z(!0),O(e),Y((function(t){return{path:t.path,string:e}}))}),[Y]),he=(0,f.useCallback)(function(){var e=(0,c.default)(i.default.mark((function e(t){var n,r,c,l,d,f,v,p,x,b,g,k,j,C,w,I,y,T,D,R,_,F,E,P,O,A,U,M,B,W,N,q,z,K,H;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.path,r=t.cid,c=void 0===r?null:r,l=t.filename,d=void 0===l?null:l,0!==n.length){e.next=3;break}return e.abrupt("return");case 3:if(S.ceramic.did){e.next=8;break}throw ae({title:"Connect to Ceramic.",description:"Creating paths requires connecting to the Ceramic network.",status:"error",duration:5e3,isClosable:!0}),new Error("Not Connected");case 8:return v=[],e.next=11,S.get("m\xefmis",L);case 11:if(p=e.sent,console.info("Entry",p),b=[],g=null===(f=x=p)||void 0===f?void 0:f[n[0]],v.push(g),!Boolean(g)){e.next=21;break}return e.next=20,h.TileDocument.load(S.ceramic,g);case 20:x=e.sent;case 21:k=(0,o.default)(n.slice(1)),e.prev=22,k.s();case 24:if((j=k.n()).done){e.next=38;break}if(I=j.value,y=null===(C=x)||void 0===C||null===(w=C.content)||void 0===w?void 0:w[I],v.push(y),!Boolean(y)){e.next=35;break}return b.push(x),e.next=32,h.TileDocument.load(S.ceramic,y);case 32:x=e.sent,e.next=36;break;case 35:return e.abrupt("break",38);case 36:e.next=24;break;case 38:e.next=43;break;case 40:e.prev=40,e.t0=e.catch(22),k.e(e.t0);case 43:return e.prev=43,k.f(),e.finish(43);case 46:if(T=!(null===p||void 0===p?void 0:p[n[0]]),D=T?0:b.length+1,R=n.slice(Math.max(1,D),n.length).reverse(),_=[],!c){e.next=57;break}if(d){e.next=53;break}throw new Error("Filename not set.");case 53:return e.next=55,h.TileDocument.create(S.ceramic,(0,s.default)({},d,"ipfs://".concat(c.toString())),{controllers:[S.ceramic.did.id],family:"M\xefmis Content Node",schema:m.default.schemas.M\u00efmis});case 55:F=e.sent,_.push(F);case 57:E=(0,o.default)(R),e.prev=58,E.s();case 60:if((P=E.n()).done){e.next=68;break}return U=P.value,e.next=64,h.TileDocument.create(S.ceramic,(0,s.default)({},U,null!==(O=null===(A=_[0])||void 0===A?void 0:A.id.toUrl())&&void 0!==O?O:null),{controllers:[S.ceramic.did.id],family:"M\xefmis Context Node",schema:m.default.schemas.M\u00efmis});case 64:M=e.sent,_.unshift(M);case 66:e.next=60;break;case 68:e.next=73;break;case 70:e.prev=70,e.t1=e.catch(58),E.e(e.t1);case 73:return e.prev=73,E.f(),e.finish(73);case 76:if(!T){e.next=83;break}if(!(b.length>0)){e.next=79;break}throw new Error("\xbfNo Root, but Forward Walked?");case 79:return e.next=81,S.merge("m\xefmis",(0,s.default)({},n[0],null!==(B=null===(W=_[0])||void 0===W?void 0:W.id.toUrl())&&void 0!==B?B:null));case 81:e.next=94;break;case 83:if(!(D<n.length)){e.next=93;break}return N=b.slice(-1),q=(0,u.default)(N,1),z=q[0],K=_[0],e.next=88,h.TileDocument.load(S.ceramic,z.content[n[D-1]]);case 88:return H=e.sent,e.next=91,H.update((0,a.default)((0,a.default)({},H.content),K.content));case 91:e.next=94;break;case 93:console.info("No Changes");case 94:case"end":return e.stop()}}),e,null,[[22,40,43,46],[58,70,73,76]])})));return function(t){return e.apply(this,arguments)}}(),[L,S,ae]),ve=(0,f.useCallback)(function(){var e=(0,c.default)(i.default.mark((function e(t){var n,r;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.value,r=n.trim(),!t.ctrlKey||!t.shiftKey||"Enter"!==t.key){e.next=13;break}if(!window.confirm("Clear All Data\u203d")){e.next=11;break}if(S.ceramic.did){e.next=8;break}alert("\xa1Connect to Ceramic!"),e.next=11;break;case 8:return e.next=10,S.set("m\xefmis",{});case 10:ae({title:"Reset File Paths.",description:"The filesystem has been cleared.",status:"success",duration:5e3,isClosable:!0});case 11:e.next=28;break;case 13:if(!t.ctrlKey||"Enter"!==t.key){e.next=27;break}return console.info("Writing",R),e.prev=15,e.next=18,he({path:R});case 18:ae({title:"Created Path.",description:"".concat(R[R.length-1]," has been added."),status:"success",duration:5e3,isClosable:!0}),e.next=23;break;case 21:e.prev=21,e.t0=e.catch(15);case 23:return e.prev=23,e.finish(23);case 25:e.next=28;break;case 27:/^(Arrow)?Up$/.test(t.key)?$((function(e){return null===e||e>(null===V||void 0===V?void 0:V.length)||e<0?(null===V||void 0===V?void 0:V.length)-1:e-1})):/^(Arrow)?Down$/.test(t.key)?$((function(e){return null===e||e>(null===V||void 0===V?void 0:V.length)||e<0?0:e+1})):/^(Arrow)?Right$/.test(t.key)?q||1!==(null===V||void 0===V?void 0:V.length)?null!==X&&X>=0&&X<(null===V||void 0===V?void 0:V.length)&&fe(null===V||void 0===V?void 0:V[X]):P===(null===V||void 0===V?void 0:V[0])?ue(r):fe(null===V||void 0===V?void 0:V[0]):"Enter"===t.key&&""!==r?ue(r):"Backspace"!==t.key&&!/^(Arrow)?Left$/.test(t.key)||""!==n||de(R.length-1);case 28:case"end":return e.stop()}}),e,null,[[15,21,23,25]])})));return function(t){return e.apply(this,arguments)}}(),[ue,P,S,q,de,X,V,R,fe,ae,he]),pe=function(){var e=(0,c.default)(i.default.mark((function e(t){var n,r,a,s,c,l,d,f,h,v;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.files,r=t.target.value,0!==n.length){e.next=4;break}throw new Error("No file is selected");case 4:a=(0,o.default)(n),e.prev=5,a.s();case 7:if((s=a.n()).done){e.next=17;break}return c=s.value,e.next=11,ie.add(c,{progress:function(e){return console.info("received: ".concat(e))}});case 11:l=e.sent,d=r.split(/[./\\]/).slice(-1),f=(0,u.default)(d,1),h=f[0],v=h,he({path:R,cid:l.cid,filename:v});case 15:e.next=7;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(5),a.e(e.t0);case 22:return e.prev=22,a.f(),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[5,19,22,25]])})));return function(t){return e.apply(this,arguments)}}();return(0,f.useEffect)((function(){z(!1)}),[V]),(0,f.useEffect)((function(){var e,t;(null===S||void 0===S||null===(e=S.ceramic)||void 0===e||null===(t=e.did)||void 0===t?void 0:t.id)&&B(S.ceramic.did.id)}),[null===S||void 0===S||null===(r=S.ceramic)||void 0===r||null===(w=r.did)||void 0===w?void 0:w.id]),(0,f.useEffect)((function(){return window.addEventListener("keypress",ve,!1),function(){window.removeEventListener("keypress",ve,!1)}}),[ve]),(0,k.jsxs)(k.Fragment,{children:[S.ceramic.did&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(d.Tooltip,{hasArrow:!0,label:"Add A File",children:(0,k.jsx)(d.Button,{position:"fixed",top:"25vh",right:10,colorScheme:"orange",onClick:function(){return Q.current.click()},children:"\u2795"})}),(0,k.jsx)(d.Input,{type:"file",ref:Q,style:{display:"none"},onChange:pe})]}),(0,k.jsx)(d.Tooltip,{hasArrow:!0,label:"Settings",children:(0,k.jsx)(d.Button,{position:"fixed",top:"50vh",right:10,colorScheme:"teal",fontSize:42,pt:1,onClick:ce,children:"\u2699"})}),(0,k.jsx)(g.default,{isOpen:oe,onClose:le,ipfsURI:ne,setIPFSURI:re,ceramicURI:I,setCeramicURI:y,finalFocusRef:Z}),(0,k.jsx)(d.Link,{href:"//github.com/dysbulic/ceramic-fs/",children:(0,k.jsx)(d.Tooltip,{hasArrow:!0,label:"GitHub",children:(0,k.jsx)(d.Image,{src:b.default,position:"fixed",boxSize:"5vw",bottom:0,right:6})})}),(0,k.jsxs)(d.Box,{mr:"10em",children:[(0,k.jsxs)(d.InputGroup,{maxW:"42rem",m:"auto",mt:5,children:[(0,k.jsx)(d.InputLeftAddon,{children:"DID",title:"Decentralized Identifier"}),(0,k.jsx)(d.Input,{borderWidth:3,textAlign:"center",value:L,onChange:function(e){return B(e.target.value)}})]}),(0,k.jsxs)(d.Wrap,{justify:"center",mt:5,children:[R.map((function(e,t){return(0,k.jsxs)(d.Tag,{grow:3,mr:1,variant:"solid",colorScheme:C[t%C.length],title:e,onClick:function(){return de(t+1)},children:[(0,k.jsx)(d.TagLabel,{children:e}),(0,k.jsx)(d.TagCloseButton,{onClick:function(){return de(t)}})]},++j)})),(0,k.jsx)(d.Tooltip,{hasArrow:!0,label:(0,k.jsxs)(d.UnorderedList,{children:[(0,k.jsx)(d.ListItem,{children:"Add text to search existing paths."}),(0,k.jsx)(d.ListItem,{children:"\u23ce to add an element to the current path."}),(0,k.jsx)(d.ListItem,{children:"^\u23ce to write a new path to the filesystem."}),(0,k.jsx)(d.ListItem,{children:"\u2191 & \u2193 to navigate the potential paths."}),(0,k.jsx)(d.ListItem,{children:"\u2192 to select a path and \u2192 again to navigate."})]}),children:(0,k.jsx)(d.Input,{maxW:"21rem",borderWidth:3,autoFocus:!0,grow:1,onKeyDown:ve,value:P,ref:Z,onChange:function(e){fe(e.target.value)},placeholder:"Add Path Elements"})})]}),function(){if(q)return(0,k.jsx)(d.Box,{align:"center",children:(0,k.jsx)(d.Spinner,{size:"xl",colorScheme:"blue",m:"auto",mt:40})});if("string"===typeof V){var e=V,t=e.match(/^(ip[fn]s):\/\/(.+)$/);return t&&(e="http://ipfs.io/".concat(t[1],"/").concat(t[2])),(0,k.jsx)(d.Image,{src:e,m:"auto",mt:5,maxH:"80vh"})}return null===V||0===(null===V||void 0===V?void 0:V.length)?(0,k.jsx)(d.Box,{mt:"30vh",children:(0,k.jsx)(d.Text,{textAlign:"center",fontFamily:"'Odibee Sans'",fontSize:65,children:null===V?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("q",{children:L})," is not a valid",(0,k.jsx)("acronym",{title:"Decentralized Identifier",children:"DID"}),"."]}):(0,k.jsx)(k.Fragment,{children:"No path completions found\u2026"})})}):(0,k.jsxs)(d.Table,{children:[(0,k.jsx)(d.Thead,{children:(0,k.jsx)(d.Tr,{children:(0,k.jsx)(d.Th,{children:"Name"})})}),(0,k.jsx)(d.Tbody,{children:V.sort((function(e,t){return/^\d+$/.test(e)&&/^\d+$/.test(t)?parseInt(e)-parseInt(t):e.localeCompare(t)})).map((function(e,t){return(0,k.jsx)(d.Tr,{_hover:{bg:"#FFF70022"},bg:t===X?"#0000FF22":"transparent",children:(0,k.jsx)(d.Td,{onClick:function(){return ue(e)},cursor:"pointer",children:e})},t)}))})]})}()]})]})}},688:function(e,t){},694:function(e,t){},705:function(e,t){},706:function(e,t){},868:function(e,t,n){"use strict";var r=n(166);Object.defineProperty(t,"__esModule",{value:!0}),t.useSuggestions=void 0;var i=r(n(5)),a=r(n(150)),s=r(n(176)),o=r(n(3)),c=n(0),l=n(175),u=n(366);t.useSuggestions=function(e){var t=e.did,n=e.setLoading,r=(0,c.useState)({path:[],string:""}),d=(0,o.default)(r,2),f=d[0],h=d[1],v=(0,c.useContext)(u.IDXContext),p=(0,c.useState)([]),x=(0,o.default)(p,2),m=x[0],b=x[1],g=(0,c.useCallback)((function(e){n(!1),b(e)}),[n]),k=(0,c.useCallback)((0,s.default)(i.default.mark((function e(){var n,r,s,o,c,u,d,h;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v){e.next=43;break}return e.prev=1,e.next=4,v.get("m\xefmis",t);case 4:n=e.sent,r=n?[n]:[],s=(0,a.default)(f.path),e.prev=7,s.s();case 9:if((o=s.n()).done){e.next=27;break}if(u=o.value,!(null===(d=null===(c=n)||void 0===c?void 0:c[u])||void 0===d?void 0:d.startsWith("ceramic://"))){e.next=19;break}return e.next=15,l.TileDocument.load(v.ceramic,d);case 15:(n=e.sent.content)&&r.push(n),e.next=25;break;case 19:if(!(null===d||void 0===d?void 0:d.startsWith("ipfs://"))){e.next=24;break}return g(d),e.abrupt("return");case 24:return e.abrupt("break",27);case 25:e.next=9;break;case 27:e.next=32;break;case 29:e.prev=29,e.t0=e.catch(7),s.e(e.t0);case 32:return e.prev=32,s.f(),e.finish(32);case 35:h=[],r.length-1===f.path.length&&(h=Object.keys(r[r.length-1]),""!==f.string&&(h=h.filter((function(e){return e.includes(f.string)})))),g(h),e.next=43;break;case 40:e.prev=40,e.t1=e.catch(1),g(null);case 43:case"end":return e.stop()}}),e,null,[[1,40],[7,29,32,35]])}))),[v,t,f.path,f.string,g]);return(0,c.useEffect)((function(){return k()}),[k]),[m,h]}},869:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/octocat.6986f28e.svg"},870:function(e,t,n){"use strict";var r=n(380),i=n(166);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(3)),s=n(340),o=r(n(0)),c=n(261);t.default=function(e){var t=e.isOpen,n=e.onClose,r=e.finalFocusRef,i=e.ipfsURI,l=e.setIPFSURI,u=e.ceramicURI,d=e.setCeramicURI,f=o.default.useRef(),h=(0,o.useState)(i),v=(0,a.default)(h,2),p=v[0],x=v[1],m=(0,o.useState)(u),b=(0,a.default)(m,2),g=b[0],k=b[1];return(0,c.jsxs)(s.Modal,{initialFocusRef:f,finalFocusRef:r,isOpen:t,onClose:n,children:[(0,c.jsx)(s.ModalOverlay,{}),(0,c.jsxs)(s.ModalContent,{children:[(0,c.jsx)(s.ModalHeader,{textAlign:"center",children:"Configure Your Endpoints"}),(0,c.jsx)(s.ModalCloseButton,{}),(0,c.jsxs)(s.ModalBody,{pb:6,children:[(0,c.jsxs)(s.FormControl,{children:[(0,c.jsx)(s.FormLabel,{children:"IPFS URI"}),(0,c.jsx)(s.Input,{ref:f,placeholder:"IPFS URI",value:p,onChange:function(e){return x(e.target.value)}})]}),(0,c.jsxs)(s.FormControl,{mt:4,children:[(0,c.jsx)(s.FormLabel,{children:"Ceramic URI"}),(0,c.jsx)(s.Input,{placeholder:"Ceramic URI",value:g,onChange:function(e){return k(e.target.value)}})]})]}),(0,c.jsxs)(s.ModalFooter,{children:[(0,c.jsx)(s.Button,{colorScheme:"blue",mr:3,onClick:function(){l(p),d(g),n()},children:"Save"}),(0,c.jsx)(s.Button,{onClick:n,children:"Cancel"})]})]})]})}},872:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,882)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),a(e),s(e)}))};t.default=r}},[[531,1,2]]]);
//# sourceMappingURL=main.4839d2f2.chunk.js.map