import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col } from 'react-bootstrap';

import { convertNumber, convertRoman } from '../../actions';

const style = require('../../stylesheets/HomeContent.scss');

class HomeContent extends React.Component<any, any> {

    private numberInput: HTMLInputElement;
    private romanInput: HTMLInputElement;

    constructor(props: any) {
        super(props);

        this.handleNumberConvert = this.handleNumberConvert.bind(this);
        this.handleRomanConvert = this.handleRomanConvert.bind(this);
    }

    private handleNumberConvert() {
        this.props.convertNumber(this.numberInput.value);
    }

    private handleRomanConvert() {
        this.props.convertRoman(this.romanInput.value);
    }

    public render() {
        return (
            <Grid className="main-container">
              <Row className="show-grid">
                <Col xs={4} md={4}>
                    <input placeholder="enter a number" type="text" className="row-item" ref={(input) => { this.numberInput = input; }} />
                </Col>
                <Col xs={4} md={4}>
                    <Button id="convertNumber" className="btn outline" onClick={this.handleNumberConvert}>convert &gt;</Button>
                </Col>
                <Col xs={4} md={4}>
                    <div className="row-item">{this.props.convertedToRoman}</div>
                </Col>
              </Row>
              <br/>
              <Row className="show-grid">
                <Col xs={4} md={4}>
                    <input placeholder="enter a roman numeral" type="text" className="row-item" ref={(input) => { this.romanInput = input; }} />
                </Col>
                <Col xs={4} md={4}>
                    <Button id="convertRoman" className="btn outline" onClick={this.handleRomanConvert}>convert &gt;</Button>
                </Col>
                <Col xs={4} md={4}>
                    <div className="row-item">{this.props.convertedToNumber}</div>
                </Col>
              </Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state: any) => {
    return ({
        convertedToNumber: state.convertedToNumber,
        convertedToRoman: state.convertedToRoman,
    });
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        convertNumber: (number: number) => {
            dispatch(convertNumber(number));
        },
        convertRoman: (roman: string) => {
            dispatch(convertRoman(roman));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContent);
