const seal = document.getElementById("seal");
const container = document.querySelector(".container");

seal.addEventListener("click", () => {
  container.classList.add("open");
});
/* COUNTDOWN */
const wedding = new Date("May 28, 2025").getTime();

setInterval(()=>{
  let now = new Date().getTime();
  let diff = wedding - now;

  let d = Math.floor(diff/(1000*60*60*24));
  let h = Math.floor((diff/(1000*60*60))%24);
  let m = Math.floor((diff/(1000*60))%60);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
},1000);

/* RSVP */
function sendRSVP(){
  const phone = "919999999999"; // replace with your number
  const message = "Hi! I would like to RSVP for your wedding 💍";
  
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}