const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const markup = images.map(({url, alt}) => 
  `<li>
  <img src="${url}" alt="${alt}" class="gallery-img" width="300">
  </li>`)
  .join(""); 

const gallery = document.querySelector('.gallery');
gallery.innerHTML = markup;

gallery.style.listStyle = 'none';
gallery.style.paddingLeft = '0'
gallery.style.display = 'flex';
gallery.style.justifyContent = 'space-around';
gallery.style.alignItems = 'center';





