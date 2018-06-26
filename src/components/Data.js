import React from 'react';
import {connect} from 'react-redux';
class Data extends React.Component{
    render(){
        console.log('props are',this.props.fetch_data_reducer);
        return(
            <div>
                {this.props.fetch_data_reducer.map( (user_data, index)=>{
                    return(
                        <li>{user_data[user_data.displayTags[index]]}</li>
                    )
                }
                )}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {fetch_data_reducer: state.fetch_data_reducer}
}

export default connect(mapStateToProps, null)(Data);