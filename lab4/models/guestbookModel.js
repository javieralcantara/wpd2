const nedb = require("nedb");

class GuestBook {
    constructor(dbFieldPath) {
        if(dbFieldPath) {
            this.db = new nedb({fieldname: dbFieldPath, autoload: true});
            console.log("db connected to ", dbFieldPath);
        } else {
            this.db = new nedb();
            console.log("db connected in-memmory");
        }
    }

    init() {
        this.db.insert({
            subject: "I liked the exhibition",
            contents: "nice",
            publihsed: "2021-03-02",
            author: "Peter"
        });
        // minute 24.52 lab5
    }
}