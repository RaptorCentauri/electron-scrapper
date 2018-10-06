import update from 'immutability-helper';

const initialState = {
    tvShows: [],
    visibleSeasons: [],
    visibleEpisodes: []
}

const tvReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MAKE_SEASON_VISIBLE':
            return update(state, {visibleSeasons: { $push: [action.payload] }}); // => [1, 2, 3, 4]
          
        case 'MAKE_SEASON_HIDDEN':
            return update(state, { visibleSeasons: { $splice: [[action.payload]] } }); // => [1, 2, 3, 4]


        case 'MAKE_EPISODES_VISIBLE':
            return update(state, { visibleEpisodes: { $push: [action.payload] } }); // => [1, 2, 3, 4]

        case 'MAKE_EPISODES_HIDDEN':
            return update(state, { visibleSeasons: { $splice: [[action.payload]] } });


        case 'SETTING_TVSHOWS':
            state = { ...state, tvShows: action.payload}
            break;


        case 'TOGGLE_EPISODES_VISIBLE':
            return update(state, {
                tvShows: {
                    [action.showID]: {
                        seasons: {
                            [action.seasonID]: {
                                episodesVisible: { $set: action.payload }
                            }
                        }
                    }
                }
            });
    }

    return state
}

export default tvReducer;



