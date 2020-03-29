/**
 * File Server
 * 
 * Read, Create, Update, Delete, Rename files
 */

 import { createServer } from 'http';
 import { readFile, appendFile, open, writeFile, unlink, rename } from 'fs';

createServer((req, res)=>{

    /** 
     * Read file
     * 
     * readFile
     */
    readFile('../index.html', (err, data)=>{
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
    appendFile(
        '../mynewfile1.txt', 
        'Generated content!', 
        (err)=>{
            if(err) throw err;
            console.log('Saved');
    });

    open(
        '../mynewfile2.txt', 
        'w',  
        (err, file)=>{
        if (err) throw err;
        console.log('Saved!');
    });

    // NB: replaces the specified file and content if it exists
    writeFile(
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

    writeFile('../mynewfile3.txt', 'This is my text file', function (err) {
        if (err) throw err;
        console.log('Replaced!');
    });


    /**
     * Delete Files
     * 
     * unlink
     */

    unlink('../mynewfile1.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
    });

    /**
     * Renaming Files
     * 
     * rename
     */
    rename('../myrenamedfile.txt', '../myrenamedfile.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    });


}).listen(8080)