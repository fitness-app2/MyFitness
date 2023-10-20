const { PrismaClient } = require('@prisma/client'); //to be used in the model
const prisma = new PrismaClient();



async function addUser(data) {  
  console.log(data)
  const user = await prisma.users.create({
    data: { 
    username : data.username,
    firstname:  data.firstname, 
    lastname  : data.lastname,
    email  : data.email,
    profilepic: data.profilepic,
    premium  :   false,
    birthday :  data.birthday,
    profilepic:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
  
    }
  })

return user
  
}
async function getUserById(id) {
  const user = await prisma.users.findUnique({
    where: {
      id: id,
    },
  });

  return user;
}

async function getUsers(){
  const user = await prisma.users.findMany({});

  return user;
}

module.exports = {addUser,getUsers, getUserById}