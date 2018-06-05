const express      = require('express');  
import routes from './src/routes/crmRoutes'

const app = express();
const PORT =3000;

routes(app);
app.get('/', (req, res) =>
  res.send(`Node and express server is running on port ${PORT} `)
);


app.listen(PORT, () =>
  console.log(`you server is running on port ${PORT}`)
);

module.exports = app;