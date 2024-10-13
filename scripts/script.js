function adjustRightPanelHeight() {

    const main = document.querySelector('main');
    const nav = document.querySelector('nav');
    const rightPanel = document.querySelector('.right-panel');

    const mainHeight = main.offsetHeight;
    const navHeight = nav.offsetHeight;

    const totalHeight = mainHeight + navHeight + 35;

    rightPanel.style.height = totalHeight + 'px';
    console.log(rightPanel.style.height)
}

window.addEventListener('load', adjustRightPanelHeight);

window.addEventListener('resize', adjustRightPanelHeight);

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const nav = document.querySelector('.container');

    if (window.scrollY > 0) { 
        header.style.position = 'sticky';
        header.style.top = '0';
        header.style.width = '100%';
        header.style.backgroundColor = 'rgba(34, 34, 34, 0.7)'; 
        header.style.zIndex = '1000'; 

        nav.style.width = '100%';
        nav.style.backgroundColor = 'rgba(34, 34, 34, 0.1)'; 
    }else{
        header.style.backgroundColor = 'rgba(34, 34, 34, 0)'; 
        nav.style.backgroundColor = 'rgba(34, 34, 34, 0)'; 
    }
});