import React from 'react';

const Header = ({ title }) => (<header>{title}</header>);
const Hr = () => (<hr />);

const HeaderComponent = () => (
    <div>
    <Header title="" />
    <Hr  />
    </div>
)
export default HeaderComponent;