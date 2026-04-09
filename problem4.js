/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if (
    fileName.includes("#") ||
    fileName.includes(".pdf") ||
    fileName.includes(".docx")
) {
    fileName = "Store";
} else {
    fileName = "Delete";
}

console.log(fileName);