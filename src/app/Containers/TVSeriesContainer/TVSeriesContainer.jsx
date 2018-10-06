import React from "react";
import { connect } from "react-redux";
import { setTVShows } from '../../../Redux/actions';
import { bindActionCreators } from "redux";
import TVShowContainer from "../TVShowContainer/TVShowContainer.jsx";

const mapStatetoProps = (state) => {
    return {
        TV: state.tvReducer,
    }
}

const matchDispatchtoProps = (dispatch) => {
    return bindActionCreators({
        setTVShows,
    }, dispatch)
}


class TVSeriesContainer extends React.Component {
    render(){
        return(
            <div className = "tv-series-label-style" >
                {this.props.TV.tvShows.map(show => <TVShowContainer name={show.tvShowName} showID={show.showID}/> )}
            </div >
        )
    }
}

export default connect(mapStatetoProps, matchDispatchtoProps)(TVSeriesContainer);


//THIS HOLDS ALL TV TITLES, ITS CHILD IS A TV SHOW