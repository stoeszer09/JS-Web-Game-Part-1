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

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)