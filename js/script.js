Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#root',
        data:{
            userMessage: 'Ciao',
            imagePath: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
    }
);