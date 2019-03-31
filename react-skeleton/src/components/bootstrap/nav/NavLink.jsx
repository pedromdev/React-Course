var React = require('react');

var NavLink = React.createClass({
    getInitialState: function() {
        return {active: false};
    },
    setActive: function(active) {
        this.setState({active: active});
    },
    isActive: function() {
        return this.state.active;
    },
    render: function() {
        var className = (typeof this.props.className == "string") ?
            this.props.className : "";
        className += (this.state.active) ? " active" : "";
        return (
            <li className={className.trim()}>
                <a href={this.props.href}>
                    {this.props.text}
                </a>
                {this.props.children}
            </li>
        )
    }
});

module.exports = NavLink;
