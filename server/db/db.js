const mongoose = require ('mongoose');


function ConnecttoDB(){
mongoose.connect(process.env.MONGOOSE_URI,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{console.log('Connected to DB')}).catch(err=>console.log(err));
    };


    module.exports = ConnecttoDB;
