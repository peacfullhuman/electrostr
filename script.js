const photos1 = document.getElementById('1photos')
const photos2 = document.getElementById('2photos')
const photos3 = document.getElementById('3photos')
const photos4 = document.getElementById('4photos')
const photos5 = document.getElementById('5photos')
const photos6 = document.getElementById('6photos')



let photosList = [
    ['images/1/11.png', 'images/1/12.png', 'images/1/13.png', 'images/1/14.png', 'images/1/15.webp', 'images/1/16.jpeg', 'images/1/17.jpg', 'images/1/18.webp', 'images/1/19.png'],
    ['images/2/21.jpg', 'images/2/22.jpg', 'images/2/23.jpg', 'images/2/24.jpg', 'images/2/25.jpg', 'images/2/26.webp', 'images/2/27.jpg', 'images/2/28.webp', 'images/2/29.webp'],
    ['images/3/31.jpg', 'images/3/32.jpg', 'images/3/33.jpg', 'images/3/34.jpg', 'images/3/35.jpg', 'images/3/36.webp', 'images/3/37.jpg', 'images/3/38.webp', 'images/3/39.webp'],
    ['images/4/41.webp', 'images/4/42.webp', 'images/4/43.webp', 'images/4/44.jpg', 'images/4/45.jpg', 'images/4/46.jpg', 'images/4/47.jpg', 'images/4/48.jpg', 'images/4/49.jpg'],
    ['images/5/51.png', 'images/5/52.png', 'images/5/53.png', 'images/5/54.webp', 'images/5/55.png', 'images/5/56.jpg', 'images/5/57.jpeg', 'images/5/58.png', 'images/5/59.webp'],
    ['images/6/61.png', 'images/6/62.png', 'images/6/63.webp', 'images/6/64.jpeg', 'images/6/65.webp', 'images/6/66.png', 'images/6/67.png', 'images/6/68.jpg', 'images/6/69.png']
]
let galleryList = [photos1, photos2, photos3, photos4, photos5, photos6]



for (let i = 0; i < galleryList.length; i++){

    for (let l = 0; l < photosList[i].length; l++){
        ph = document.createElement('div')
        ph.id = `photo${i+1}${l+1}`
        ph.className = 'photo'
        ph.style.backgroundImage = `url(${photosList[i][l]})`
        ph.style.backgroundPosition = 'center'
        console.log(2)
        galleryList[i].appendChild(ph)
    }
}
