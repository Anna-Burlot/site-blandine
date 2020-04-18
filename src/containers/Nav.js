// == Import : npm
import { connect } from "react-redux";

// == Import : local
import Nav from "src/components/Nav";

// Action Creators
import { changeCurrentPage } from "src/actions/nav";

const mapStateToProps = (state) => ({
  allPages: state.nav.allPages,
  currentPage: state.nav.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentPage: (page) => {
    dispatch(changeCurrentPage(page));
  },
});

// Container
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

// == Export
export default CounterContainer;
