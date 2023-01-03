const redirect = (e) => {
  // @ts-ignore
  const href = `${window.location?.origin}/student-profile.html`;
  let url = new URL(href);
  // @ts-ignore
  url.searchParams.set('matric', e?.target?.dataset?.matric);
  window.location.replace(url);
};

const listOfStudents = [
  {
    matric: 'cos-1864-2016',
    name: 'festus',
    imgUrl: '../images/ai-b.jpg',
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
const listView = document.querySelector('.listView');
const listUl = document.createElement('ul');
listOfStudents.forEach((student) => {
  let studentDiv = document.createElement('li');
  let studentImg = document.createElement('img')
  studentDiv.appendChild(studentImg)
  
  studentDiv.innerHTML = `
            <div class="list" data-matric="${student?.matric}" onClick="redirect(event)">
                ${student?.name}
                
            </div>
        `;
  listUl.appendChild(studentDiv);
});
listView?.appendChild(listUl);
