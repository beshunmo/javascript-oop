class Movie {
    constructor(title, year) {
        this._title = title;
        this._year = year;
    }

    get title() {
        return this.title + ' (' + this.year + ')';
    }
}

class MovieRepository {
    constructor() {
        this.db = DataBase.connect('user:pw@mydb', ['movies']);
    }

    save(movie) {
        this.db.movies.save(JSON.stringify(movie));
    }
}

const movie = new Movie();
const movieRepository = new MovieRepository();

movieRepository.save(movie);



class OrderSender {
    send(url, method, body) {
        const request = this.createRequest();
        
        xhr.open(method, url);
        xhr.send(JSON.stringify(order));
    }

    createRequest(headers) {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                handleResponse(response);
            }
        };

        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        return request;
    }
}