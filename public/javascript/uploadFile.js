const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadButton');

uploadBtn.addEventListener('click', uploadFile);

function uploadFile() {
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    // fetch() will send a request to an API endpoint, the function will receive a Promise object if the request is successful
    fetch('/images', {
        method: 'POST', 
        body: formData
    })
    // if the Promise object is received, it's passed on to subsequent functions (i.e. what's below)
    .then((response) => {
        // takes the Promise object and converts it to a text stream (i.e. HTML usable)
        return response.text();
    })
    // the return value of response.text() is passed on to this second then() function
    .then(html => {
        document.body.innerHTML = html;
    })
    .catch(error => {
        console.error(error);
    });
}