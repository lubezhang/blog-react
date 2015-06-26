var React = require('react');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var Main = React.createClass({

    render: function() {
        return (
            <div className="row">
                <div className="col-md-10">
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
                            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                        </Row>
                    </Grid>
                </div>
                <div className="col-md-2">loginWin</div>
            </div>
        );
    }

});

module.exports = Main;