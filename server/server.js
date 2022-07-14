const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});




// const { MongoClient } = require("mongodb");
 
// // Replace the following with your Atlas connection string                                                                                                                                        
// const url = "mongodb+srv://pinkeen:oilyfish@cluster0.repyx.mongodb.net/Contacts?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
// const client = new MongoClient(url);
 
//  // The database to use
//  const dbName = "Contacts";
                      
//  async function run() {
//     try {
//          await client.connect();
//          console.log("Connected correctly to server");
//          const db = client.db(dbName);

//          // Use the collection "people"
//          const col = db.collection("contacts");

//          // Construct a document                                                                                                                                                              
//          let contactDocument = {
//              "name":"Thomas",
//              "company": "JCTech",                                         
//              "email":"Thomas@email.com",                                        
//              "message": "database online now to connect it to a form and button"
//          }

//          // Insert a single document, wait for promise so we can read it back
//          const p = await col.insertOne(contactDocument);
//          // Find one document
//          const myDoc = await col.findOne();
//          // Print to the console
//          console.log(myDoc);

//         } catch (err) {
//          console.log(err.stack);
//      }
 
//      finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);


// const { MongoClient } = require("mongodb");
 
// // Replace the following with your Atlas connection string                                                                                                                                        
// const url = "mongodb+srv://pinkeen:oilyfish@cluster0.repyx.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
// const client = new MongoClient(url);

// async function run() {
//     try {
//         await client.connect();
//         console.log("Connected correctly to server");

//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);

// const express = require('express');
// const path = require('path');
// const app = express();
// const mongoose = require("mongoose");

// // main().catch(err => console.log(err));

// // async function main() {
// // mongoose.connect("mongodb://localhost:27017/Contacts", {useNewUrlParser: true});
// mongoose.connect("mongodb+srv://pinkeen:oilyfish@cluster0.repyx.mongodb.net/Contacts?retryWrites=true&w=majority", {useNewUrlParser: true});

// const contactSchema = new mongoose.Schema({
//   name: String,
//   company: String,
//   email: String,
//   message: String,
// });

// const Contact = mongoose.model("Contact", contactSchema);

// const contact = new Contact ({
//   name:"Thomas",
//   company:"JCTech",
//   email:"T@email.com",
//   message:"Testing DB from serverJS"
// });

// contact.save();
// // }

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(9000, function(){
//   console.log("Now serving port 9000");
// });

// const express = require("express");
// const bodyParser = require("body-parser");


// const app = express();

// // app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));


// app.post("/", function(req,res){
//     const newName = req.body.contactName
//     const newCompany = req.body.contactCompany
//     const newEmail = req.body.contactEmail
//     const newMessage = req.body.contactMessage

//     const contact = new Contact({
//         name: newName,
//         company: newCompany,
//         email: newEmail,
//         message: newMessage
//     });
//     contact.save();
//     res.redirect("/");
// });

// app.listen(3000, function() {
//     console.log("Server started on port 3000");
//   });