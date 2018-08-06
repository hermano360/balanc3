const {Balance, Transactions} = require('./connectors')
const request = require('superagent')


const formatTransactions = transactions => {
  return transactions.map(transaction => {
    return {
      blockNo: transaction.blockNumber,
      timeStamp: transaction.timeStamp,
      hash: transaction.hash,
      value: transaction.value,
      to: transaction.to.toLowerCase(),
      from: transaction.from.toLowerCase()
    }
  })
}

const fetchTransactions = async (address) => {
  const transactions = await request
    .get(`http://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=MBW7HV62BFHYQ97BYJFXJ3CBK2NTR7R8E2`)
    .set('Content-Type', 'application/json')

    const newTransactions = new Transactions({
      transactions: formatTransactions(transactions.body.result),
      address
    })

  const res = await Transactions.findOne({address})
  if(res === null) await newTransactions.save()
  else await Transactions.update({address}, {$set: {transactions: formatTransactions(transactions.body.result)}})

  return transactions.body.result
}

const fetchBalance = async (address) => {

  const balance = await request
    .get(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=MBW7HV62BFHYQ97BYJFXJ3CBK2NTR7R8E2`)
    .set('Content-Type', 'application/json')

    const newBalance = new Balance({
      balance: balance.body.result,
      address
    })

  const res = await Balance.findOne({address})
  if(res === null) await newBalance.save()
  else await Balance.update({address}, {$set: {balance: balance.body.result}})

  return balance.body.result
}

const resolvers = {
  Query: {
    getTransactions: async (_,args) => {
      const transactions = await fetchTransactions(args.address)
      return formatTransactions(transactions)
    },
    getBalance: async (_, args) => {
      const balance = await fetchBalance(args.address)
      return balance
    }
  }
};

module.exports = resolvers;
