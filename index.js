function addNumberSymbol (number){
    document.getElementById('data').innerHTML +=  number
}

function clean(){
    document.getElementById('data').innerHTML = "" 
    document.getElementById('resultado').innerHTML = ""
}
function back(){
    let value = document.getElementById('data').innerHTML 
    document.getElementById('data').innerHTML = value.substring(0, value.length -1)
    console.log(value)
    
    
    
}
function calcular(){
    let resultado = document.getElementById('data').innerHTML 
        if(resultado){
            document.getElementById('resultado').innerHTML = eval(resultado)
    }
}








