import React from 'react';
import {connect} from 'react-redux';
import {getQuote} from '../actions/index'


const Quote = (props) => {
    

    return(
        <>
        <h2>
            Quote is: <br/>
            {props.quote}
        </h2>
        <h3>
            Quoted by: <br />
            {props.firstName}
        </h3>
     
        <button onClick={() => props.getQuote()}>Get Quote</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        quote: state.quote,
        loading: state.loading,
        error: state.error,
        firstName: state.firstName
    }
}
const mapDispatchToProps = {
    getQuote
}

export default connect(mapStateToProps, mapDispatchToProps) (Quote);