import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {changeTVShowDir} from '../Redux/actions';
import  FileBrowser  from "./Containers/FileBrowser/fileBrowser.jsx";

let mapStatetoProps = (state) => {
    return {
        tvShowDir: state.tvShowDir
    }
}

let matchDispatchtoProps = (dispatch) => {
    return bindActionCreators({changeTVShowDir}, dispatch)
}


class App extends React.Component{
    render(){
        return(
            <div>
                {/* <h1>hello react</h1> */}
                <FileBrowser />
            </div>
        )
    }
}



export default connect(mapStatetoProps, matchDispatchtoProps)(App);
// export default App;