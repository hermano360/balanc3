// import {Product, CustomProduct, Template, CustomTemplate, User} from './connectors'
const request = require('superagent')

const fetchTransactions = async (address) => {
  const transactions = await request
    .get(`http://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=MBW7HV62BFHYQ97BYJFXJ3CBK2NTR7R8E2`)
    .set('Content-Type', 'application/json')
  return transactions
}

const fetchBalance = async (address) => {
  const balance = await request
    .get(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=MBW7HV62BFHYQ97BYJFXJ3CBK2NTR7R8E2`)
    .set('Content-Type', 'application/json')
  return balance.body.result
}

const resolvers = {
  Query: {
    getTransactions: async (_,args) => {
      const transactions = await fetchTransactions(args.address)
      console.log(transactions.body.result)
      return [
        {
          name: 'Steve',
          age: 12,
          id: args.address
        },
        {
          name: 'Steven',
          age: 12,
          id: args.address
        }
      ]
    },
    getBalance: async (_, args) => {
      const balance = await fetchBalance(args.address)
      return balance
    }
  }
};

module.exports = resolvers;
