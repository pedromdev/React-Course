var React = require('react');

var NavbarNav = React.createClass({
    render: function() {
        var className = "";

        if (typeof this.props.className != "undefined") {
            className = " " + this.props.className;
        }
        return (
            <ul className={"nav navbar-nav" + className}>
                {this.props.children}
            </ul>
        )
    }
});

module.exports = NavbarNav;
