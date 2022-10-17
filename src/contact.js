export function contact() {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  //remove children
  const h1 = document.createElement("h1");
  h1.classList.add("landingTitle");
  h1.innerHTML = "Contact Us";
  content.appendChild(h1);
  const p = document.createElement("p");
  p.classList.add("landingP");
  p.innerHTML =
    "Phone Number +1 XXX XXX XXXX <br> Email Address example@example.com";
  content.appendChild(p);
}
