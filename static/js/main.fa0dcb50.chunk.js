(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{61:function(e,t,n){},63:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),i=n.n(c),r=n(8),s=n.n(r),l=(n(61),n(48)),o=n(22),j=n.n(o),d=n(31),h=n(36),b=(n(63),function(){return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("span",{className:"mr-2",children:"Add to Favourites"}),Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",className:"bi bi-star",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})})]})}),u=n(40),v=n(41),m=n(49),x=n(47),O=n(105),f=n(104),p=n(103),g=n(99),w=n(101),y=n(102),N=n(71),k=n(98),C=n(100),S=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={open:!1,movieDetails:{}},e.handleClose=function(){e.setState({open:!1})},e.handleOpen=function(){e.setState({open:!0}),console.log(e.props.movie),e.getMovieDetails(e.props.movie.imdbID)},e.getMovieDetails=function(){var t=Object(d.a)(j.a.mark((function t(n){var a,c,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://www.omdbapi.com/?i=".concat(n,"&apikey=f441d06c"),t.next=3,fetch(a);case 3:return c=t.sent,t.next=6,c.json();case 6:i=t.sent,e.setState({movieDetails:i}),console.log(e.state);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.dialog={background:"black",position:"relative"},e}return Object(v.a)(n,[{key:"render",value:function(){var e=this.props.movie,t=e.Title,n=e.Year,i=(e.ImdbID,e.Type,e.Poster),r=this.state.movieDetails,s=r.Rated,l=r.Language,o=r.Genre,j=r.Writer,d=r.Director,h=r.Actors,b=r.BoxOffice,u=r.Episode,v=r.Season,m=r.Plot,x=r.Runtime,S=r.Awards;return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)(O.a,{title:"movie details",children:Object(a.jsx)(f.a,{onClick:this.handleOpen,color:"primary",children:Object(a.jsx)(k.a,{})})}),Object(a.jsxs)(p.a,{open:this.state.open,onClose:this.handleClose,fullWidth:!0,children:[Object(a.jsxs)(g.a,{title:"Movies Details",style:{alignContent:"center",padding:"20",color:"white",background:"rgba(0,0,0,0.8)"},children:["Movie Details",Object(a.jsx)(O.a,{title:"close",children:Object(a.jsx)(f.a,{onClick:this.handleClose,className:"float-right",color:"secondary",children:Object(a.jsx)(C.a,{})})})]}),Object(a.jsx)(w.a,{style:{alignContent:"center",padding:"20",color:"white",background:"rgba(0,0,0,0.8)"},children:Object(a.jsxs)(y.a,{container:!0,sm:12,children:[Object(a.jsx)(y.a,{item:!0,sm:5,children:Object(a.jsx)("img",{src:i,alt:"movie",width:200,height:300})}),Object(a.jsxs)(y.a,{item:!0,sm:7,children:[Object(a.jsxs)(N.a,{variant:"h5",color:"primary",children:[" ",Object(a.jsx)("a",{href:"https://www.google.com/search?q=".concat(t),target:"_blank",rel:"noreferrer",children:t})]}),Object(a.jsx)(N.a,{variant:"body1",children:n}),o?Object(a.jsx)(N.a,{variant:"body1",children:o}):null,d?Object(a.jsxs)(N.a,{variant:"body1",children:["Director: ",d]}):null,l?Object(a.jsxs)(N.a,{variant:"body1",children:["Language: ",l]}):null,s?Object(a.jsxs)(N.a,{variant:"body1",children:["Rated: ",s]}):null,u?Object(a.jsxs)(N.a,{variant:"body1",children:["Episode: ",u]}):null,v?Object(a.jsxs)(N.a,{variant:"body1",children:["Season: ",v]}):null,h?Object(a.jsxs)(N.a,{variant:"body1",children:["Actors: ",h]}):null,x?Object(a.jsxs)(N.a,{variant:"body1",children:["Duration: ",x]}):null,Object(a.jsxs)(N.a,{variant:"body1",children:["Awards: ",S]}),b?Object(a.jsxs)(N.a,{variant:"body1",children:["Earnings: ",b]}):null]}),Object(a.jsx)("br",{}),Object(a.jsxs)(N.a,{variant:"body2",children:["Writer: ",j]}),Object(a.jsxs)(N.a,{variant:"body2",children:["Plot: ",m]})]})})]})]})}}]),n}(c.Component),D=function(){return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("span",{className:"mr-2",children:"Remove Favourites "}),Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-star-fill",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})})]})},F=function(e){return Object(a.jsx)(c.Fragment,{children:e.movies.map((function(t,n){return null===t?Object(a.jsx)("p",{children:"no data available"}):Object(a.jsxs)("div",{className:"image-container d-flex justify-content-start m-3 ",children:[Object(a.jsx)("img",{src:t.Poster,alt:"movie name",height:"240px",width:"160px"},t.Poster),e.fav?Object(a.jsx)("div",{onClick:function(){return e.handleFavouriteClick(t)},className:"overlay d-flex align-items-center justify-content-center",children:Object(a.jsx)(b,{})}):Object(a.jsx)("div",{onClick:function(){return e.handleremoveFavouriteClick(t)},className:"overlay d-flex align-items-center justify-content-center",children:Object(a.jsx)(D,{})}),Object(a.jsx)("span",{className:"overlay fixed-bottom ",children:Object(a.jsx)(S,{movie:t})})]})}))})},L=(n(69),function(e){return Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("h4",{children:e.heading})})}),I=function(e){return Object(a.jsx)("div",{className:"col col-sm-4",children:Object(a.jsx)("input",{className:"form-control",type:"text",name:"moviesearch",placeholder:"search movies",value:e.SearchValue,onChange:function(t){return e.setSearchValue(t.target.value)}})})};var M=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(""),s=Object(h.a)(r,2),o=s[0],b=s[1],u=Object(c.useState)([]),v=Object(h.a)(u,2),m=v[0],x=v[1],O=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://www.omdbapi.com/?s=".concat(t,"&apikey=f441d06c"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:(c=e.sent).Search&&i(c.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){return function(){O(o)}}),[o]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favourite-movie"));x(e)}),[]);var f=function(e){localStorage.setItem("favourite-movie",JSON.stringify(e))},p=n?Object(a.jsx)(F,{movies:n,handleFavouriteClick:function(e){if(m===[]){var t=[e];x(t),f(t)}else{var n=[e].concat(Object(l.a)(m));x(n),f(n)}},fav:!0}):Object(a.jsx)("p",{children:"No movies "}),g=m?Object(a.jsx)(F,{movies:m,handleremoveFavouriteClick:function(e){var t=m.filter((function(t){return t.imdbID!==e.imdbID}));x(t),f(t)},fav:!1}):Object(a.jsx)("p",{children:"No movies "});return Object(a.jsxs)("div",{className:"container-fluid movie-app",children:[Object(a.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(a.jsx)(L,{heading:"Movies"}),Object(a.jsx)(I,{SearchValue:o,setSearchValue:b})]}),Object(a.jsx)("div",{className:"row",children:p}),Object(a.jsx)("div",{className:"row d-flex align-items-center",children:Object(a.jsx)(L,{heading:"Favourites"})}),Object(a.jsx)("div",{className:"row",children:g})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root")),P()}},[[70,1,2]]]);
//# sourceMappingURL=main.fa0dcb50.chunk.js.map