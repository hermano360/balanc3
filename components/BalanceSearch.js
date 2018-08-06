import React, {Component} from 'react';
import Layout from '../components/Layout'
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
          <Header as='h1'>Search Balance</Header>
          <Grid.Column>
            <Grid.Row style={{margin: '10px 0'}}>
              <p>Enter address to receive the current balance!</p>
            </Grid.Row>
          </Grid.Column>
          <div>
            <Input fluid placeholder='Address...' icon='search' value={props.address} onChange={e => props.addressUpdate(e.target.value)}/>
            <Button color='blue' onClick={props.onSearch} disabled={props.address === ''}>Search</Button>
          </div>
        </Message>
      </Grid.Column>
    </Grid.Row>
  )
}
