"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[302],{524:function(e,t,n){n.d(t,{$h:function(){return r},NT:function(){return i},_n:function(){return o},si:function(){return a}});var o="https://api.themoviedb.org/",r="567e66254656681ea9a58ed02993db62",a="https://image.tmdb.org/t/p/w500",i="https://image.tmdb.org/t/p/w185"},302:function(e,t,n){n.r(t),n.d(t,{default:function(){return ne}});var o=n(433),r=n(861),a=n(439),i=n(757),s=n.n(i),c=n(243),u=n(791),l=n(689),d=n(87),f=n(524),p="Movie_SearchForm__9IPDT",m="Movie_SearchFormButton__N0aU5",v="Movie_SearchFormInput__iyCtj",h="Movie_movieLink__HD3b7";function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function b(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=b(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var _=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=b(e))&&(o&&(o+=" "),o+=t);return o},O=["theme","type"],C=["delay","staleId"],I=function(e){return"number"==typeof e&&!isNaN(e)},w=function(e){return"string"==typeof e},L=function(e){return"function"==typeof e},N=function(e){return w(e)||L(e)?e:null},x=function(e){return(0,u.isValidElement)(e)||w(e)||L(e)||I(e)};function R(e){var t=e.enter,n=e.exit,r=e.appendPosition,a=void 0!==r&&r,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var r=e.children,i=e.position,c=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=a?"".concat(t,"--").concat(i):t,v=a?"".concat(n,"--").concat(i):n,h=(0,u.useRef)(0);return(0,u.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),r=function e(r){var a;r.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==r.type&&(a=t.classList).remove.apply(a,(0,o.Z)(n)))};(e=t.classList).add.apply(e,(0,o.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,u.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()};p||(c?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),u.createElement(u.Fragment,null,r)}}function k(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var P={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var a=setTimeout((function(){r.apply(void 0,(0,o.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}},M=function(e){var t=e.theme,n=e.type,o=E(e,O);return u.createElement("svg",T({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},j={info:function(e){return u.createElement(M,T({},e),u.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return u.createElement(M,T({},e),u.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return u.createElement(M,T({},e),u.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return u.createElement(M,T({},e),u.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return u.createElement("div",{className:"Toastify__spinner"})}};function D(e){var t=(0,u.useReducer)((function(e){return e+1}),0),n=(0,a.Z)(t,2)[1],r=(0,u.useState)([]),i=(0,a.Z)(r,2),s=i[0],c=i[1],l=(0,u.useRef)(null),d=(0,u.useRef)(new Map).current,f=function(e){return-1!==s.indexOf(e)},p=(0,u.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:f,getToast:function(e){return d.get(e)}}).current;function m(e){var t=e.containerId;!p.props.limit||t&&p.containerId!==t||(p.count-=p.queue.length,p.queue=[])}function v(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function h(){var e=p.queue.shift();y(e.toastContent,e.toastProps,e.staleId)}function g(e,t){var o=t.delay,r=t.staleId,i=E(t,C);if(x(e)&&!function(e){return!l.current||p.props.enableMultiContainer&&e.containerId!==p.props.containerId||d.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,c=i.updateId,f=i.data,m=p.props,g=function(){return v(s)},b=null==c;b&&p.count++;var _,O,R=T(T(T({},m),{},{style:m.toastStyle,key:p.toastKey++},Object.fromEntries(Object.entries(i).filter((function(e){var t=(0,a.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:s,updateId:c,data:f,closeToast:g,isIn:!1,className:N(i.className||m.toastClassName),bodyClassName:N(i.bodyClassName||m.bodyClassName),progressClassName:N(i.progressClassName||m.progressClassName),autoClose:!i.isLoading&&(_=i.autoClose,O=m.autoClose,!1===_||I(_)&&_>0?_:O),deleteToast:function(){var e=k(d.get(s),"removed");d.delete(s),P.emit(4,e);var t=p.queue.length;if(p.count=null==s?p.count-p.displayedToast:p.count-1,p.count<0&&(p.count=0),t>0){var o=null==s?p.props.limit:1;if(1===t||1===o)p.displayedToast++,h();else{var r=o>t?t:o;p.displayedToast=r;for(var a=0;a<r;a++)h()}}else n()}});R.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,i={theme:t,type:n};return!1===r||(L(r)?a=r(i):(0,u.isValidElement)(r)?a=(0,u.cloneElement)(r,i):w(r)||I(r)?a=r:o?a=j.spinner():function(e){return e in j}(n)&&(a=j[n](i))),a}(R),L(i.onOpen)&&(R.onOpen=i.onOpen),L(i.onClose)&&(R.onClose=i.onClose),R.closeButton=m.closeButton,!1===i.closeButton||x(i.closeButton)?R.closeButton=i.closeButton:!0===i.closeButton&&(R.closeButton=!x(m.closeButton)||m.closeButton);var M=e;(0,u.isValidElement)(e)&&!w(e.type)?M=(0,u.cloneElement)(e,{closeToast:g,toastProps:R,data:f}):L(e)&&(M=e({closeToast:g,toastProps:R,data:f})),m.limit&&m.limit>0&&p.count>m.limit&&b?p.queue.push({toastContent:M,toastProps:R,staleId:r}):I(o)?setTimeout((function(){y(M,R,r)}),o):y(M,R,r)}}function y(e,t,n){var r=t.toastId;n&&d.delete(n);var a={content:e,props:t};d.set(r,a),c((function(e){return[].concat((0,o.Z)(e),[r]).filter((function(e){return e!==n}))})),P.emit(4,k(a,null==a.props.updateId?"added":"updated"))}return(0,u.useEffect)((function(){return p.containerId=e.containerId,P.cancelEmit(3).on(0,g).on(1,(function(e){return l.current&&v(e)})).on(5,m).emit(2,p),function(){d.clear(),P.emit(3,p)}}),[]),(0,u.useEffect)((function(){p.props=e,p.isToastActive=f,p.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(d.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:l,isToastActive:f}}function S(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function B(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function A(e){var t=(0,u.useState)(!1),n=(0,a.Z)(t,2),o=n[0],r=n[1],i=(0,u.useState)(!1),s=(0,a.Z)(i,2),c=s[0],l=s[1],d=(0,u.useRef)(null),f=(0,u.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,u.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function T(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",O),document.addEventListener("mouseup",C),document.addEventListener("touchmove",O),document.addEventListener("touchend",C);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=S(t.nativeEvent),f.y=B(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?_():b()}}function b(){r(!0)}function _(){r(!1)}function O(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&_(),f.x=S(t),f.y=B(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function C(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",C);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,u.useEffect)((function(){p.current=e})),(0,u.useEffect)((function(){return d.current&&d.current.addEventListener("d",b,{once:!0}),L(e.onOpen)&&e.onOpen((0,u.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;L(e.onClose)&&e.onClose((0,u.isValidElement)(e.children)&&e.children.props)}}),[]),(0,u.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",b),window.addEventListener("blur",_)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",_))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:T,onTouchStart:T,onMouseUp:E,onTouchEnd:E};return m&&v&&(I.onMouseEnter=_,I.onMouseLeave=b),y&&(I.onClick=function(e){g&&g(e),f.canCloseOnClick&&h()}),{playToast:b,pauseToast:_,isRunning:o,preventExitTransition:c,toastRef:d,eventHandlers:I}}function z(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return u.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},u.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},u.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function F(e){var t=e.delay,n=e.isRunning,o=e.closeToast,r=e.type,a=void 0===r?"default":r,i=e.hide,s=e.className,c=e.style,l=e.controlledProgress,d=e.progress,f=e.rtl,p=e.isIn,m=e.theme,v=i||l&&0===d,h=T(T({},c),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:v?0:1});l&&(h.transform="scaleX(".concat(d,")"));var y=_("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(m),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":f}),E=L(s)?s({rtl:f,type:a,defaultClassName:y}):_(y,s);return u.createElement("div",g({role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:E,style:h},l&&d>=1?"onTransitionEnd":"onAnimationEnd",l&&d<1?null:function(){p&&o()}))}var Z=function(e){var t=A(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,c=e.autoClose,l=e.onClick,d=e.type,f=e.hideProgressBar,p=e.closeToast,m=e.transition,v=e.position,h=e.className,g=e.style,y=e.bodyClassName,E=e.bodyStyle,b=e.progressClassName,O=e.progressStyle,C=e.updateId,I=e.role,w=e.progress,N=e.rtl,x=e.toastId,R=e.deleteToast,k=e.isIn,P=e.isLoading,M=e.iconOut,j=e.closeOnClick,D=e.theme,S=_("Toastify__toast","Toastify__toast-theme--".concat(D),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":j}),B=L(h)?h({rtl:N,position:v,type:d,defaultClassName:S}):_(S,h),Z=!!w||!c,q={closeToast:p,type:d,theme:D},H=null;return!1===i||(H=L(i)?i(q):(0,u.isValidElement)(i)?(0,u.cloneElement)(i,q):z(q)),u.createElement(m,{isIn:k,done:R,position:v,preventExitTransition:o,nodeRef:r},u.createElement("div",T(T({id:x,onClick:l,className:B},a),{},{style:g,ref:r}),u.createElement("div",T(T({},k&&{role:I}),{},{className:L(y)?y({type:d}):_("Toastify__toast-body",y),style:E}),null!=M&&u.createElement("div",{className:_("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},M),u.createElement("div",null,s)),H,u.createElement(F,T(T({},C&&!Z?{key:"pb-".concat(C)}:{}),{},{rtl:N,theme:D,delay:c,isRunning:n,isIn:k,closeToast:p,hide:f,type:d,style:O,className:b,controlledProgress:Z,progress:w||0}))))},q=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},H=R(q("bounce",!0)),Q=(R(q("slide",!0)),R(q("zoom")),R(q("flip")),(0,u.forwardRef)((function(e,t){var n=D(e),o=n.getToastToRender,r=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,c=e.rtl,l=e.containerId;function d(e){var t=_("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":c});return L(i)?i({position:e,rtl:c,defaultClassName:t}):_(t,N(i))}return(0,u.useEffect)((function(){t&&(t.current=r.current)}),[]),u.createElement("div",{ref:r,className:"Toastify",id:l},o((function(e,t){var n=t.length?T({},s):T(T({},s),{},{pointerEvents:"none"});return u.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,r=e.props;return u.createElement(Z,T(T({},r),{},{isIn:a(r.toastId),style:T(T({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),o)})))})))})));Q.displayName="ToastContainer",Q.defaultProps={position:"top-right",transition:H,autoClose:5e3,closeButton:z,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var V,U=new Map,G=[],W=1;function X(){return""+W++}function Y(e){return e&&(w(e.toastId)||I(e.toastId))?e.toastId:X()}function K(e,t){return U.size>0?P.emit(0,e,t):G.push({content:e,options:t}),t.toastId}function $(e,t){return T(T({},t),{},{type:t&&t.type||e,toastId:Y(t)})}function J(e){return function(t,n){return K(t,$(e,n))}}function ee(e,t){return K(e,$("default",t))}ee.loading=function(e,t){return K(e,$("default",T({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},ee.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=w(r)?ee.loading(r,n):ee.loading(r.render,T(T({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,r){if(null!=t){var a=T(T(T({type:e},s),n),{},{data:r}),i=w(t)?{render:t}:t;return o?ee.update(o,T(T({},a),i)):ee(i.render,T(T({},a),i)),r}ee.dismiss(o)},u=L(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},ee.success=J("success"),ee.info=J("info"),ee.error=J("error"),ee.warning=J("warning"),ee.warn=ee.warning,ee.dark=function(e,t){return K(e,$("default",T({theme:"dark"},t)))},ee.dismiss=function(e){U.size>0?P.emit(1,e):G=G.filter((function(t){return null!=e&&t.options.toastId!==e}))},ee.clearWaitingQueue=function(e){return void 0===e&&(e={}),P.emit(5,e)},ee.isActive=function(e){var t=!1;return U.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},ee.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=U.get(n||V);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=T(T(T({delay:100},o),t),{},{toastId:t.toastId||e,updateId:X()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,K(i,a)}}),0)},ee.done=function(e){ee.update(e,{progress:1})},ee.onChange=function(e){return P.on(4,e),function(){P.off(4,e)}},ee.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},ee.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},P.on(2,(function(e){V=e.containerId||e,U.set(V,e),G.forEach((function(e){P.emit(0,e.content,e.options)})),G=[]})).on(3,(function(e){U.delete(e.containerId||e),0===U.size&&P.off(0).off(1).off(5)}));var te=n(184),ne=function(){var e,t=(0,u.useState)([]),n=(0,a.Z)(t,2),i=n[0],g=n[1],y=(0,l.TH)(),T=(0,d.lr)(),E=(0,a.Z)(T,2),b=E[0],_=E[1],O=null!==(e=b.get("query"))&&void 0!==e?e:"";return(0,u.useEffect)((function(){if(O){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(f._n,"3/search/movie?api_key=").concat(f.$h,"&query=").concat(O,"&include_adult=false&language=en-US&page=1"),e.prev=1,e.next=4,c.Z.get(t).then((function(e){console.log("response=",e);var t=e.data.results;t.length>0?(t.map((function(e){return{id:e.id,title:e.title}})),g((0,o.Z)(t))):ee.error("Sorry, we don`t have such films!",{autoClose:3e3,theme:"colored"})}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();e()}}),[O]),(0,te.jsxs)(te.Fragment,{children:[(0,te.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget,n=t.elements.query.value.toLowerCase().trim();""!==n?(_({query:n}),t.reset()):_({})},className:p,children:[(0,te.jsx)("input",{type:"text",name:"query",defaultValue:O,autoFocus:!0,placeholder:"Search movies...",className:v}),(0,te.jsx)("button",{type:"submit",className:m,children:"Search"})]}),(0,te.jsx)(Q,{}),(0,te.jsx)("ul",{children:null===i||void 0===i?void 0:i.map((function(e){return(0,te.jsx)("li",{children:(0,te.jsx)(d.rU,{to:"".concat(e.id),state:{from:y},className:h,children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=302.2e72d553.chunk.js.map