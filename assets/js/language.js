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