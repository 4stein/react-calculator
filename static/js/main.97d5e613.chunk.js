(this["webpackJsonpcalculator-react"]=this["webpackJsonpcalculator-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),c=n.n(a),i=n(3),r=n.n(i),u=(n(13),n.p+"static/media/logo.6ce24c58.svg"),o=(n(14),n(4)),l=n(5),b=n(7),h=n(6),j=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={number1:0,number2:0,operation:"+",result:0},e}return Object(l.a)(n,[{key:"showResult",value:function(){var e=0;switch(this.state.operation){case"+":e=this.state.number1+this.state.number2;break;case"-":e=this.state.number1-this.state.number2;break;case"*":e=this.state.number1*this.state.number2;break;case"/":e=this.state.number1/this.state.number2}this.setState({result:e})}},{key:"onChangeNumber1",value:function(e){this.setState({number1:+e.target.value})}},{key:"onChangeNumber2",value:function(e){this.setState({number2:+e.target.value})}},{key:"operationChange",value:function(e){this.setState({operation:e.target.value})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"calculator",children:[Object(s.jsx)("label",{htmlFor:"num1",children:"\u041f\u0435\u0440\u0432\u043e\u0435 \u0447\u0438\u0441\u043b\u043e "}),Object(s.jsx)("input",{id:"num1",onChange:this.onChangeNumber1.bind(this),type:"text"}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"select",children:"\u0412\u044b\u0431\u0435\u0440\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e"}),Object(s.jsx)("br",{}),Object(s.jsxs)("select",{id:"select",onChange:this.operationChange.bind(this),children:[Object(s.jsx)("option",{value:"+",children:"+"}),Object(s.jsx)("option",{value:"-",children:"-"}),Object(s.jsx)("option",{value:"*",children:"*"}),Object(s.jsx)("option",{value:"/",children:"/"})]}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"num2",children:"\u0412\u0442\u043e\u0440\u043e\u0435 \u0447\u0438\u0441\u043b\u043e "}),Object(s.jsx)("input",{id:"num2",onChange:this.onChangeNumber2.bind(this),type:"text"}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{onClick:this.showResult.bind(this),children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"}),Object(s.jsx)("div",{children:this.state.result})]})}}]),n}(c.a.Component);var d=function(e){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("img",{src:u,className:"App-logo",alt:"logo"}),Object(s.jsx)(j,{})]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(d,{a:"123"})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.97d5e613.chunk.js.map