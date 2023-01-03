// query params on route
const params = new URLSearchParams(window.location.search);

if (params.has('matric')) {
  const matric = params.get('matric');
  // @ts-ignore
  const listOfStudents = [
    {
      matric: 'cos-1864-2016',
      name: 'festus',
      imgUrl: './images/IMG-20221003-WA0005.jpg',
    },
    {
      matric: 'cos-1834-2016',
      name: 'Ereyomi',
      imgUrl: './images/ai.jpg',
    },
    {
      matric: 'cos-1894-2016',
      name: 'sola',
      imgUrl: './images/ai-b.jpg',
    },
    {
      matric: 'cos-1867-2016',
      name: 'tobi',
      imgUrl: './images/ai-c.jpg',
    },
    {
      matric: 'cos-1864-2016',
      name: 'festus',
      imgUrl: './images/IMG-20221003-WA0005.jpg',
    },
    {
      matric: 'cos-1834-2016',
      name: 'Ereyomi',
      imgUrl: './images/ai.jpg',
    },
    {
      matric: 'cos-1894-2016',
      name: 'sola',
      imgUrl: './images/ai-b.jpg',
    },
    {
      matric: 'cos-1867-2016',
      name: 'tobi',
      imgUrl: './images/ai-c.jpg',
    }
  ];
  const getStudent = listOfStudents.find((v) => v.matric === matric);
  document.querySelector('#name-display').innerHTML = getStudent?.name;
  document.querySelector( '#matric-display' ).innerHTML = getStudent?.matric;
  document.querySelector('.img').innerHTML = `<img src="${getStudent?.imgUrl}" alt="${getStudent?.matric}">`;
  const generatedUrl = `${window.location?.origin}/student-profile.html?matric=${getStudent?.matric}`;
  const qrcode = new QRCode(document.getElementById('qrcode'), {
    width: 200,
    height: 200,
  });
  qrcode.makeCode(generatedUrl);
} else {
  alert('looks like you route wrongly');
  window.location.replace('index.html');
}
