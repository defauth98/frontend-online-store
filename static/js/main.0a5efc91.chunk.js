(this["webpackJsonpfrontend-online-store"]=this["webpackJsonpfrontend-online-store"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/cart.a0c9e1b5.svg"},54:function(e,t,a){e.exports=a.p+"static/media/cart-plus.a2abbe3d.svg"},55:function(e,t,a){e.exports=a.p+"static/media/emoji-frown.714dcbbb.svg"},56:function(e,t,a){e.exports=a.p+"static/media/search.21937b21.svg"},59:function(e,t,a){e.exports=a(77)},65:function(e,t,a){},69:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),s=a(34),o=a(45),i=a(46),m=a(58),u=a(57),p=a(18),d=a(9),f=a(8),E=a.n(f),h=a(13),b=a(80),v=a(81),g=a(7);function y(){return x.apply(this,arguments)}function x(){return(x=Object(h.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.mercadolibre.com/sites/MLB/categories");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return j.apply(this,arguments)}function j(){return(j=Object(h.a)(E.a.mark((function e(t,a){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}return e.next=3,fetch("https://api.mercadolibre.com/sites/MLB/search?q=".concat(a));case 3:n=e.sent;case 4:if(a){e.next=8;break}return e.next=7,fetch("https://api.mercadolibre.com/sites/MLB/search?category=".concat(t));case 7:n=e.sent;case 8:if(!t||!a){e.next=12;break}return e.next=11,fetch("https://api.mercadolibre.com/sites/MLB/search?category=".concat(t,"&q=").concat(a));case 11:n=e.sent;case 12:return e.next=14,n.json();case 14:return r=e.sent,e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=Object(n.createContext)();function C(e){var t=e.children,a=Object(n.useState)(null),c=Object(g.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(null),m=Object(g.a)(i,2),u=m[0],p=m[1],d=Object(n.useState)(null),f=Object(g.a)(d,2),b=f[0],v=f[1],x=Object(n.useState)([]),j=Object(g.a)(x,2),C=j[0],O=j[1],k=Object(n.useState)(0),w=Object(g.a)(k,2),P=w[0],I=w[1],L=Object(n.useState)(!1),z=Object(g.a)(L,2),F=z[0],T=z[1];function G(){return(G=Object(h.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.next=3,N(t);case 3:a=e.sent,o(a.results),T(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(h.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(h.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.next=3,N(!1,t);case 3:a=e.sent,o(a.results),T(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(h.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[].concat(Object(s.a)(C),[t]),O(a),I(P?P+1:1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(h.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.mercadolibre.com/items/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,p(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(S.Provider,{value:{productsList:l,categories:b,cartSize:P,product:u,cart:C,isLoading:F,getProductData:function(e){return J.apply(this,arguments)},getProductsFromCategory:function(e){return G.apply(this,arguments)},fetchCategories:function(){return B.apply(this,arguments)},getProductsFromQuery:function(e){return D.apply(this,arguments)},setProduct:p,addProductToCart:function(e){return M.apply(this,arguments)}}},t)}a(65);var O=function(e){var t=e.product,a=Object(n.useContext)(S).addProductToCart;return r.a.createElement(b.a,{className:"border w-50 p-4"},r.a.createElement("img",{src:t.thumbnail,alt:"Produto",width:"100%",height:"250px"}),r.a.createElement("h2",null,t.title),r.a.createElement("span",null,t.price),r.a.createElement("ul",{className:"product-info"},t.attributes.map((function(e,t){var a=e.value_name,n=e.name;return r.a.createElement("li",{key:t,className:"product-info-item"},"".concat(n,": ").concat(a))}))),r.a.createElement(v.a,{onClick:function(){a({title:t.title,imagePath:t.thumbnail,price:t.price,itemId:t.id})},className:"d-flex",variant:"secondary"},"Adicionar ao carrinho"))},k=a(84);var w=function(){return r.a.createElement(b.a,{className:"border w-50 p-4"},r.a.createElement("h3",null,"Avaliar o produto"),r.a.createElement(k.a,null,r.a.createElement(k.a.Group,{className:"mb-3",controlId:"evaluate-form"},r.a.createElement(k.a.Label,null,"Email"),r.a.createElement(k.a.Control,{type:"email",placeholder:"mail@mail.com"}),r.a.createElement(k.a.Label,null,"Descri\xe7\xe3o"),r.a.createElement(k.a.Control,{as:"textarea",rows:3})),r.a.createElement(v.a,{variant:"primary",type:"submit"},"Avaliar")))},P=(a(69),a(86)),I=a(87),L=a(31),z=a.n(L);var F=function(e){var t=e.noLink,a=Object(n.useContext)(S).cartSize;return r.a.createElement(P.a,{bg:"dark",variant:"dark",className:"d-flex justify-content-between px-5"},r.a.createElement(I.a,{className:""},r.a.createElement(p.b,{to:"/",className:"header-link"},r.a.createElement(P.a.Brand,null,"Frontend Online Store")),r.a.createElement(k.a,{className:"d-flex w-10 align-items-center"},!t&&r.a.createElement(p.b,{to:"/Cart"},r.a.createElement(v.a,{variant:"outline-secondary"},r.a.createElement("img",{src:z.a,alt:"Icone do carrinho"}))),!t&&r.a.createElement("h1",{className:"text-white mx-2 fs-4 my-2"},a))))};var T=function(){var e=Object(d.f)().itemId,t=Object(n.useContext)(S),a=t.product,c=t.getProductData;return Object(n.useEffect)((function(){function t(){return(t=Object(h.a)(E.a.mark((function t(){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(e);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),a&&r.a.createElement(b.a,{className:"d-flex mt-4"},r.a.createElement(O,{product:a}),r.a.createElement(w,null)))};var G=function(){var e=Object(n.useContext)(S).cart;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{noLink:!0}),e.length?r.a.createElement(b.a,{className:"py-5"},e.map((function(e){return r.a.createElement("div",{key:e.itemId,className:"d-flex border m-2"},r.a.createElement("img",{src:e.imagePath,alt:e.title}),r.a.createElement("div",{className:"mx-2"},r.a.createElement("p",{className:"my-2"},e.title),r.a.createElement("p",null,"R$",e.price)))})),r.a.createElement(b.a,{className:"d-flex justify-content-center my-5"},r.a.createElement(p.b,{to:"/checkout"},r.a.createElement(v.a,{variant:"primary"},"Finalizar compra")))):r.a.createElement("h1",null,"N\xe3o h\xe1 produtos no carrinho"))},B=a(83),D=a(48),M=a(85),J=a(82);a(73);var A=function(){var e=Object(n.useContext)(S),t=e.categories,a=e.getProductsFromCategory;return r.a.createElement("aside",{className:"category-bar"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"fs-5 mt-4 fw-normal"},"Categorias"),r.a.createElement(M.a,null,t.map((function(e){return r.a.createElement(M.a.Item,{key:e.id,onClick:function(){return a(e.id)}},r.a.createElement("span",{className:"categories-item"},e.name))})))):r.a.createElement(b.a,{className:" d-flex justify-content-center align-items-center vh-100 "},r.a.createElement(J.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading..."))))},R=a(88),q=a(54),$=a.n(q);a(74);var _=function(e){var t=e.title,a=e.imagePath,n=e.price,c=e.itemId,l=e.techSpecs,s=e.addToCart,o={pathname:"/itemDetails/".concat(c),state:l},i={title:t,price:n,id:c,imagePath:a};return r.a.createElement(R.a,{style:{width:"15rem",height:"24rem"},className:"m-2"},r.a.createElement(R.a.Img,{variant:"top",className:"h-50",src:a}),r.a.createElement(R.a.Body,null,r.a.createElement(R.a.Title,null,t.length>25?"".concat(String(t).substring(0,25)," ","..."):String(t)),r.a.createElement(R.a.Text,null,"R$".concat(n)),r.a.createElement(b.a,{className:"mt-4 d-flex p-0"},r.a.createElement(p.b,{to:o,className:"me-auto"},r.a.createElement(v.a,{variant:"primary",style:{height:"2rem"},className:"d-flex"},"Ver detalhes")),r.a.createElement(v.a,{onClick:function(){return s(i)},style:{height:"2rem"},className:"d-flex",variant:"secondary"},r.a.createElement("img",{src:$.a,alt:"Icone Adicionar ao carrinho"})))))};a(75);var Q=function(){var e=Object(n.useContext)(S),t=e.productsList,a=e.addProductToCart,c=e.isLoading;return r.a.createElement("div",{className:"w-100 vh-100 my-4"},c?r.a.createElement("div",{className:" h-100 w-auto d-flex align-items-center justify-content-center"},r.a.createElement(J.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading..."))):r.a.createElement("div",{className:"list-products"},t.map((function(e){var t=e.title,n=e.price,c=e.thumbnail,l=e.id,s=e.attributes,o=e.shipping;return r.a.createElement(_,{title:t,imagePath:c,price:n,key:l,addToCart:a,itemId:l,techSpecs:{title:t,price:n,thumbnail:c,attributes:s},free_shipping:o.free_shipping})}))))},V=a(55),H=a.n(V),K=a(47),U=a(56),W=a.n(U);var X=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(S),s=l.cartSize,o=l.getProductsFromQuery;function i(){return(i=Object(h.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,o(a);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(P.a,{bg:"dark",variant:"dark"},r.a.createElement(b.a,null,r.a.createElement(P.a.Brand,{href:"#home"},"Frontend Online Store"),r.a.createElement(k.a,{className:"d-flex w-50 justify-content-evenly"},r.a.createElement(K.a,{type:"search",placeholder:"Nome do produto","aria-label":"Search",className:"w-75",onChange:function(e){c(e.target.value)}}),r.a.createElement(v.a,{variant:"warning",onClick:function(e){return i.apply(this,arguments)}},r.a.createElement("img",{src:W.a,alt:"Icone de pesquisar"}))),r.a.createElement(k.a,{className:"d-flex w-10 align-items-center"},r.a.createElement(p.b,{to:"/Cart"},r.a.createElement(v.a,{variant:"outline-secondary"},r.a.createElement("img",{src:z.a,alt:"Icone do carrinho"}))),r.a.createElement("h1",{className:"fs-3 text-white px-3 pt-2"},s))))};var Y=function(){var e=Object(n.useContext)(S),t=e.fetchCategories,a=e.productsList;return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null),r.a.createElement(b.a,{className:""},r.a.createElement(B.a,null,r.a.createElement(D.a,{sm:3},r.a.createElement(A,null)),r.a.createElement(D.a,{sm:5,className:"w-75 "},a?r.a.createElement(Q,null):r.a.createElement(b.a,{className:" d-flex flex-column align-items-center justify-content-center vh-100 vw-75 "},r.a.createElement("img",{src:H.a,alt:"Emoji triste",width:"40px",className:"mb-4"}),r.a.createElement("p",null,"Nenhum produto foi encontrado"))))))};var Z=function(){var e=["Boleto","Visa","Mastercard","Elo"];return r.a.createElement(b.a,null,r.a.createElement("h1",{className:"fs-4 my-4"},"Informa\xe7\xf5es pessoais"),r.a.createElement(k.a,null,r.a.createElement(B.a,null,r.a.createElement(D.a,null,r.a.createElement(k.a.Group,{className:"mb-3",controlId:"form-name"},r.a.createElement(k.a.Label,null,"Nome"),r.a.createElement(k.a.Control,{type:"text",placeholder:"Nome"}))),r.a.createElement(D.a,null,r.a.createElement(k.a.Group,{className:"mb-3",controlId:"form-email"},r.a.createElement(k.a.Label,null,"Email"),r.a.createElement(k.a.Control,{type:"email",placeholder:"Email"})))),r.a.createElement(B.a,null,r.a.createElement(D.a,null,r.a.createElement(k.a.Group,{className:"mb-3",controlId:"form-cpf"},r.a.createElement(k.a.Label,null,"CPF"),r.a.createElement(k.a.Control,{type:"number",placeholder:"CPF"}))),r.a.createElement(D.a,null,r.a.createElement(k.a.Group,{className:"mb-3",controlId:"form-phone"},r.a.createElement(k.a.Label,null,"Telefone"),r.a.createElement(k.a.Control,{type:"number",placeholder:"N\xfamero de telefone"})))),r.a.createElement(B.a,null,r.a.createElement(D.a,null,r.a.createElement(k.a.Group,{className:"mb-3",controlId:"form-cep"},r.a.createElement(k.a.Label,null,"CEP"),r.a.createElement(k.a.Control,{type:"number",placeholder:"CEP"}))),r.a.createElement(D.a,null,r.a.createElement(k.a.Group,{className:"mb-3",controlId:"form-address"},r.a.createElement(k.a.Label,null,"Rua"),r.a.createElement(k.a.Control,{type:"number",placeholder:"Endere\xe7o"})))),r.a.createElement(B.a,null,r.a.createElement(D.a,null,r.a.createElement(k.a.Group,{className:"mb-3",controlId:"form-address"},r.a.createElement(k.a.Label,null,"N\xfamero"),r.a.createElement(k.a.Control,{type:"number",placeholder:"N\xfamero da casa"}))),r.a.createElement(D.a,null,r.a.createElement(k.a.Group,{className:"mb-3",controlId:"form-address"},r.a.createElement(k.a.Label,null,"Complemento"),r.a.createElement(k.a.Control,{type:"text",placeholder:"Complemento"})))),r.a.createElement(k.a.Group,{className:"mb-3",controlId:"form-address"},r.a.createElement("div",null,r.a.createElement(k.a.Label,null,"M\xe9todo de pagamento")),r.a.createElement(k.a.Check,{inline:!0,label:e[0],name:"group1",type:"button",id:"paymode"}),r.a.createElement(k.a.Check,{inline:!0,label:e[1],name:"group1",type:"button",id:"paymode"}),r.a.createElement(k.a.Check,{inline:!0,label:e[2],type:"button",id:"paymode"}),r.a.createElement(k.a.Check,{inline:!0,label:e[3],type:"button",id:"paymode"})),r.a.createElement(b.a,{className:"d-flex justify-content-center my-5"},r.a.createElement(v.a,{variant:"primary"},"Finalizar compra"))))};var ee=function(){var e=Object(n.useContext)(S).cart;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),e.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{className:"py-2"},r.a.createElement("h1",{className:"fs-4 my-4"},"Informa\xe7\xf5es pessoais"),e.map((function(e){return r.a.createElement("div",{key:e.itemId,className:"d-flex border m-2"},r.a.createElement("img",{src:e.imagePath,alt:e.title}),r.a.createElement("div",{className:"mx-2"},r.a.createElement("p",{className:"my-2"},e.title),r.a.createElement("p",null,"R$",e.price)))}))),r.a.createElement(Z,null)):r.a.createElement(b.a,{className:"d-flex vh-100 justify-content-center align-items-center"},r.a.createElement("h1",{className:"fs-4 my-4"},"N\xe3o h\xe1 produtos no carrinho")))},te=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).addToCart=function(t){var a=e.state.cartProducts,n=e.productExists(t.title);if(n){var r=n.size;r+=1,n.size=r;var c=a.indexOf(n);e.setState((function(e){return e.cartProducts[c]=n,e})),e.updateSize(!1)}else t.size=1,e.setState({cartProducts:[].concat(Object(s.a)(a),[t])}),e.updateSize(!0)},e.resetState=function(){e.state.stillShopping||e.setState({cartProducts:[],totalPrice:0,stillShopping:!0})},e.endShopping=function(){e.setState({stillShopping:!1})},e.state={totalPrice:0,stillShopping:!0,cartProducts:[],cartSize:0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getStorage()}},{key:"getStorage",value:function(){var e=localStorage.getItem("cart-products"),t=localStorage.getItem("cart-size"),a=JSON.parse(e),n=JSON.parse(t);e&&t&&this.setState({cartProducts:a,cartSize:n})}},{key:"getCurrentSize",value:function(e){return e.reduce((function(e,t){return e+=t.size}),0)}},{key:"updateLocalStorage",value:function(){var e=this.state,t=e.cartProducts,a=e.cartSize;t&&a&&(localStorage.setItem("cart-products",JSON.stringify(t)),localStorage.setItem("cart-size",JSON.stringify(a)))}},{key:"updateSize",value:function(e){var t=this.state.cartProducts,a=this.state.cartSize;if(e)this.setState({cartSize:a+=1});else{var n=this.getCurrentSize(t);this.setState({cartSize:n})}}},{key:"productExists",value:function(e){return this.state.cartProducts.find((function(t){return t.title===e}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.cartProducts,n=t.cartSize,c=t.totalPrice;return this.updateLocalStorage(),r.a.createElement(p.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(Y,Object.assign({},t,{addToCart:e.addToCart,cartSize:n}))}}),r.a.createElement(d.a,{path:"/checkout",render:function(t){return r.a.createElement(ee,Object.assign({},t,{cardProducts:a,totalPrice:c,cleanCart:e.resetState,endShopping:e.endShopping}))}}),r.a.createElement(d.a,{path:"/itemDetails/:itemId",render:function(t){return r.a.createElement(T,Object.assign({},t,{addToCart:e.addToCart,cartSize:n}))}}),r.a.createElement(d.a,{path:"/Cart",render:function(e){return r.a.createElement(G,Object.assign({},e,{cartProduct:a}))}})))}}]),a}(r.a.Component);te.defaultProps={cartProducts:[]};var ae=te;a(76);var ne=function(){return r.a.createElement(C,null,r.a.createElement(ae,null))};l.a.render(r.a.createElement(ne,null),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.0a5efc91.chunk.js.map