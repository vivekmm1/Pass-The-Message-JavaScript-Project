
var btn=document.getElementById('btn')

btn.addEventListener('click',reply)
var r= 'Last message Recived'
function reply(e){
   document.getElementById('heading').textContent='Last Message Recived'
   document.getElementById('reply').textContent = document.getElementById('msg').value
}
