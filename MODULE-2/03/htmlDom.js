
function updateText() {
    const element = document.getElementById("myElement")
    element.innerHTML = "<p>This is a new paragraph</p>"
}

function newElement(){
    const newH2 = document.createElement('h2');
    newH2.innerText = "Ini adalah element baru"

    const parentElement = document.getElementById('konten1')
    // parentElement.appendChild(newH2)

    const siblingElement = document.getElementById('desc1')
    parentElement.insertBefore(newH2, siblingElement)
}

function removeElement(){
    const element = document.getElementById('h2')
    const parent = element.parentNode;
    parent.removeChild(element)
}
