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
  Checkbox,
  Pagination
} from 'semantic-ui-react'

const Transaction = props => {
  return (<Grid.Row>
    <Grid.Column>
      <Message style={{margin: '10px 0'}}>
        {
          (props.blockNo || props.timeStamp || props.value) && (
            <Table celled>
              <Table.Header>
                <Table.Row>
                  {props.blockNo && <Table.HeaderCell>Block Number</Table.HeaderCell>}
                  {props.timeStamp && <Table.HeaderCell>Time Stamp</Table.HeaderCell>}
                  {props.value && <Table.HeaderCell>Value</Table.HeaderCell>}
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  {props.blockNo && <Table.Cell>{props.blockNo}</Table.Cell>}
                  {props.timeStamp && <Table.Cell>{Date(Number(props.timeStamp)*1000).toString()}</Table.Cell>}
                  {props.value && <Table.Cell>{props.value} Wei</Table.Cell>}
                </Table.Row>
              </Table.Body>
            </Table>
          )
        }
        <Table celled>
          <Table.Body>
            {
              props.hash && <Table.Row>
                  <Table.Cell>Hash</Table.Cell>
                  <Table.Cell>
                    <a target="_blank" rel="noopener noreferrer" href={`https://etherscan.io/tx/${props.hash}`}>{props.hash}</a>
                  </Table.Cell>
                </Table.Row>
            }
            <Table.Row>
              <Table.Cell>From</Table.Cell>
              <Table.Cell>{props.from}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>To</Table.Cell>
              <Table.Cell>{props.to}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Message>
    </Grid.Column>
  </Grid.Row>)
}

 class TransactionResult extends Component {
   state = {
     page: 1
   }
   changePage = (page) => {
     this.setState({page})
   }
   render(){
     return (<Grid.Row>
       <Grid.Column>
         <Header as='h1'>Transactions</Header>
         {this.props.transactions
           .filter((transaction,i) => {
             return this.state.page === (Math.floor(i/10) + 1)
           })
           .map((transaction, i) => <Transaction {...transaction} key={i}/>)}
         <Pagination activePage={this.state.page} totalPages={Math.ceil(this.props.transactions.length/10)} onPageChange={(e, data) => this.setState({"page": data.activePage})}/>
       </Grid.Column>
     </Grid.Row>)
   }

}

export default TransactionResult
