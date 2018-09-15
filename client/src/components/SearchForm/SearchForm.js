// Import React
import React from "react";

// Import styling for article search form.
import "./SearchForm.css";

// Import UI components from reactstrap framework.
import { Card, Button, CardHeader, CardBody, Form, FormGroup, Label, Input, } from 'reactstrap';

// Search form component.
const SearchForm = (props) => {
  return (
    <div>
      <Card className="search-form" id="search-form">
        <CardHeader>
            <h2 className="card-header">Insert Your Search Keyword, Start Year, And End Year Below!</h2>
        </CardHeader>
        <CardBody>
            <Form>
                <FormGroup>
                    <Label for="topic" className="form-label">Example, "Pokemon"</Label>
                    <Input
                        value={props.query}
                        onChange={props.handleTopicChange}
                        type="text" 
                        name="topic" 
                        id="articleTopic" 
                        placeholder="Pokemon" />
                </FormGroup>

                <FormGroup>
                    <Label for="startYear" className="form-label">Start Year (YYYY)</Label>
                    <Input 
                        value={props.begin}
                        onChange={props.handleStartYearChange}
                        type="text" 
                        name="startYear" 
                        id="startYear" 
                        placeholder="YYYY" />
                </FormGroup>

                <FormGroup>
                    <Label for="endYear" className="form-label">End Year (YYYY)</Label>
                    <Input 
                        value={props.end}
                        onChange={props.handleEndYearChange}
                        type="text" 
                        name="endYear" 
                        id="endYear" 
                        placeholder="YYYY" />
                </FormGroup>

                <Button
                    type="submit"
                    onClick={props.handleFormSubmit}
                    className="btn search-btn"
                    size="lg"
                >
                    Search It!!!
                </Button>
            </Form>

        </CardBody>
      </Card>
    </div>
  );
};

// export search form.
export default SearchForm;