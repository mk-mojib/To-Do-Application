const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then(() =>{
    console.log("Connection Successful");
})
.catch((err) => { 
    console.log(err);
});
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  }

let allChats = [
    {
        from: "Asif",
          to: "Mojib",
         msg: "hii bhaiya !!!",
  created_at: new Date()
    },
    {
        from: "Rashid",
          to: "Farhat",
         msg: "Welcome to new home",
  created_at: new Date()
    },
    {
        from: "Aashique",
          to: "Naseem",
         msg: "I hope u will be back 'Inshaallah.'",
  created_at: new Date()
    },
    {
        from: "RITS",
          to: "ME",
         msg: "submit the no dues form for 7th sem",
  created_at: new Date()
    },
    {
      from: "Sufi",
        to: "Khalid",
       msg: "kya yaar tu to ab call bhi nhi karte ho",
created_at: new Date()
  },
];
Chat.insertMany(allChats);
