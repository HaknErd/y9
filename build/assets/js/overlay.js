function startOverlayListner() {
    var imgs = document.querySelectorAll('img[data-enlargable]');
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].classList.add("img-enlargable");
        imgs[i].addEventListener("click", function () {
            var src = this.getAttribute("src");
            var overlay = document.createElement("div");
            overlay.style.background = `RGBA(0,0,0,.5) url(${src}) no-repeat center`;
            overlay.style.backgroundSize = "contain";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.position = "fixed";
            overlay.style.zIndex = "10000";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.cursor = "zoom-out";
            overlay.addEventListener("click", function () {
                overlay.remove();
            });
            document.body.appendChild(overlay);
        });
    }
}
