const stdin = process.stdin;
let connection;

const handleUserInput =
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
  
const setupInput = function(conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  return stdin;
};

stdin.on('data', (key) => {
  if (key === 'w') {
    connection.write("Move: up");
  } if (key === 'd') {
    connection.write('Move: right');
  } if (key === 's') {
    connection.write('Move: down');
  } if (key === 'a') {
    connection.write('Move: left');
  } if (key === 'p') {
    connection.write('Say: Wooo Hooo');
  } if (key === 'l') {
    connection.write('Say: Ima eat it');
  }
});

module.exports = {setupInput};