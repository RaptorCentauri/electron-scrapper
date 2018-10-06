import React from 'react';
import TVSeriesContainer from "../TVSeriesContainer/TVSeriesContainer.jsx"
import { connect } from "react-redux";
import { setTVShows } from '../../../Redux/actions/index.js';
import { bindActionCreators } from "redux";


const mapStatetoProps = (state) => {
    return {
        TV: state.tvReducer,
        visibleSeason: state.visibleSeason
    }
}

const matchDispatchtoProps = (dispatch) => {
    return bindActionCreators({
        setTVShows,
    }, dispatch)
}



class FileBrowser extends React.Component{
    render(){
        return(
            <div className='fileBrowser-styles'>
                <TVSeriesContainer />
                <button onClick={this.props.setTVShows}>Select TV Folder</button>
            </div>
        )
    }
}

export default connect(mapStatetoProps, matchDispatchtoProps)(FileBrowser);
