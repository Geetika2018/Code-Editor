
// Function to copy the content of a specific textarea to the clipboard
function copyToClipboard(textareaId) {
    const textarea = document.getElementById(textareaId);
    const contentToCopy = textarea.value;

    const tempInput = document.createElement("textarea");
    tempInput.value = contentToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert(`Code copied for ${textareaId}`);
}

//Fucntion for saving all the code in textarea.
function saveAllCode() {
    alert("Code saved for HTML, CSS, and JavaScript");
}

// Event listeners for the "Copy" buttons
const copyButtons = document.querySelectorAll(".copy-button");
copyButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const textareaId = button.getAttribute("data-textarea");
        copyToClipboard(textareaId);
    });
});

document.getElementById("save-button").addEventListener("click", function() {
    saveAllCode();
});

// Creating and importing the Id's from the HTML document for each and every lock button.
const htmlLockButton = document.getElementById("html-lock-button");
const htmlTextarea = document.getElementById("htmlCode");

const cssLockButton = document.getElementById("css-lock-button");
const cssTextarea = document.getElementById("cssCode");

const jsLockButton = document.getElementById("js-lock-button");
const jsTextarea = document.getElementById("javascriptCode");

// Function to toggle the lock state of a textarea and update button text
function toggleLock(button, textarea) {
  if (textarea.readOnly) {
    // If the textarea is already locked, unlock it
    textarea.readOnly = false;
    textarea.placeholder = `Type ${textarea.id} code here`;
    button.textContent = "Lock";
  } else {
    // If the textarea is not locked, lock it
    textarea.readOnly = true;
    textarea.placeholder = `Textarea is locked (${textarea.id})`;
    button.textContent = "Unlock";
  }
}

// Add click event listeners to all lock buttons
htmlLockButton.addEventListener("click", function () {
  toggleLock(htmlLockButton, htmlTextarea);
});

cssLockButton.addEventListener("click", function () {
  toggleLock(cssLockButton, cssTextarea);
});

jsLockButton.addEventListener("click", function () {
  toggleLock(jsLockButton, jsTextarea);
});


// Code for the result we get in the output box.
function update(i) {
    if(i==0){
    let htmlCode=document.getElementById("htmlCode").value;
    let cssCode=document.getElementById("cssCode").value;
    let javascriptCode=document.getElementById("javascriptCode").value;
    let text=htmlCode+"<style>"+cssCode+"</style>"+"<scri"+"pt>"+javascriptCode+"</scri"+"pt>";
    let iframe=document.getElementById('viewer').contentWindow.document;
    iframe.open();
    iframe.write(text);
    iframe.close();
    }

    else if(i==1){

        let htmlCode=document.getElementById("htmlCode").value;
        let html=htmlCode.slice(0,htmlCode.length);
        document.getElementById("htmlCode").value=html;
        j=1;

    }
}