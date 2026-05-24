CRUD operations 

create , read , update and delete


SCHEMA ==> structure of the data that how should it look inside the database 

Model ==> Used to perform CRUD operations , model is makes it easy to perfrom CRUD operations on the corresponding collection(similar type ke data ka group)

## 🧱 What is a Schema?

A **Schema** defines the structure, fields, and data types for documents in a MongoDB collection.

### 🧰 Why Schema is Needed?
- Ensures **data consistency**
- Validates the type of data
- Works like a **blueprint** for each document

#### 📄 Example (Mongoose):
```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    email: { type: String, unique: true, required: true },
    isActive: { type: Boolean, default: true }
});
```

---

## 📦 What is a Model?

A **Model** is a wrapper for the schema. It allows you to interact with the collection in the database.

### 🔁 Why Models are Important?
- Represent collections like "Users", "Orders", etc.
- Perform all **CRUD operations** like:
  - `create()`, `find()`, `updateOne()`, `deleteOne()`

#### 📄 Example:
```js
const User = mongoose.model('User', userSchema);

User.create({ name: "John", email: "john@example.com" });
User.find({});
User.findByIdAndUpdate("id", { name: "Jane" });
User.findByIdAndDelete("id");
```

---

## 🔄 CRUD Summary

| Operation | Method                   | Purpose                         |
|-----------|--------------------------|----------------------------------|
| Create    | `create()`               | Add new document to DB          |
| Read      | `find()`, `findById()`   | Fetch documents from DB         |
| Update    | `updateOne()`, `findByIdAndUpdate()` | Modify existing document |
| Delete    | `deleteOne()`, `findByIdAndDelete()` | Remove a document         |

---

## 📘 Final Tips
- Always validate incoming data against your schema.
- Structure your folder and codebase from Day 1.
- Use environment variables for DB URLs and secrets.
- Modularize your code for maintainability.