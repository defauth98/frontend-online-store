(this["webpackJsonpfrontend-online-store"]=this["webpackJsonpfrontend-online-store"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/cart.316e7619.svg"},51:function(e,t,a){e.exports=a.p+"static/media/cart-plus.93aa0df5.svg"},52:function(e,t,a){e.exports=a.p+"static/media/emoji-frown.d0da6995.svg"},53:function(e,t,a){e.exports=a.p+"static/media/search.1f1f0b44.svg"},56:function(e,t,a){e.exports=a(78)},64:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(22),l=a(30),o=a(39),s=a(40),i=a(55),m=a(54),u=a(19),p=a(9),d=a(8),f=a.n(d),E=a(13),h=a(80),b=a(41),g=a(81),y=a(10);function v(){return x.apply(this,arguments)}function x(){return(x=Object(E.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.mercadolibre.com/sites/MLB/categories");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return j.apply(this,arguments)}function j(){return(j=Object(E.a)(f.a.mark((function e(t,a){var r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}return e.next=3,fetch("https://api.mercadolibre.com/sites/MLB/search?q=".concat(a));case 3:r=e.sent;case 4:if(a){e.next=8;break}return e.next=7,fetch("https://api.mercadolibre.com/sites/MLB/search?category=".concat(t));case 7:r=e.sent;case 8:if(!t||!a){e.next=12;break}return e.next=11,fetch("https://api.mercadolibre.com/sites/MLB/search?category=".concat(t,"&q=").concat(a));case 11:r=e.sent;case 12:return e.next=14,r.json();case 14:return n=e.sent,e.abrupt("return",n);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=Object(r.createContext)();function C(e){var t=e.children,a=Object(r.useState)(null),c=Object(y.a)(a,2),o=c[0],s=c[1],i=Object(r.useState)(null),m=Object(y.a)(i,2),u=m[0],p=m[1],d=Object(r.useState)(null),h=Object(y.a)(d,2),b=h[0],g=h[1],x=Object(r.useState)([]),j=Object(y.a)(x,2),C=j[0],O=j[1],w=Object(r.useState)(0),k=Object(y.a)(w,2),P=k[0],I=k[1],L=Object(r.useState)(!1),z=Object(y.a)(L,2),F=z[0],T=z[1];function G(){return(G=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.next=3,N(t);case 3:a=e.sent,s(a.results),T(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,g(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.next=3,N(!1,t);case 3:a=e.sent,s(a.results),T(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[].concat(Object(l.a)(C),[t]),O(a),I(P?P+1:1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(E.a)(f.a.mark((function e(t){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.mercadolibre.com/items/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,p(r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n.a.createElement(S.Provider,{value:{productsList:o,categories:b,cartSize:P,product:u,cart:C,isLoading:F,getProductData:function(e){return J.apply(this,arguments)},getProductsFromCategory:function(e){return G.apply(this,arguments)},fetchCategories:function(){return B.apply(this,arguments)},getProductsFromQuery:function(e){return D.apply(this,arguments)},setProduct:p,addProductToCart:function(e){return M.apply(this,arguments)}}},t)}a(64);var O=function(e){var t=e.product,a=Object(r.useContext)(S).addProductToCart;return n.a.createElement(h.a,{className:"product border w-75 p-4"},n.a.createElement("img",{src:t.thumbnail,alt:"Produto",width:"50%",height:"250px"}),n.a.createElement("h2",null,t.title),n.a.createElement("span",null,"R$",t.price),n.a.createElement("ul",{className:"product-info"},t.attributes.map((function(e,t){var a=e.value_name,r=e.name;return t<5?n.a.createElement("li",{key:t,className:"product-info-item"},"".concat(r,": ").concat(a)):""}))),n.a.createElement(g.a,{onClick:function(){a({title:t.title,imagePath:t.thumbnail,price:t.price,itemId:t.id})},className:"d-flex",variant:"secondary"},"Adicionar ao carrinho"))},w=a(85);var k=function(){return n.a.createElement(h.a,{className:"border w-50 p-4"},n.a.createElement("h3",null,"Avaliar o produto"),n.a.createElement(w.a,null,n.a.createElement(w.a.Group,{className:"mb-3",controlId:"evaluate-form"},n.a.createElement(w.a.Label,null,"Email"),n.a.createElement(w.a.Control,{type:"email",placeholder:"mail@mail.com"}),n.a.createElement(w.a.Label,null,"Descri\xe7\xe3o"),n.a.createElement(w.a.Control,{as:"textarea",rows:3})),n.a.createElement(g.a,{variant:"primary",type:"submit"},"Avaliar")))},P=(a(66),a(84)),I=a(28),L=a.n(I);var z=function(e){var t=e.noLink,a=Object(r.useContext)(S).cartSize;return n.a.createElement(P.a,{bg:"dark",variant:"dark"},n.a.createElement(h.a,null,n.a.createElement(P.a.Brand,{href:"#"},"Frontend Online Store"),n.a.createElement(w.a,{className:"d-flex w-10 align-items-center"},!t&&n.a.createElement(u.b,{to:"/Cart"},n.a.createElement(g.a,{variant:"light"},n.a.createElement("img",{src:L.a,alt:"Icone do carrinho"}))),!t&&n.a.createElement("h1",{className:"text-white mx-2 fs-4 my-2"},a))))};var F=function(){var e=Object(p.f)().itemId,t=Object(r.useContext)(S),a=t.product,c=t.getProductData;return Object(r.useEffect)((function(){function t(){return(t=Object(E.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(e);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,null,n.a.createElement("meta",{name:"title",content:"Frontend Online Store"}),n.a.createElement("meta",{name:"description",content:"Ecommerce"}),n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:url",content:"https://defauth98.github.io/frontend-online-store/"}),n.a.createElement("meta",{property:"og:title",content:a?a.title:""}),n.a.createElement("meta",{property:"og:description",content:"Web site created using create-react-app"}),n.a.createElement("meta",{property:"og:image",content:"https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-price-a-product.jpg?v=1611727768"}),n.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),n.a.createElement("meta",{property:"twitter:url",content:"https://defauth98.github.io/frontend-online-store/"}),n.a.createElement("meta",{property:"twitter:title",content:a?a.title:""}),n.a.createElement("meta",{property:"twitter:description",content:"Web site created using create-react-app"}),n.a.createElement("meta",{property:"twitter:image",content:"https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-price-a-product.jpg?v=1611727768"})),n.a.createElement(z,null),a&&n.a.createElement(h.a,{className:"d-flex mt-4"},n.a.createElement(O,{product:a}),n.a.createElement(k,null)))};a(72);var T=function(){var e=Object(r.useContext)(S).cart;return n.a.createElement(n.a.Fragment,null,n.a.createElement(z,{noLink:!0}),e.length?n.a.createElement(h.a,{className:"py-5"},e.map((function(e){return n.a.createElement("div",{key:e.itemId,className:"d-flex border m-2"},n.a.createElement("img",{src:e.imagePath,alt:e.title}),n.a.createElement("div",{className:"mx-2"},n.a.createElement("p",{className:"my-2"},e.title),n.a.createElement("p",null,"R$",e.price)))})),n.a.createElement(h.a,{className:"d-flex justify-content-center my-5"},n.a.createElement(u.b,{to:"/checkout"},n.a.createElement(g.a,{variant:"primary"},"Comprar")))):n.a.createElement(h.a,{className:"empty-cart"},n.a.createElement("p",null,":("),n.a.createElement("p",null,"Voc\xea n\xe3o tem produtos no carrinho")))},G=a(83),B=a(45),D=a(86),M=a(82);a(73);var J=function(){var e=Object(r.useContext)(S),t=e.categories,a=e.getProductsFromCategory;return n.a.createElement("aside",{className:"category-bar"},t?n.a.createElement(D.a,{class:"categories-bar"},t.map((function(e){return n.a.createElement(D.a.Item,{key:e.id,onClick:function(){return a(e.id)}},n.a.createElement("span",{className:"categories-item"},e.name))}))):n.a.createElement(h.a,{className:"\r d-flex\r justify-content-center align-items-center\r vh-100\r "},n.a.createElement(M.a,{animation:"border",role:"status"},n.a.createElement("span",{className:"visually-hidden"},"Loading..."))))},R=a(87),_=a(51),A=a.n(_);a(74);var $=function(e){var t=e.title,a=e.imagePath,r=e.price,c=e.itemId,l=e.techSpecs,o=e.addToCart,s={pathname:"/itemDetails/".concat(c),state:l},i={title:t,price:r,id:c,imagePath:a};return n.a.createElement(R.a,{style:{width:"15rem",height:"24rem"},className:"m-2"},n.a.createElement(R.a.Img,{variant:"top",className:"h-50",src:a}),n.a.createElement(R.a.Body,null,n.a.createElement(R.a.Title,null,t.length>25?"".concat(String(t).substring(0,25)," ","..."):String(t)),n.a.createElement(R.a.Text,null,"R$".concat(r)),n.a.createElement(h.a,{className:"mt-4 d-flex p-0"},n.a.createElement(u.b,{to:s,className:"me-auto"},n.a.createElement("button",{type:"button",className:"details-button"},"Ver detalhes")),n.a.createElement("button",{type:"button",className:"add-to-cart-button",onClick:function(){return o(i)}},n.a.createElement("img",{src:A.a,alt:"Icone Adicionar ao carrinho"})))))};a(75);var q=function(){var e=Object(r.useContext)(S),t=e.productsList,a=e.addProductToCart,c=e.isLoading;return n.a.createElement("div",{className:"w-100 vh-100 my-4"},c?n.a.createElement("div",{className:"\r h-100 w-auto d-flex align-items-center justify-content-center"},n.a.createElement(M.a,{animation:"border",role:"status"},n.a.createElement("span",{className:"visually-hidden"},"Loading..."))):n.a.createElement("div",{className:"list-products"},t.map((function(e){var t=e.title,r=e.price,c=e.thumbnail,l=e.id,o=e.attributes,s=e.shipping;return n.a.createElement($,{title:t,imagePath:c,price:r,key:l,addToCart:a,itemId:l,techSpecs:{title:t,price:r,thumbnail:c,attributes:o},free_shipping:s.free_shipping})}))))},V=a(52),Q=a.n(V),W=a(44),H=a(53),K=a.n(H);var U=function(){var e=Object(r.useState)(""),t=Object(y.a)(e,2),a=t[0],c=t[1],l=Object(r.useContext)(S),o=l.cartSize,s=l.getProductsFromQuery;function i(){return(i=Object(E.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s(a);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n.a.createElement(P.a,{bg:"dark",variant:"dark"},n.a.createElement(h.a,null,n.a.createElement(P.a.Brand,{href:"#home"},"Frontend Online Store"),n.a.createElement(w.a,{className:"d-flex w-50 justify-content-evenly"},n.a.createElement(W.a,{type:"search",search:!0,placeholder:"Nome do produto","aria-label":"Search",className:"w-75",onChange:function(e){c(e.target.value)}}),n.a.createElement(g.a,{variant:"light",onClick:function(e){return i.apply(this,arguments)}},n.a.createElement("img",{src:K.a,alt:"Icone de pesquisar"}))),n.a.createElement(w.a,{className:"d-flex w-10 align-items-center"},n.a.createElement(u.b,{to:"/Cart"},n.a.createElement(g.a,{variant:"light"},n.a.createElement("img",{src:L.a,alt:"Icone do carrinho"}))),n.a.createElement("h1",{className:"fs-3 text-white px-3 pt-2"},o))))};a(76);var X=function(){var e=Object(r.useContext)(S),t=e.fetchCategories,a=e.productsList;return Object(r.useEffect)((function(){function e(){return(e=Object(E.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n.a.createElement("div",{className:"home-page-container"},n.a.createElement(U,null),n.a.createElement(h.a,null,n.a.createElement(G.a,null,n.a.createElement(B.a,{sm:3},n.a.createElement(J,null)),n.a.createElement(B.a,{sm:5,className:"w-75 "},a?n.a.createElement(q,null):n.a.createElement(h.a,{className:"\r d-flex flex-column\r align-items-center justify-content-center\r vh-100 vw-75\r "},n.a.createElement("img",{src:Q.a,alt:"Emoji triste",width:"40px",className:"mb-4"}),n.a.createElement("p",null,"Nenhum produto foi encontrado"))))))};var Y=function(){var e=["Boleto","Visa","Mastercard","Elo"];return n.a.createElement(h.a,null,n.a.createElement("h1",{className:"fs-4 my-4"},"Informa\xe7\xf5es pessoais"),n.a.createElement(w.a,null,n.a.createElement(G.a,null,n.a.createElement(B.a,null,n.a.createElement(w.a.Group,{className:"mb-3",controlId:"form-name"},n.a.createElement(w.a.Label,null,"Nome"),n.a.createElement(w.a.Control,{type:"text",placeholder:"Nome"}))),n.a.createElement(B.a,null,n.a.createElement(w.a.Group,{className:"mb-3",controlId:"form-email"},n.a.createElement(w.a.Label,null,"Email"),n.a.createElement(w.a.Control,{type:"email",placeholder:"Email"})))),n.a.createElement(G.a,null,n.a.createElement(B.a,null,n.a.createElement(w.a.Group,{className:"mb-3",controlId:"form-cpf"},n.a.createElement(w.a.Label,null,"CPF"),n.a.createElement(w.a.Control,{type:"number",placeholder:"CPF"}))),n.a.createElement(B.a,null,n.a.createElement(w.a.Group,{className:"mb-3",controlId:"form-phone"},n.a.createElement(w.a.Label,null,"Telefone"),n.a.createElement(w.a.Control,{type:"number",placeholder:"N\xfamero de telefone"})))),n.a.createElement(G.a,null,n.a.createElement(B.a,null,n.a.createElement(w.a.Group,{className:"mb-3",controlId:"form-cep"},n.a.createElement(w.a.Label,null,"CEP"),n.a.createElement(w.a.Control,{type:"number",placeholder:"CEP"}))),n.a.createElement(B.a,null,n.a.createElement(w.a.Group,{className:"mb-3",controlId:"form-address"},n.a.createElement(w.a.Label,null,"Rua"),n.a.createElement(w.a.Control,{type:"number",placeholder:"Endere\xe7o"})))),n.a.createElement(G.a,null,n.a.createElement(B.a,null,n.a.createElement(w.a.Group,{className:"mb-3",controlId:"form-address"},n.a.createElement(w.a.Label,null,"N\xfamero"),n.a.createElement(w.a.Control,{type:"number",placeholder:"N\xfamero da casa"}))),n.a.createElement(B.a,null,n.a.createElement(w.a.Group,{className:"mb-3",controlId:"form-address"},n.a.createElement(w.a.Label,null,"Complemento"),n.a.createElement(w.a.Control,{type:"text",placeholder:"Complemento"})))),n.a.createElement(w.a.Group,{className:"mb-3",controlId:"form-address"},n.a.createElement("div",null,n.a.createElement(w.a.Label,null,"M\xe9todo de pagamento")),n.a.createElement(w.a.Check,{inline:!0,label:e[0],name:"group1",type:"button",id:"paymode"}),n.a.createElement(w.a.Check,{inline:!0,label:e[1],name:"group1",type:"button",id:"paymode"}),n.a.createElement(w.a.Check,{inline:!0,label:e[2],type:"button",id:"paymode"}),n.a.createElement(w.a.Check,{inline:!0,label:e[3],type:"button",id:"paymode"})),n.a.createElement(h.a,{className:"d-flex justify-content-center my-5"},n.a.createElement(g.a,{variant:"primary"},"Finalizar compra"))))};var Z=function(){var e=Object(r.useContext)(S).cart;return n.a.createElement(n.a.Fragment,null,n.a.createElement(z,null),e.length?n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{className:"py-2"},n.a.createElement("h1",{className:"fs-4 my-4"},"Informa\xe7\xf5es pessoais"),e.map((function(e){return n.a.createElement("div",{key:e.itemId,className:"cart-item d-flex border m-2"},n.a.createElement("img",{src:e.imagePath,alt:e.title}),n.a.createElement("div",{className:"mx-2"},n.a.createElement("p",{className:"my-2"},e.title),n.a.createElement("p",null,"R$",e.price)))}))),n.a.createElement(Y,null)):n.a.createElement(h.a,{className:"d-flex vh-100 justify-content-center align-items-center"},n.a.createElement("h1",{className:"fs-4 my-4"},"N\xe3o h\xe1 produtos no carrinho")))},ee=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).addToCart=function(t){var a=e.state.cartProducts,r=e.productExists(t.title);if(r){var n=r.size;n+=1,r.size=n;var c=a.indexOf(r);e.setState((function(e){return e.cartProducts[c]=r,e})),e.updateSize(!1)}else t.size=1,e.setState({cartProducts:[].concat(Object(l.a)(a),[t])}),e.updateSize(!0)},e.resetState=function(){e.state.stillShopping||e.setState({cartProducts:[],totalPrice:0,stillShopping:!0})},e.endShopping=function(){e.setState({stillShopping:!1})},e.state={totalPrice:0,stillShopping:!0,cartProducts:[],cartSize:0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getStorage()}},{key:"getStorage",value:function(){var e=localStorage.getItem("cart-products"),t=localStorage.getItem("cart-size"),a=JSON.parse(e),r=JSON.parse(t);e&&t&&this.setState({cartProducts:a,cartSize:r})}},{key:"getCurrentSize",value:function(e){return e.reduce((function(e,t){return e+=t.size}),0)}},{key:"updateLocalStorage",value:function(){var e=this.state,t=e.cartProducts,a=e.cartSize;t&&a&&(localStorage.setItem("cart-products",JSON.stringify(t)),localStorage.setItem("cart-size",JSON.stringify(a)))}},{key:"updateSize",value:function(e){var t=this.state.cartProducts,a=this.state.cartSize;if(e)this.setState({cartSize:a+=1});else{var r=this.getCurrentSize(t);this.setState({cartSize:r})}}},{key:"productExists",value:function(e){return this.state.cartProducts.find((function(t){return t.title===e}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.cartProducts,r=t.cartSize,c=t.totalPrice;return this.updateLocalStorage(),n.a.createElement(u.a,null,n.a.createElement(p.c,null,n.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return n.a.createElement(X,Object.assign({},t,{addToCart:e.addToCart,cartSize:r}))}}),n.a.createElement(p.a,{path:"/checkout",render:function(t){return n.a.createElement(Z,Object.assign({},t,{cardProducts:a,totalPrice:c,cleanCart:e.resetState,endShopping:e.endShopping}))}}),n.a.createElement(p.a,{path:"/itemDetails/:itemId",render:function(t){return n.a.createElement(F,Object.assign({},t,{addToCart:e.addToCart,cartSize:r}))}}),n.a.createElement(p.a,{path:"/Cart",render:function(e){return n.a.createElement(T,Object.assign({},e,{cartProduct:a}))}})))}}]),a}(n.a.Component);ee.defaultProps={cartProducts:[]};var te=ee;a(77);var ae=function(){return n.a.createElement(C,null,n.a.createElement(te,null))},re=document.getElementById("root");re.hasChildNodes()?Object(c.hydrate)(n.a.createElement(ae,null),re):Object(c.render)(n.a.createElement(ae,null),re)}},[[56,1,2]]]);
//# sourceMappingURL=main.55210f9e.chunk.js.map