import getDirectory from "./getDirectory";
import fs from 'fs-extra';

const getFiles = async (dir) => {
    let files = await fs.readdir(dir);
    return files;
}

export default getFiles;