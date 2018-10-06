import React from "react";
import { connect } from "react-redux";
import { showEpisodes, hideEpisodes } from '../../../Redux/actions';
import { bindActionCreators } from "redux";
import TVEpisodesContainer from "../TVEpisodesContainer/TVEpisodesContainer.jsx";

const mapStatetoProps = (state) => {
    return {
        TV: state.tvReducer,
        // visibleSeasons: state.visibleSeasons
    }
}

const matchDispatchtoProps = (dispatch) => {
    return bindActionCreators({
        showEpisodes, 
        hideEpisodes
    }, dispatch)
}


class TVSeasonsContainer extends React.Component {
    render() {
        return (
            <div className="tv-series-label-style" >
                {this.props.TV.tvShows[this.props.showID].seasons.map(i => <TVEpisodesContainer showID={this.props.showID} seasonID={i.seasonID} name={i.seasonName} /> )}
            </div >
        )
    }
}

export default connect(mapStatetoProps, matchDispatchtoProps)(TVSeasonsContainer);
