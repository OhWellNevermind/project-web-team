const icons = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: new URL('/src/images/save-children-logo.png', import.meta.url),
    img2: new URL('/src/images/save-children-logo@2x.png', import.meta.url),
    p: '01',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: new URL('/src/images/project-hope-logo.png', import.meta.url),
    img2: new URL('/src/images/project-hope-logo@2x.png', import.meta.url),
    p: '02',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: new URL('/src/images/medical-corps-logo.png', import.meta.url),
    img2: new URL('/src/images/medical-logo@2x.png', import.meta.url),
    p: '03',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: new URL('/src/images/razom-logo.png', import.meta.url),
    img2: new URL('/src/images/razom-logo@2x.png', import.meta.url),
    p: '04',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: new URL('/src/images/against-hunger-logo.png', import.meta.url),
    img2: new URL('/src/images/against-hunger-logo@2x-5.png', import.meta.url),
    p: '05',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: new URL('/src/images/prytula-logo.png', import.meta.url),
    img2: new URL('/src/images/prytula-logo@2x-7.png', import.meta.url),
    p: '06',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: new URL('/src/images/medical-logo.png', import.meta.url),
    img2: new URL('/src/images/medical-corps-logo@2x.png', import.meta.url),
    p: '07',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: new URL('/src/images/world-vison-logo.png', import.meta.url),
    img2: new URL('/src/images/world-vison-logo@2x.png', import.meta.url),
    p: '08',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: new URL('/src/images/united-logo.png', import.meta.url),
    img2: new URL('/src/images/united-logo@2x.png', import.meta.url),
    p: '09',
  },
];

const container = document.querySelector('.support-ukraine-list');
const buttonSupport = document.querySelector('.ukraine-button');

function listSupport(arr) {
  return arr
    .map(
      ({ title, url, img, img2, p }) =>
        `<div class="support-ukraine-icons">
 <p class="support-counter">${p}</p>
       <a
          href="${url}"   
          title="${title}">
          target="_blank"
          <img
          srcset="${img}, ${img2}"
          src="${img}"
          alt="${title}"
          height="32"
      /></a>
        </div>`
    )
    .join('');
}
container.insertAdjacentHTML('beforeend', listSupport(icons));

buttonSupport.addEventListener('click', scrollSupport);

function scrollSupport(event) {
  container.scrollTo({
    top: container.scrollHeight,
    behavior: 'smooth',
  });
}
