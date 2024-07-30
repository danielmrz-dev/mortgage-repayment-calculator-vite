(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(e){if(e.ep)return;e.ep=!0;const c=r(e);fetch(e.href,c)}})();function I(o,s,r){const t=s/100/12,e=r*12;return o*(t*Math.pow(1+t,e))/(Math.pow(1+t,e)-1)}function i(o){return new Intl.NumberFormat("pt-BR",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}).format(o)}function m(o,s){var a;const r=document.querySelector(o),t=document.querySelector(s),e=(a=r==null?void 0:r.closest(".parent"))==null?void 0:a.querySelector(".error-msg"),c=(r==null?void 0:r.value)!=="";return c?(r==null||r.classList.remove("error-state-input"),t==null||t.classList.remove("error-state-icon"),e==null||e.classList.remove("error-msg-active")):(r==null||r.classList.add("error-state-input"),t==null||t.classList.add("error-state-icon"),e==null||e.classList.add("error-msg-active")),c}function _(){var e;const o=document.querySelector("#mortgage-type-repayment"),s=document.querySelector("#mortgage-type-interest"),r=(e=o==null?void 0:o.closest(".parent"))==null?void 0:e.querySelector(".error-msg"),t=!!(o!=null&&o.checked||s!=null&&s.checked);return!(o!=null&&o.checked)&&!(s!=null&&s.checked)?r.classList.add("error-msg-active"):r.classList.remove("error-msg-active"),t}const y=document.querySelector("#mortgage-amount"),u=document.querySelector("#mortgage-term"),p=document.querySelector("#interest-rate"),w=document.querySelector(".calculator__mortgage-type"),S=document.querySelector("#mortgage-type-repayment"),E=document.querySelector("#mortgage-type-interest"),v=document.querySelector(".calculator__form"),g=document.querySelector(".calculator__results-empty"),l=document.querySelector(".calculator__results-complete"),h=l.querySelector("#monthly-value"),L=l.querySelector("#total-value"),d=document.querySelector(".calculator__clear-btn"),q=document.querySelector("#interest-text"),A=w.querySelectorAll("label");A.forEach(o=>{o.addEventListener("keydown",s=>{if(s.key==="Enter"||s.key===" "){const r=o.id,t=o.parentElement,e=t==null?void 0:t.querySelector(`input#mortgage-type-${r}`);e.checked=!0}})});p.addEventListener("input",function(){this.value=this.value.replace(/[^0-9,]/g,"")});d==null||d.addEventListener("click",()=>{document.querySelectorAll(".error-state-input").forEach(t=>t.classList.remove("error-state-input")),document.querySelectorAll(".error-state-icon").forEach(t=>t.classList.remove("error-state-icon")),document.querySelectorAll(".error-msg-active").forEach(t=>t.classList.remove("error-msg-active")),y.value="",u.value="",p.value="",S.checked=!1,E.checked=!1,l.classList.remove("show-results"),g.classList.remove("hide-empty-results")});v&&v.addEventListener("submit",o=>{o.preventDefault();const s=m("#mortgage-amount",".currency-icon"),r=m("#mortgage-term",".years-icon"),t=m("#interest-rate",".percentage-icon"),e=_(),c=parseFloat(y.value),a=parseFloat(p.value.replace(",",".")),b=parseFloat(u.value);if(s&&r&&t&&e){let n=I(c,a,b),M=n*12*Number(u.value),T=n*12*Number(u.value)-Number(y.value),f=i(n),V=i(M),F=i(T);g.classList.add("hide-empty-results"),l.classList.add("show-results"),S.checked?(n=n,h.innerHTML=`£ ${f}`,L.innerHTML=`£ ${V}`,q.textContent="Total you'll repay over the term"):E.checked&&(n=n,h.innerHTML=`£ ${f}`,L.innerHTML=`£ ${F}`,q.textContent="Total amount of interest you'll pay over the term")}else g.classList.remove("results-showing"),l.classList.remove("show-results")});