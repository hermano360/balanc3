import React, {Component} from 'react';

import {
  Button,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  Menu,
  Message,
  Segment,
  Table,
  Input,
  Checkbox
} from 'semantic-ui-react'

export default props => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Message>
          <Header as='h1'>Balance</Header>
          <Grid.Column>
            <Grid.Row style={{margin: '10px 0'}}>
              <p>{props.balance}</p>
            </Grid.Row>
          </Grid.Column>
        </Message>
      </Grid.Column>
    </Grid.Row>
  )
}
