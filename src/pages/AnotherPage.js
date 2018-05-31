import React from 'react'
import TemplatePage from "../components/TemplatePage";
import {Button} from "semantic-ui-react";

const AnotherPage = () => (

    <TemplatePage title={"Other Page"}
                  description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
                  "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
                  "quis nostrud exercitation ullamco"}
                  buttons={
                      <Button primary>Learn more &hellip;</Button>
                  }>
    </TemplatePage>


);

export default AnotherPage;
