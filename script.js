const tagButton = document.createElement("button");
const isiButton = document.createTextNode("CLICK");
tagButton.appendChild(isiButton);

const tagImage = document.createElement("img");
const logoImage = document.createElement("img");
const text = document.createElement("h1");
tagImage.setAttribute("src", "./asset/vibingCat.gif");
logoImage.style.width = '300px'
text.innerHTML = 'happy birthday, mi amor!'
text.style.position = 'absolute'
tagButton.style.padding = "15px 32px";

document.body.appendChild(tagButton);

const audio = new Audio("./asset/Engelwood.mp3");

tagButton.onclick = () => {
  audio.play();
  setTimeout(() => {
    document.body.appendChild(tagImage);
    document.body.appendChild(logoImage);
    document.body.appendChild(text);
  }, 1500);
  document.body.removeChild(tagButton);
  setInterval(() => {
    document.body.style.backgroundColor =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  }, 200);
  setInterval(() => {
    text.style.color =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  }, 200);
  setInterval(() => {
  const randX = () => Math.random() * (window.innerWidth - 200);
  const randY = () => Math.random() * (window.innerHeight - 200);

  tagImage.style.position = 'absolute';
  tagImage.style.left = randX() + 'px';
  tagImage.style.top = randY() + 'px';

  text.style.left = randX() + 'px';
  text.style.top = randY() + 'px';
}, 1000);
};
