function showItem(selector){
    if(document.querySelector(selector) != undefined){
        document.querySelector('.active').classList.remove('active');
        document.querySelector(selector).classList.add('active');
    }
}