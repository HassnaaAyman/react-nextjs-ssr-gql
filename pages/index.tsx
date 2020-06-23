import Head from "next/head";
import { withApollo } from "../libs/apollo";
import { useQuery } from "@apollo/react-hooks";
import { ALL_CHARACTERS } from "../gql/allCharacters";

function Home() {
  const { loading, error, data } = useQuery(ALL_CHARACTERS);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>Setting up Apollo GraphQL in Next.js with Server Side Rendering</h3>
      <div>
        {data.characters.results.map((data) => (
          <ul key={data.id}>
            <li>{data.name}</li>
          </ul>
        ))}
      </div>

      <style jsx>{`
        .container {
          min-height: 20vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h3{
          margin : 0 auto ; 
          font-size : 40px;
        }
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
export default withApollo({ ssr: true })(Home);
