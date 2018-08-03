const typeDefs = `
type Query {
  getTransactions(address: String) : [User],
  getBalance(address: String) : String
}
type User {
  name: String,
  age: Int
}
`;



module.exports = typeDefs;
