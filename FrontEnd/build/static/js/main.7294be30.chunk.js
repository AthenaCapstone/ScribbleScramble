(this["webpackJsonpscribble-scramble"]=this["webpackJsonpscribble-scramble"]||[]).push([[0],{106:function(e,n,t){"use strict";t.r(n);var c,r,i,a,o,l,d,s,b,j=t(0),u=t.n(j),h=t(55),x=t.n(h),f=(t(64),t(14)),O=t(26),g=t(2),p=t(13),m=t(11),w=t(12),v=w.a.div(c||(c=Object(m.a)(["\n    display: flex;\n    flex-flow: column wrap;\n    width: 100%;\n    background: #7c8483;\n"]))),C=w.a.header(r||(r=Object(m.a)(["\n    background: #71a2b6;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 70px;\n    border-radius: 20px;\n"]))),y=(Object(w.a)(O.b)(i||(i=Object(m.a)(["\n    color: darkgrey;\n    font-weight: bold;\n"]))),w.a.button(a||(a=Object(m.a)(["\n    background: transparent;\n    border-radius: 3px;\n    border: 2px solid darkgrey;\n    align: center;\n    color: black;\n    margin: 0 1em;\n    padding: 0.25em 1em;\n"])))),k=w.a.h1(o||(o=Object(m.a)(["\n    font-size: 2em;\n    text-align: center;\n    color: #982649;\n"]))),S=w.a.h2(l||(l=Object(m.a)(["\n    font-size: 2em;\n    text-align: center;\n    color: white;\n"]))),E=w.a.div(d||(d=Object(m.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),F=w.a.canvas(s||(s=Object(m.a)(["\n    width: 450px;\n    margin: auto;\n    border: 3px outset black;\n    border-radius: 3px;\n    z-index: 2; \n"]))),B=w.a.div(b||(b=Object(m.a)(["\n    display: flex;\n    width: 800px;\n    border-radius: 3px; \n    background: white;\n    z-index: 1\n"]))),I=t(59),A=t.n(I)()("http://127.0.0.1:4001");A.on("connect",(function(){console.log("i'm connected with the front end!")}));var T=A,D=t(1),M=function(){var e=Object(j.useState)(""),n=Object(f.a)(e,2),t=n[0],c=n[1],r=Object(j.useState)("arial"),i=Object(f.a)(r,2),a=i[0],o=i[1];Object(j.useEffect)((function(){c(new p.fabric.Canvas("canvas",{height:600,width:800,isContentEditable:!0})),T.on("create new text box",(function(e){console.log("front end heard create new text box");var n=new p.fabric.IText("Type here...",{left:150,top:100,isContentEditable:!0});e.add(n),e.renderAll()}))}),[]);return Object(D.jsxs)(v,{children:[Object(D.jsx)(S,{children:"Writing Canvas !"}),Object(D.jsx)(y,{onClick:function(){return function(e){var n=new p.fabric.IText("Type here...",{left:150,top:100,isContentEditable:!0,fontFamily:a});console.log("canvas",e),e.add(n),e.renderAll(),T.emit("add text box",e)}(t)},children:"Add Text"}),Object(D.jsxs)("div",{id:"text-options",children:[Object(D.jsx)("label",{htmlFor:"font-family",children:"Font:"}),Object(D.jsxs)("select",{id:"font-family",value:a,onChange:function(e){o(e.target.value),t.getActiveObject().setSelectionStyles({fontFamily:a}),t.renderAll()},children:[Object(D.jsx)("option",{value:"arial",children:"Arial"}),Object(D.jsx)("option",{value:"comic sans ms",children:"Comic Sans MS"}),Object(D.jsx)("option",{value:"impact",children:"Impact"}),Object(D.jsx)("option",{value:"monaco",children:"Monaco"})]})]}),Object(D.jsx)(E,{children:Object(D.jsx)(B,{children:Object(D.jsx)(F,{id:"canvas"})})})]})},z=function(){var e=Object(j.useState)(""),n=Object(f.a)(e,2),t=n[0],c=n[1];Object(j.useEffect)((function(){c(l())}),[]);var r=document.getElementById("drawing-color"),i=document.getElementById("drawing-mode-selector"),a=document.getElementById("drawing-line-width"),o=document.getElementById("brushSize"),l=function(){return new p.fabric.Canvas("canvas",{height:600,width:800,backgroundColor:"white",isDrawingMode:!0})};function d(e){e.freeDrawingBrush||(e.freeDrawingBrush=new p.fabric[i.value+"Brush"]);var n=e.freeDrawingBrush;n.width=parseInt(a.value,10)||1,o.innerHTML=a.value,n.color=r.value}return p.fabric.Object.prototype.transparentCorners=!1,Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{id:"drawing-mode-options",children:[Object(D.jsx)("label",{htmlFor:"drawing-mode-selector",children:"Mode:"}),Object(D.jsxs)("select",{id:"drawing-mode-selector",onChange:function(){return d(t)},children:[Object(D.jsx)("option",{value:"Pencil",children:"Pencil"}),Object(D.jsx)("option",{value:"Circle",children:"Circle"}),Object(D.jsx)("option",{value:"Pattern",children:"Pattern"})]}),Object(D.jsx)("label",{htmlFor:"drawing-line-width",children:"Line width:"}),Object(D.jsx)("span",{id:"brushSize",children:"11"}),Object(D.jsx)("input",{type:"range",defaultValue:"11",min:"0",max:"150",id:"drawing-line-width",onChange:function(){return d(t)}}),Object(D.jsx)("label",{htmlFor:"drawing-color",children:"Line color:"}),Object(D.jsx)("input",{type:"color",defaultValue:"#005E7A",id:"drawing-color",onChange:function(){return d(t)}})]}),Object(D.jsx)(S,{children:"Drawing Canvas!"}),Object(D.jsx)(E,{children:Object(D.jsx)(B,{children:Object(D.jsx)(F,{id:"canvas",onClick:function(){return d(t)},onMouseDown:function(){return d(t)}})})}),Object(D.jsx)(y,{onClick:function(){return t.clear()},children:"clear"})]})},P=function(){return Object(D.jsx)(O.a,{children:Object(D.jsxs)(g.c,{children:[Object(D.jsx)(g.a,{path:"/write",component:M}),Object(D.jsx)(g.a,{path:"/draw",component:z})]})})};var L=function(){var e=Object(j.useState)(!0),n=Object(f.a)(e,2),t=(n[0],n[1]);return Object(D.jsxs)(v,{className:"App",children:[Object(D.jsx)(C,{className:"App-header",children:Object(D.jsx)(k,{children:"Scribble Scramble"})}),Object(D.jsxs)("div",{children:[Object(D.jsx)(P,{}),Object(D.jsx)(y,{onClick:function(){return t((function(e){return!e}))},children:"Stop Client"})]})]})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,107)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),i(e),a(e)}))};x.a.render(Object(D.jsx)(u.a.StrictMode,{children:Object(D.jsx)(L,{})}),document.getElementById("root")),J()},64:function(e,n,t){},68:function(e,n){},69:function(e,n){},70:function(e,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.7294be30.chunk.js.map