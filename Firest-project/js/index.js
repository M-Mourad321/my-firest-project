//SIDEBAR
const menuItems =document.querySelectorAll('.menu-itme');
//Messages
const messagesNotification = document.querySelector ('#messages-notification');
const messages = document.querySelector('.messages');

//ThEME
const theme = document.querySelector('#theme');
const themeModal =document.querySelector('.customize-theme');
const fontSizes =document.querySelectorAll('.choose-size span')
var root =document.querySelector(':root');
const colorPalete = document.querySelectorAll('.choose-color span');

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display ='none';
        }else{
            document.querySelector('.notifications-popup').
            style.display ='block';
            document.querySelector('#notifications .notification-count').style.display = "none";
        }
    })
})
//==================Messages===============AGIN
messagesNotification.addEventListener('click', () => {
    messages.style.boxshadow = '0 0 1rem (--color-primary) ';
    messagesNotification.querySelector("notification-count").style.display ='none'

    setTimeout(() => {
        messages.style.boxshadow = 'none';
    },2000)

})

//Theme/display Customzation
//open modal
const openthemeModal = () => {
    themeModal.style.display = 'grid';
}
//close modal
const closethemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click', closethemeModal) 


theme.addEventListener('click', openthemeModal);



//===================Fonts===============

//remoive active class from spans or font  size selectors 
const remoiveSizeselector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}





fontSizes.forEach(size => {
   
    size.addEventListener('click',() => {
        remoiveSizeselector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('------sticky-top-left','5.4rem');
            root.style.setProperty('------sticky-top-right','5.4rem')
        }else if (size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('------sticky-top-left','5.4rem');
            root.style.setProperty('------sticky-top-right','-7rem')
        }
        else if (size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('------sticky-top-left','-2rem');
            root.style.setProperty('------sticky-top-right','-17rem')
        }else if (size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('------sticky-top-left','-5rem');
            root.style.setProperty('------sticky-top-right','-25rem')
        }else if (size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('------sticky-top-left','-12rem');
            root.style.setProperty('------sticky-top-right','-35rem')
        }
         //change font size of root html element
    document.querySelector('html').style.fontSize = fontSize
    })
   
})


//change  primary colors
colorPalete.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        if(color.classList.contains('color-1')){
            primaryHue = 252;
            
        }else if (color.classList.contains('color-2')){
            primaryHue = 52; 
        }
        else if (color.classList.contains('color-3')){
            primaryHue = 352; 
        }else if (color.classList.contains('color-4')){
            primaryHue = 152; 
        }else if (color.classList.contains('color-5')){
            primaryHue = 202; 
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})