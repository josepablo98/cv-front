import React, { useState, useRef, useEffect } from 'react';
import { FormValues } from '../interfaces/interfaces';
import '../styles/contact.css';
import { Layout } from '../layout/Layout';
import Swal from 'sweetalert2';

const initialForm: FormValues = {
  name: '',
  email: '',
  description: ''
};

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState<FormValues>(initialForm);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://cv-backend-one.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      if (response.status === 200) {
        Swal.fire("All done!", "Your message has been sent!", "success");
      } else {
        Swal.fire("Oops!", "Something went wrong!", "error");
      }
    } catch (error) {
      Swal.fire("Oops!", "Something went wrong!", "error");
      console.error(error);
    }

    setForm(initialForm);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [form.description]);

  return (
    <Layout>
      <div className="contact">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            placeholder="Your message"
            name="description"
            value={form.description}
            onChange={handleChange}
            ref={textareaRef}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  );
};