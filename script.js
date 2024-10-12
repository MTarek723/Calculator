let a 
let b 
let op 
let result
screen = document.querySelector('.screen')
equal = document.querySelector('.opss')
numbs = document.querySelectorAll('.btn')
numbs.forEach((numb) => {
    numb.addEventListener('click', ()=> {
        screen.textContent += numb.textContent
    })
});
ops = document.querySelectorAll('.ops')
ops.forEach((opr)=> {
    opr.addEventListener('click', ()=>{
        op = opr.textContent
        a = Number(screen.textContent)
        screen.textContent = ''
    })
})
equal.addEventListener('click', ()=> {
    b = Number(screen.textContent)
    switch (op) {
        case '+':
            result = a + b
            break
        case '-':
            result = a - b
            break
        case '*':
            result = a * b
            break
        case '/':
            result = a / b
            break
        default:
            result = 'Error!'
    }
    screen.textContent = result
})
reset = document.querySelector('.btnss')
reset.addEventListener('click', ()=> {
    a = ''
    b = ''
    op = ''
    result = ''
    screen.textContent = ''
})
