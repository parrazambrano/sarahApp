import gql from "graphql-tag";

export const QUERY_USER = gql `
  {
    user{
      _id
      username
      administrator
      beltColor
      email
      posts{
        _id
        title
      }
    }
  }
`;

export const QUERY_ALL_POSTS = gql `
{
  getAllPosts{
  title
  content
  announcement
  whatGym
  user{
    _id
    username
  }
}
}
`;

export const QUERY_USER_BY_ID = gql `
query getUserById($_id:ID!){
    getUserById(_id:$_id){
    username
    administrator
    beltColor
    email
    posts{
      _id
      title
    }
    _id
  }}
`;