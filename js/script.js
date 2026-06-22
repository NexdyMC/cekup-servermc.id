const element = document.getElementById('kreditSpan');
const button = document.getElementById('kreditbtn');
const pembuatweb = document.getElementById("pembuat-web");

function kreditSpanBtn() {
  if (element.style.height < '280px') {
    pembuatweb.innerHTML = '<p>Creator: @NexdyMC @AhZanMC</p>';
    element.style.height = '40px'; 
    element.style.overflow = 'hidden';
  } else {
    pembuatweb.innerHTML = "<p>Creator: @NexdyMC @AhZanMC</p><p>Version: 1.21.30</p><p>Github AhzanMC: </p><p>Github NexdyMC: </p><p></p><br><p>Terima Kasih >w< </p>";
    element.style.height = '210px'; 
    element.style.overflow = 'hidden';
  }
}
