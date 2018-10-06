import getDirectory from '../../functions/getDirectory.js';
import getFolders from '../../functions/getFolders.js';
import getFiles from '../../functions/getFiles.js';
import mime from 'mime';


const getMovieFiles = (dir) => {
    const filetype = mime.getType(dir);

    if(/^video/.test(filetype)) return true;
}

const handleAddTVFiles = async (props) => {
    //set an empty arry for all tv shows
    const AllTVShows = []

    //get TV Directory
    const directory = await getDirectory();

    //get shows from the directory
    const shows = await getFolders(directory);

    //loop over shows
    for (const show in shows) {
        //for each show we need a new object definded here
        //the tvShowName comes for show, for seasons we need a loop
        const newShowObject = {
            showID: parseInt(show),
            tvShowName: shows[show],
            seasons:[],
        }

        //this will get the seasons of our show
        const seasons = await getFolders(`${directory}/${shows[show]}`);

        // loop over season
        for (const season in seasons) {
            //create a new season object
            const newSeasonObject = {
                showID: newShowObject.showID, 
                seasonID: parseInt(season),
                seasonName: seasons[season],
                episodes: [],
            }

            const files = await getFiles(`${directory}/${shows[show]}/${seasons[season]}`);

            // filter over files for movie types
            for (const file of files) {
                let isAVideo = getMovieFiles(`${directory}/${shows[show]}/${seasons[season]}/${file}`);

                if(isAVideo){
                    newSeasonObject.episodes.push(file);
                } 
            }

            newShowObject.seasons.push(newSeasonObject);
        }

        AllTVShows.push(newShowObject)
    }
    
    return AllTVShows;
    // console.log(AllTVShows);
    // props.setTVShows(AllTVShows)
}

export default handleAddTVFiles