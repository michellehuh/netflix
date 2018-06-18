import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment, Form, Button, Loader, Divider, Table, Image, Header } from "semantic-ui-react";
import { getMostRecentMovieOfGenre } from "../../actions/test"
import "./MostRecentMovieOfGenre.css";

class MostRecentMovieOfGenre extends React.Component {

    constructor() {
        super();
        this.createTable = this.createTable.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        numOfMovies: 5,
        genre: 'action',
        pastNoYears: 3,
        isLoading: false
    };

    onSubmit = () => {
        this.setState({isLoading: true});
        this.props.getMostRecentMovieOfGenre(this.state).then(()=> {
            this.setState({isLoading: false});
        })
    }

    createTable = result => {
        const keys = Object.keys(result[0]);
        return (
            <div>
                <Table celled selectable inverted>
                    <Table.Header>
                        <Table.Row>
                            {keys.map((attrName) => {
                                if (attrName === 'timeIn') return;
                                return (<Table.HeaderCell>{attrName}</Table.HeaderCell>);
                            })}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {result.map((tuple)=>{
                            return (
                                <Table.Row>
                                    {keys.map((attrName)=>{
                                        if (attrName === 'timeIn') return;
                                        return (<Table.Cell> { (attrName === 'thumbnail')?  <Image size='tiny' src={tuple[attrName]} />:tuple[attrName] } </Table.Cell>);
                                    })}
                                </Table.Row>);})}
                    </Table.Body>
                </Table>
            </div>);
    };

    onChangeText = e => this.setState({ ...this.state.loginData, [e.target.name]: e.target.value });

    render() {
        const {result} = this.props;
        const {isLoading, numOfMovies, genre, pastNoYears} = this.state;
        return (
            <div>
                {isLoading && <Loader active/>}
            <Segment inverted className="MostRecentMovieOfGenreContainer">
                    <Header as='h2' inverted color='red'>
                        Movie Watch Stat
                        <Header.Subheader>Search most watched movies by genre and release year.</Header.Subheader>
                    </Header>
                <Divider/>
                <Form submit={this.onSubmit}>
                    <Form.Group inline>
                        <Form.Field>Top&nbsp;
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
                        <Button class="execute-button" color={'red'} onClick={this.onSubmit}> Execute </Button>
                    </Form.Group>
                </Form>
            </Segment>
                {(result && result.length)? this.createTable(result) : (<Segment textAlign={'center'} color={'red'} inverted>No data</Segment>)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    result: state.test.result
});

MostRecentMovieOfGenre.propTypes = {
    result: PropTypes.object,
    getMostRecentMovieOfGenre: PropTypes.func.isRequired
};

export default connect (
    mapStateToProps,
    { getMostRecentMovieOfGenre }
)(MostRecentMovieOfGenre);