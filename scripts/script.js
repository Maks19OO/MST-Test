// Функция для динамического изменения высоты right-panel
function adjustRightPanelHeight() {
    // Получаем элементы main и nav
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');
    const rightPanel = document.querySelector('.right-panel');
    
    // Получаем высоты элементов
    const mainHeight = main.offsetHeight;
    const navHeight = nav.offsetHeight;
    
    // Суммируем высоты main и nav
    const totalHeight = mainHeight + navHeight + 35;
    
    // Применяем высоту к .right-panel
    rightPanel.style.height = totalHeight + 'px';
    console.log(rightPanel.style.height)
}

// Вызываем функцию при загрузке страницы
window.addEventListener('load', adjustRightPanelHeight);

// Также вызываем функцию при изменении размера окна
window.addEventListener('resize', adjustRightPanelHeight);

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const nav = document.querySelector('.container');
    
    if (window.scrollY > 0) { // Если прокрутка больше 0, то добавляем нужные стили
        header.style.position = 'sticky';
        header.style.top = '0';
        header.style.width = '100%';
        header.style.backgroundColor = 'rgba(34, 34, 34, 0.7)'; // полупрозрачный фон для header
        header.style.zIndex = '1000'; // чтобы header был поверх других элементов
        
        nav.style.width = '100%';
        nav.style.backgroundColor = 'rgba(34, 34, 34, 0.1)'; // полупрозрачный фон для header
    }else{
        header.style.backgroundColor = 'rgba(34, 34, 34, 0)'; // полупрозрачный фон для header
        nav.style.backgroundColor = 'rgba(34, 34, 34, 0)'; // полупрозрачный фон для header
    }
});
