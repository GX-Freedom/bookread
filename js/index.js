
var http = require("http");
var fs = require("fs");
var url = request('url');


const app = http.createServer(function (request, response) {
    var _url = request.url;
    let queryData = url.parse(_url, true).query;

    if (_url == "/") {
        _url = "/index.html";
        if (queryData === undefined) {

        }
    }

    if (_url == "/favicon.ico") {
        return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`, 'utf8', function (err, data) {


        let template = `
        loren*10

    ${data}
        `;

    });



    response.end(queryData.id);
});
app.listen(3000);
