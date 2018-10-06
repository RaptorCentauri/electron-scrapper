import getDirectory from "./getDirectory";
import fs from 'fs-extra';

const getFolders = async (dir) => {
    let items = await fs.readdir(dir);
    
    let folders = [];
    
    for (const item of items) {
        let stats = await fs.stat(`${dir}/${item}`);

        if (stats.isDirectory()) folders.push(item) 
    }

    return folders;
}

export default getFolders;