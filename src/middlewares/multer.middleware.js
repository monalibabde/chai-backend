import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})


// keeping original name is not proper bcz same name more file can be there 
//so it overwrite 
// but operation in very tiny amount in our server for some time after it upload through cloudinary
// and then delete that file