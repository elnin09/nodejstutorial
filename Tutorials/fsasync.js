const { readFile, writeFile } = require("fs");
const path = require("path");

readFile("./content/first.txt", "utf-8", (err, result) => 
{
if(err)
{
    console.log(err)
    return
}
console.log(result)
});



writeFile("./content/test.txt","Here is the result", (err) => 
{
if(err)
{
    console.log(err)
    return
}
});
