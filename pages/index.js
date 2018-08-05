import React, {Component} from 'react';
import Layout from '../components/Layout'
import TransactionSearch from '../components/TransactionSearch'
import TransactionResult from '../components/TransactionResult'
import BalanceSearch from '../components/BalanceSearch'
import BalanceResult from '../components/BalanceResult'
import request from 'superagent'

import gql from "graphql-tag";


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


export class Main extends Component {
  state = {
    search: null,
    results: null,
    address: '',
    transactionOptions: {
      incoming: false,
      outgoing: false,
      blockNo: false,
      timeStamp: false,
      hash: false,
      value: false
    },
    transactionError: null
  }

  toggle = (option) => {
    this.setState(prevState => {
      return {
        transactionOptions: {
          ...prevState.transactionOptions,
          [option]: !prevState.transactionOptions[option]
        },
        transactionError: null
      }
    })
  }
  searchTransactions = () => {
    const {address, transactionOptions} = this.state
    const {incoming,outgoing,blockNo,timeStamp,hash,value} = transactionOptions

    request
      .post('/graphql')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify({"query": `
        {
          getTransactions(address: \"${address}\", incoming: ${incoming}, outgoing: ${outgoing})
          {
            ${blockNo ? 'blockNo': ''}
            ${timeStamp ? 'timeStamp' : ''}
            ${hash ? 'hash': ''}
            ${value ? 'value': ''}
          }
        }`
      }))
      .then(res => {
        console.log(res.body.data.getTransactions)
        this.setState({
          results: <TransactionResult />
        })
      })
      .catch(err => console.log(err))
  }
  searchBalances = () => {
    const {address} = this.state
    request
      .post('/graphql')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify({"query": `
        {
          getBalance(address: \"${address}\")
        }`
      }))
      .then(res => {
        this.setState({
          results: <BalanceResult balance={res.body.data.getBalance} />
        })
      })
      .catch(err => console.log(err))
  }

  addressUpdate = (address) => {
    this.setState({address})
  }

  searchDesiredOption = (search) => {
    this.setState({search, results: null})
  }

  render(){
    return (
      <Layout>
        <Grid container style={{ padding: '10em 0em' }}>
          <Grid.Row>
            <Grid.Column>
              <Header as='h1' dividing>
                Balanc3 Take Home App
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Message>
                <Header as='h1'>Search By Address</Header>
                <p>
                  Choose whether you want to look up transactions or balance of an address!
                </p>
                <Button color='blue' onClick={()=>this.searchDesiredOption('transactions')}>Transactions</Button>
                <Button color='blue' onClick={()=>this.searchDesiredOption('balance')}>Balance</Button>
              </Message>
            </Grid.Column>
          </Grid.Row>
          {this.state.search === 'transactions' && (
            <TransactionSearch
              onSearch={this.searchTransactions}
              addressUpdate={this.addressUpdate}
              address={this.state.address}
              transactionOptions={this.state.transactionOptions}
              toggle={this.toggle}
            />)
          }
          {this.state.search === 'balance' && (
            <BalanceSearch
              onSearch={this.searchBalances}
              addressUpdate={this.addressUpdate}
              address={this.state.address}
            />)
          }
          {this.state.results}
        </Grid>
      </Layout>
    );
  }
}

export default Main



/*

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));


 */

/*
<Checkbox label='Block #' />
<Checkbox label='timestamp' />
<Checkbox label='Hash' />
<Checkbox label='Value' />
{
    blockNumber: '5482806',
    timeStamp: '1524355385',
    hash: '0x6f379d3afe3a9fd0a8086adc61e1a2d1f74393fe2efe5b39179e4204c9e9a15d',
    nonce: '9086397',
    blockHash: '0xfe5e7b45b6b13bf855c7be25cfd301d870e8d4dd2fdc149374edc7fe041f159a',
    transactionIndex: '2',
    from: '0xea674fdde714fd979de3edf0f56aa9716b898ec8',
    to: '0x96d978f81d962770d2379240899808f396856589',
    value: '50788367621613343',
    gas: '50000',
    gasPrice: '1000000000',
    isError: '0',
    txreceipt_status: '1',
    input: '0x',
    contractAddress: '',
    cumulativeGasUsed: '63000',
    gasUsed: '21000',
    confirmations: '596571' }
 */
