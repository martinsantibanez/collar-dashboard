import io from 'socket.io-client';
const URL = 'localhost:4000';

export default io(URL);