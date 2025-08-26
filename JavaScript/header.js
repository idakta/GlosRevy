// I reused code from https://dev.to/ourcodinghours/how-to-create-headerfooter-using-html-in-each-page-50g7

const template = document.createElement('template');

template.innerHTML = '\
<div class="fellesHeader">\
<div class="header">\
  <img src="../img/GRT-Banner1.jpg" alt="Banner" id="banner">\
  <img src="../img/grtbanner_beskjært.jpg" alt="Banner" id="bannerLite">\
  <button id="buttonn">\
    <img src="../img/MENUICON.png" id="knapp">\
  </button>\
</div>\
\
<div class="buttongroup" id="buttongroup"> \
\
  <li><a class="Button1" href="./homepage.html">Hjem</a></li>\
\
  <li><a class="Button1" href="./omoss.html">Om oss</a> </li>\
\
  <li><a class="Button1" href="./styret.html">Styret</a></li>\
\
<div class="dropdown" onclick="dropbutton()" style="hover{ background-color: #BF7D2A;}">\
  <a  href="../html/blimedlem.html"><button class="dropbutton">Bli medlem</button ></a>\
    <div class="dropdown-content" id="myDropdown">\
    <a href="../html/blimedlem.html#Skuespill">Skuespill </a>\
    <a href="../html/blimedlem.html#Band">Band </a>\
    <a href="../html/blimedlem.html#skribent">Skribent</a>\
    <a href="../html/blimedlem.html#pr">PR</a>\
    <a href="../html/blimedlem.html#rekogkos">Rekvisitt og kostyme</a>\
    <a href="../html/blimedlem.html#kos">Kos</a>\
</div>\
</div>\
\
  <li><a  class="Button1" href="https://grt.ticketco.events/no/nb/e/grt?fbclid=IwAR1EO2kXU_DTOOqJYMTsqcaBFQLNM4vEfkaRQMB1vIWi4oSzC3FGbWMXmWg" target="_blank">Billetter</a></li>\
\
</div>\
</div>'


document.body.appendChild(template.content);

document.onload = () => {
  const width = window.innerWidth;
  document.querySelector('body').style.maxWidth = `${width}px`;
}
document.getElementById('buttonn').onclick = () => {
  document.getElementById('buttongroup').classList.toggle('menuopen');
};