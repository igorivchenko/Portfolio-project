import{a as c,i as l,S as u,N as p,K as d}from"./assets/vendor-DEGI79A3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a=document.querySelector(".swiper-wrapper"),f=document.querySelector(".button-wrapper");function m(s){const r=s.map(({author:o,avatar_url:i,review:e})=>`<li class="swiper-slide">
					<p class="reviews-text">${e}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${i}" alt="${o}">
						<h2 class="reviews-author">${o}</h2>
					</div>
				</li>`).join("");a.innerHTML=r,f.classList.remove("visually-hidden")}function w(){const s=`<li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li>`;a.innerHTML=s}async function y(s){try{const{data:r}=await c.get("https://portfolio-js.b.goit.study/api/reviews");m(r)}catch(r){w(),l.error({position:"topRight",message:r.message})}}y();new u(".swiper",{modules:[p,d],direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},slidesPerView:1,spaceBetween:32});
//# sourceMappingURL=index.js.map
