const button1 = document.getElementById('button-sub1')
const button2 = document.getElementById('button-sub2')
const button3 = document.getElementById('button-sub3')
const button_send = document.getElementById('button-send')
const menu = document.getElementById('form')
const button_close = document.getElementById('button-close')



function myFunction1() {
  alert('Đã gửi thành công!');  
}

button1.addEventListener('click', function(){
    menu.style.display = 'block'
})
button2.addEventListener('click', function(){
  menu.style.display = 'block'
})
button3.addEventListener('click', function(){
  menu.style.display = 'block'
})

button_close.addEventListener('click', function(){
  menu.style.display = 'none'
})
// 
button_send.addEventListener('click', function(){
  menu.style.display = 'none'
  alert('Đã gửi thành công!');  
})
