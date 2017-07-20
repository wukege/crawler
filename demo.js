const fs = require('fs');
// const list = require('./list.js');

// fs.readFile('films.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         let movies = data.toString().split('\n');

//         for (let i = 0; i < movies.length; i++) {
//             list.append(movies[i].trim());
//         }


//         function displayList(list) {
//             for (list.front(); list.currPos() < list.length(); list.next()) {
//                  console.log(list.getElement());
//             }
//         }
//         // displayList(list)
//         console.log(list)
//     }
// });


const readFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

async function read() {
    let f1 = await readFile('./films.txt')
    let f2 = await readFile('./list.js')
    console.log(f1.toString())
    console.log(f2.toString())
}

read() 