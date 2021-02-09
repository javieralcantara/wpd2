const nedb = require('nedb');

const db = new nedb({
    filename: 'students.db',
    autoload: true
});

/* db.find({"modules.grade": 70, "programme": "Computing"}, function(err, docs) {
    if (err) {
        console.log('error ', err);
    } else {
        console.log('documents retrieved', docs);
    }
}); */

/* db.insert({
    student: 'Ann',
    age: 21,
    programme: 'Networking',
    grant: true,
    modules: [
        {
            name: 'Routing',
            grade: 70
        },
        {
            name: 'Security',
            grade: 61
        },
        {
            name: 'Server management',
            grade: 62
        }
    ]
}, function(err, newDoc) {
    if (err) {
        console.log('error', err);
    } else {
        console.log('document inserted', newDoc);
    }
    
}); */

db.update({student: 'Ann', 'modules.name': 'Routing'}, {$set: {'modules.grade': 80}}, {}, function(err, numUp) {
    if (err) {
        console.log('error updating documents', err);
    } else {
        console.log(numUp, 'document(s) updated');
    }
});

/* db.remove({student: 'Peter'}, {}, function(err, docsRem) {
    if (err) {
        console.log('error deleting document Peter');
    } else {
        console.log(docsRem, 'document(s) removed from the database');
    }
}); */