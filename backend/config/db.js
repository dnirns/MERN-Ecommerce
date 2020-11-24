import mongoose from 'mongoose'

//? CONNECT TO MONGODB ATLAS DATABASE

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB connected ${connection.connection.host}`)
  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}

export default connectDB
