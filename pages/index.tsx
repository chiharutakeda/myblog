import Layout from '../components/Layout';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-ap-northeast-1.graphcms.com/v2/ckp5fglglswsy01xp4rn23646/master',
  cache: new InMemoryCache(),
});

const IndexPage = () => (
  <ApolloProvider client={client}>
    <Layout title="怠惰ch(たいだちゃんねる)">
      <h1>怠惰ch(たいだちゃんねる)</h1>
    </Layout>
  </ApolloProvider>
);

export default IndexPage;
