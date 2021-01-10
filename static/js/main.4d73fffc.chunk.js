(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{58:function(e,t,n){},60:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),i=n.n(c),r=n(8),s=n.n(r),l=(n(58),n(22)),o=n.n(l),j=n(29),d=n(34),h=(n(60),function(){return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("span",{className:"mr-2",children:"Add to Favourites"}),Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",className:"bi bi-star",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})})]})}),b=n(38),u=n(39),m=n(46),v=n(45),x=n(102),O=n(101),f=n(100),p=n(96),g=n(98),w=n(99),y=n(68),N=n(95),k=n(97),S=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={open:!1,movieDetails:{}},e.handleClose=function(){e.setState({open:!1})},e.handleOpen=function(){e.setState({open:!0}),console.log(e.props.movie),e.getMovieDetails(e.props.movie.imdbID)},e.getMovieDetails=function(){var t=Object(j.a)(o.a.mark((function t(n){var a,c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://www.omdbapi.com/?i=".concat(n,"&apikey=f441d06c"),t.next=3,fetch(a);case 3:return c=t.sent,t.next=6,c.json();case 6:i=t.sent,e.setState({movieDetails:i}),console.log(e.state);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.dialog={background:"black",position:"relative"},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.movie,t=e.Title,n=e.Year,i=e.Poster,r=this.state.movieDetails,s=r.Rated,l=r.Language,o=r.Genre,j=r.Writer,d=r.Director,h=r.Actors,b=r.BoxOffice,u=r.Episode,m=r.Season,v=r.Plot,S=r.Runtime,C=r.Awards;return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)(x.a,{title:"movie details",children:Object(a.jsx)(O.a,{onClick:this.handleOpen,color:"primary",children:Object(a.jsx)(N.a,{})})}),Object(a.jsxs)(f.a,{open:this.state.open,onClose:this.handleClose,fullWidth:!0,children:[Object(a.jsxs)(p.a,{title:"Movies Details",style:{alignContent:"center",padding:"20",color:"white",background:"rgba(0,0,0,0.8)"},children:["Movie Details",Object(a.jsx)(x.a,{title:"close",children:Object(a.jsx)(O.a,{onClick:this.handleClose,className:"float-right",color:"secondary",children:Object(a.jsx)(k.a,{})})})]}),Object(a.jsx)(g.a,{style:{alignContent:"center",padding:"20",color:"white",background:"rgba(0,0,0,0.8)"},children:Object(a.jsxs)(w.a,{container:!0,children:[Object(a.jsx)(w.a,{item:!0,sm:5,children:Object(a.jsx)("img",{src:i,alt:"movie",width:200,height:300})}),Object(a.jsxs)(w.a,{item:!0,sm:7,children:[Object(a.jsxs)(y.a,{variant:"h5",color:"primary",children:[" ",Object(a.jsx)("a",{href:"https://www.google.com/search?q=".concat(t),target:"_blank",rel:"noreferrer",children:t})]}),Object(a.jsx)(y.a,{variant:"body1",children:n}),o?Object(a.jsx)(y.a,{variant:"body1",children:o}):null,d?Object(a.jsxs)(y.a,{variant:"body1",children:["Director: ",d]}):null,l?Object(a.jsxs)(y.a,{variant:"body1",children:["Language: ",l]}):null,s?Object(a.jsxs)(y.a,{variant:"body1",children:["Rated: ",s]}):null,u?Object(a.jsxs)(y.a,{variant:"body1",children:["Episode: ",u]}):null,m?Object(a.jsxs)(y.a,{variant:"body1",children:["Season: ",m]}):null,h?Object(a.jsxs)(y.a,{variant:"body1",children:["Actors: ",h]}):null,S?Object(a.jsxs)(y.a,{variant:"body1",children:["Duration: ",S]}):null,Object(a.jsxs)(y.a,{variant:"body1",children:["Awards: ",C]}),b?Object(a.jsxs)(y.a,{variant:"body1",children:["Earnings: ",b]}):null]}),Object(a.jsx)("br",{}),Object(a.jsxs)(y.a,{variant:"body2",children:["Writer: ",j]}),Object(a.jsxs)(y.a,{variant:"body2",children:["Plot: ",v]})]})})]})]})}}]),n}(c.Component),C=function(){return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("span",{className:"mr-2",children:"Remove Favourites "}),Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-star-fill",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})})]})},D=function(e){return Object(a.jsx)(c.Fragment,{children:e.movies.map((function(t,n){return null===t?Object(a.jsx)("p",{children:"no data available"}):Object(a.jsxs)("div",{className:"image-container d-flex justify-content-start m-3 ",children:[Object(a.jsx)("img",{src:t.Poster,alt:"movie name",height:"240px",width:"160px"},t.Poster),e.fav?Object(a.jsx)("div",{onClick:function(){return e.handleFavouriteClick(t)},className:"overlay d-flex align-items-center justify-content-center",children:Object(a.jsx)(h,{})}):Object(a.jsx)("div",{onClick:function(){return e.handleremoveFavouriteClick(t)},className:"overlay d-flex align-items-center justify-content-center",children:Object(a.jsx)(C,{})}),Object(a.jsx)("span",{className:"overlay fixed-bottom ",children:Object(a.jsx)(S,{movie:t})})]},t.imdbID)}))})},F=(n(66),function(e){return Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("h4",{children:e.heading})})}),M=function(e){return Object(a.jsx)("div",{className:"col col-sm-4",children:Object(a.jsx)("input",{className:"form-control",type:"text",name:"moviesearch",placeholder:"search movies",value:e.SearchValue,onChange:function(t){return e.setSearchValue(t.target.value)}})})};var I=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(""),s=Object(d.a)(r,2),l=s[0],h=s[1],b=Object(c.useState)([{Title:"Harry Potter and the Deathly Hallows: Part 2",Year:"2011",imdbID:"tt1201607",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"}]),u=Object(d.a)(b,2),m=u[0],v=u[1],x=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://www.omdbapi.com/?s=".concat(t,"&apikey=f441d06c"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:(c=e.sent).Search&&i(c.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){return function(){x(l)}}),[l]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favourite-movie"));v(e)}),[]);var O=function(e){localStorage.setItem("favourite-movie",JSON.stringify(e))},f=n?Object(a.jsx)(D,{movies:n,handleFavouriteClick:function(e){m.push(e),v(m),O(m)},fav:!0}):Object(a.jsx)("p",{children:"No movies "}),p=m?Object(a.jsx)(D,{movies:m,handleremoveFavouriteClick:function(e){var t=m.filter((function(t){return t.imdbID!==e.imdbID}));v(t),O(t)},fav:!1}):Object(a.jsx)("p",{children:"No movies "});return Object(a.jsxs)("div",{className:"container-fluid movie-app",children:[Object(a.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(a.jsx)(F,{heading:"Movies"}),Object(a.jsx)(M,{SearchValue:l,setSearchValue:h})]}),Object(a.jsx)("div",{className:"row",children:f}),Object(a.jsx)("div",{className:"row d-flex align-items-center",children:Object(a.jsx)(F,{heading:"Favourites"})}),Object(a.jsx)("div",{className:"row",children:p})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root")),L()}},[[67,1,2]]]);
//# sourceMappingURL=main.4d73fffc.chunk.js.map