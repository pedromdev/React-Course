var React = require('react');

var NavbarHeader = React.createClass({
    render: function () {
        return (
            <div className="navbar-header">
                {this.props.children}
            </div>
        );
    }
});

module.exports = NavbarHeader;
