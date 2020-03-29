/**
 * File Server
 * 
 * Read, Create, Update, Delete, Rename files
 */

 let http = require('http');
 let fs = require('fs');

http.createServer((req, res)=>{

    /** 
     * Read file
     * 
     * readFile
     */
    fs.readFile('../index.html', (err, data)=>{
        res.writeHead(200, {'Content-Type' : 'text/html'});

        res.write(data);

        res.end();
    })

    /** 
     *  Create Files
     *
     *  appendFile
     *  open
     *  writeFile
     */
    fs.appendFile(
        '../mynewfile1.txt', 
        'Generated content!', 
        (err)=>{
            if(err) throw err;
            console.log('Saved');
    });

    fs.open(
        '../mynewfile2.txt', 
        'w',  
        (err, file)=>{
        if (err) throw err;
        console.log('Saved!');
    });

    // NB: replaces the specified file and content if it exists
    fs.writeFile(
        '../mynewfile3.txt', 
        'Hello Test content!', 
        (err)=>{
        if (err) throw err;
        console.log('Saved!');
    });

    
    /** Update File
     * 
     *  appendFile - appends
     *  writeFile - rewrites
     */

    fs.writeFile('../mynewfile3.txt', 'This is my text file', function (err) {
        if (err) throw err;
        console.log('Replaced!');
    });


    /**
     * Delete Files
     * 
     * unlink
     */

    fs.unlink('../mynewfile1.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
    });

    /**
     * Renaming Files
     * 
     * rename
     */
    fs.rename('../myrenamedfile.txt', '../myrenamedfile.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    });


}).listen(8080)