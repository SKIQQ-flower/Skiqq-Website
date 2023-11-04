import fs from 'fs'

export default function(event) {
    //let files = fs.readdirSync(`./public/img/${path}`)
    //console.log(files)
    //const images = ref([])
    //for (let i = 0; i < files.length; i++) {
    //    let image = `/img/${path}/${files[i]}`
    //    images.value.push(image)
    //}
    //return images
    const name = getRouterParam(event, 'name')

    return `Hello, ${name}!`
}