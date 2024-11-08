import React from 'react';
import { socket } from '../../Screen/Socket';

export function ConnectionManager() {
  function connect() {
    socket.connect();
    console.log("Connect button clicked");
  }

  function disconnect() {
    socket.disconnect();
    console.log("Disconnect button clicked");
  }

  return (
    <>
      <button onClick={ connect }>Connect</button>
      <button onClick={ disconnect }>Disconnect</button>
    </>
  );
}