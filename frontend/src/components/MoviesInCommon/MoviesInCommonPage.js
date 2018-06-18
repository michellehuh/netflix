import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./MoviesInCommon.css";
import { Segment, Table, Header } from "semantic-ui-react";
import { getMoviesInCommon } from "../../actions/test";

class MoviesInCommonPage extends React.Component {

    constructor() {
        super();
        this.createTable = this.createTable.bind(this);
        // console.log(this.context.router.getCurrentRoutes());
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
        return (
            (<div>
                <Segment inverted className='MoviesInCommonContainer'>
                    <Header as='h3' inverted color='red'>
                        Movie Watch Stat
                        <Header.Subheader>List of movies all members have watched.</Header.Subheader>
                    </Header>
                </Segment>
                {(result && result.length)? this.createTable(result) : (<Segment inverted color={'red'} textAlign={'center'}>Go watch more movies!</Segment>)}
            </div>)
        );
    }
}
const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
    result: state.test.result
});

MoviesInCommonPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    getMoviesInCommon: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    { getMoviesInCommon }
)(MoviesInCommonPage);