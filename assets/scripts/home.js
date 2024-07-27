const menuMobile = document.querySelector('menu.mobile');
const nav = document.querySelector('nav.nav');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
    nav.classList.toggle('active');
});


(async function () {
    const versicle = await gerarVersiculoAleatorio();

    if (versicle) {
        const versicleElement = document.querySelector('.versicle');
        const referenceElement = document.querySelector('.reference');
        versicleElement.innerHTML = versicle.text;
        referenceElement.innerHTML = versicle.reference;
    }
})();

