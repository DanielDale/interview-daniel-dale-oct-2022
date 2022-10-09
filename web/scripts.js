let generatedLink = '';

function reset() {
    generatedLink = ''

    const generateDiv = document.getElementById('genStep1')
    const generateCompleteDiv = document.getElementById('genStep2');
    const generatedLinkVal = document.getElementById('generatedLink');

    generatedLinkVal.textContent = ''
    generateDiv.style.display = 'block';
    generateCompleteDiv.style.display = 'none';

}

function genLinkCopy() {
    navigator.clipboard.writeText(generatedLink).catch((err) => {
        alert('Failed to copy url')
    })
}
document.addEventListener("DOMContentLoaded", function () {
    

  const createUrlButton = document.getElementById("createUrlButton");
//  const linksDiv = document.getElementById("links");
//  fetch("/getAllLinks", {
//    methods: "GET",
//    headers: { "Content-Type": "application/json" },
//  }).then(async (results) => {
//    const resData = await results.json();
//    for (let urlObj of resData) {
//      createBtnByUrl(urlObj);
//    }
//  });

  createUrlButton.onclick = () => {
    const urlText = document.getElementById("urlInput").value;
    fetch(`/createLink?url=${urlText}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
        res.json().then((result) => {
            console.log(result)
            onUrlGenerate(result);
        })
    }).catch((error) => {
        console.error(error);
    })
  };
  // Your code goes here

  const onUrlGenerate = (result) => {
    generatedLink = `${window.location.href}${result.id}`;

    const generateDiv = document.getElementById('genStep1')
    const generateCompleteDiv = document.getElementById('genStep2');
    const generatedLinkVal = document.getElementById('generatedLink');

    generateDiv.style.display = 'none';
    generateCompleteDiv.style.display = 'block';
    generatedLinkVal.textContent = generatedLink
    generatedLinkVal.href = generatedLink
    generatedLinkVal.target="_blank"

  }

  const createBtnByUrl = (obj) => {
    let testBtn = document.createElement("button");
    linksDiv.appendChild(testBtn);
    testBtn.textContent = obj.id;
    testBtn.onclick = () => {
      window.location = obj.redirect;
    };
  };
});
