var React = require('react');
var NavbarIconBar = require('./NavbarIconBar.jsx');

var NavbarToggle = React.createClass({
    getInitialState: function() {
        return {
            collapsed: true,
            expanded: false,
        };
    },
    handleClick: function(e) {
        e.preventDefault();
        var collapsed = !this.state.collapsed;
        var expanded = !this.state.expanded;
        this.setState({
            collapsed: collapsed,
            expanded: expanded
        })
    },
    render: function () {
        var classCollapsed = this.state.collapsed? "collapsed" : "";
        var ariaExpanded = this.state.expanded? "true" : "false";
        return (
            <button type="button"
                className={"navbar-toggle " + classCollapsed}
                data-toggle="collapse"
                data-target={this.props.target}
                aria-expanded={ariaExpanded}
                onClick={this.handleClick}>
                <NavbarIconBar/>
                <NavbarIconBar/>
                <NavbarIconBar/>
            </button>
        )
    }
});

module.exports = NavbarToggle;
