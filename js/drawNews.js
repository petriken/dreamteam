class DrawNews{
    makeNewsBlock(data){
        const fragment = document.createDocumentFragment();
        const newsItem = document.querySelector(".result-temp").content;
        console.log(document.querySelector(".result-temp"));
        data.forEach((item) => {
            const block = newsItem.cloneNode(true);
            const header = block.querySelector(".heading");
            const content = block.querySelector(".paragraph");

            header.innerHTML = item.title;
            content.innerHTML = item.description;

            fragment.appendChild(block);
        });

        const newsBlock = document.querySelector(".news-block");
        newsBlock.appendChild(fragment);
    }   
}