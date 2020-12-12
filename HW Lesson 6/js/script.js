let images = document.getElementsByTagName('img');
let appDiv = document.getElementById('big_picture');
let btnPrev = document.getElementById('btnPrev');
let btnNext = document.getElementById('btnNext');
let bigPicElem = appDiv.children;

for(i = 0; i < images.length; i++) {
    images[i].onclick = changeBigPicture;
}

function changeBigPicture(event) {
    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    eventElement = event.target;
    var imageNumber = eventElement.getAttribute("data-image");
    var src = "img/big/" + imageNumber + ".jpg";
    imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    imageDomElement.setAttribute("data-image", i);
    imageDomElement.onerror = function(){
        alert('картинка не существует');
        console.log(imageDomElement);
    }
    imageDomElement.onload = function(){
        appDiv.appendChild(imageDomElement);
    }
}

btnNext.onclick = function(){
    if(bigPicElem.length > 0){
        i = imageDomElement.getAttribute("data-image");
        i++;
        if(i == images.length) {
            i = 1;
        }
        appDiv.innerHTML = "";
        src = "img/big/" + i + ".jpg";
        imageDomElement = document.createElement("img");
        imageDomElement.src = src;
        imageDomElement.setAttribute("data-image", i);
        i = eventElement.getAttribute("data-image");
        
        imageDomElement.onerror = function(){
            alert('картинка не существует');
            console.log(imageDomElement);
        }
        
        imageDomElement.onload = function(){
            appDiv.appendChild(imageDomElement);
        }
        
    } else {
        console.log("Img не определена");
    }
 }
    
btnPrev.onclick = function(){
    if(bigPicElem.length > 0){
        i = imageDomElement.getAttribute("data-image");
        i--;
        if(i < 1) {
            i = images.length-1;
        }
        btnklick();
    }
}

function btnklick(){
    appDiv.innerHTML = "";
    src = "img/big/" + i + ".jpg";
    imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    imageDomElement.setAttribute("data-image", i);

    imageDomElement.onerror = function(){
        alert('картинка не существует');
        console.log(imageDomElement);
    }
    imageDomElement.onload = function(){
        appDiv.appendChild(imageDomElement);
    }
}