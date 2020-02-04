
var http = require("http");
var fs = require("fs");
var url = request('url');

fs.readdir('../quotes', function (error, filelist) {
    var title = 'welcome';
    var description = "hello";
    var list = '<ul>';
    var i = 0;
    while (i < filelist.length) {
        list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        i++;
    }

});