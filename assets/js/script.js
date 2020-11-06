const img = document.querySelector("#firstImg");


img.onclick = function () {
      if (img.src == "file:///C:/Users/julie/OneDrive/Bureau/Cours%20js%20la%20manu/Partie%205%20-%20Les%20%C3%A9v%C3%A9nements%20et%20la%20manipulation%20du%20DOM/Exo%204/assets/img/first.png") {
            img.src = "assets/img/second.jpg";
      } else {
            img.src = "assets/img/first.png";
      }
}

img.onmouseover = function () {
      img.style.width = "40rem";
}

img.onmouseout = function () {
      img.style.width = "30rem";
}