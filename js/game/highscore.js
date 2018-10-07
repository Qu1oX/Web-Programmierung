class HighScoreEntry {
    constructor(name, score) {
        this._name = name;
        this._score = score;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get score() {
        return this._score;
    }

    set score(value) {
        this._score = value;
    }
}


class HighScores {
    constructor() {
        let highscoreJSON = localStorage.getItem("highscore");
        this._data = [];
        this._data.push(JSON.parse(highscoreJSON));
    }

    /**
     * Inserts a Score to the Highscore List only if it's in the top 10 ofc.
     * @param entry
     */
    insertScore(entry) {
        for (let i = 0; i < this._data.length && i < 10; i++) {
            if (entry.score <= this._data[i]) {
                //Is bigger then Current Score so replace it and move it down if it's not the lowest place
                this._data.splice(i, 0, entry);
            }
        }
        this._data = this._data.slice(0,9);//Top 10
        //save in Local Storage
        localStorage.setItem("highscore",JSON.stringify(this._data));
    }

    /**
     * Returns the Top 10 Scores
     * @returns {Array}
     */
    getScores() {
        return this._data;
    }
}

const instance = new HighScores();
Object.freeze(instance);

