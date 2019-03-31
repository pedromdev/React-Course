var React = require('react');

var NavbarBrand = React.createClass({
    render: function () {
        return (
            <a className="navbar-brand" href={this.props.href}>
                {this.props.children}
            </a>
        );
    }
});

module.exports = NavbarBrand;
