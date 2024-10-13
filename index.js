import{A as a,a as l,i as p,S as d,N as u,K as f}from"./assets/vendor-DR3QWmmZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();new a(".accordion-container",{openOnInit:[0]});const c=document.querySelector(".swiper-wrapper"),w=document.querySelector(".button-wrapper");function m(i){const t=i.map(({author:s,avatar_url:o,review:e,_id:r})=>r===5?`<li class="swiper-slide">
					<p class="reviews-text">${e.slice(0,-31)}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${o}" alt="${s}">
						<h2 class="reviews-author">${s}</h2>
					</div>
				</li>`:`<li class="swiper-slide">
					<p class="reviews-text">${e}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${o}" alt="${s}">
						<h2 class="reviews-author">${s}</h2>
					</div>
				</li>`).join("");c.innerHTML=t,w.classList.remove("visually-hidden")}function v(){const i=`<li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li>`;c.innerHTML=i}async function y(i){try{const{data:t}=await l.get("https://portfolio-js.b.goit.study/api/reviews");m(t)}catch(t){v(),p.error({position:"topRight",message:t.message})}}y();new d(".swiper",{modules:[u,f],direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}}});
//# sourceMappingURL=index.js.map
