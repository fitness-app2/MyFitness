const {addUser, getUserById, getUsers} = require("../prisma/module/users")
const cloudinary = require("../configs/cloudinary-config")


exports.addNewUser = async (req, res) => {
  try {
    const data = req.body;

    const addUserResult = await addUser(req.body);
    res.send(addUserResult);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getUser=async (req, res)=>{
const id=req.params.id
console.log(id)
try {
  const user= await getUserById(id)
  res.send(user)
} catch (error){
  console.error(error);
  res.status(500).send('Internal Server Error');
}
 


}

exports.getAllUsers=async (req, res)=>{
  try {
    const user= await getUsers()
    res.send(user)
  } catch (error){
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
  }