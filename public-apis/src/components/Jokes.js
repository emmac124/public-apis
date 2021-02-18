import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions/index';

const Jokes = (props) => {
    const { joke, error, isFetching } = props;

    const handleClick = () => {
        props.getJoke();
    }

    useEffect(() => {
        props.getJoke();
      }, []);

    if(isFetching){
        <h2>Your joke is loading!</h2>
    }

    if(error){
        <h2>Error: {error} </h2>
    }

    return (
        <>
            <h4>Wanna hear a joke?</h4>
            <p>{joke}</p>
            <button onClick={handleClick}>Randomize</button>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        joke: state.joke,
        isFetching: state.isFetching,
        error: state.error
    };
}

export default connect(mapStateToProps, { getJoke } )(Jokes);