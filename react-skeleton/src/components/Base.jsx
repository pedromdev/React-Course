var React = require('react');
var Caret = require('./bootstrap/misc/Caret.jsx');
var NavLink = require('./bootstrap/nav/NavLink.jsx');
var Navbar = require('./bootstrap/nav/navbar/Navbar.jsx');
var NavbarHeader = require('./bootstrap/nav/navbar/NavbarHeader.jsx');
var NavbarBrand = require('./bootstrap/nav/navbar/NavbarBrand.jsx');
var NavbarToggle = require('./bootstrap/nav/navbar/NavbarToggle.jsx');
var NavbarNav = require('./bootstrap/nav/navbar/NavbarNav.jsx');
var DropdownSeparator = require('./bootstrap/nav/dropdown/DropdownSeparator.jsx');
var DropdownToggle = require('./bootstrap/nav/dropdown/DropdownToggle.jsx');

var Base = React.createClass({
    render: function() {
        return (
            <div>
                <Navbar className="navbar-default">
                    <NavbarHeader>
                        <NavbarToggle target="#menu"/>
                        <NavbarBrand href="#">CommonJS</NavbarBrand>
                    </NavbarHeader>
                    <div className="collapse navbar-collapse" id="menu">
                        <NavbarNav>
                            <NavLink href="#" text="Home"/>
                            <DropdownToggle>
                                About
                                <Caret/>
                            </DropdownToggle>
                            <DropdownSeparator/>
                            <NavLink href="#" text="Contact Us"/>
                        </NavbarNav>
                    </div>
                </Navbar>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Base;
