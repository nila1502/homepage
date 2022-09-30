var images;


images = ['https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];
let element_img = document.getElementById('img');
element_img.setAttribute("src", images[0]);


document.getElementById('previous').addEventListener('click', (event) => {
  let element_img2 = document.getElementById('img');
  images.unshift(images.slice(-1)[0]);
  element_img2.setAttribute("src", images.pop());

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_img3 = document.getElementById('img');
  images.push(images[0]);
  element_img3.setAttribute("src", images.shift());

});
