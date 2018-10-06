import getDirectory from '../../functions/getDirectory.js';
import getFolders from '../../functions/getFolders.js';

const handleSetTVDirectoryClick = async (props) => {
    const directory = await getDirectory();
    props.setTVRootDirectory(directory);
    const series = await getFolders(directory);
    props.setTVSeries(series)

}

export default handleSetTVDirectoryClick