import {
  addNewContact,
  getContacts,
  getContactWithId,
  updateContact,
  deleteContact,
} from "../controllers/crmController";

const routes = (app, checkAuth) => {
  app
    .route("/contact")
    // get all contacts
    .get((req, res, next) => {
      console.log("Request from: " + req.originalUrl);
      console.log("Request type: " + req.method);
      next();
    }, getContacts)
    // post a new contact
    .post(checkAuth, addNewContact);

  app
    .route("/contact/:contactId")
    // get a specific contact
    .get(checkAuth, getContactWithId)
    // update a specific contact
    .put(checkAuth, updateContact)
    // delete a specific contact
    .delete(checkAuth, deleteContact);
};

export default routes;
