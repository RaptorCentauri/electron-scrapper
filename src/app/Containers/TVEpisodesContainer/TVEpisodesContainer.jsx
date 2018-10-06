import React from "react";
import { connect } from "react-redux";
import { showEpisodes, hideEpisodes } from '../../../Redux/actions';
import { bindActionCreators } from "redux";
import TVSeasonsContainer from "../TVSeasonsContainer/TVSeasonsContainer.jsx";
const mapStatetoProps = (state) => {
    return {
        TV: state.tvReducer,
    }
}

const matchDispatchtoProps = (dispatch) => {
    return bindActionCreators({
        showEpisodes, hideEpisodes
    }, dispatch)
}


// function search(nameKey, myArray) {
    // for (var i = 0; i < myArray.length; i++) {
    //     if (myArray[i].name === nameKey) {
    //         return myArray[i];
    //     }
    // }
// }

class TVEpisodesContainer extends React.Component {
    showEpisodes = () => {
        // console.log({ showID: this.props.showID, seasonID: this.props.seasonID});
        
        //check if season is visible

        // let areEpisodesVisible = this.props.TV.visibleEpisodes.includes({ showID: this.props.showID, episodeID: this.props.seasonID});
        // console.log(areEpisodesVisible)

        let areEpisodesVisible;

        if (this.props.TV.visibleEpisodes.length <= 0) {
            areEpisodesVisible = false;
        }
        else{
            for (var i = 0; i < this.props.TV.visibleEpisodes.length; i++) {
                if (this.props.TV.visibleEpisodes[i].showID === this.props.showID && this.props.TV.visibleEpisodes[i].seasonID === this.props.seasonID) {
                    areEpisodesVisible = true;
                }
                else{
                    areEpisodesVisible = false;
                }
            }
        }


        // for (var i = 0; i < this.props.TV.visibleEpisodes.length; i++) {
            // if (this.props.TV.visibleEpisodes[i].showID === this.props.showID && this.props.TV.visibleEpisodes[i].seasonID === this.props.seasonID) {
                // areEpisodesVisible = true;
            // }
        // }

        console.log(areEpisodesVisible)


        //if false, add show to visible seasons
        if (!areEpisodesVisible) this.props.showEpisodes({ showID: this.props.showID, seasonID: this.props.seasonID });

        if (areEpisodesVisible) this.props.hideEpisodes({ showID: this.props.showID, seasonID: this.props.seasonID });
    }


    render() {
        return (
            <div className="tv-series-label-style" onClick={this.showEpisodes}>
                <p>=========================================</p>
                <h3>NAME : {this.props.name}</h3>
                {/* <h3>SHOW ID : {this.props.showID}</h3> */}
                {/* <h3>SEASON ID : {this.props.seasonID}</h3> */}
                <p>=========================================</p>

                {/* seasonID={this.props.TV.tvShows[this.props.showID].seasons.seasonID} */}

                {/* {this.props.TV.visibleSeasons.map(id => id == this.props.showID ? <TVSeasonsContainer showID={this.props.showID} /> : null)} */}
            </div >
        )
    }
}

export default connect(mapStatetoProps, matchDispatchtoProps)(TVEpisodesContainer);
