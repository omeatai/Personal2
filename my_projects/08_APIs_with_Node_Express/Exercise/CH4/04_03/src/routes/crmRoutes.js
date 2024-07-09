import { addNewContact, getContacts, getContactWithID } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
    // get all contacts
    .get((req,res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();  
    }, getContacts)

    // post a new contact
    .post(addNewContact);

    app.route('/contact/:contactId')
    // get specific contact
    .get(getContactWithID)

    .put((req, res) =>
        res.send('PUT request sucessful!')
    )

    .delete((req, res) =>
        res.send('DELETE request sucessful!')
    )
}

export default routes;
