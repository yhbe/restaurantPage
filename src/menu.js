export function menu() {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  //remove children
  const h1 = document.createElement("h1");
  h1.classList.add("landingTitle");
  h1.innerHTML = "Our extended menu ~";
  content.appendChild(h1);
  const p = document.createElement("p");
  p.classList.add("landingP");
  p.innerHTML = "Potato Salad $5 <br> Hamburger $3 <br> Pizza $2";
  content.appendChild(p);
}
