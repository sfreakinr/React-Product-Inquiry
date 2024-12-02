import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Route, Form } from "react-router-dom";
import "./styles.css";

function ProductInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();

    if (isValid) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Product Inquiry Form</h1>
      {!submitted ? (
        <Form method="post" onSubmit={handleSubmit} noValidate className="form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            />
          </div>
          <button type="submit" className="form-button">
            Submit
          </button>
        </Form>
      ) : (
        <div className="thank-you">
          <h2>Thank You for Your Inquiry!</h2>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {formData.phone}
          </p>
          <p>
            <strong>Message:</strong> {formData.message}
          </p>
          <button onClick={() => setSubmitted(false)} className="form-button">
            Submit Another Inquiry
          </button>
        </div>
      )}
    </div>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductInquiryForm />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
