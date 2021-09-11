import * as React from 'react';

type AppProps = {
    message: string
}

export default function App ({ message }: AppProps) {
  return (
    <div>
        <h1>
            { message }
        </h1>
      
    </div>
  );
}
