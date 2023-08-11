
import { Auth, graphqlOperation, API } from 'aws-amplify';
import { Button, withAuthenticator } from '@aws-amplify/ui-react';
import './App.css';
import { getBookById } from './graphql/queries/book';
import { useState } from 'react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  const [ book, setBook ] = useState(null);

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  const getBookDetails = async () => {
    // Book ID : d1ef1f97-ed25-4e25-9b16-eb5b0fb3a2b1
    const id = "d1ef1f97-ed25-4e25-9b16-eb5b0fb3a2b1";
    // const book = await API.graphql(graphqlOperation(getBookById, { id }));
    const book = await API.graphql({
      query: getBookById,
      variables: { id },
      authMode: "AWS_IAM"
    });
    setBook(book?.data?.getBookById);
  };

  return (
    <div>
      <h1>Hello world</h1>
      {/* <Button onClick={ signOut }>Sign Out</Button> */ }
      <section style={ { marginTop: 10 } }>
        <button onClick={ getBookDetails }>Get Book details</button>
        <hr />

        { book &&
          <article>
            <h3>{ book.title }</h3>
            <p>{ book.description }</p>
            <p>{ book.author }</p>
            <h4>{ book.price }</h4>
          </article>
        }
      </section>
    </div>
  );
}

// export default App
export default App;
