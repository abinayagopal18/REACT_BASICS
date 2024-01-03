
import { connect } from "react-redux";
import { incrementAsync } from "./action";
import React from "react";

const CounterComponent = ({ counter, incrementAsync }) => {
    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={incrementAsync}>INCREMENT</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
};

export default connect(mapStateToProps, { incrementAsync })(CounterComponent);
