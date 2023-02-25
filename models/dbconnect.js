/* DB Connection : [[https://mongoosejs.com/docs/index.html]]
mongoose
     .connect(process.env.DATABASE, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
     })
     .then(() => {
          console.log('DB CONNECTED');
     });
 */

// main().catch((err) => console.log(err));

// async function main() {
//      await mongoose.connect('mongodb://127.0.0.1:27017/test');

//      // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

/* 

Login : -
[[admin]]
  {
    "name":"Admin",
    "email":"admin1234@gmail.com",
    "password":123456
    
}
[[user]]
{
    "name":"Dhananjay",
    "email":"Dhananjay1234@gmail.com",
    "password":123456
    
}


*/
