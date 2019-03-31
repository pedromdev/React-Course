var React = require('react');

var DropdownToggle = React.createClass({
    getInitialState: function() {
        return {ariaHaspopup: true, ariaExpanded: false};
    },
    render: function() {
        var ariaHaspopup = this.state.ariaHaspopup ? "true" : "false";
        var ariaExpanded = this.state.ariaExpanded ? "true" : "false";
        console.log(this.props.children);
        return (
            <a href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup={ariaHaspopup}
                aria-expanded={ariaExpanded}>
                {this.props.children}
            </a>
        );
    }
});

module.exports = DropdownToggle;
