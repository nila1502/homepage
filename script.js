var images;



document.getElementById('start').addEventListener('click', (event) => {
  images = ['https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", images[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_image2 = document.getElementById('image');
  images.unshift(images.slice(-1)[0]);
  element_image2.setAttribute("src", images.pop());

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_image3 = document.getElementById('image');
  images.push(images[0]);
  element_image3.setAttribute("src", images.shift());

});
