const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sharmaabhinav23736:hUWsvbZZ6JpQHI2x@abhi.lwc6btz.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('connect');
})
.catch((error)=>{
    console.log('error in connecting');
});