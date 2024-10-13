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
                    srcset="../img/projects${idx}.jpg 1x, ../img/projects${idx}_xx.jpg 2x"
                    src="../img/projects${idx}.jpg"
                    alt="${name}"
                    loading="lazy">
                <span class="projects-stack">React, JavaScript, Node JS, Git</span>
                <div class="projects-box">
                    <span class="projects-name">${name}</span>
                    <span class="projects-visit">
                        <a class="projects-link" href="#">
                            visit
                            <svg class="projects-icon">
                                <use href="../img/icon.svg#icon-projects-icon"></use>
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
    }
  }
};
const loadMore = () => {
  createGallery(projectsOnPage, true);
};

fillProjectsState(projectsQuantity);
createGallery(projectsOnPage, false);
loadMoreEl.addEventListener('click', loadMore);
