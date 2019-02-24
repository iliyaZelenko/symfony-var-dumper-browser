import { normalize, basename, join } from 'path'
import * as fs from 'fs'

/**
 * Returns the path to the src folder regardless of where the current file in the project (look at __dirname).
 * Note: it is important that the "src" folder was at the level with the "dist" folder to search correctly.
 *
 * @param {string} srcFolder name of src folder
 * @param {string} startPath
 * @return {string} "src" folder path
 */
export function getSrcDir (srcFolder: string = 'src', startPath: string = __dirname): string {
  const parentPath = normalize(startPath + '/..')

  if (startPath === parentPath) {
    throw Error('Could not find folder.')
  }

  // если папка этого путя совпадает с srcFolder
  if (basename(startPath) === srcFolder) {
    return startPath
  }
  // если этот путь содержит srcFolder (для оптимизации можно написать еще проверку для parentPath в отдельном if)
  if (fs.existsSync(join(startPath, srcFolder))) {
    return join(startPath, srcFolder)
  }

  return getSrcDir(srcFolder, parentPath)
}
