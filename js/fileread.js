
const fs = reuire('fs');


fs.readFile('../quotes/quotes', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(err);
})
