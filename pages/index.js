import React, {Component} from 'react';
import Layout from '../components/Layout'
import TransactionSearch from '../components/TransactionSearch'
import TransactionResult from '../components/TransactionResult'
import BalanceSearch from '../components/BalanceSearch'
import BalanceResult from '../components/BalanceResult'
import request from 'superagent'

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
    error: null
  }

  toggle = (option) => {
    this.setState(prevState => {
      return {
        transactionOptions: {
          ...prevState.transactionOptions,
          [option]: !prevState.transactionOptions[option]
        },
        error: null
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
            from
            to
          }
        }`
      }))
      .then(res => {
        if(typeof res.body.data.getTransactions === 'string' || res.body.data.getTransactions === null){
          this.setState(
            {
              error: <div style={{color: 'red', fontSize: '16px'}}>Error! Please Try Again</div>,
              results: null
            }
          )
        } else {
          this.setState({
            results: <TransactionResult transactions={res.body.data.getTransactions}/>
          })
        }

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
        console.log(res)
        if(isNaN(Number(res.body.data.getBalance))) {
          this.setState({
            error: <div style={{color: 'red', fontSize: '16px'}}>{res.body.data.getBalance}</div>,
            results: null
          })
        } else {
          this.setState({
            results: <BalanceResult balance={res.body.data.getBalance} />
          })
        }
      })
      .catch(err => console.log(err))
  }

  addressUpdate = (address) => {
    this.setState({address, error: null})
  }

  searchDesiredOption = (search) => {
    this.setState({search, results: null, error: null})
  }

  render(){
    const {search} = this.state
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
                <Button color={search === 'transactions' ? 'blue' : null} onClick={()=>this.searchDesiredOption('transactions')}>Transactions</Button>
                <Button color={search === 'balance' ? 'blue' : null} onClick={()=>this.searchDesiredOption('balance')}>Balance</Button>
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
          {this.state.error}
          {this.state.results}
        </Grid>
      </Layout>
    );
  }
}

export default Main
