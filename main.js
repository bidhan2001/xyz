 alert("ARE YOU CONTINUE 🙂");
 
 let countDate = new Date("nov 1, 2022 00:00:00").getTime();
 
 function countDown() {
   let now = new Date().getTime();
   gap = countDate - now;
 
   let second = 1000;
   let mintue = second * 60;
   let hour = mintue * 60;
   let day = hour * 24;
 
   let d = Math.floor(gap / day);
   let h = Math.floor((gap % day) / hour);
   let m = Math.floor((gap % hour) / mintue);
   let s = Math.floor((gap % mintue) / second);
 
   document.getElementById("day").innerText = d;
   document.getElementById("hour").innerText = h;
   document.getElementById("mintue").innerText = m;
   document.getElementById("second").innerText = s;
 }
 
 setInterval(function() {
   countDown();
 }, 1000);