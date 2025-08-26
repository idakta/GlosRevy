// I reused code from https://dev.to/ourcodinghours/how-to-create-headerfooter-using-html-in-each-page-50g7

const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = '\
<div class="tiltoppen">\
<a href="#top">Til topp</a>\
</div>\
<div class="fellesFooter">\
    <div class="footer">\
        <div class="col-1">\
        \
            <h1>Gløshaugen Revy- og Teaterlag</h1>\
            <hr class="line">\
            <a href="https://www.tiktok.com/@glosrevyteater?is_from_webapp=1&sender_device=pc" target="_blank"><img\
                    class="icons" id="tiktok" src="../img/tik-tok.png" alt="tiktok"></a>\
            <a href="https://www.instagram.com/glosrevyteater/" target="_blank"><img class="icons" id="instagram"\
                    src="../img/instagram.png" alt="instagram"></a>\
            <a href="https://www.facebook.com/glosrevyteater" target="_blank"><img class="icons" id="facebook"\
                    src="../img/facebook.png" alt="facebook"></a>\
        </div>\
        \
        <div class="col-2">\
            <h1>Kontakt oss:</h1>\
            <hr class="line">\
            <p>+47 xx xx xx xx<br>mail@mail.com</p>\
        </div>\
        \
    </div>\
</div>'

document.getElementById('footerTarget').appendChild(footerTemplate.content);
