const express = require("express")
const cors = require("cors")
const bcrypt = require("bcrypt")
const { Pool } = require("pg")

const app = express()

app.use(cors())
app.use(express.json())

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "jobportal1",
  password: "yourpassword",
  port: 5432
})

/* REGISTER API */

app.post("/register", async (req, res) => {

  const { name, email, password } = req.body

  try {

    const hashedPassword = await bcrypt.hash(password, 10)

    await pool.query(
      "INSERT INTO users(name,email,password) VALUES($1,$2,$3)",
      [name, email, hashedPassword]
    )

    res.json({ message: "User Registered Successfully" })

  } catch (err) {

    res.json({ message: "Email already exists" })

  }

})

/* LOGIN API */

app.post("/login", async (req, res) => {

  const { email, password } = req.body

  const result = await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  )

  if (result.rows.length === 0) {
    return res.json({ message: "User not found" })
  }

  const user = result.rows[0]

  const validPassword = await bcrypt.compare(password, user.password)

  if (!validPassword) {
    return res.json({ message: "Invalid Password" })
  }

  res.json({ message: "Login Successful" })

})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})