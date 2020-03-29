import { createServer } from 'http';
import fs from 'fs';
import {IncomingForm} from 'formidable';


createServer(function (req, res) {
    if (req.url == '/fileupload') {
        let form = new IncomingForm();

        form.parse(req, function (err, fields, files) {
            let oldpath = files.filetoupload.path;

            let newpath = '/Users/molukaka/Projects/www/node/' + files.filetoupload.name;

            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });

            process.exit()
        });
      } else {

        res.writeHead(200, {'Content-Type': 'text/html'});
        
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');

        res.write('<input type="file" name="filetoupload"><br>');

        res.write('<input type="submit">');

        res.write('</form>');
        
        return res.end();
    }
}).listen(8080);