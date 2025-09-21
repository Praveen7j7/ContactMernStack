import React, { useEffect, useState } from "react";
import axios from "axios";
import Snackbar from "./utils/Snackbar";
// import dotenv from 'dotenv';

function App() {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [snackbar, setSnackbar ]=useState({message:"", type:""});
  // remove dotenv import and process.env.PORT
// const API_BASE= import.meta.env.VITE_API_BASE_URL;
let link="https://contactmernstackbackend.onrender.com";
  // dotenv.config();
  const showSnackbar=(message, type="success")=>{
    setSnackbar({message, type});
    setTimeout(()=>setSnackbar({message:"", type:""}),3000); //auto hides in 3s 
  }
  // Fetch contacts with pagination
  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${link}/api/users?page=${page}&limit=4`);
      setContacts(res.data.contacts);
      console.log(res.data);
      setContacts(Array.isArray(res.data)?res.data:res.data.contacts);
      setPages(res.data.pages || 1);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [page]);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form (create contact)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting form:", form);
      //with form inputs
      // debugger;
      await axios.post(`${link}/api/create`, form,{headers:{"Content-Type":"application/json"}});
      setForm({ name: "", email: "", phone: "" });
      fetchContacts();
      showSnackbar("Contact created successfully!", "success");
    } catch (err) {
      console.error("Error creating contact:", err);
      showSnackbar(err.response?.data?.message || "Error creating contact", "error");
    }
  };

  // Delete contact
  const handleDelete = async (id) => {
    try {
      console.log("Deleting contact with id:", id);
      await axios.delete(`${link}/api/delete/${id}`);
      // console.log("Deleted contact with id:", res.data);
      fetchContacts();
      showSnackbar("Contact deleted successfully!", "success");
    } catch (err) {
      console.error("Error deleting contact:", err.response?.data || err);
      showSnackbar(err.response?.data?.message || "Error deleting contact", "error");
    }
  };
const contactsPerPage = 4;
const startIndex = (page - 1) * contactsPerPage;
const endIndex = startIndex + contactsPerPage;
const currentContacts = contacts.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Form Section */}
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-3xl font-bold mb-6">Contact Details</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md w-80"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full mb-4 p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>


      {/* Contact List Section */}
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Contact List</h1>
        {/* Pagination Controls */}
        
        {/* Display Logic */}
<ol className="list-decimal list-inside space-y-2">
  {contacts && contacts.length > 0 ? (
    contacts.map((c, i) => (
      <li key={c._id} className="flex justify-between items-center border-b pb-2">
        <span>
          {startIndex +i + 1}. {c.name} — {c.email} — {c.phone}
        </span>
        <button
          onClick={() => handleDelete(c._id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </li>
    ))
  ) : (
    <p>No contacts found.</p>
  )}
</ol>


        {/* Pagination Controls */}
        <div className="flex justify-center mt-6 space-x-2">
          <button
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-3 py-1">Page {page} of {pages}</span>
          <button
            disabled={page >= pages}
            onClick={() => setPage(page + 1)}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      <Snackbar
  message={snackbar.message}
  type={snackbar.type}
  onClose={() => setSnackbar({ message: "", type: "" })}
/>

    </div>
  );
}

export default App;
