import React, {Component} from 'react';

import {Grid, Header, Message} from 'semantic-ui-react'

export default props => (
    <Grid.Row>
      <Grid.Column>
        <Message>
          <Header as='h1'>Balance</Header>
          <Grid.Column>
            <Grid.Row style={{margin: '10px 0'}}>
              <p>{props.balance} Wei</p>
            </Grid.Row>
          </Grid.Column>
        </Message>
      </Grid.Column>
    </Grid.Row>
  )
