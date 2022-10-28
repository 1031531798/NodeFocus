const {
  typeList
} = require('./data.js');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql');
const Query = require('mysql/lib/protocol/sequences/Query');
const queryObj = new GraphQLObjectType({
name: 'myFirstQuery',
description: 'a hello world demo',
fields: {
    typeList: {
      name: 'a hello world query',
      description: 'a hello world demo',
      type: GraphQLString,
      args: {
      },
      resolve(parentValue, args, request) { // 这里演示如何获取参数，以及处理
        return {
          src:
              'http://pic.51yuansu.com/pic3/cover/02/09/54/599eb922d3416_610.jpg',
          label: '宠物狗',
          page: ''
        }
      }
    }
}
});
module.exports = new GraphQLSchema({
query: queryObj
});