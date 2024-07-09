const routes = (app) => {
  app
    .route("/contact")
    .get((req, res) => res.send("GET request sucessful!"))

    .post((req, res) => res.send("POST request sucessful!"));

  app
    .route("/contact/:contactId")
    .put((req, res) => res.send("PUT request sucessful!"))

    .delete((req, res) => res.send("DELETE request sucessful!"));
};

export default routes;
