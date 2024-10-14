import{A as p,a as m,i as f,S as y,N as g,K as w}from"./assets/vendor-DR3QWmmZ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const l=document.getElementById("btn-header");document.getElementById("header-mob-span");let a=!1;l.addEventListener("click",()=>{a=!a;const t=document.documentElement;a?(t.style.setProperty("--white","#494949"),t.style.setProperty("--light-grey","#2A2D32"),t.style.setProperty("--black","#F0F0F0"),l.classList.add("right")):(l.classList.remove("right"),t.style.setProperty("--white","#F0F0F0"),t.style.setProperty("--light-grey","#e4e5e6"),t.style.setProperty("--black","#2A2D32"))});const n={openModalBtn:document.querySelectorAll(".js-open-menu"),closeModalBtn:document.querySelector(".js-close-menu"),modal:document.querySelector(".js-menu-container")};n.openModalBtn.forEach(t=>{t.addEventListener("click",d)});n.closeModalBtn.addEventListener("click",d);n.modal.addEventListener("click",h);function h(t){t.target===t.currentTarget&&n.modal.classList.add("is-hidden")}function d(){n.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}new p(".accordion-container",{openOnInit:[0]});const u=document.querySelector(".swiper-wrapper"),v=document.querySelector(".button-wrapper");function b(t){const o=t.map(({author:r,avatar_url:i,review:e,_id:s})=>s===5?`<li class="swiper-slide">
					<p class="reviews-text">${e.slice(0,-31)}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${i}" alt="${r}">
						<h2 class="reviews-author">${r}</h2>
					</div>
				</li>`:`<li class="swiper-slide">
					<p class="reviews-text">${e}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${i}" alt="${r}">
						<h2 class="reviews-author">${r}</h2>
					</div>
				</li>`).join("");u.innerHTML=o,v.classList.remove("visually-hidden")}function L(){const t=`<li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li><li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li>`;u.innerHTML=t}async function P(t){try{const{data:o}=await m.get("https://portfolio-js.b.goit.study/api/reviews");b(o)}catch(o){L(),f.error({position:"topRight",message:o.message})}}P();new y(".swiper",{modules:[g,w],direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}}});
//# sourceMappingURL=index.js.map
