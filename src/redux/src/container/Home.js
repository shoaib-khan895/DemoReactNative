import { connect } from "react-redux";
import { setFunction } from "../services/action.js";
import HomeComponent from "../component/HomeComponent.js";

const mapStateToProps = (state) => ({
    homeValue: state.home.homeData,
    userValue: state.home.userData
})

const mapDispatchToProps = (dispatch) => ({
    setFunction: (param) => dispatch(setFunction(param))
})

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)

export default Home;