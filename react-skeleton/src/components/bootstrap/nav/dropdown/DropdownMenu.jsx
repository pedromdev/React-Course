var React = require('react');

var DropdownMenu = React.createClass({
    render: function() {
        console.log(this.props);
        return (
            <ul className="dropdown-menu">
                {this.props.children}
            </ul>
        );
    }
});

module.exports = DropdownMenu;
