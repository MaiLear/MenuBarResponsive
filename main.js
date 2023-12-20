$contenedor = document.querySelector('nav');
$menuPrincipal =document.getElementById('menu-principal'); 
let menuHamburguesa = document.querySelector('.menu-hamburguesa')
$contenedorX = document.querySelector('.contenedor-x');
document.addEventListener('click',(e)=>{
    if(e.target.matches('.menu-img')){
        $contenedor.style.cssText = "display:flex;";
        $menuPrincipal.style.cssText = "display:flex;";
        menuHamburguesa.style.display = "none";
        $contenedorX.style.display = "block";
        // menuHamburguesa.style.display = "block";
        
    }
    if(e.target.matches('.icon-cerrar')){
        $contenedor.style.display = "none";
        $menuPrincipal.style.display = "none";
        menuHamburguesa.style.display = "block";
        $contenedorX.style.display = "none";
    }
})

window.addEventListener("resize",()=>{
let getComputedStyle = window.getComputedStyle(menuHamburguesa);
console.log(getComputedStyle.getPropertyValue('display'));

// && getComputedStyle.getPropertyValue('display') === 'block'
    if(screen.width > 1250){
        menuHamburguesa.style.display = "none";
        $contenedor.style.cssText = "display:flex;";
        $menuPrincipal.style.cssText = "display:flex;";
    }
    else{
        menuHamburguesa.style.display = "block";
        $contenedor.style.cssText = "display:none;";
        $menuPrincipal.style.cssText = "display:none;";
    }
    // if(screen.width < 1250){
    //     $contenedor.style.display = "none";
    //     $contenedor.style.display = "none";
    // }
    
})
