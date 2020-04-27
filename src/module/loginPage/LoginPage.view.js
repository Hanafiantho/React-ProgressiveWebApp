import React from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import Label from "reactstrap/lib/Label";
import Button from "reactstrap/lib/Button";
import CustomInput from "reactstrap/lib/CustomInput";
import FormGroup from "reactstrap/lib/FormGroup";
import AvForm from "availity-reactstrap-validation/lib/AvForm";
import AvGroup from "availity-reactstrap-validation/lib/AvGroup";
import AvField from "availity-reactstrap-validation/lib/AvField";
import AvCheckboxGroup from "availity-reactstrap-validation/lib/AvCheckboxGroup";
import AvCheckbox from "availity-reactstrap-validation/lib/AvCheckbox";

function LoginPageview(props) {
  return (
      <Card className="w-75 mx-auto">
        <CardBody className="p-0 navy h-100">
          <Row className="h-100">
            <Col className="pr-0">
              <div className="login-background"/>
            </Col>
            <Col className="p-3">
              <div className="h2 mt-3 pr-3 text-center">LOGIN</div>
              <AvForm className="pr-4 pl-2 mt-5">
                <AvGroup>
                  <Label>Username</Label>
                  <AvField type="text" name="username" placeholder="Input Username"/>
                </AvGroup>
                <AvGroup>
                  <Label>Password</Label>
                  <AvField 
                    type={props.showPassword === true ? "text" : "password"}
                    name="password" 
                    placeholder="Input Password"
                  />
                </AvGroup>
                <FormGroup>
                  <CustomInput 
                    type="checkbox"
                    id="showpassword"
                    label="Show Password"
                    onChange={() => props.handleShowPass()}
                  />
                </FormGroup>
                <Button color="secondary" className="w-100">LOGIN</Button>
              </AvForm>
            </Col>
          </Row>
        </CardBody>
      </Card>
  )
}

export default LoginPageview;