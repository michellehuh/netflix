import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment, Form, Button, Loader, Divider, Table } from "semantic-ui-react";
import { getMostRecentMovieOfGenre } from "../../actions/test"

class MostRecentMovieOfGenre extends React.Component {

    constructor() {
        super();
        this.createTable = this.createTable.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        numOfMovies: 5,
        genre: 'comedy',
        pastNoYears: 3
    };

    onSubmit = () => this.props.getMostRecentMovieOfGenre(this.state);
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

    onChangeText = e => this.setState({ ...this.state.loginData, [e.target.name]: e.target.value });

    render() {
        const {isLoading, result} = this.props;
        const {numOfMovies, genre, pastNoYears} = this.state;
        return (
            <div>
            <Segment inverted>
                {isLoading && <Loader active/>}
                <Form submit={this.onSubmit}>
                    <Form.Group inline>
                        <Form.Field>
                            <input placeholder='number of movies'
                                   value={numOfMovies}
                                   name='numOfMovies'
                                   onChange={this.onChangeText}
                                   required
                            /></Form.Field>
                        <Form.Field>
                            <input placeholder='genre'
                                   value={genre}
                                   name='genre'
                                   onChange={this.onChangeText}
                                   required
                            /> movies
                        </Form.Field>
                        <Form.Field>released in the past&nbsp;
                            <input placeholder='past number of year'
                                   value={pastNoYears}
                                   name='pastNoYears'
                                   onChange={this.onChangeText}
                                   required
                            /> years.
                        </Form.Field>
                        <Button color={'red'} onClick={this.onSubmit}> Execute </Button>
                    </Form.Group>
                </Form>
            </Segment>
                {(result && result.length)? this.createTable(result) : (<Segment textAlign={'center'}>No data</Segment>)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.test.isLoading,
    result: state.test.result
});

MostRecentMovieOfGenre.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    result: PropTypes.object,
    getMostRecentMovieOfGenre: PropTypes.func.isRequired
};

export default connect (
    mapStateToProps,
    { getMostRecentMovieOfGenre }
)(MostRecentMovieOfGenre);