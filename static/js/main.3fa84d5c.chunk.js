(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(19)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),l=n(7),s=n.n(l),r=n(8),c=n(1),o=n(2),u=n(4),h=n(3),m=n(5),p=(n(15),n(16),function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("input",{className:"inp",placeholder:"Enter a to-do...",value:this.props.val,type:"text",onChange:this.props.onChangeInput})))}}]),e}(a.Component));n(17);var d=function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",{className:"todo"},t.num,". ",t.item," \xa0",i.a.createElement("button",{className:"del",onClick:function(e){return t.handleDelete(e)}},"Delete Item")))},b=(n(18),function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"list"},this.props.list.map(function(e,n){return i.a.createElement(i.a.Fragment,{key:n+200},i.a.createElement(d,{key:n,list:t.props.list,item:e,handleDelete:t.props.handleDelete,num:n+1}))}))}}]),e}(i.a.Component)),f=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={text:"",list:[]},n.onChangeInput=function(t){n.setState({text:t.target.value})},n.handleSubmit=function(t){t.preventDefault(),n.setState({list:[].concat(Object(r.a)(n.state.list),[n.state.text]),text:""})},n.handleDelete=function(t){var e=n.state.list;e.splice(t,1),n.setState({list:e})},n}return Object(m.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return 0===this.state.list.length?i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"Your list is empty, start by adding something"),i.a.createElement(p,{className:"inp",val:this.state.text,handleSubmit:this.handleSubmit,onChangeInput:this.onChangeInput}),i.a.createElement(b,{handleDelete:this.handleDelete.bind(this),list:this.state.list,key:this.state.list.index})):i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"Things to do: ",this.state.list.length),i.a.createElement(p,{val:this.state.text,handleSubmit:this.handleSubmit,onChangeInput:this.onChangeInput}),i.a.createElement(b,{handleDelete:this.handleDelete.bind(this),list:this.state.list,key:this.state.list.index}))}}]),e}(a.Component);s.a.render(i.a.createElement(f,null),document.querySelector("#root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.3fa84d5c.chunk.js.map