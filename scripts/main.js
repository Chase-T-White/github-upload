const DETAIL_IMAGE_SELECTOR = "[data-image-role=\"target\"]";
const DETAIL_TITLE_SELECTOR = "[data-image-role=\"title\"]";
const THUMBNAIL_LINK_SELECTOR = "[data-image-role=\"trigger\"]";

function setDetails() {
    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailImage.setAttribute('src', 'images/octo1.jpg');
    detailTitle.textContent = 'How Deep Is Your Love';
}