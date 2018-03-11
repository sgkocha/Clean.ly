var modal = document.getElementById('myModal');
var secPlus = document.querySelectorAll(".news-sec__plus");
var modalArchive = document.getElementById("modalArchive");
var allArchive = document.getElementById("allArchive");


window.onclick = function(event) {
    if(event.target === secPlus[0] ||event.target === secPlus[1] ) {
        modal.style.display = "block";
    }
    else if (event.target === allArchive) modalArchive.style.display = "block";
    else if (event.target !== modal && (event.target !== secPlus[0] ||event.target !== secPlus[1])) {
        modal.style.display = "none";
        modalArchive.style.display = "none";
    }

};
var sortingSelect = document.querySelector(".sorting-select");

sortingSelect.onchange = function (){
    var selectedIndex = sortingSelect.selectedIndex;
    var sortingLinks = document.querySelectorAll(".sorting .link");
    var sortingLines = document.querySelectorAll(".sorting .line");

    if (selectedIndex === 0 && window.screen.width > 566) {
        for (var i= 0; i < sortingLinks.length; i++) {
            sortingLinks[i].style.display = "inline-block";
        }
        for (i= 0; i < sortingLines.length; i++) {
            sortingLines[i].style.display = "inline-block";
        }
		sortingSelect.style.top = "2px";
    }
    else  {
        for (i= 0; i < sortingLinks.length; i++) {
            sortingLinks[i].style.display = "none";
        }
        for (i= 0; i < sortingLines.length; i++) {
            sortingLines[i].style.display = "none";
        }
		sortingSelect.style.top = "1px";
    }

    sortingSelect.style.width = (sortingSelect[selectedIndex].value.length * 8) + 20 + ".px";
};

var btnLogin = document.querySelector(".right-block-wr .personal .login-form .btn");
var loginText = document.querySelectorAll(".input-text")[0];
var passwordText = document.querySelectorAll(".input-text")[1];

btnLogin.onclick = function () {
    var isCorrect = true;
    loginText.style.borderColor = "white";
    passwordText.style.borderColor = "white";

    if (btnLogin.value === "Выйти") {
        btnLogin.value = "Войти";
        loginText.disabled = false;
        loginText.value = "";
        loginText.focus();
        passwordText.disabled = false;
    }
    else {
        if (loginText.value.length === 0) {          
            loginText.style.borderColor = "red";
            isCorrect = false;
        }
        if (passwordText.value.length === 0) {			
            passwordText.style.borderColor = "red";
            isCorrect = false;
        }
        if (isCorrect) {
            btnLogin.value = "Выйти";
            loginText.disabled = "true";
            passwordText.value = "";
            passwordText.disabled = "true";
        }
    }
    return false;
};

var  isChangedCaption = false;
var isChangedArticle = false;
var captions = document.querySelectorAll(".left-block-wr .navigation__list-items-caption .caption-text");
var defaultCaptionsText = [];
var articles = document.querySelectorAll(".left-block-wr .articles-list-items .link");
var defaultArticles = [];

for (var i = 0; i < articles.length; i++) {
    defaultArticles[i] = articles[i].innerHTML;
}

for (i = 0; i < captions.length; i++) {
    defaultCaptionsText[i] = captions[i].innerHTML;
}
window.onload = function () {
   window.onresize();
};
window.onresize = function () {
    var screenWidth = window.screen.width;

    if (screenWidth <=  846) {
        if ( ! isChangedArticle) {
            for (i = 0; i < articles.length; i++) {
                articles[i].innerHTML = articles[i].innerHTML.substring(0, 14) + "...";
            }
            isChangedArticle = true;
        }

    }
    else if (screenWidth > 846) {
        for (i = 0; i < articles.length; i++){
            articles[i].innerHTML = defaultArticles[i];
        }
        isChangedArticle = false;
    }


     if (screenWidth <= 813) {
         if( !isChangedCaption) {
             for (var i = 0; i < captions.length; i++) {
                 captions[i].innerHTML = captions[i].innerHTML.substring(0, 7) + "..."
             }
             isChangedCaption = true;
         }

     }
     else if (screenWidth > 813){
         for (i = 0; i < captions.length; i++){
             captions[i].innerHTML = defaultCaptionsText[i];
         }
         isChangedCaption = false;
     }
};