import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import  './db.js'
import { AdminRouter } from './routes/auth.js'
import { studentRouter } from './routes/student.js'
import { bookRouter } from './routes/book.js'
import { Book } from './models/Book.js'
import { Student } from './models/Student.js'
import { Admin } from './models/Admin.js'

const app = express()
app.use(express.json())
app.use(cors({
     origin: ['http://localhost:5173'],
     credentials: true
}))
app.use(cookieParser())
dotenv.config()
app.use('/auth', AdminRouter)
app.use('/student', studentRouter)
app.use('/book', bookRouter)

app.get('/dashboard', async (req, res) => {
    try {
      // Fetch document counts for each model
      const studentCount = await Student.countDocuments();
      const adminCount = await Admin.countDocuments();
      const bookCount = await Book.countDocuments();
  
      // Return success response with the data
      return res.json({
        ok: true,
        students: studentCount,
        admin: adminCount,
        books: bookCount,
      });
    } catch (err) {
      return res.json(err)
    }
  });

app.listen(process.env.PORT, () => {
    console.log("Server is Running");
})