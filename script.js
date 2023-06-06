function toggleMode () {
    const html = document.documentElement
    html.classList.toggle('light')

    const darkImg = document.querySelector("#Image img")

    if(html.classList.contains('light')){
        darkImg.setAttribute('src', './assets/Avatar.png')
    } else {
        darkImg.setAttribute('src', './assets/avatar-light.png')
        
    }
}