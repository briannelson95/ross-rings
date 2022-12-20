import React, { useState } from 'react';
import { sendContactForm } from '../lib/api';

const initValues = {
  name: "",
  email: "",
  message: ""
}

const initState = {values: initValues}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [state, setState] = useState(initState);
  const { values } = state;

  const handleChange = ({target}) => setState((prev) => ({
    ...prev, 
    values: {
      ...prev.values,
      [target.name]: target.value
    }
  }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true
    }));

    try {
      await sendContactForm(values) 
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message
      }));
    }
  }

  return (
    <form
      className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
    >
      <h1 className="text-2xl font-bold dark:text-gray-50">
        Send a message
      </h1>
      <label
        htmlFor="fullname"
        className="text-gray-500 font-light mt-8 dark:text-gray-50"
      >
        Full Name<span className="text-red-500 dark:text-gray-50">*</span>
      </label>
      <input
        type="text"
        value={values.name}
        onChange={handleChange}
        name="name"
        required
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
      />

      <label
        htmlFor="email"
        className="text-gray-500 font-light mt-4 dark:text-gray-50"
      >
        Email
      </label>
      <input
        type="email"
        name="email"
        required
        value={values.email}
        onChange={handleChange}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
      />
 
      <label
        htmlFor="message"
        className="text-gray-500 font-light mt-4 dark:text-gray-50"
      >
        Message
      </label>
      <textarea
        name="message"
        required
        value={values.message}
        onChange={handleChange}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
      />
          
      <div className="flex flex-row items-center justify-start">
        <button
          disabled={!values.name || !values.email || !values.message}
          type="submit"
          onClick={onSubmit}
          className="px-10 mt-8 py-2 bg-firefly text-white font-light rounded-md text-lg flex flex-row items-center disabled:opacity-75"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
