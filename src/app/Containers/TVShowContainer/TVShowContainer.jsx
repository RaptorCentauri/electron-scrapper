import React from "react";
import { connect } from "react-redux";
import { setTVShows, showSeasons, hideSeasons } from '../../../Redux/actions';
import { bindActionCreators } from "redux";
import TVSeasonsContainer from "../TVSeasonsContainer/TVSeasonsContainer.jsx";
const mapStatetoProps = (state) => {
    return {
        TV: state.tvReducer,
    }
}

const matchDispatchtoProps = (dispatch) => {
    return bindActionCreators({
        setTVShows, showSeasons, hideSeasons
    }, dispatch)
}


class TVShowContainer extends React.Component {
    showSeasons = () => {
        //check if season is visible
        let areSeasonsVisible = this.props.TV.visibleSeasons.includes(this.props.showID);
        console.log(areSeasonsVisible)

        //if false, add show to visible seasons
        if(!areSeasonsVisible) this.props.showSeasons(this.props.showID);

        if (areSeasonsVisible) this.props.hideSeasons(this.props.showID);
    }


    render() {
        return (
            <div className="tv-series-label-style" >
                <h3 onClick={this.showSeasons}>{this.props.name}</h3>
                {this.props.TV.visibleSeasons.map(id => id == this.props.showID ? <TVSeasonsContainer showID={this.props.showID}/> : null)}
            </div >
        )
    }
}

export default connect(mapStatetoProps, matchDispatchtoProps)(TVShowContainer);


//THIS HOLDS ONE TV SHOW, ITS CHILD ARE SEASONS