var bodyEl = document.querySelector("body");
var menyEl = document.createElement("div");
menyEl.setAttribute("class", "meny");

var temaLenkeEl = document.createElement("a");
temaLenkeEl.setAttribute("class", "rad");
temaLenkeEl.setAttribute("href", "index.html")
var logoEl = document.createElement("img");
logoEl.src = "media/uio_logo.png";
logoEl.style.width = "100px";
temaLenkeEl.appendChild(logoEl);
var tekstEl = document.createElement("p");
tekstEl.innerHTML = "Skolenotater";
tekstEl.style.display = "inline";
tekstEl.style.position = "absolute";
tekstEl.style.color = "#000000";
temaLenkeEl.appendChild(tekstEl);
menyEl.appendChild(temaLenkeEl);

var lenke1El = document.createElement("a");
lenke1El.setAttribute("class", "rad");
lenke1El.setAttribute("href", "");
var rad1El = document.createElement("div");
rad1El.setAttribute("class", "menyRad");
rad1El.innerHTML = "Lenke 1";
lenke1El.appendChild(rad1El);
menyEl.appendChild(lenke1El);

var lenke2El = document.createElement("a");
lenke2El.setAttribute("class", "rad");
lenke2El.setAttribute("href", "");
var rad2El = document.createElement("div");
rad2El.setAttribute("class", "menyRad");
rad2El.innerHTML = "Lenke 2";
lenke2El.appendChild(rad2El);
menyEl.appendChild(lenke2El);

var lenke3El = document.createElement("a");
lenke3El.setAttribute("class", "rad");
lenke3El.setAttribute("href", "");
var rad3El = document.createElement("div");
rad3El.setAttribute("class", "menyRad");
rad3El.innerHTML = "Lenke 3";
lenke3El.appendChild(rad3El);
menyEl.appendChild(lenke3El);

bodyEl.appendChild(menyEl);
