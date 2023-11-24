"use client";
import { useState } from "react";
import Button from "../shared/Button";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;

    const emailBody = `Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    const mailtoLink = `mailto:info@nedu.ai?subject=Inquiry&body=${emailBody}`;

    const tempLink = document.createElement("a");
    tempLink.href = mailtoLink;
    tempLink.target = "_blank";
    tempLink.click();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-10 z-50 w-full max-w-[827px] xl:max-w-[550px] px-6 lg:px-16 flex flex-col gap-7 bg-[#25252599] backdrop-blur rounded-2xl lg:rounded-[32px]"
    >
      <div className="border-b border-opacity-40 w-full flex-col flex items-start">
        <label
          className="text-sm lg:text-base font-semibold text-white leading-5 tracking-[0.7px  ] lg:tracking-[0.8px]"
          htmlFor="firstName"
        >
          First Name*
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="John"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full text-white bg-transparent text-sm font-semibold leading-5 focus-within:border-none focus-within:outline-none outline-none border-none placeholder:text-white placeholder:text-opacity-40"
        />
      </div>
      <div className="border-b border-opacity-40 w-full flex-col flex items-start">
        <label
          className="text-base font-semibold text-white leading-5 tracking-[0.8px]"
          htmlFor="lastName"
        >
          Last Name*
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Doe"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full text-white  bg-transparent  text-sm font-semibold leading-5 focus-within:border-none focus-within:outline-none outline-none border-none placeholder:text-white placeholder:text-opacity-40"
        />
      </div>
      <div className="border-b border-opacity-40 w-full flex-col flex items-start">
        <label
          className="text-base font-semibold text-white leading-5 tracking-[0.8px]"
          htmlFor="email"
        >
          Email*
        </label>
        <input
          type="email"
          id="email"
          placeholder="johndoe@mail.xyz"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full text-white  bg-transparent text-sm font-semibold leading-5 focus-within:border-none focus-within:outline-none outline-none border-none placeholder:text-white placeholder:text-opacity-40"
        />
      </div>
      <div className="border-b border-opacity-40 w-full flex-col flex items-start">
        <label
          className="text-base font-semibold text-white leading-5 tracking-[0.8px]"
          htmlFor="message"
        >
          Message*
        </label>
        <input
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          className="w-full text-white  bg-transparent  text-sm font-semibold leading-5 focus-within:border-none focus-within:outline-none outline-none border-none placeholder:text-white placeholder:text-opacity-40"
        />
      </div>
      <div className="w-full flex items-center justify-end">
        <Button
          type="submit"
          variant="light"
          className="px-8 py-2 md:py-[12px] lg:py-[18px] w-full sm:w-fit text-sm rounded font-semibold leading-6 tracking-[0.7px] bg-white border-none outline-none"
        >
          Request Info
        </Button>
      </div>
    </form>
  );
}