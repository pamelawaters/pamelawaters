window.onload = function() {
    var images = document.getElementsByClassName('image');
    var disableModal = document.getElementsByClassName('disable-modal');
    if (disableModal.length > 0) {
      return;
    }
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

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});


