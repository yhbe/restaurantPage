export function pageLoad() {
  const content = document.querySelector(".content");
  const h1 = document.createElement("h1");
  h1.classList.add("landingTitle");
  const p = document.createElement("p");
  p.classList.add("landingP");
  const img = document.createElement("img");
  img.classList.add("landingImage");

  h1.innerHTML = "Tom's Diner";
  p.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptatum nisi est expedita, modi maxime molestias aperiam in vitae temporibus porro.<br />  Nisi aperiam laborum nesciunt.";
  img.src = "../restaurantImage.jpg";
  img.alt = "diner image";

  content.append(h1, p, img);
}
