const routes = (app) => {
  app.route('/contact')
  .get((req, res, next) => { 
    // moddleware
    console.log( `Request from ${req.originalUrl}`)
    console.log( `Request from ${req.method}`)
    next();
  }, (req, res, next) => {
    

  })

  .post((req, res) =>
  res.send('POST request successfull!!!'));

  app.route('/contact/:contactId')
  .put((req, res) =>
  res.send('PUT request successfull!!!'))

  .delete((req, res) =>
  res.send('DELETE request successfull!!!'));
}

export default routes;
