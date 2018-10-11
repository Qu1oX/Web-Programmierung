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


    toString() {
        return this.name + " " + this.score;
    }
}

function compare(a,b) {
    return b._score-a._score;
}

class HighScores {
    constructor() {
        let highscoreJSON = localStorage.getItem("highscore");
        let newData = JSON.parse(highscoreJSON);
        this._data = [];
        if(newData != null){
            for(let i = 0; i < newData.length;i++){
                //We have to create Objects of HighScoreEntry to force the correct proto type
                this._data.push(new HighScoreEntry(newData[i]._name,newData[i]._score));
            }
        }
    }

    /**
     * Inserts a Score to the Highscore List only if it's in the top 10 ofc.
     * @param entry
     */
    insertScore(entry) {
        if (this._data == null) {
            this._data = new Array(entry);
        }
        this._data.push(entry);
        this._data.sort(compare);
        this._data = this._data.slice(0, 9);//Top 10
        //save in Local Storage
        localStorage.setItem("highscore", JSON.stringify(this._data));
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
Object.seal(instance);
//Object.freeze();

