import restaurantImage from "./restaurantImage.jpg";
export function pageLoad() {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.classList.add("landingTitle");
  const p = document.createElement("p");
  p.classList.add("landingP");
  const img = document.createElement("img");
  img.classList.add("landingImage");

  h1.innerHTML = "Tom's Diner";
  p.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptatum nisi est expedita, modi maxime molestias aperiam in vitae temporibus porro.<br />  Nisi aperiam laborum nesciunt.";
  img.src = restaurantImage;
  img.alt = "diner image";

  const a = document.createElement("p");
  a.innerHTML = "Image by Ricky Singh @rickysinghy on Unsplash";

  content.append(h1, p, img, a);
}
