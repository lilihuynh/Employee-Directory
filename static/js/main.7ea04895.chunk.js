(this.webpackJsonpemployeedirectoryapp=this.webpackJsonpemployeedirectoryapp||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s(13),c=s.n(n),a=(s(25),s(26),s(0));var l=function(e){return Object(a.jsx)("div",{className:"wrapper",children:e.children})},o=s(3),i=s(18),u=s(14),h=s(15),d=s(20),j=s(19),b=s(16),m=s.n(b),f=function(){return m.a.get("https://randomuser.me/api/?results=300&nat=us")};var p=function(e){return Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(a.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",id:"searchResults",list:"searchEmployee",placeholder:"by Employee name"})]}),Object(a.jsx)("button",{onClick:e.handleSubmit,className:"btn btn-primary",children:"Submit"})]})},O=s(17),x=s.n(O);var y=function(e){return console.log(e),Object(a.jsxs)("table",{className:"table table-striped",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Image"}),Object(a.jsx)("th",{scope:"col",onClick:e.sortedByName,style:{cursor:"pointer"},title:"click here to sort by First Name",children:" First Name"}),Object(a.jsx)("th",{scope:"col",onClick:e.sortedByName,style:{cursor:"pointer"},title:"click here to sort by Last Name",children:" Last Name"}),Object(a.jsx)("th",{scope:"col",children:"Phone"}),Object(a.jsx)("th",{scope:"col",children:"Email"}),Object(a.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(a.jsx)("tbody",{children:e.results.map((function(e){return Object(a.jsxs)("tr",{children:[console.log(e),Object(a.jsx)("th",{scope:"row",children:Object(a.jsx)("img",{alt:e.lastName,src:e.picture.thumbnail})}),Object(a.jsx)("td",{children:e.name.first}),Object(a.jsx)("td",{children:e.name.last}),Object(a.jsx)("td",{children:e.phone}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:Object(a.jsx)(x.a,{format:"MM/DD/YYY",children:e.dob.date})})]})}))})]})},v=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(u.a)(this,s);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchResults:[],search:"",filteredResults:[],order:""},e.sortedByName=function(){var t=e.state.filteredResults;if("asc"===e.state.order){var s=t.sort((function(e,t){return e.name.first>t.name.first?1:-1}));e.setState({filteredResults:s,order:"desc"})}else{var r=t.sort((function(e,t){return e.name.first>t.name.first?-1:1}));e.setState({filteredResults:r,order:"asc"})}},e.handleInputChange=function(t){console.log(e.state);var s=Object(i.a)(e.state.searchResults),r=t.target.value.toLowerCase(),n=s.filter((function(e){return e.name.first.toLowerCase().indexOf(r)>-1}));e.setState(Object(o.a)(Object(o.a)({},e.state),{},{filteredResults:n}))},e.searchUpdate=function(){f().then((function(t){return e.setState({filteredResults:t.data.results,searchResults:t.data.results})}))},e.handleSubmit=function(t){t.preventDefault();var s=e.state,r=s.searchResults,n=s.search,c=r.filter((function(e){return e.name.first.includes(n)}));e.setState({filteredResults:c})},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){var s=t.data;console.log(s),console.log(s.results),e.setState(Object(o.a)(Object(o.a)({},e.state),{},{searchResults:s.results,filteredResults:s.results})),console.log(e.state)})).catch((function(e){return console.log(e)})),console.log(this.state)}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(p,{searchEmployee:this.state.searchResults,handleSubmit:this.handleSubmit,handleInputChange:this.handleInputChange}),Object(a.jsx)(y,{results:this.state.filteredResults,sortedByName:this.sortedByName})]})}}]),s}(r.Component);var g=function(){return Object(a.jsx)(l,{children:Object(a.jsx)(v,{})})};s(48);c.a.render(Object(a.jsx)(g,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.7ea04895.chunk.js.map