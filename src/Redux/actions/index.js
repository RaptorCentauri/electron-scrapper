import handleAddTVFiles from "../../UserInteractions/handleAddTVFiles";

export const setTVShows = () => {
    return dispatch => {
        handleAddTVFiles().then((files) => {
            dispatch({
                type: 'SETTING_TVSHOWS',
                payload: files
            })
        }
        )
    }
}




export const showEpisodes = (obj) => {
    return {
        type: 'MAKE_EPISODES_VISIBLE',
        payload: obj,
    }
}

export const hideEpisodes = (obj) => {
    return {
        type: 'MAKE_EPISODES_HIDDEN',
        payload: obj,
    }
}



export const showSeasons = (id) => {
    return {
        type: 'MAKE_SEASON_VISIBLE',
        payload: id,
    }
}

export const hideSeasons = (id) => {
    return {
        type: 'MAKE_SEASON_HIDDEN',
        payload: id,
    }
}




