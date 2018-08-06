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

const checkIfDisabled = (address, outgoing, incoming) => {
  if(address === '') return true
  if(!incoming && !outgoing) return true
  return false
}

export default props => {
  const {incoming, outgoing, blockNo, timeStamp, hash, value} = props.transactionOptions
  return (
    <Grid.Row>
      <Grid.Column>
        <Message>
          <Header as='h1'>Search Transactions</Header>
          <Grid.Column>
            <Grid.Row style={{margin: '10px 0'}}>
              <p>Please Select At Least One:</p>
            </Grid.Row>
            <Grid.Row style={{margin: '10px 0'}}>
              <Button color={incoming ? 'blue' : null} onClick={()=>props.toggle('incoming')}>Incoming</Button>
              <Button color={outgoing ? 'blue' : null} onClick={()=>props.toggle('outgoing')}>Outgoing</Button>
            </Grid.Row>
            <Grid.Row style={{margin: '10px 0'}}>
              <p>Please Select Desired Options:</p>
            </Grid.Row>
            <Grid.Row style={{margin: '10px 0'}}>
              <Button color={blockNo? 'blue' : null} onClick={()=>props.toggle('blockNo')}>Block #</Button>
              <Button color={timeStamp ? 'blue' : null} onClick={()=>props.toggle('timeStamp')}>Time Stamp</Button>
              <Button color={hash ? 'blue' : null} onClick={()=>props.toggle('hash')}>Hash</Button>
              <Button color={value ? 'blue' : null} onClick={()=>props.toggle('value')}>Value</Button>
            </Grid.Row>
          </Grid.Column>
          <div>
            <Input fluid placeholder='Address...' icon='search' value={props.address} onChange={e => props.addressUpdate(e.target.value)}/>
            <Button color='blue' onClick={props.onSearch} disabled={checkIfDisabled(props.address, outgoing, incoming)}>Search</Button>
          </div>
        </Message>
      </Grid.Column>
    </Grid.Row>
  )
}
