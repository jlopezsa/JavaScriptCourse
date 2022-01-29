const fs = require('fs')

const text = "Primera línea en un archivo txt"

// This instructions are used to create the file and add a message
fs.writeFile("newfile.txt",text,err => {
    if (err) {
        console.log(err)
    }
    console.log("The file was create successfully")
});

// This instructions add a line at the end file. The file is not create again
fs.appendFile("newfile.txt","\nNueva línea de texto adicionada al final",err => {
    if (err) {
        console.log(err)
    }
    console.log("The line text was created successfully")
})