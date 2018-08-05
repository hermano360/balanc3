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
// 
// const Transaction = props => {
//   return (
//     <Table celled>
//       <Table.Header>
//
//           {props.blockNo &&
//             <Table.Row>
//               <Table.HeaderCell>Block No</Table.HeaderCell>
//             <Table.Cell>Block Number</Table.Cell>
//             </Table.Row>
//           }
//
//           <Table.HeaderCell>Header</Table.HeaderCell>
//           <Table.HeaderCell>Header</Table.HeaderCell>
//           <Table.HeaderCell>Header</Table.HeaderCell>
//
//       </Table.Header>
//     </Table>
//     <Table.Row>
//
//       {props.timeStamp && <Table.Cell>Time Stamp</Table.Cell>}
//       {props.hash && <Table.Cell>Hash</Table.Cell>}
//       {props.value && <Table.Cell>Value</Table.Cell>}
//     </Table.Row>
//   )
// }

export default props => {
  return (
    <Grid.Row>
      <Grid.Column>
          <Header as='h1'>Transactions</Header>
          <Grid.Row>
            <Grid.Column>
              <Message>
                <Header as='h1'>Transactions</Header>

              </Message>
            </Grid.Column>
          </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  )
}
