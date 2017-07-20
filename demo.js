const fs = require('fs');
const list = require('./list.js');

fs.readFile('films.txt', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        let movies = data.toString().split('\n');

        for (let i = 0; i < movies.length; i++) {
            list.append(movies[i].trim());
        }
         
          
        function displayList(list) {
            for (list.front(); list.currPos() < list.length(); list.next()) {
                 console.log(list.getElement());
            }
        }
        // displayList(list)
        console.log(list)
    }
});
