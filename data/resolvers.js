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
      return transactions.body.result.filter(entry => {
        if(args.incoming && entry.to.toLowerCase() === args.address.toLowerCase()) return true
        if(args.outgoing && entry.from.toLowerCase() === args.address.toLowerCase()) return true
        return false
      }).map(entry => {
        return {
          blockNo: entry.blockNumber,
          timeStamp: entry.timeStamp,
          hash: entry.hash,
          value: entry.value
        }
      })
    },
    getBalance: async (_, args) => {
      const balance = await fetchBalance(args.address)
      return balance
    }
  }
};

module.exports = resolvers;
