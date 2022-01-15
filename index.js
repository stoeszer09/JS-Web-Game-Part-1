function newImage(srcPath, left, bottom) {
    let imageObject = document.createElement('img')
    imageObject.src = srcPath
    imageObject.style.position = 'fixed'
    imageObject.style.left = left + 'px'
    imageObject.style.bottom = bottom + 'px'
    document.body.append(imageObject)
    return imageObject
}

function newItem(srcPath, left, bottom) {
    let item = newImage(srcPath, left, bottom)
    item.addEventListener('dblclick', function(){
        item.remove()
    })
}

// Needed different positions than the newImage function
function newBackground(srcPath, top, left) {
    let imageObject = document.createElement('img')
    imageObject.src = srcPath
    imageObject.style.position = 'fixed'
    imageObject.style.top = top + 'px'
    imageObject.style.left = left + 'px'
    document.body.append(imageObject)
}

// Create the background first

let numberWide = Math.ceil(window.innerWidth/100)
let numberHigh = Math.ceil(window.innerHeight/100)
// sky on top 1/3 and grass on bottom third
let skyHeight = Math.ceil(numberHigh/3)

// first for loop is which row we are on
// second for loop is building the row

for (let i = 0; i < numberHigh; i++ ){
    for (let j = 0; j < numberWide; j++){
        if (i < skyHeight) {
            newBackground('assets/sky.png', (100 * i), (100 * j))
        } else {
            newBackground('assets/grass.png', (100 * i), (100 * j))
        }
    }
}

// Images and items load on top of the background
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)