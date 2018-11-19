class newsAPILoader{
    constructor(){
        this.endpoint = "top-headlines";
        this.apiKey = "055de6dca64c434f9791078b50fa8782";
        this.url = "https://newsapi.org/v2/";
        this.country = "us";
    }

    makeUrl(){
        let url = `${this.url + this.endpoint}?apiKey=${this.apiKey}&country=${this.country}`;
        return url;
    }

    getResponse(callback){
        fetch(this.makeUrl())
        .then(res => res.json())
        .then(data => callback(data.articles))
        .catch(err => console.error(err));
    }
}

