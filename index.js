import{A as u,a as m,i as y,S as f,N as g,K as v}from"./assets/vendor-DR3QWmmZ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const l=document.getElementById("btn-header");document.getElementById("header-mob-span");let a=!1;l.addEventListener("click",()=>{a=!a;const e=document.documentElement;a?(l.classList.add("right"),e.style.setProperty("--white","#1E2023"),e.style.setProperty("--black","#F0F0F0"),e.style.setProperty("--accent-green","#14C57C"),e.style.setProperty("--light-grey","#2A2D32"),e.style.setProperty("--light-accent","#204136"),e.style.setProperty("--hover-grey","#3B3F45")):(l.classList.remove("right"),e.style.setProperty("--white","#F0F0F0"),e.style.setProperty("--black","#292929"),e.style.setProperty("--accent-green","#00B068"),e.style.setProperty("--light-grey","#E4E5E6"),e.style.setProperty("--light-accent","#BCDFD1"),e.style.setProperty("--hover-grey","#BBBBBB"))});const o={openModalBtn:document.querySelectorAll(".js-open-menu"),closeModalBtn:document.querySelector(".js-close-menu"),modal:document.querySelector(".js-menu-container"),modalLinks:document.querySelectorAll(".mob-nav-tag")};o.openModalBtn.forEach(e=>{e.addEventListener("click",d)});o.closeModalBtn.addEventListener("click",d);o.modal.addEventListener("click",h);function h(e){e.target===e.currentTarget&&o.modal.classList.add("is-active")}function d(){o.modal.classList.toggle("is-active"),document.body.classList.toggle("no-scroll")}o.modalLinks.forEach(e=>{e.addEventListener("click",()=>{o.modal.classList.remove("is-active"),document.body.classList.remove("no-scroll")})});new u(".accordion-container",{openOnInit:[0]});const p=document.querySelector(".swiper-wrapper"),w=document.querySelector(".button-wrapper");function L(e){const r=e.map(({author:i,avatar_url:n,review:t,_id:s})=>s===5?`<li class="swiper-slide">
					<p class="reviews-text">${t.slice(0,-31)}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${n}" alt="${i}">
						<h2 class="reviews-author">${i}</h2>
					</div>
				</li>`:`<li class="swiper-slide">
					<p class="reviews-text">${t}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${n}" alt="${i}">
						<h2 class="reviews-author">${i}</h2>
					</div>
				</li>`).join("");p.innerHTML=r,w.classList.remove("visually-hidden")}function b(){const e=`<li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li><li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li>`;p.innerHTML=e}async function P(e){try{const{data:r}=await m.get("https://portfolio-js.b.goit.study/api/reviews");L(r)}catch(r){b(),y.error({position:"topRight",message:r.message})}}P();new f(".swiper",{modules:[g,v],direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}}});
//# sourceMappingURL=index.js.map
