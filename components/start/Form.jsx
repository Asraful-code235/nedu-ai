"use client";
import { useState } from "react";
import Button from "../shared/Button";
import { CountryAndFlags, flagIcons } from "@/constant/CountryAndFlags";

export default function Form() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [thankYou, setThankYou] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    tel: "",
    company: "",
    name: "",
  });

  const countryCodes = {
    Spain: "+34",
    // Bangladesh: "+880",
  };
  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    const countryCode = countryCodes[selectedCountry] || "";
    setFormData((prevData) => ({
      ...prevData,
      tel: countryCode,
    }));
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { firstName, lastName, email, message, company, tel, name } =
      formData;

    const emailBody = `Name: ${name} ${lastName}\nEmail: ${email}\nCompany: ${company}\nTel: ${tel}\nMessage: ${message}`;

    try {
      const response = await fetch("/api/mail/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailBody, fromEmail: email }),
      });

      if (response.ok) {
        setSuccess(true);
        setThankYou(true);
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!thankYou ? (
        <form
          onSubmit={handleSubmit}
          className="py-10 z-50 w-full max-w-[827px] xl:max-w-[744px] px-6 lg:px-[60px] lg:py-[36px] flex flex-col gap-7 bg-[#25252599] backdrop-blur rounded-2xl lg:rounded-[32px]"
        >
          <div className="border-b border-opacity-40 w-full flex-col flex items-start">
            <label
              className="visionParagraph text-sm lg:text-base font-medium lg:font-semibold text-white leading-5 tracking-[0.7px  ] lg:tracking-[0.8px]"
              htmlFor="name"
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Johnson"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-white bg-transparent text-sm font-medium lg:font-semibold leading-5 focus-within:border-none focus-within:outline-none outline-none border-none placeholder:text-white placeholder:text-opacity-40"
            />
          </div>
          <div className="border-b border-opacity-40 w-full flex-col flex items-start">
            <label
              className="visionParagraph text-base font-medium lg:font-semibold text-white leading-5 tracking-[0.8px]"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="john.johnson@company.com"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full text-white  bg-transparent text-sm font-medium lg:font-semibold leading-5 focus-within:border-none focus-within:outline-none outline-none border-none placeholder:text-white placeholder:text-opacity-40"
            />
          </div>

          <div className="border-b border-opacity-40 w-full flex-col flex items-start">
            <label
              className="visionParagraph text-base font-medium lg:font-semibold text-white leading-5 tracking-[0.8px]"
              htmlFor="tel"
            >
              Phone no.
            </label>
            <div className="flex items-center gap-4">
              <input
                type="tel"
                id="tel"
                placeholder={"+358 40 123 4567"}
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                className="w-full text-white bg-transparent text-sm font-medium lg:font-semibold leading-5 focus-within:border-none focus-within:outline-none outline-none border-none placeholder:text-white placeholder:text-opacity-40"
              />
            </div>
          </div>

          <div className="border-b border-opacity-40 w-full flex-col flex items-start">
            <label
              className="visionParagraph text-base font-medium lg:font-semibold text-white leading-5 tracking-[0.8px]"
              htmlFor="company"
            >
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              placeholder="Company / Organization name"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full text-white  bg-transparent text-sm font-medium lg:font-semibold leading-5 focus-within:border-none focus-within:outline-none outline-none border-none placeholder:text-white placeholder:text-opacity-40"
            />
          </div>
          <div className="border-b border-opacity-40 w-full flex-col flex items-start">
            <label
              className="visionParagraph text-base font-medium lg:font-semibold text-white leading-5 tracking-[0.8px]"
              htmlFor="message"
            >
              Message
            </label>
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full text-white  bg-transparent  text-sm font-medium lg:font-semibold leading-5 focus-within:border-none focus-within:outline-none outline-none border-none placeholder:text-white placeholder:text-opacity-40"
            />
          </div>
          <div className="w-full flex items-center justify-start">
            <Button
              type="submit"
              variant="light"
              disabled={success || loading}
              className="visionParagraph px-8 py-2 lg:py-[7.5px] lg:px-[47.7px] w-full sm:w-fit text-sm rounded-[5.714px] font-semibold leading-[24.297px] tracking-[0.7px] bg-white border-none outline-none"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 mr-2"></span>
                  <p>Sending...</p>
                </div>
              ) : success ? (
                <p className="text-[#ffad00]">
                  Thank you, we will soon be in touch with materials!
                </p>
              ) : (
                "Request Investor Materials"
              )}
            </Button>
          </div>
        </form>
      ) : (
        <div className="w-full flex xl:mt-36 items-center justify-center">
          <Button
            type="button"
            variant="light"
            disabled={true}
            className="visionParagraph px-8 bg-[#25252599] text-white py-4 lg:px-[47.7px] w-full sm:w-fit text-sm rounded-[5.714px] font-semibold leading-[24.297px] tracking-[0.7px]  border-none outline-none"
          >
            Thank you, we will soon be in touch with materials!
          </Button>
        </div>
      )}
    </>
  );
}
