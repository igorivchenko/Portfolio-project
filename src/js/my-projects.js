import projects1 from '/img/projects1.jpg';
import projects1_xx from '/img/projects1_xx.jpg';
import projects2 from '/img/projects2.jpg';
import projects2_xx from '/img/projects2_xx.jpg';
import projects3 from '/img/projects3.jpg';
import projects3_xx from '/img/projects3_xx.jpg';
import projects4 from '/img/projects4.jpg';
import projects4_xx from '/img/projects4_xx.jpg';
import projects5 from '/img/projects5.jpg';
import projects5_xx from '/img/projects5_xx.jpg';
import projects6 from '/img/projects6.jpg';
import projects6_xx from '/img/projects6_xx.jpg';
import projects7 from '/img/projects7.jpg';
import projects7_xx from '/img/projects7_xx.jpg';
import projects8 from '/img/projects8.jpg';
import projects8_xx from '/img/projects8_xx.jpg';
import projects9 from '/img/projects9.jpg';
import projects9_xx from '/img/projects9_xx.jpg';
import projects10 from '/img/projects10.jpg';
import projects10_xx from '/img/projects10_xx.jpg';
import svg from '/img/icon.svg';

const projectsImages = [
  {
    ordinary: projects1,
    retina: projects1_xx,
  },
  {
    ordinary: projects2,
    retina: projects2_xx,
  },
  {
    ordinary: projects3,
    retina: projects3_xx,
  },
  {
    ordinary: projects4,
    retina: projects4_xx,
  },
  {
    ordinary: projects5,
    retina: projects5_xx,
  },
  {
    ordinary: projects6,
    retina: projects6_xx,
  },
  {
    ordinary: projects7,
    retina: projects7_xx,
  },
  {
    ordinary: projects8,
    retina: projects8_xx,
  },
  {
    ordinary: projects9,
    retina: projects9_xx,
  },
  {
    ordinary: projects10,
    retina: projects10_xx,
  },
];

const projectsQuantity = 10;
const projectsOnPage = 3;
const projectsStateArr = [];
const projectNames = [
  'power pulse webservice',
  'mimino website',
  'vyshyvanka vibes Landing Page',
  'green harvest online store',
  'wallet webservice',
  'chego jewelry website',
  'energy flow webservice',
  'fruitbox online store',
  'English excellence webservice',
  'starlight studio landing page',
];
const loadMoreEl = document.querySelector('button.projects-more');
const projectsList = document.querySelector('ul.projects-list');
const handleScrollView = () => {
  const items = document.querySelectorAll('ul.projects-list li');
  items[items.length - 1].scrollIntoView({
    behavior: 'smooth',
  });
};
const hideLoadMore = () => {
  loadMoreEl.style.display = 'none';
};
const showLoadMore = () => {
  loadMoreEl.style.display = 'block';
};
const fillProjectsState = quantity => {
  for (let index = 0; index < quantity; index++) {
    const name = projectNames[index];
    const idx = index + 1;
    projectsStateArr.push({
      idx,
      name,
      visible: false,
    });
  }
};
const renderProjects = arr => {
  projectsList.innerHTML += arr
    .map(item => {
      const { idx, name } = item;
      const stateIdx = projectsStateArr.findIndex(item => item.idx === idx);
      projectsStateArr[stateIdx].visible = true;

      return `
            <li>
                <img class="project-img" 
                    srcset="${projectsImages[idx - 1].ordinary} 1x, ${
        projectsImages[idx - 1].retina
      } 2x"
                    src="${projectsImages[idx - 1].ordinary}"
                    alt="${name}"
                    loading="lazy">
                <span class="projects-stack">React, JavaScript, Node JS, Git</span>
                <div class="projects-box">
                    <span class="projects-name">${name}</span>
                    <span class="projects-visit">
                        <a class="projects-link" href="https://github.com/igorivchenko/Portfolio-project" target="_blank">
                            visit
                            <svg class="projects-icon">
                                <use href="${svg}#icon-projects-icon"></use>
                            </svg>
                        </a>
                    </span>
                </div>
            </li>
        `;
    })
    .join('');
};
const createGallery = (page, click) => {
  const renderArr = projectsStateArr.filter(item => item.visible === false);
  const unVisibleCount = renderArr.length;

  if (unVisibleCount) {
    showLoadMore();
    const iterations = unVisibleCount >= page ? page : unVisibleCount;
    renderProjects(renderArr.slice(0, iterations));

    if (click) {
      handleScrollView();
    }

    if (unVisibleCount <= page) {
      hideLoadMore();
      projectsList.classList.add('hide-margin');
    }
  }
};
const loadMore = () => {
  createGallery(projectsOnPage, true);
};

fillProjectsState(projectsQuantity);
createGallery(projectsOnPage, false);
loadMoreEl.addEventListener('click', loadMore);
