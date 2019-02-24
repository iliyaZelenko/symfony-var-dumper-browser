/**
 * Returns the path to the src folder regardless of where the current file in the project (look at __dirname).
 * Note: it is important that the "src" folder was at the level with the "dist" folder to search correctly.
 *
 * @param {string} srcFolder name of src folder
 * @param {string} startPath
 * @return {string} "src" folder path
 */
export declare function getSrcDir(srcFolder?: string, startPath?: string): string;
