const nedb = require("nedb");
const { resolve } = require("path");

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
        console.log("db entry Peter inserted");
        // minute 24.52 lab5
    }

    getAllEntries() {
        return new Promise((resolve, reject) => {
            this.db.find({}, function(err, entries) {
                if(err) {
                    reject(err);
                    console.log("Promise rejected in getAllEntries");
                } else {
                    resolve(entries);
                    console.log("Promise resolved in getAllEntries", entries);
                }
                //minute 58.09 lab5
            })
        })
    }
}

module.exports = GuestBook;