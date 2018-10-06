import { shell, remote, dialog} from "electron";
import os from "os";
import fs from 'fs-extra';

const getDirectory = async () => {
    let directory = await remote.dialog.showOpenDialog({properties: ['openDirectory'], message: "Please Select Your Movies Directory"});
    directory = directory[0];

    //return this is save it elsewhere. we will need the path for future use.
    return directory;

}

export default getDirectory