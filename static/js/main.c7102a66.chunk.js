(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],{41:function(e,t,r){"use strict";r.r(t);var s=r(2),n=r.n(s),c=r(12),a=r.n(c),l=r(0);var o=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Employee Directory"})})},i=r(13),h=r(14),u=r(17),j=r(16);var d=function(e){return Object(l.jsx)("form",{className:"searchbar",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"Filter through Employees"}),Object(l.jsx)("label",{htmlFor:"search",children:"Search: "}),Object(l.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",placeholder:"Enter First Name",id:"search"}),Object(l.jsx)("button",{onClick:e.handleFormSubmit,children:" SUBMIT / RESET "}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:e.sortEmail,children:"Sort by Email"}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:e.sortEmployee,children:"Sort by Location"})]})})};var b=function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"table-head",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{className:"headers",children:"Employee Picture"}),Object(l.jsx)("th",{className:"headers",children:"First Name"}),Object(l.jsx)("th",{className:"headers",children:"Last Name"}),Object(l.jsx)("th",{className:"headers",children:"Email"}),Object(l.jsx)("th",{className:"headers",children:"Phone"}),Object(l.jsx)("th",{className:"headers",children:"Location"})]})}),Object(l.jsx)("tbody",{children:e.results.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:Object(l.jsx)("img",{alt:"employee-thumbnail",src:e.picture.thumbnail})}),Object(l.jsx)("td",{children:e.name.first}),Object(l.jsx)("td",{children:e.name.last}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.phone}),Object(l.jsx)("td",{children:e.location.country})]},e.login.uuid)}))})]})})},m=r(15),O=r.n(m),x=function(){return O.a.get("https://randomuser.me/api/?results=15")},p=function(e){Object(u.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(i.a)(this,r);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={search:"",results:[],renderedResults:[]},e.searchEmployee=function(t){console.log(t),console.log(e.state.results);var r=e.state.results.filter((function(e){return e.name.first===t}));console.log(r),r.length?e.setState({renderedResults:r}):e.setState({renderedResults:e.state.results})},e.sortLocation=function(t){t.preventDefault(),console.log("Sorted by Location!");var r=e.state.results.sort((function(e,t){return e.location.country>t.location.country?1:-1}));console.log(r),e.setState({renderedResults:r})},e.sortEmail=function(t){t.preventDefault(),console.log("Sorted by Email!");var r=e.state.results.sort((function(e,t){return e.email>t.email?1:-1}));console.log(r),e.setState({renderedResults:r})},e.handleInputChange=function(t){var r=t.target.value;e.setState({search:r}),console.log(r)},e.handleFormSubmit=function(t){t.preventDefault(),console.log("Search submitted!"),e.searchEmployee(e.state.search)},e}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var e=this;x().then((function(t){e.setState({results:t.data.results,renderedResults:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{value:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,sortEmail:this.sortEmail,sortEmployee:this.sortLocation}),this.state.results&&Object(l.jsx)(b,{results:this.state.renderedResults})]})}}]),r}(s.Component);var f=function(e){return Object(l.jsx)("main",{className:"wrapper",children:e.children})};var v=function(){var e=(new Date).getFullYear();return Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{children:["Copyright \xa9 ",e]})})};var g=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(f,{children:[Object(l.jsx)(o,{}),Object(l.jsx)(p,{}),Object(l.jsx)(v,{})]})})};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.c7102a66.chunk.js.map