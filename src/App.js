import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const queryInfo = useQuery('pokemon', () =>
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.data.results),
  );

  return (
    <div>
      {queryInfo.data?.map(result => {
        return <div key={result.name}>{result.name}</div>;
      })}
    </div>
  );
}
