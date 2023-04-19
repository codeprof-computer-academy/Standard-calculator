// functionality logic starts here

window.onload = ()=>{
       document.querySelector('#input').value = ""
}

let equal_press = 0; // flag variable

// target clear, delete, input_display
let clear = document.querySelector('#clear');
let delete_btn = document.querySelector('#delete')
let input_display = document.querySelector('#input')

let btn_inputs = document.querySelectorAll('.input-btn')
  btn_inputs.forEach((btn_input)=>{
         btn_input.addEventListener('click', ()=>{
                if(equal_press === 1){
                    // input_display.value = ''
                    equal_press = 0
                }

                input_display.value += btn_input.value
         })
  })


// target the equal btn
document.querySelector('#equal').addEventListener('click', ()=>{
       equal_press = 1

      try{
                let result = eval( input_display.value )

                if(Number.isInteger(result)){
                input_display.value = result
                }else{
                input_display.value = result.toFixed(2)
                }
      }catch(err){
          console.log(err)
          alert("Ooops! Invalid input")
      }

     
})


// adding functionality to clear btn
clear.addEventListener('click', ()=>{
      input_display.value = ''
      equal_press = 0;
})


// // testing

// let username = "codeprof"
// alert(username.substring(0,username.length - 1))

// add functionality to delete btn

delete_btn.addEventListener('click', ()=>{
      input_display.value = input_display.value.substring(0, input_display.value.length - 1)
})