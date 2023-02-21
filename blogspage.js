
let confettiAmount = 60,
    confettiColors = [
        '#7d32f5',
        '#f6e434',
        '#63fdf1',
        '#e672da',
        '#295dfe',
        '#6e57ff'
    ],
    random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    createConfetti = to => {
        let elem = document.createElement('i'),
            set = Math.random() < 0.5 ? -1 : 1;
        elem.style.setProperty('--x', random(-260, 260) + 'px');
        elem.style.setProperty('--y', random(-160, 160) + 'px');
        elem.style.setProperty('--r', random(0, 360) + 'deg');
        elem.style.setProperty('--s', random(.6, 1));
        elem.style.setProperty('--b', confettiColors[random(0, 5)]);
        to.appendChild(elem);
    };
var flag=0;
setTimeout(()=>{
    arr=JSON.parse(localStorage.getItem(localStorage.getItem("blog")))
    for(let i=0;i<arr.length;i++){
        if(arr[i]==localStorage.getItem("currentLoggedUser")){
            flag=1;
            console.log(flag)
    document.querySelectorAll('.paw-button').forEach(elem =>{
        let textcon = elem.children[1].textContent;
        elem.classList.add('animation');
                for(let i = 0; i < confettiAmount; i++) {
                    createConfetti(elem);
                }
                setTimeout(() => {
                    elem.classList.add('confetti');
                    setTimeout(() => {
                        elem.classList.add('liked');
                        elem.children[1].textContent = parseInt(textcon);
                    }, 400);
                    setTimeout(() => {
                        elem.querySelectorAll('i').forEach(i => i.remove());
                    }, 600);
                }, 260);
    })
        }
    }
},60)

document.querySelectorAll('.paw-button').forEach(elem => {
    elem.addEventListener('click', e => {
        let number = elem.children[1].textContent;
        blogname=localStorage.getItem("blog")
        data1={
            num:parseInt(number),
            blogimg:blogname
        }
        data1=JSON.stringify(data1)
        var url = 'http://127.0.0.1:3007/blogs/updates';
     $.ajaxSetup({ 
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
     }
     });
     $.post(url,data1,function(xhr,status,responseText){
        console.log(responseText.responseText)
     });
        prolikes=localStorage.getItem(localStorage.getItem("blog"))
        if (prolikes)
        {
            logins=JSON.parse(localStorage.getItem(localStorage.getItem("blog")))
            logins[logins.length]=localStorage.getItem("currentLoggedUser")
            localStorage.setItem(localStorage.getItem("blog"),JSON.stringify(logins))
        }
        else{
        localStorage.setItem(localStorage.getItem("blog"),[])
        logins=["plikitha.liki@gmail.com","reddylikitha201@gmail.com"]
        logins[logins.length]=localStorage.getItem("currentLoggedUser")
        localStorage.setItem(localStorage.getItem("blog"),JSON.stringify(logins))
        }
        if (localStorage.getItem(localStorage.getItem("currentLoggedUser")))
        {
            
            login=JSON.parse(localStorage.getItem(localStorage.getItem("currentLoggedUser")))
            login[login.length]=localStorage.getItem("blog")
            localStorage.setItem(localStorage.getItem("currentLoggedUser"),JSON.stringify(login))
        }
        else{
        localStorage.setItem(localStorage.getItem("currentLoggedUser"),[]);
        login=["images","image"]
        login[login.length]=localStorage.getItem("blog")
        localStorage.setItem(localStorage.getItem("currentLoggedUser"),JSON.stringify(login))
        }
        if(!elem.classList.contains('animation')) {
            elem.classList.add('animation');
            for(let i = 0; i < confettiAmount; i++) {
                createConfetti(elem);
            }
            setTimeout(() => {
                elem.classList.add('confetti');
                setTimeout(() => {
                    elem.classList.add('liked');
                    elem.children[1].textContent = parseInt(number) + 1;
                }, 400);
                setTimeout(() => {
                    elem.querySelectorAll('i').forEach(i => i.remove());
                }, 600);
            }, 260);
        } else {
            elem.classList.remove('animation', 'liked', 'confetti');
            elem.children[1].textContent = parseInt(number) - 1;
        }
        e.preventDefault();
    });
});

