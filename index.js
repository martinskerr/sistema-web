console.log("hola")     
const input = document.getElementById('inputPrincipal');
const button = document.getElementById('buttonMain');
const resultado = document.getElementById('resultado');
      
      
button.addEventListener('click', () => {
        
    const nombre = input.value;
        
        
    const saludo = saludar(nombre);
        
        
    resultado.textContent = saludo;

});
