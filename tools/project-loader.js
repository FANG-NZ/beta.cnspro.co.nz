import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

/**
 * define the project loader
 * @returns 
 */
export function loadProjectData(){

    const _dirPath = path.join(process.cwd(), 'projects_data')
    const _filePath = path.join(_dirPath, 'project.md')

    const _fileContent = fs.readFileSync(_filePath, 'utf8')
    const _matterResult = matter(_fileContent)

    return _matterResult.data
}