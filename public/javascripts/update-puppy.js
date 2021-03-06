let $mainPictureDiv = document.querySelector(".main-picture-div");
let $deleteMainPictureBtn = document.querySelector("#delete-main-picture-btn");
let $mainPictureToRemove = $mainPictureDiv.querySelector(".main-picture");
$deleteMainPictureBtn.addEventListener("click", e => {
    e.preventDefault();
    let $newMainPicture = document.createElement("input");
    $newMainPicture.setAttribute("type", "file");
    $newMainPicture.setAttribute("id", "main-picture");
    $newMainPicture.setAttribute("name", "pictures");
    $mainPictureDiv.insertBefore($newMainPicture, $deleteMainPictureBtn);
    $mainPictureDiv.removeChild($mainPictureToRemove);
    $mainPictureDiv.removeChild($deleteMainPictureBtn);
})