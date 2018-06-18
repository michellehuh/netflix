import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment, Table } from "semantic-ui-react";
import { getMoviesInCommon } from "../../actions/test";

class MoviesInCommonPage extends React.Component {

    constructor() {
        super();
        this.createTable = this.createTable.bind(this);
    }

    componentWillMount = () => {
        const {isLoggedIn, user, getMoviesInCommon, history} = this.props;
        if (!isLoggedIn) {
            history.push("/");
            return;
        }
        getMoviesInCommon(user);
    };

    createTable = result => {
        const keys = Object.keys(result[0]);
        return (
            <div>
                <Table celled selectable inverted>
                    <Table.Header>
                        <Table.Row>
                            {keys.map((attrName) => {
                                return (<Table.HeaderCell>{attrName}</Table.HeaderCell>);
                            })}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {result.map((tuple)=>{
                            return (
                                <Table.Row>
                                    {keys.map((attrName)=>{
                                        return (<Table.Cell> {tuple[attrName]} </Table.Cell>);
                                    })}
                                </Table.Row>);})}
                    </Table.Body>
                </Table>
            </div>);
    };

    render () {
        const {result} = this.props;
        return ((result && result.length)? this.createTable(result) : (<Segment inverted color={'red'} textAlign={'center'}>No data</Segment>));
    }
}
const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
    profiles: state.auth.profiles,
    profile: state.profile.profile,
    result: state.test.result
});

MoviesInCommonPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    getMoviesInCommon: PropTypes.func.isRequired,
    setProfile: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    { getMoviesInCommon }
)(MoviesInCommonPage);