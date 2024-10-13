import{a,i as l,S as p,N as d,K as u}from"./assets/vendor-DEGI79A3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=document.querySelector(".swiper-wrapper"),f=document.querySelector(".button-wrapper");function w(i){const s=i.map(({author:t,avatar_url:o,review:e,_id:r})=>r===5?`<li class="swiper-slide">
					<p class="reviews-text">${e.slice(0,-31)}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${o}" alt="${t}">
						<h2 class="reviews-author">${t}</h2>
					</div>
				</li>`:`<li class="swiper-slide">
					<p class="reviews-text">${e}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${o}" alt="${t}">
						<h2 class="reviews-author">${t}</h2>
					</div>
				</li>`).join("");c.innerHTML=s,f.classList.remove("visually-hidden")}function m(){const i=`<li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li>`;c.innerHTML=i}async function v(i){try{const{data:s}=await a.get("https://portfolio-js.b.goit.study/api/reviews");w(s)}catch(s){m(),l.error({position:"topRight",message:s.message})}}v();new p(".swiper",{modules:[d,u],direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}}});
//# sourceMappingURL=index.js.map
