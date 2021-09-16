import express from "express";

const app = express();

// Section 1 - Users
app.get("/users/", (req, res) => {
  res.json({
    status: 'success',
    message: 'You successfully got all users'
  })
});

app.post("/users/", (req, res) => {
  res.json({
    status: 'success',
    message: 'You posted a new user'
  })
});

// Section 2 - Users/:id

app.patch("/users/:id", (req, res) => {
  res.json({
    status: 'success',
    message: 'You updated the user'
  })
});


app.delete("/users/:id", (req, res) => {
  res.json({
    status: 'success',
    message: 'You sucessfully deleted the user'
  })
});

app.get("/users/:id", (req, res) => {
  res.send(
    'you sucessfully got the user'
  )
});

// Section 3 - Messages

app.get("/messages/", (req, res) => {
  res.json({
    status: 'success',
    message: 'You successfully got all messages'
  })
});

app.post("/messages/", (req, res) => {
  res.json({
    status: 'success',
    message: 'You posted a new message'
  })
});

// Section 4 - Messages/:id


app.patch("/messages/:id", (req, res) => {
  res.json({
    status: 'success',
    message: 'You updated the message'
  })
});

app.delete("/messages/:id", (req, res) => {
  res.json({
    status: 'success',
    message: 'You sucessfully deleted the message'
  })
});

app.get("/messages/:id", (req, res) => {
  res.send(
    'you sucessfully got the message'
  )
});

//Section 5 - Get server to listen

const PORT_NUMBER = 4000;

app.listen(PORT_NUMBER, () => {
  console.log(
    `If you can see this message in the console, this means that you successfully started the server! \n\nYou can see what comes back by visiting localhost:${PORT_NUMBER} in your browser. \n\nChanges will not be processed unless you restart your server (close and restart). \n\nThe server is currently listening for requests - press Ctrl + C to quit.`
  );
});