// gère l'ouverture/fermeture du menu en version mobile
document.addEventListener('DOMContentLoaded', function () {
  var boutonMenu = document.querySelector('.btn-menu');
  var liensNav = document.querySelector('.liens-nav');

  if (!boutonMenu || !liensNav) {
    return;
  }

  boutonMenu.addEventListener('click', function () {
    // au début je faisais juste liensNav.style.display = 'flex' mais impossible
    // de refermer le menu après, du coup je suis passée par classList.toggle
    var estOuvert = liensNav.classList.toggle('ouvert');
    boutonMenu.setAttribute('aria-expanded', estOuvert ? 'true' : 'false');
  });
});
