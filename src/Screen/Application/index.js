import React, { useState, useEffect } from "react";
import { socket } from "../Socket";
import { ConnectionState } from "../../Component/ConnectionState";
import { ConnectionManager } from "../../Component/ConnectionManager";
import { Events } from "../../Component/Events";
import { MyForm } from "../../Component/MyForm";

export default function Application() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      console.log("Connected!");
      setIsConnected(true);
    }

    function onDisconnect() {
      console.log("Disconnected!");
      setIsConnected(false);
    }

    function onFooEvent(value) {
      console.log("Foo Event!");
      setFooEvents((previous) => [...previous, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("foo", onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("foo", onFooEvent);
    };
  }, []);

  return (
    <div className="Application">
      <ConnectionState isConnected={isConnected} />
      <Events events={fooEvents} />
      <ConnectionManager />
      <MyForm />
    </div>
  );
}
