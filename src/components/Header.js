import React, { Fragment } from 'react';

const Header = ({ title }) => (<header>{title}</header>);
const Hr = () => (<hr />);

const HeaderComponent = () => (
    <Fragment>
        <Header title="" />
        <Hr />
    </Fragment>
)
export default HeaderComponent;