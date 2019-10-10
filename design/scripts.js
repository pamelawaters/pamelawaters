window.onload = function() {
    var images = document.getElementsByClassName('image');
    for(var i = 0; i < images.length; i++) {
      var image = images[i]
      var img = image.getElementsByTagName('img')[0];
      var anchor = document.createElement('a');
      anchor.classList.add('modal-button');
      anchor.setAttribute('data-target', 'modal-image');
      image.appendChild(anchor);
      anchor.appendChild(img);
    }
    var anchors = document.getElementsByClassName('modal-button');
    for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        anchor.onclick = function() {
            var target = document.getElementById(this.dataset.target);
            var targetImg = target.getElementsByTagName('img');
            var img = this.getElementsByTagName('img');
            targetImg[0].src = img[0].src;
            target.classList.add('is-active');
        }
    }

    var modalClosers = Array.from(document.getElementsByClassName('modal-background'));
    modalClosers = modalClosers.concat(Array.from(document.getElementsByClassName('modal-close')));
    
    for(var i = 0; i < modalClosers.length; i++) {
      var closer = modalClosers[i];
      closer.onclick = function() {
        closer.parentElement.classList.remove('is-active');
      }
    }
}