import Server from 'socket.io';

function currentState(store){
  return store.getState().toJS();
}

export default function startServer(store) {
  const io = new Server().attach(8090);

  store.subscribe(
    () => io.emit('state', currentState(store))
  );

  io.on('connection', (socket) => {
    socket.emit('state', currentState(store));
    socket.on('action', store.dispatch.bind(store));
  });
}