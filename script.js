// add trigger 

const con = document.querySelector('#confirm')
const pass = document.querySelector('#pass')
const warning = document.querySelector('#warning');

con.addEventListener('change', (e) =>{
if (con.value !=pass.value){
    warning.style.display='block';
}
else{
    warning.style.display='none';
}
})

pass.addEventListener('change', (e) =>{
    if (con.value !=pass.value && con.value !=''){
        warning.style.display='block';
    }
    else{
        warning.style.display='none';
    }
    })
    


