import React, {Component} from 'react';
import {Accordion,AccordionTab} from 'primereact/accordion';
import PanelMenu from './PanelMenu';


 class AccordionDemo extends Component {
    
    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h3>Accordion Multiple </h3>
                    </div>
                </div>

                <div className="content-section implementation">
                    {/* <h5>Multiple</h3> */}
                    <Accordion multiple={true}>
                        <AccordionTab header="Godfather I">
                            <PanelMenu />
                        </AccordionTab>
                        <AccordionTab header="Godfather II">
                            <PanelMenu />
                        </AccordionTab>
                        <AccordionTab header="Godfather III">
                            <PanelMenu />
                        </AccordionTab>
                    </Accordion>
                </div>

                {/* <AccordionDoc></AccordionDoc> */}
            </div>
        )
    }
}

export default AccordionDemo;