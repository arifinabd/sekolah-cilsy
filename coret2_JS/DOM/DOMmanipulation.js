/*element.innerHTML*/
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'hallo world';

/*element.style.<propertiCSS>*/
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue'

/*element.getAttribute()
element.setAttribute()
element.removeAttribute()
const a = document.querySelector('section#a a');*/

// a.setAttribute('id', 'link')
// a.getAttribute('href')
// a.removeAttribute('href');

/*element.classList.add()
element.classList.remove()
element.classList.toggle()
element.classList.item()
element.classList.contains()
element.classList.replace()*/

// const p2 = document.querySelector('.p2');

// p2.classList.add('label');
// p2.classList.remove('label');
// p2.classList.toggle('label');

/* buat elemen baru*/
const pBaru = document.createElement('p');
const teksPbaru = document.createTextNode('paragraf Baru');
/*simpan tulisan kedalam paragraf*/
pBaru.appendChild(teksPbaru);

/*simpan pBaru diakhir section A*/
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksliBaru = document.createTextNode('item saja');
liBaru.appendChild(teksliBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)')
ul.insertBefore(liBaru, li2);

/* menghapus child*/
const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

/* mengganti child*/
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p')


const h2Baru = document.createElement('h2');
const teksh2Baru = document.createTextNode('judul baru');

h2Baru.appendChild(teksh2Baru);

sectionB.replaceChild(h2Baru, p4)






