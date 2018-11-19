const newsAPI = new newsAPILoader();
const drawNews = new DrawNews();

document.querySelector(".btn").addEventListener("click", () => {
    newsAPI.getResponse(drawNews.makeNewsBlock);
})