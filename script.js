const tagButton = document.createElement("button");
const isiButton = document.createTextNode("CLICK");
tagButton.appendChild(isiButton);

const tagImage = document.createElement("img");
const logoImage = document.createElement("img");
const text = document.createElement("h1");
tagImage.setAttribute("src", "./asset/vibingCat.gif");
logoImage.setAttribute("src", "./asset/logo.jpg");
logoImage.style.width = '300px'
text.innerHTML = 'you just won $500'
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
};
