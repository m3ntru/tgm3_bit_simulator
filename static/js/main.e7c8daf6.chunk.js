(this["webpackJsonptgm3-bit-simulator"]=this["webpackJsonptgm3-bit-simulator"]||[]).push([[0],{117:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),i=(a(93),a(94),a(24)),c=a(25),s=a(36),u=a(46),m=a(45),h=a(51),d=a(52),A=a.n(d),p=a(65),g=a(143),E=a(118),y=a(147),w=a(148),v=a(149),b=a(150),x=a(151),C=a(70),f=a.n(C),k=a(37),q=a.n(k),F=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={audio:{}},t.componentDidUpdate=function(e,a){t.props.result!==e.result&&(t.ttsInit(),t.setState({audio:{}}))},t.ttsInit=Object(p.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://m3ntru-tts.herokuapp.com/",{headers:{"content-type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"},method:"GET"}).then((function(t){return t.text()})).then((function(t){return console.log("API init success")})).catch((function(t){return console.log("error",t)}));case 1:case"end":return t.stop()}}),t)}))),t.start=function(e){null==t.state[e]&&t.setState((function(t){return{audio:Object(h.a)(Object(h.a)({},t.audio),{},Object(i.a)({},e,!0))}}))},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.ttsInit(),this.setState({audio:{}})}},{key:"render",value:function(){var t=this,e=this.props,a=e.result;e.text;return r.a.createElement("div",null,r.a.createElement(g.a,{component:E.a},r.a.createElement(y.a,{"aria-label":"simple table"},r.a.createElement(w.a,null,a.map((function(e,a){return r.a.createElement(v.a,{key:a},r.a.createElement(b.a,{width:"40px"},a+1),r.a.createElement(b.a,{width:"auto"},e),r.a.createElement(b.a,{width:"40px"},t.state.audio[a]?r.a.createElement(q.a,{src:"https://m3ntru-tts.herokuapp.com/api/TTS/one?text=".concat(encodeURIComponent(e)),title:a+1,autoPlay:!0,controls:!0}):r.a.createElement(x.a,{size:"medium","aria-label":"Play",onClick:function(){return t.start(a)}},r.a.createElement(f.a,null))))}))))))}}]),a}(r.a.Component),S=new function t(){Object(c.a)(this,t),this.splitTextV1=function(t,e,a){var n=[];!function t(r,o){if(e[o]&&r.trim().length)if(r.indexOf(e[o])>-1){var l=1,i=r.split(e[o]);i.forEach((function(r){if(r.length){var c="";l!==i.length&&(c=e[o]),r=(r+c).trim()}r.length&&r.length<=a?n.push(r):t(r,o+1),l++}))}else t(r,o+1);else if(r.length)for(var c=new RegExp(".{1,".concat(a,"}"),"g"),s=r.match(c);s.length>0;)n.push(s.shift().trim())}(t,0);var r=[];return n.forEach((function(t){r.length&&r[r.length-1].length+t.length+1<=a?r[r.length-1]+=" ".concat(t):r.push(t)})),r}},H=a(47),M=a.n(H),z=a(71),O=a.n(z),P=a(72),U=a.n(P),B=a(73),K=a.n(B),I=a(74),N=a.n(I),D=a(152),Y=a(153),j=a(154),X=a(155),Q=a(156),J=a(162),L=a(161),G=a(164),V=a(159),W=a(165),Z=a(48),R=a(75),T=a.n(R),$=a(76),_=a.n($),tt=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={text:"",result:[],logo:M.a,example:0,player:!1,playerLink:"",HappyBirth:!1},t.handleChange=function(e){return function(a){t.setState(Object(i.a)({},e,a.target.value))}},t.handleLoadClick=function(){var e=Z.case[t.state.example].origin,a=S.splitTextV1(e,[".","!","?",":",";",","," "],90);t.setState({text:e,logo:M.a,player:!0,playerLink:Z.case[t.state.example].link,result:a})},t.handleConverterClick=function(){if(""!==t.state.text)if("od9000"===t.state.text.toLowerCase())t.setState({player:!1,logo:O.a,text:"<message deleted>",result:["O\u4ec0\u9ebcO\u554a\uff0c\u4e0a\u4e00\u500bO\u7684\uff0c\u58b3\u982d\u7684\u8349\u5df2\u7d93\u8d77\u98db\u4e8687cm\u56c9\u3002(\u0e51\u2032\u072b`)/ http://i.imgur.com/dvPGYeA.jpg https://www.twitch.tv/tetristhegrandmaster3/v/66031829 [warning]"]});else{var e=S.splitTextV1(t.state.text,[".","!","?",":",";",","," "],90);t.setState({player:!1,logo:M.a,result:e})}},t.easterEgg=function(){var e=new Date;t.setState({text:e.getMonth()+1+"\u6708"+e.getDate()+"\u65e5\u662f\u6211\u5011\u7684\u5be6\u6cc1\u4e3b\u2014\u2014\u2014\u5433\u5f69\u5b78\u7684\u751f\u65e5\uff0c\u8a18\u5f97\u8ddf\u5f69\u5b78\u8aaa\u8072\u751f\u65e5\u5feb\u6a02\u5594\uff01 https://clips.twitch.tv/ClumsyProudShrewHeyGuys",logo:K.a,HappyBirth:!0})},t}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{margin:"20px"}},r.a.createElement(D.a,{style:{backgroundColor:"#e0f2f1",margin:"12px auto",padding:"0px"}},r.a.createElement("div",{style:{backgroundColor:"#009688",padding:"15px"}},r.a.createElement("img",{src:this.state.logo,alt:"logo"})),r.a.createElement("div",null,r.a.createElement(Y.a,{style:{margin:"20px"}},r.a.createElement(j.a,null,r.a.createElement(X.a,{variant:"subtitle2",component:"p"},"\u5c0f\u5947\u9ede\u6ce8\u97f3\u65b7\u53e5\u6a21\u64ec\u5668 By M3ntru(zatd39)",r.a.createElement("br",null),"1.\u76ee\u524d\u50c5\u6709\u7d14\u6ce8\u97f3\u65b7\u53e5\uff0c\u6587\u5b57\u4e0a\u9650\u4ee5\u53ca\u6df7\u5408\u4e2d\u6587\u6216Emoji\u9084\u6709\u5f85\u6e2c\u8a66",r.a.createElement("br",null),"2.\u4e2d\u6587\u8f49\u6ce8\u97f3\u8f49\u63db\u5de5\u5177 ",r.a.createElement("a",{href:"https://www.chineseconverter.com/zh-tw/convert/zhuyin",target:"blank"},"https://www.chineseconverter.com/zh-tw/convert/zhuyin"),r.a.createElement("br",null),"3.\u8a66\u807d\u529f\u80fd\u7528\u7684API\u67b6\u5728\u514d\u8cbb\u7a7a\u9593(heroku)\uff0c\u6709\u6642\u8a66\u807d\u8b80\u53d6\u7de9\u6162\u70ba\u6b63\u5e38\u73fe\u8c61\u3002",r.a.createElement("br",null),"4.\u65b7\u53e5\u6c92\u6709\u5728\u81ea\u5df1\u60f3\u8981\u7684\u4f4d\u7f6e\u6642\uff0c\u53ef\u4f7f\u7528\u4ee5\u4e0b\u6ce8\u97f3\u4f5c\u505c\u9813\uff1a",r.a.createElement("br",null),"\u3110\u02d9 / \u3110\u02d9\u3002 / \u3119\u311f / \u3119\u311f\u3002",r.a.createElement("br",null),"5.\u6709\u8a08\u756b\u65b0\u589e\u5176\u4ed6\u529f\u80fd(ex.\u6574\u6bb5\u8a66\u807d)\uff0c\u4ec0\u9ebc\u6642\u5019\u4e0a\u7dda\u4e0d\u77e5\u9053\uff0c\u4f5c\u8005\u4e0b\u73ed\u4e5f\u662f\u6703\u60f3\u6253\u500b\u96fb\u52d5",r.a.createElement("img",{src:U.a,alt:"logo",style:{height:"32px",width:"32px",verticalAlign:"text-bottom"}}),r.a.createElement("br",null),"6.\u7db2\u7ad9\u6709\u4efb\u4f55\u554f\u984c\uff0c\u8acb\u4e0d\u8981\u627e\u5f69\u5b78\uff0c\u8acb\u76f4\u63a5\u806f\u7e6b\u4f5c\u8005"))),r.a.createElement(Q.a,null,r.a.createElement(J.a,{id:"demo-simple-select-label"},"\u7bc4\u4f8b"),r.a.createElement(L.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.state.example,onChange:this.handleChange("example")},Z.case.map((function(t,e){return r.a.createElement(G.a,{key:t.id,value:t.id},t.title)})))),r.a.createElement(V.a,{size:"small",variant:"contained",onClick:this.handleLoadClick,style:{color:"white",backgroundColor:"#009688",margin:"20px"}},"\u8f09\u5165"),r.a.createElement("div",null,this.state.HappyBirth?r.a.createElement(q.a,{src:N.a,title:"\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf\u9aaf",autoPlay:!0,controls:!0}):""),r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement(W.a,{component:E.a,multiline:!0,variant:"outlined",rows:7,label:"Message",value:this.state.text,style:{width:"100%"},onChange:this.handleChange("text")})),r.a.createElement(V.a,{variant:"contained",onClick:this.handleConverterClick,style:{color:"white",backgroundColor:"#009688",margin:"20px"}},"\u8f49\u63db"),this.state.player?r.a.createElement(T.a,{style:{margin:"auto",padding:"20px",maxWidth:"600px"},url:this.state.playerLink,controls:!0,width:"auto"}):"",r.a.createElement(F,{text:this.state.text,result:this.state.result}),r.a.createElement(_.a,{action:this.easterEgg}))))}}]),a}(n.Component),et=a(78),at=a(160),nt=a(77),rt=a.n(nt),ot=Object(et.a)({typography:{fontFamily:"Noto Sans TC,sans-serif"}});var lt=function(){return r.a.createElement(at.a,{theme:ot},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"}),r.a.createElement(tt,null),r.a.createElement(x.a,{size:"medium","aria-label":"GitHub",href:"https://github.com/m3ntru/tgm3-bit-simulator",target:"_blank",style:{marginBottom:"15px"}},r.a.createElement(rt.a,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(lt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},47:function(t,e){t.exports="data:image/png;base64,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"},48:function(t){t.exports=JSON.parse('{"case":[{"id":0,"title":"\u9ad8\u7d1a\u8eca1","link":"https://youtu.be/I8YJLZ3qeU8","origin":"\u3128\u311b\u02c7\u3129\u02c7\u3108\u3128\u02cb\u3111\u3127\u3123-\u3105\u3128\u02cb\u3112\u3127\u3124-\u3110\u3127\u3122\u02cb\u3127\u02c7\u3127\u3121\u02c7\u3126\u02cb\u310b\u3127\u3122\u02ca\u3129\u02ca\u310c\u311c\u02d9\uff0c\u3128\u311b\u02c7\u3117\u3128\u311f\u02cb\u3105\u3128\u02cb\u310b\u3125\u02ca\u3128\u3124\u02cb\u3110\u3127\u02cb\u3109\u311c\u02d9\u3115\u02cb\u310a\u311a-\u3109\u311c\u02d9\u3105\u311f\u02cb\u3127\u3125\u02c7\u3002 \u3128\u311b\u02c7\u3118\u3128\u3125\u02ca\u3105\u311f\u02c7\u3110\u3127\u3125-\u3109\u3120\u02cb\u3112\u3129\u02ca\u3113\u3121-\uff0c\u3109\u311a\u02c7\u3119\u3128\u3122\u02cb\u310d\u3123-\u3113\u311c\u02d9\u3108\u3128\u02cb\u3111\u3127\u3123-\u3105\u3123-\u3119\u3124-\u310f\u3128\u311f\u02ca\u3110\u3127\u311a-\u3002\u3109\u3120\u02cb\u310c\u311c\u02d9\u3112\u3129\u02ca\u3113\u3121-\u310f\u3121\u02cb\u3127\u311d\u02c7\u3112\u3129\u02c7\u3115\u02cb\u3127\u3123-\u3128\u311f\u02ca\u310d\u3128\u311b\u02cb\u3129\u02ca\u3106\u3127\u02ca\u3105\u311f\u02cb\uff0c\u3105\u3128\u02ca\u3112\u3127\u3125\u02cb\u3113\u3128\u311f-\u3113\u3128\u3124\u02cb\u310c\u311c\u02d9\u310f\u311f-\u3119\u311c\u02cb\u3109\u311c\u02d9\u310d\u3120-\u3110\u3127\u02ca\u3114\u311c-","split":["\u3128\u311b\u02c7\u3129\u02c7\u3108\u3128\u02cb\u3111\u3127\u3123-\u3105\u3128\u02cb\u3112\u3127\u3124-\u3110\u3127\u3122\u02cb\u3127\u02c7\u3127\u3121\u02c7\u3126\u02cb\u310b\u3127\u3122\u02ca\u3129\u02ca\u310c\u311c\u02d9\uff0c\u3128\u311b\u02c7\u3117\u3128\u311f\u02cb\u3105\u3128\u02cb\u310b\u3125\u02ca\u3128\u3124\u02cb\u3110\u3127\u02cb\u3109\u311c\u02d9\u3115\u02cb\u310a\u311a-\u3109\u311c\u02d9\u3105\u311f\u02cb\u3127\u3125\u02c7\u3002","\u3128\u311b\u02c7\u3118\u3128\u3125\u02ca\u3105\u311f\u02c7\u3110\u3127\u3125-\u3109\u3120\u02cb\u3112\u3129\u02ca\u3113\u3121-\uff0c\u3109\u311a\u02c7\u3119\u3128\u3122\u02cb\u310d\u3123-\u3113\u311c\u02d9\u3108\u3128\u02cb\u3111\u3127\u3123-\u3105\u3123-\u3119\u3124-\u310f\u3128\u311f\u02ca\u3110\u3127\u311a-\u3002\u3109\u3120\u02cb\u310c\u311c\u02d9\u3112\u3129\u02ca\u3113\u3121-\u310f\u3121\u02cb\u3127\u311d\u02c7\u3112\u3129\u02c7\u3115\u02cb\u3127\u3123-\u3128\u311f\u02ca\u310d\u3128","\u311b\u02cb\u3129\u02ca\u3106\u3127\u02ca\u3105\u311f\u02cb\uff0c\u3105\u3128\u02ca\u3112\u3127\u3125\u02cb\u3113\u3128\u311f-\u3113\u3128\u3124\u02cb\u310c\u311c\u02d9\u310f\u311f-\u3119\u311c\u02cb\u3109\u311c\u02d9\u310d\u3120-\u3110\u3127\u02ca\u3114\u311c-"]},{"id":1,"title":"\u9ad8\u7d1a\u8eca2","link":"https://youtu.be/BpT77IZ3jss","origin":"\u3128\u311b\u02c7\u3129\u02c7\u3108\u3128\u02cb\u3111\u3127\u3123-\u3105\u3128\u02cb\u3112\u3127\u3124-\u3110\u3127\u3122\u02cb\u3127\u02c7\u3127\u3121\u02c7\u3126\u02cb\u310b\u3127\u3122\u02ca\u3129\u02ca\u310c\u311c\u02d9\uff0c\u3128\u311b\u02c7\u3117\u3128\u311f\u02cb\u3105\u3128\u02cb\u310b\u3125\u02ca\u3128\u3124\u02cb\u3110\u3127\u02cb\u3109\u311c\u02d9\u3115\u02cb\u310a\u311a-\u3109\u311c\u02d9\u3105\u311f\u02cb\u3127\u3125\u02c7\u3002 \u3128\u311b\u02c7\u3118\u3128\u3125\u02ca\u3105\u311f\u02c7\u3110\u3127\u3125-\u3109\u3120\u02cb\u3112\u3129\u02ca\u3113\u3121-\uff0c\u3109\u311a\u02c7\u3119\u3128\u3122\u02cb\u310d\u3123-\u3113\u311c\u02d9\u3108\u3128\u02cb\u3111\u3127\u3123-\u3105\u3123-\u3119\u3124-\u310f\u3128\u311f\u02ca\u3110\u3127\u311a-\u3002\u3109\u3120\u02cb\u310c\u311c\u02d9\u3112\u3129\u02ca\u3113\u3121-\u310f\u3121\u02cb\u3127\u311d\u02c7\u3112\u3129\u02c7\u3115\u02cb\u3127\u3123-\u3128\u311f\u02cb\u3110\u02d9\u310d\u3128\u311b\u02cb\u3129\u02ca\u3106\u3127\u02ca\u3105\u311f\u02cb\uff0c\u3105\u3128\u02ca\u3112\u3127\u3125\u02cb\u3113\u3128\u311f-\u3113\u3128\u3124\u02cb\u310c\u311c\u02d9\u310f\u311f-\u3119\u311c\u02cb\u3109\u311c\u02d9\u310d\u3120-\u3110\u3127\u02ca\u3114\u311c-","split":["\u3128\u311b\u02c7\u3129\u02c7\u3108\u3128\u02cb\u3111\u3127\u3123-\u3105\u3128\u02cb\u3112\u3127\u3124-\u3110\u3127\u3122\u02cb\u3127\u02c7\u3127\u3121\u02c7\u3126\u02cb\u310b\u3127\u3122\u02ca\u3129\u02ca\u310c\u311c\u02d9\uff0c\u3128\u311b\u02c7\u3117\u3128\u311f\u02cb\u3105\u3128\u02cb\u310b\u3125\u02ca\u3128\u3124\u02cb\u3110\u3127\u02cb\u3109\u311c\u02d9\u3115\u02cb\u310a\u311a-\u3109\u311c\u02d9\u3105\u311f\u02cb\u3127\u3125\u02c7\u3002","\u3128\u311b\u02c7\u3118\u3128\u3125\u02ca\u3105\u311f\u02c7\u3110\u3127\u3125-\u3109\u3120\u02cb\u3112\u3129\u02ca\u3113\u3121-\uff0c\u3109\u311a\u02c7\u3119\u3128\u3122\u02cb\u310d\u3123-\u3113\u311c\u02d9\u3108\u3128\u02cb\u3111\u3127\u3123-\u3105\u3123-\u3119\u3124-\u310f\u3128\u311f\u02ca\u3110\u3127\u311a-\u3002\u3109\u3120\u02cb\u310c\u311c\u02d9\u3112\u3129\u02ca\u3113\u3121-\u310f\u3121\u02cb\u3127\u311d\u02c7\u3112\u3129\u02c7\u3115\u02cb\u3127\u3123-\u3128\u311f\u02cb\u3110\u02d9","\u310d\u3128\u311b\u02cb\u3129\u02ca\u3106\u3127\u02ca\u3105\u311f\u02cb\uff0c\u3105\u3128\u02ca\u3112\u3127\u3125\u02cb\u3113\u3128\u311f-\u3113\u3128\u3124\u02cb\u310c\u311c\u02d9\u310f\u311f-\u3119\u311c\u02cb\u3109\u311c\u02d9\u310d\u3120-\u3110\u3127\u02ca\u3114\u311c-"]},{"id":2,"title":"\u865e\u7f8e\u4eba1","link":"https://youtu.be/Vu5cFA8x9ps","origin":"\u3129\u02ca \u3107\u311f\u02c7 \u3116\u3123\u02ca\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u310b\u3122\u02ca \u3119\u3128\u3125\u02cb\u3002\u310c\u3127\u02c7 \u310f\u3121\u02cb \u3113\u3128\u02c7\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3112\u3127\u3125 \u3113 \u310d\u3128\u02c7\u3113\u3122\u02cb\u310f\u311c\u02ca\u3115\u02ca\u310c\u3127\u3120\u02c7\u3002\u3108\u3123 \u3115\u3128\u02cb\u3109\u311a\u02c7\u3109\u3128\u311b \u3115\u3120\u02c7\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3111\u3127\u3122 \u3128\u3122\u02cb \u3109\u3127 \u3105\u3127\u3120 \u310f\u3128\u311b\u02c7 \u3109\u311a\u02c7 \u3108\u3125 \u3002\u310a\u3120\u02ca\u3105\u3127\u3125 \u3105\u3128\u02cb\u310e\u3122 \u3110\u3127\u311a \u3105\u3122 \u310a\u3120\u02ca\u3128\u3124\u02ca\u3113\u3128\u3125\u3002\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3114\u3128 \u3112\u3129\u3122\u02c7\u3115\u3128\u311a \u3116\u3121\u02cb\u310c\u3127\u3124\u02c7\u3111\u3127\u3122 \u3128\u3122\u02cb\u3002\u3113\u02c7\u3129\u3125\u02cb\u3115\u3128\u3124 \u3109\u3120 \u310e\u3122\u02c7\u3002\u3119\u311f \u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3111\u3127\u3125\u02c7\u3128\u3123\u02cb\u310f\u311e\u02ca\u3127\u3120\u02cb\u3109\u311a\u02c7\u3109\u3128\u311b \u3110\u3127\u3121\u02c7\u3002\u3113\u02c7\u3115\u3125\u02cb\u3128\u02c7\u310d\u3128\u3122\u02cb\u310f\u3128\u3125\u02ca\u3115\u3128\u311f\u02c7\u3112\u3127\u3124\u02c7\u310a\u3121 \u310c\u3127\u3121 \u3002","split":["\u3129\u02ca \u3107\u311f\u02c7 \u3116\u3123\u02ca\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u310b\u3122\u02ca \u3119\u3128\u3125\u02cb\u3002\u310c\u3127\u02c7 \u310f\u3121\u02cb \u3113\u3128\u02c7\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3112\u3127\u3125 \u3113 \u310d\u3128\u02c7\u3113\u3122\u02cb\u310f\u311c\u02ca\u3115\u02ca\u310c\u3127\u3120\u02c7\u3002\u3108\u3123 \u3115\u3128\u02cb\u3109\u311a\u02c7\u3109\u3128\u311b","\u3115\u3120\u02c7\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3111\u3127\u3122 \u3128\u3122\u02cb \u3109\u3127 \u3105\u3127\u3120 \u310f\u3128\u311b\u02c7 \u3109\u311a\u02c7 \u3108\u3125 \u3002\u310a\u3120\u02ca\u3105\u3127\u3125 \u3105\u3128\u02cb\u310e\u3122 \u3110\u3127\u311a \u3105\u3122","\u310a\u3120\u02ca\u3128\u3124\u02ca\u3113\u3128\u3125\u3002\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3114\u3128 \u3112\u3129\u3122\u02c7\u3115\u3128\u311a \u3116\u3121\u02cb\u310c\u3127\u3124\u02c7\u3111\u3127\u3122 \u3128\u3122\u02cb\u3002\u3113\u02c7\u3129\u3125\u02cb\u3115\u3128\u3124 \u3109\u3120 \u310e\u3122\u02c7\u3002\u3119\u311f","\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3111\u3127\u3125\u02c7\u3128\u3123\u02cb\u310f\u311e\u02ca\u3127\u3120\u02cb\u3109\u311a\u02c7\u3109\u3128\u311b","\u3110\u3127\u3121\u02c7\u3002\u3113\u02c7\u3115\u3125\u02cb\u3128\u02c7\u310d\u3128\u3122\u02cb\u310f\u3128\u3125\u02ca\u3115\u3128\u311f\u02c7\u3112\u3127\u3124\u02c7\u310a\u3121 \u310c\u3127\u3121 \u3002"]},{"id":3,"title":"\u865e\u7f8e\u4eba2","link":"https://youtu.be/zoe9gDS8-jQ","origin":"\u3129\u02ca-\u3107\u311f\u02c7-\u3116\u3123\u02ca\u3002\u3110\u02d9\u310b\u3122\u02ca-\u3119\u3128\u3125\u02cb\u3002\u310c\u3127\u02c7-\u310f\u3121\u02cb-\u3113\u3128\u02c7\u3002\u3119\u311f\u3002\u3110\u02d9\u3112\u3127\u3125-\u3113-\u310d\u3128\u02c7\u3113\u3122\u02cb\u310f\u311c\u02ca\u3115\u02ca\u310c\u3127\u3120\u02c7\u3002\u3108\u3123-\u3115\u3128\u02cb\u3109\u311a\u02c7\u3109\u3128\u311b-\u3115\u3120\u02c7\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3111\u3127\u3122-\u3128\u3122\u02cb-\u3109\u3127-\u3105\u3127\u3120-\u310f\u3128\u311b\u02c7-\u3109\u311a\u02c7-\u3108\u3125-\u3002\u310a\u3120\u02ca\u3105\u3127\u3125-\u3105\u3128\u02cb\u310e\u3122-\u3110\u3127\u311a-\u3105\u3122-\u310a\u3120\u02ca\u3128\u3124\u02ca\u3113\u3128\u3125\u3002\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3114\u3128-\u3112\u3129\u3122\u02c7\u3115\u3128\u311a-\u3116\u3121\u02cb\u310c\u3127\u3124\u02c7\u3111\u3127\u3122-\u3128\u3122\u02cb\u3002\u3113\u02c7\u3129\u3125\u02cb\u3115\u3128\u3124-\u3109\u3120-\u310e\u3122\u02c7\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3110\u02d9\u3002\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3111\u3127\u3125\u02c7\u3128\u3123\u02cb\u310f\u311e\u02ca\u3127\u3120\u02cb\u3109\u311a\u02c7\u3109\u3128\u311b-\u3110\u3127\u3121\u02c7\u3110\u02d9\u3002\u3113\u02c7\u3115\u3125\u02cb\u3128\u02c7\u310d\u3128\u3122\u02cb\u310f\u3128\u3125\u02ca\u3115\u3128\u311f\u02c7\u3112\u3127\u3124\u02c7\u310a\u3121-\u310c\u3127\u3121-\u3002","split":["\u3129\u02ca-\u3107\u311f\u02c7-\u3116\u3123\u02ca\u3002\u3110\u02d9\u310b\u3122\u02ca-\u3119\u3128\u3125\u02cb\u3002\u310c\u3127\u02c7-\u310f\u3121\u02cb-\u3113\u3128\u02c7\u3002\u3119\u311f\u3002\u3110\u02d9\u3112\u3127\u3125-\u3113-\u310d\u3128\u02c7\u3113\u3122\u02cb\u310f\u311c\u02ca\u3115\u02ca\u310c\u3127\u3120\u02c7\u3002\u3108\u3123-\u3115\u3128\u02cb\u3109\u311a\u02c7\u3109\u3128\u311b-\u3115\u3120\u02c7\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002","\u3111\u3127\u3122-\u3128\u3122\u02cb-\u3109\u3127-\u3105\u3127\u3120-\u310f\u3128\u311b\u02c7-\u3109\u311a\u02c7-\u3108\u3125-\u3002\u310a\u3120\u02ca\u3105\u3127\u3125-\u3105\u3128\u02cb\u310e\u3122-\u3110\u3127\u311a-\u3105\u3122-\u310a\u3120\u02ca\u3128\u3124\u02ca\u3113\u3128\u3125\u3002\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3002","\u3114\u3128-\u3112\u3129\u3122\u02c7\u3115\u3128\u311a-\u3116\u3121\u02cb\u310c\u3127\u3124\u02c7\u3111\u3127\u3122-\u3128\u3122\u02cb\u3002\u3113\u02c7\u3129\u3125\u02cb\u3115\u3128\u3124-\u3109\u3120-\u310e\u3122\u02c7\u3002\u3119\u311f\u3002\u3119\u311f\u3002\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3119\u311f\u3110\u02d9\u3002\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-\u3119\u311f-","\u3111\u3127\u3125\u02c7\u3128\u3123\u02cb\u310f\u311e\u02ca\u3127\u3120\u02cb\u3109\u311a\u02c7\u3109\u3128\u311b-\u3110\u3127\u3121\u02c7\u3110\u02d9\u3002\u3113\u02c7\u3115\u3125\u02cb\u3128\u02c7\u310d\u3128\u3122\u02cb\u310f\u3128\u3125\u02ca\u3115\u3128\u311f\u02c7\u3112\u3127\u3124\u02c7\u310a\u3121-\u310c\u3127\u3121-\u3002"]}]}')},71:function(t,e,a){t.exports=a.p+"static/media/tgm3OD.6ca8a749.png"},72:function(t,e,a){t.exports=a.p+"static/media/tgm3AMON.766af857.png"},73:function(t,e,a){t.exports=a.p+"static/media/ONONON.40aa19f2.gif"},74:function(t,e,a){t.exports=a.p+"static/media/HB.5a64baf1.mp3"},88:function(t,e,a){t.exports=a(117)},93:function(t,e,a){},94:function(t,e,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.e7c8daf6.chunk.js.map