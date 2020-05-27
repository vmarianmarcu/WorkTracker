import React, { Fragment } from 'react';

const Footer = ({ title }) => (<footer>{title}</footer>);

const FooterComponent = () => (
    <Fragment>
        <Footer title="&copy; 2020 VMM. All Rights Reserved." />
    </Fragment>
)
export default FooterComponent;