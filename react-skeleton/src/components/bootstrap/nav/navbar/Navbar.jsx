var React = require('react');
var NavbarHeader = require('./NavbarHeader.jsx');

var Navbar = React.createClass({
    render: function() {
        return (
            <div className={"navbar " + this.props.className}>
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Navbar;
