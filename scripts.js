let output = document.getElementById('output');

let buttons = document.getElementsByClassName('tool--btn');

for(let btn of buttons){
    btn.addEventListener('click', () => {
        let cmd = btn.dataset['command'];

        if(cmd === 'createlink'){
            let url = prompt("Enter the link here: ", "http:\/\/");
            document.execCommand(cmd, false, url);
        }else{
            document.execCommand(cmd, false, null);
        }
    });
}

var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function(){
    if(this.checked){
        trans()
        document.documentElement.setAttribute('data-theme', 'dark');
    }else{
        trans()
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}