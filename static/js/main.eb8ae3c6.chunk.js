(this["webpackJsonpmomentum-clone"]=this["webpackJsonpmomentum-clone"]||[]).push([[0],{36:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var i=n(2),c=n(0),a=n.n(c),r=n(29),s=n.n(r),o=(n(36),n(9)),l=n(10),d=n(14),h=n(13),u=n(11),j=n.n(u),p=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={photo:null},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;return j()({url:"https://api.unsplash.com/photos/random/?client_id=rhy5w5kA-6vOu0XFIEHga_1ceg39oh5ozZ8sIdEys04",method:"GET"}).then((function(e){return t.setState({pictureUrl:e.data.urls.regular})})).catch("Error loading background",console.error)}},{key:"render",value:function(){var t=this.state.pictureUrl,e=Object(i.jsx)("img",{src:t,alt:"random",style:{alginSelf:"center",width:"100%",zIndex:"-1"}});return Object(i.jsx)("div",{id:"background-photo",children:e})}}]),n}(c.Component),b=n(19),m=n(12),O=n(30),f=n(18),v=n.n(f),x=function(){var t=v()().format("LT"),e=v()().format("HH"),n="";return n=e<12?"morning":e<18&&e>=12?"afternoon":"evening",Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{id:"time",children:t}),Object(i.jsxs)("p",{id:"timeofday",children:["Good ",n,"!"]})]})},g="\u2600",y=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).handleInputChange=function(t){t.persist(),i.setState({zip:t.target.value})},i.handleSubmit=function(t){t.preventDefault();var e=i.state.zip;j.a.get("".concat("https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=9b706266b62ecb327121ca9708f8c096&zip=").concat(e)).then((function(t){return i.setState({zip:"",city:t.data.name,icon:t.data.weather[0].main,temp:t.data.main.temp,conditions:t.data.weather[0].description})})).catch(console.error)},i.state={zip:"",city:null,icon:null,temp:null,conditions:null},i}return Object(l.a)(n,[{key:"render",value:function(){var t,e=this.state,n=e.city,c=e.temp,a=e.conditions;return t=n?Object(i.jsxs)("div",{children:[Object(i.jsxs)("h3",{children:[g," ",c,"\xb0F"]}),Object(i.jsx)("p",{id:"city",children:n}),Object(i.jsx)("p",{id:"weather-conditions",children:a})]}):"",Object(i.jsxs)("div",{className:"weather",children:[Object(i.jsx)("div",{className:"weather-info",children:t}),Object(i.jsxs)(b.a.Group,{controlId:"zip",id:"weather-input",children:[Object(i.jsx)(x,{}),Object(i.jsxs)(b.a,{onSubmit:this.handleSubmit,inline:!0,children:[Object(i.jsx)(m.a,{type:"text",className:"mr-sm-2",required:!0,name:"zip",value:this.state.zip,placeholder:"Enter Your Zip",onChange:this.handleInputChange}),Object(i.jsx)(O.a,{className:"search-btn",type:"submit",variant:"outline-primary",children:"Get Weather"})]})]})]})}}]),n}(c.Component),k=function(){var t=Object(i.jsx)("a",{href:"chrome://bookmarks/",children:"Links"});return Object(i.jsx)("div",{className:"links",children:t})},w=function(){var t=Object(i.jsx)("a",{href:"https://bchin224.github.io/my_personal_kanban_client/#/",children:"Todo"});return Object(i.jsx)("div",{className:"todo",children:t})};n(59);var z=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(k,{}),Object(i.jsx)(y,{}),Object(i.jsx)(w,{}),Object(i.jsx)(p,{})]})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),i(t),c(t),a(t),r(t)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(z,{})}),document.getElementById("root")),S()}},[[60,1,2]]]);
//# sourceMappingURL=main.eb8ae3c6.chunk.js.map