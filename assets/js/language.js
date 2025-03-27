//code from stackoverflow
function changeLanguage(languageCode) {
    sessionStorage.setItem('lang', languageCode)
    localStorage.setItem('lang', languageCode)
    Array.from(document.getElementsByClassName('lang')).forEach(function (elem) {
        if (elem.classList.contains('lang-' + languageCode)) {
             elem.style.display = '';
        }
        else {
             elem.style.display = 'none';
        }
    });
}
const selector = document.getElementById('langSelector'); //only change on demand, js
selector.addEventListener('change', function (evt) {
    changeLanguage(this.value);
});

let lang = sessionStorage.getItem("lang") || localStorage.getItem("lang");
if (lang) { //must be supported language
    lang = Array.from(selector.options).map(opt => opt.value).find(val => lang.includes(val));
}
//browswer code normally in form of en-US so need to normalise
if (!lang) { //navigator is not exist -> take from storage. If not then default to English
    const navlang = navigator.userLanguage || navigator.language;
    lang = Array.from(selector.options).map(opt => opt.value).find(val => navlang.includes(val));
    if (!lang) {
        lang = "en";
    }
}
changeLanguage(lang);
selector.selectedIndex = Array.from(selector.options).map(opt => opt.value).indexOf(lang);

function showhide(id, isshow) {
    const content_w_id = document.getElementById("c_"+id);
    content_w_id.style.display = (isshow ? "" : "none");
}

const supportedLang = ["en", "vi"] //redeclare to avoid sharing variable between files.
const hidedetail = document.getElementsByClassName("sh")
for (let i = 0; i < hidedetail.length; i+=1) {
    hidedetail[i].innerHTML = `<span class="lang lang-en">[more]</span>
    <span class="lang lang-vi">[thêm]</span>`
    hidedetail[i].addEventListener('click', function() {
        for (let j = 0; j < supportedLang.length; j+=1) {
            let cur_id = supportedLang[j] + "_" + hidedetail[i].id;
            let content_w_id = document.getElementById(cur_id);      
            if (content_w_id.classList[2] === 'hide') {
                content_w_id.classList.remove('hide');
                if (hidedetail[i].innerText === "[more]") {
                    hidedetail[i].innerText = "[less]"
                }
                else if (hidedetail[i].innerText === "[thêm]") {
                    hidedetail[i].innerText = "[bớt]"
                } 
            } else {
                content_w_id.classList.add('hide');
                if (hidedetail[i].innerText === "[less]") {
                    hidedetail[i].innerText = "[more]"
                }
                else if (hidedetail[i].innerText === "[bớt]") {
                    hidedetail[i].innerText = "[thêm]"
                }
            }
        }
      });
}