const container = document.getElementById("container");
const btnPrevious = document.getElementById("btnPrevious");
const btnNext = document.getElementById("btnNext");
const pageSize = 12;
let totalPage = 0;
let page = 1;

const getNews = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=ar&category=technology&page=${page}&pageSize=${pageSize}&apiKey=6612309c9187454fadbcfc570db0a3b1`
  );
  return await response.json();
};

const createCardsNews = (news) => {
  container.innerHTML = news.reduce(
    (acc, story) =>
      acc +
      `<div class="card">
  <img
    src="${story.urlToImage}"
    alt="${story.title}"
  />
  <div class="info">
    <a
      href="${story.url}"
      target="_blank"
      rel="noopener noreferrer"
      ><h3 class="info_title">
      ${story.title}
      </h3>
    </a>
  
    <p class="info_description">
    ${story.description}
    </p>
  </div>
  </div>`,
    ""
  );
};

const init = async () => {
  const news = await getNews();
  totalPage = Math.ceil(news.totalResults / pageSize);
  createCardsNews(news.articles);
};

const checkBtnNext = () => {
  if (page === totalPage) {
    btnNext.classList.add("btn--disabled");
  } else {
    btnNext.classList.remove("btn--disabled");
  }
};

const checkBtnPrevious = () => {
  if (page === 1) {
    btnPrevious.classList.add("btn--disabled");
  } else {
    btnPrevious.classList.remove("btn--disabled");
  }
};

const updateNews = async () => {
  const news = await getNews();
  createCardsNews(news.articles);
  checkBtnNext();
  checkBtnPrevious();
};

btnNext.addEventListener("click", () => {
  if (page === totalPage) return;
  page++;
  updateNews();
});

btnPrevious.addEventListener("click", () => {
  if (page === 1) return;
  page--;
  updateNews();
});

init();
