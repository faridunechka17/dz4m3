const photo = document.querySelector('.container')

const json = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'data.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()
    xhr.addEventListener('load', () => {
        const reguest = JSON.parse(xhr.response)
        reguest.forEach(person => {
            const open = document.createElement('div')
            open.innerHTML = `
            <p>${person.name}</p>
            <h1>${person.age}</h1>
            <img src="${person.photo}" alt="img">
            `
            photo.append(open)
        })
    })
}
json()

const imgPhoto = new XMLHttpRequest()
imgPhoto.open('GET', 'data.json')
imgPhoto.setRequestHeader('Content-type', 'application/json')
imgPhoto.send()
imgPhoto.addEventListener('load', () => {
    const personPhoto = JSON.parse(imgPhoto.response)
    console.log(personPhoto)
})












