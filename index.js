/* empty css                      */import{a as q,S as v,i}from"./assets/vendor-Dxn6ouvb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const E="56321698-67bacbaf5733ab627a1d9a7be",B="https://pixabay.com/api/",M=15;async function y(t,r){return(await q.get(B,{params:{key:E,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:M}})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=document.querySelector(".load-more"),R=new v(".gallery a",{captionsData:"alt",captionDelay:250});function $({webformatURL:t,largeImageURL:r,tags:o,likes:n,views:e,comments:a,downloads:s}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${t}" alt="${o}" />
      </a>
      <ul class="gallery-info">
        <li class="gallery-info-item">
          <span class="gallery-info-title">Likes</span>
          <span>${n}</span>
        </li>
        <li class="gallery-info-item">
          <span class="gallery-info-title">Views</span>
          <span>${e}</span>
        </li>
        <li class="gallery-info-item">
          <span class="gallery-info-title">Comments</span>
          <span>${a}</span>
        </li>
        <li class="gallery-info-item">
          <span class="gallery-info-title">Downloads</span>
          <span>${s}</span>
        </li>
      </ul>
    </li>`}function L(t){const r=t.map($).join("");m.insertAdjacentHTML("beforeend",r),R.refresh()}function O(){m.innerHTML=""}function w(){p.classList.add("is-active")}function P(){p.classList.remove("is-active")}function c(){h.classList.remove("is-hidden")}function f(){h.classList.add("is-hidden")}const b=document.querySelector(".form"),C=document.querySelector(".load-more"),x=15;let l=1,u="",d=0;b.addEventListener("submit",A);C.addEventListener("click",G);async function A(t){t.preventDefault();const r=t.currentTarget.elements["search-text"].value.trim();if(!r){i.warning({message:"Please enter a search query!",position:"topRight"});return}u=r,l=1,d=0,O(),f(),w();try{const o=await y(u,l),n=o.hits;if(d=o.totalHits,!n.length){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(L(n),S()){g();return}c()}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{P(),b.reset()}}async function G(){const t=l+1;f(),w();try{const o=(await y(u,t)).hits;if(!o.length){g();return}if(l=t,L(o),H(),S()){g();return}c()}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),c()}finally{P()}}function S(){return l*x>=d}function g(){f(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function H(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
