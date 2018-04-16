function getMessage() {
  console.log('hello world');
  // TODO get message from kafaka
  // and save first bids to mongodb
}


function monitor() {
  getMessage();
}
setInterval(monitor, 1000);