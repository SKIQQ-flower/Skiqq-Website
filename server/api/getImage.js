import fs from 'fs'
import path from 'path'

const folderPath = './public/img/Fursona';
const relativeFolderPath = path.relative(process.cwd(), folderPath);
    

export default defineEventHandler({
    const files = fs.readdirSync(folderPath)

    const filesPaths = files.map(
        (fileName) => `/_nuxt/${relativeFolderPath}/${fileName}`
    );

    return filesPaths;
})