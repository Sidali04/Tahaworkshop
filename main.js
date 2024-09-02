let left = document.getElementById('left');
let right = document.getElementById('right');
let content_image = document.getElementById('content_image');
content_image.style.transition = '.5s';
let right_value = -331;
let atome_right = 8;
let atome_left = 2;

if (atome_right == 8) {
    left.style.display = 'none';
}
right.onclick = () => {
    console.log("right : " + atome_right + ' || ' + atome_left);
    if (atome_right > 1) {
        content_image.style.left = right_value + "px";
        right_value -= 331;
        atome_right -= 1;
        atome_left += 1;
        right.style.display = 'inline-block';
        
        if (atome_right == 1) {
            right.style.display = 'none';
        }
    }
    
    left.style.display = (atome_right < 8) ? 'inline-block' : 'none';
}
left.onclick = () => {
    console.log("left : " + atome_right + ' || ' + atome_left);
    if (atome_left > 1) {
        right_value += 331;
        content_image.style.left = right_value + "px";
        atome_right += 1;
        atome_left -= 1;
        right.style.display = 'inline-block';
        
        if (atome_right == 8) {
            left.style.display = 'none';
        }
    }
}
let header = document.querySelector('header');

let house = document.getElementById('house');
let HOME = document.getElementById('HOME');

let shop = document.getElementById('shop');
let shopping = document.getElementById('shopping');

let information = document.getElementById('information');
let clipboard = document.getElementById('clipboard');

let contact = document.getElementById('contact');

house.onclick = ()=>{
    HOME.style.display = 'inline-block';
    header.style.display = 'inline-block';
    shop.style.display = 'none';
    information.style.display = 'none';
    contact.style.top = '1240px';
}
shopping.onclick = ()=>{
    header.style.display = 'none';
    HOME.style.display = 'none';
    shop.style.display = 'inline-block';
    information.style.display = 'none';
    contact.style.top = '1240px';
}
clipboard.onclick = ()=>{
    header.style.display = 'none';
    HOME.style.display = 'none';
    shop.style.display = 'none';
    information.style.display = 'inline-block';
    contact.style.top = '700px';
}