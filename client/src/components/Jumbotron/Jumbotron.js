// Import React
import React from 'react';

// Import the Jumbotron UI component from the reactstrap framework.
import { Jumbotron } from 'reactstrap';

// Import Jumbotron style sheet.
import './Jumbotron.css';

// Jumbotron component
const NYTJumbotron = (props) => {
    return (
        <div className="header">
            <Jumbotron className=" jumbotron">
                <h1 className="display-3">React</h1>
            </Jumbotron>
        </div>
    );
};

// Export Jumbotron component.
export default NYTJumbotron;

