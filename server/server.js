const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');

app.use(express.static(publicPath));

console.log(process.env.PORT);
app.listen(process.env.PORT || 3000, () => {
        console.log('Server started');
});
