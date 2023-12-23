import "./excel";
import "./onenote";
import "./outlook";
import "./powerpoint";
import "./project";
import "./word";

// Assign event handlers and other initialization logic.
document.getElementById("insert-paragraph").onclick = () => tryCatch(insertParagraph);