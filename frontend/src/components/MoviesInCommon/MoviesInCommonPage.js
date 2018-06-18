import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./MoviesInCommon.css";
import { Segment, Table, Header, Button, Container, Label } from "semantic-ui-react";
import { getMoviesInCommon, getMoviesInCommonMax, getMoviesInCommonMin } from "../../actions/test";

class MoviesInCommonPage extends React.Component {

    constructor() {
        super();
        this.createTable = this.createTable.bind(this);
        // console.log(this.context.router.getCurrentRoutes());
    }

    state = {};

    componentWillMount = () => {
        const {isLoggedIn, user, getMoviesInCommon, history} = this.props;
        if (!isLoggedIn) {
            history.push("/");
            return;
        }
        getMoviesInCommon(user);
    };

    createTable = (result, agg) => {
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
        const {result, agg, user} = this.props;
        return (
            (<div>
                <Segment inverted className='MoviesInCommonContainer'>
                    <Header as='h2' inverted color='red'>
                        Movie Watch Stat
                        <Header.Subheader>List of movies all members have watched.</Header.Subheader>
                    </Header>
                </Segment>
                {(result && result.length)? this.createTable(result) : (<Segment inverted color={'red'} textAlign={'center'}>Go watch more movies!</Segment>)}
                <Segment inverted>
                    <Header as='h3' inverted>
                    <Button.Group>
                        <Button onClick={()=>this.props.getMoviesInCommonMax(user)}>Max</Button>
                        <Button.Or />
                        <Button positive onClick={()=>this.props.getMoviesInCommonMin(user)}>Min</Button>
                    </Button.Group>
                        &nbsp; of Average watch time
                    </Header>
                </Segment>
                {(agg && agg.length)? this.createTable(agg) : (<Segment inverted textAlign={'center'}>Not found</Segment>)}
            </div>)
        );
    }
}
const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
    result: state.test.result,
    agg: state.test.agg
});

MoviesInCommonPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    getMoviesInCommon: PropTypes.func.isRequired,
    getMoviesInCommonMax: PropTypes.func.isRequired,
    getMoviesInCommonMin: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    { getMoviesInCommon, getMoviesInCommonMax, getMoviesInCommonMin }
)(MoviesInCommonPage);