let error = "It seems you forget to specify argument!"
const fs = require("fs")
function solution1(){
    let arguments = []
    for (let i = 2; i < process.argv.length; i++) {
        let words = process.argv[i].split('-')
        let word = words.filter(Boolean)
        for (let x = 0; x < word.length; x++){
            if (word[x].includes("=")){
                let w = word[x].split("=")
                if (w[1] !== ""){
                    arguments.push(w[0] + ": " + w[1])
                }
            }

            if (!word[x].includes("=")) {
                arguments.push(word[x] + ":" + " true")
            }
            if (word[x].endsWith("=")) {
                arguments.push(error);
            }
            }
        }
    return arguments
    }
// let arr_length = solution1()
// if (!arr_length.includes(error)){
//     for (let y = 0; y < arr_length.length; y++){
//         console.log(arr_length[y])
//     }
// }else {
//     console.log(error)
// }
function solution2(){
    for (let i = 2; i < process.argv.length; i++) {
        let words = process.argv[i].split('-')
        let word = words.filter(Boolean)
        for (let x = 0; x < word.length; x++){
            if (word[x].startsWith("exist")){
                let w = word[x].split("=")
                readFile(w[1], {encoding: 'utf-8'})
                    .then(data => console.log("The file " + w[1] + " exists!"))
                    .catch(err => console.log("The file " + w[1] + " doesn't exists!"));
            }
            if (word[x].startsWith("create")){
                let w = word[x].split("=")
                if (w[1].includes("/")){
                    mkdir(w[1], {recursive: true})
                        .then(data => console.log("The folders " + w[1] + " were created!"))
                        .catch(err => console.log(err));
                }else {
                    mkdir(w[1])
                        .then(data => console.log("The folder " + w[1] + " was created!"))
                        .catch(err => console.log(err));
                }
            }
            if (word[x].startsWith("remove")){
                let w = word[x].split("=")
                let y = w[1].split("/", )
                if (w[1].includes("/")){
                    rmdir(w[1], {recursive: true})
                        .then(data => console.log("The folder " + y[0] + " in " + y[1] +" folder was deleted!"))
                        .catch(err => console.log("This " + w[1] + " folder doesn't exist!"));
                }else {
                    rmdir(w[1])
                        .then(data => console.log("The folder " + w[1] + " was deleted!"))
                        .catch(err => console.log("This " + w[1] + " folder doesn't exist!"));
                }
            }
        }
    }
}


function solution3(){
    for (let i = 2; i < process.argv.length; i++) {
        let words = process.argv[i].split('-')
        let arguments = process.argv[i];
        let word = words.filter(Boolean)
        for (let x = 0; x < word.length; x++){
            if (word[x].startsWith("isFolder")){
                let w = word[x].split("=")
                let path = process.cwd() + "/" + w[1];
                if (fs.existsSync(path)){
                    if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()){
                        console.log("The " + w[1] + " is a folder!")
                    }else {
                        console.log("The " + w[1] + " is not a folder!")
                    }
                } else {
                    console.log("It seems that some specified files don't exist!")
                }

            }
            if (word[x].startsWith("size")){
                let w = word[x].split("=")
                let  totalSize = 0
                let files = arguments.split('=')[1].split('-');
                for (let x = 0; x < files.length; x++){
                    let path = process.cwd() + "/" + files[x];
                    if (fs.existsSync(path)){
                        const stats = fs.statSync(path);
                        const fileSizeInBytes = stats.size;
                        totalSize += fileSizeInBytes;
                    }else {
                        console.log("It seems that some specified files don't exist!")
                        break;
                    }
                }
                console.log("The size of the specified files is " + totalSize + " kilobytes");
            }
            if (word[x].startsWith("content")){
                let w = word[x].split("=")
                let path = process.cwd();
                if (fs.existsSync(path)){
                    let content = fs.readdirSync(path)
                    for (let x = 0; x < content.length; x++){
                        console.log(content[x])
                    }
                }
            }
        }
    }
}

solution3()