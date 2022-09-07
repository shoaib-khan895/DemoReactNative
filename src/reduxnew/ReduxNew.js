
import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    Text
} from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux'

const store = createStore(reducer)

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return { counter: state.counter + 1 }
        case 'DECREASE_COUNTER':
            return { counter: state.counter - 1 }
    }
    return state
}

const initialState = {
    counter: 0
}

class ReduxNew extends Component {

    incrementCounter = () => { this.setState({ counter: this.state.counter + 1 }) }
    decrementCounter = () => { this.setState({ counter: this.state.counter - 1 }) }

    render() {
        return (
            <Provider store={store}>
                <View styles={styles.container}>
                    <Button
                        title="increment"
                        onPress={() => this.props.incrementCounter()}
                    />
                    <Text>{this.state.counter}</Text>
                    <Button
                        title="decrement"
                        onPress={() => this.props.decrementCounter()}
                    />
                </View>
            </Provider>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}
function mapDispatchToProps(dispatch) {
    return {
        incrementCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decrementCounter: () => dispatch({ type: 'DECREASE_COUNTER' })

    }
}
export default connect(mapStateToProps)(mapDispatchToProps)(ReduxNew);