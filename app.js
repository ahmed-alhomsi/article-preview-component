// const link = document.querySelector('.share-link');

// const shareDiv = `<ul>
// <li>SHARE</li>
// <li>Facebook</li>
// <li>Twitter</li>
// <li>Pinterest</svg></li>
// </ul>`;

// link.addEventListener('click', ()=>{
//     if(link.className = 'share-link'){
//         link.className = 'share-link clicked';
//         link.insertAdjacentElement(shareDiv, link);
//     } else {
//         link.className = 'share-link';
//         link.parentElement.getElementsByClassName('share-div').remove();
//     }
// });



const arrow = document.querySelector('.share-link');
const links = document.querySelector('.share-links');

arrow.addEventListener('click', ()=>{
    if(links.classList.contains('hide')){
        links.classList.remove('hide');
    } else {
        links.classList.add('hide');
    }
})