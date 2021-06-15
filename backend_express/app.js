'use strict';

const express = require('express');
const app = express();

app.use(express.static('./build'));

app.get('/get/json', (req,res) => {
  res.json({
      message:"Hello,world"
  });
}); 

if (module === require.main) {
  const server = app.listen(process.env.PORT || 1234, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;