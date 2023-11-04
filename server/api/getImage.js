import fs from 'fs'
import { ref } from 'vue'
import path from 'path'

export default defineEventHandler((event) => {
    const query = getQuery(event)
    let absolutePath = `/img/${query.path}`
    let files = fs.readdirSync(path.resolve(process.cwd(), `./public/img/${query.path}`))
    const images = []
    for (let i = 0; i < files.length; i++) {
        let image = `${absolutePath}/${files[i]}`
        images.push(image)
    }
    return images
})
