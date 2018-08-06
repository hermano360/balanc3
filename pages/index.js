import React, {Component} from 'react';
import Layout from '../components/Layout'
import TransactionSearch from '../components/TransactionSearch'
import TransactionResult from '../components/TransactionResult'
import BalanceSearch from '../components/BalanceSearch'
import BalanceResult from '../components/BalanceResult'
import request from 'superagent'

import {Button, Grid, Header, Message, Table, Input, Loader} from 'semantic-ui-react'

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
    error: null,
    loading: false
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

    this.setState({loading: true, results: null})

    request
      .post('/graphql')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify({"query": `
        {
          getTransactions(address: \"${address}\")
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

        const transactions = res.body.data.getTransactions

        if(typeof transactions === 'string' || transactions === null){
          this.setState(
            {
              error: <div style={{color: 'red', fontSize: '16px'}}>Error! Please Try Again</div>,
              results: null,
              loading: false
            }
          )
        } else {

          const {outgoing, incoming} = this.state.transactionOptions
          const filteredTransactions = transactions.filter(entry => {
              if(incoming && entry.to.toLowerCase() === address.toLowerCase()) return true
              if(outgoing && entry.from.toLowerCase() === address.toLowerCase()) return true
              return false
          })

          this.setState({
            results: <TransactionResult transactions={filteredTransactions}/>,
            loading: false
          })
        }

      })
      .catch(err => console.log(err))
  }
  searchBalances = () => {
    const {address} = this.state

    this.setState({loading: true, results: null})

    request
      .post('/graphql')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify({"query": `
        {
          getBalance(address: \"${address}\")
        }`
      }))
      .then(res => {
        if(isNaN(Number(res.body.data.getBalance))) {
          this.setState({
            error: <div style={{color: 'red', fontSize: '16px'}}>{res.body.data.getBalance}</div>,
            results: null,
            loading: false
          })
        } else {
          this.setState({loading: false})
          this.setState({
            results: <BalanceResult balance={res.body.data.getBalance}  />,
            loading: false
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
          <Grid.Row>
            <Grid.Column>
              <Loader active={this.state.loading} />
            </Grid.Column>
          </Grid.Row>

          {this.state.error}
          {this.state.results}
        </Grid>
      </Layout>
    );
  }
}

export default Main
