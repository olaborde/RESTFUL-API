import { addNewContact, 
         getContact, 
         getContactWithID,
         updateContact,
         deleteContact,
       } from "../controllers/crmControllers";

const routes = (app) => {
  app.route('/contact')
  .get((req, res, next) => { 
    // moddleware
    console.log( `Request from ${req.originalUrl}`)
    console.log( `Request from ${req.method}`)
    next();
  }, getContact)

  // POST endpoint

  .post(addNewContact);

  app.route('/contact/:contactId')
  // get specific contact
  .get(getContactWithID)

  // put request
  .put(updateContact)

  //delete request
  .delete(deleteContact);
}

export default routes;
