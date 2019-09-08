# graphQL-crud-mongoose-POC

just add DB_URL in the env virable/ server file 

default port 8000

url /graphql

supports the following:
```    
    type Product {
        _id: ID!
        title: String!
        qty: Int
    }
     input ProductInput {
        title: String!
        qty: Int
    }
    type Query {
       allProducts: [Product]
       getProduct(_id: ID!): Product
    }
    type Mutation {
      createProduct(input: ProductInput) : Product
      updateProduct(_id: ID!, input: ProductInput): Product
      deleteProduct(_id: ID!) : Product
    }
```