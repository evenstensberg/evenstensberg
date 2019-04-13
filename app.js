const express = require('express');
const path = require('path')
const app = express();

app.use(express.static('public'))

app.get('*', function(req, res) {
    res
    .sendFile('index.html', {root: path.join(__dirname, 'public')})
  });

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});