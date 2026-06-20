/* empty css                      */import{a as f,S as p,i as o}from"./assets/vendor-Dxn6ouvb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="56321698-67bacbaf5733ab627a1d9a7be",g="https://pixabay.com/api/";function y(a){return f.get(g,{params:{key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),d=new p(".gallery a",{captionsData:"alt",captionDelay:250});function h({webformatURL:a,largeImageURL:r,tags:i,likes:s,views:e,comments:t,downloads:n}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${a}" alt="${i}" />
      </a>
      <ul class="gallery-info">
        <li class="gallery-info-item">
          <span class="gallery-info-title">Likes</span>
          <span>${s}</span>
        </li>
        <li class="gallery-info-item">
          <span class="gallery-info-title">Views</span>
          <span>${e}</span>
        </li>
        <li class="gallery-info-item">
          <span class="gallery-info-title">Comments</span>
          <span>${t}</span>
        </li>
        <li class="gallery-info-item">
          <span class="gallery-info-title">Downloads</span>
          <span>${n}</span>
        </li>
      </ul>
    </li>`}function L(a){const r=a.map(h).join("");l.insertAdjacentHTML("beforeend",r),d.refresh()}function b(){l.innerHTML=""}function S(){c.classList.add("is-active")}function q(){c.classList.remove("is-active")}const u=document.querySelector(".form");u.addEventListener("submit",w);function w(a){a.preventDefault();const r=a.currentTarget.elements["search-text"].value.trim();if(!r){o.warning({message:"Please enter a search query!",position:"topRight"});return}b(),S(),y(r).then(i=>{const s=i.hits;if(!s.length){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s)}).catch(()=>{o.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q(),u.reset()})}
//# sourceMappingURL=index.js.map
