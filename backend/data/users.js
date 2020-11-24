import bcrypt from 'bcryptjs'

const Users = [
  {
    name: 'admin',
    email: 'admin@email.com',
    password: bcrypt.hashSync('pass1234', 10),
    isAdmin: true,
  },
  {
    name: 'Dan',
    email: 'dan@email.com',
    password: bcrypt.hashSync('pass1234', 10),
  },
  {
    name: 'Ida',
    email: 'ida@email.com',
    password: bcrypt.hashSync('pass1234', 10),
  },
  {
    name: 'Laura',
    email: 'laura@email.com',
    password: bcrypt.hashSync('pass1234', 10),
  },
]

export default Users
