"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+234 814 860 2296",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "oluwatiseolubiyi@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lagos, Nigeria",
  },
];

const SERVICE_LABELS = {
  web: "Web Development",
  ui: "UI/UX Design",
  mobile: "Mobile App Dev",
  backend: "Backend & APIs",
};

const initialForm = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus({
        type: "error",
        text: "Contact form key is missing. Add NEXT_PUBLIC_WEB3FORMS_KEY to .env and restart the server.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio Inquiry from ${formData.firstname} ${formData.lastname}`.trim(),
          from_name: `${formData.firstname} ${formData.lastname}`.trim(),
          name: `${formData.firstname} ${formData.lastname}`.trim(),
          email: formData.email,
          phone: formData.phone,
          service: SERVICE_LABELS[formData.service] || formData.service || "Not specified",
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus({
          type: "success",
          text: "Message sent! I will get back to you soon.",
        });
        setFormData(initialForm);
      } else {
        setStatus({
          type: "error",
          text: data.message || "Could not send message. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        text: "Network error while sending message. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.3, ease: "easeInOut" },
      }}
      className="py-8 xl:py-12"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col xl:flex-row gap-[30px] xl:gap-[50px]">
          
          {/* Form Container - order-1 on mobile so users see the form immediately */}
          <div className="w-full xl:w-[54%] order-1 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-6 sm:p-10 bg-[#27272c] rounded-2xl border border-white/5 shadow-xl"
            >
              <h3 className="text-3xl sm:text-4xl text-accent font-bold">Let's work together</h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Reach out to discuss new projects, full-stack development opportunities, or potential collaborations.
              </p>
              
              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange("firstname")}
                  required
                  className="bg-primary/40 border-white/10"
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange("lastname")}
                  required
                  className="bg-primary/40 border-white/10"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange("email")}
                  required
                  className="bg-primary/40 border-white/10"
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  className="bg-primary/40 border-white/10"
                />
              </div>

              {/* select */}
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
              >
                <SelectTrigger className="w-full bg-primary/40 border-white/10">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-[#27272c] border-white/10 text-white">
                  <SelectGroup>
                    <SelectLabel className="text-accent">Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="ui">UI/UX Design</SelectItem>
                    <SelectItem value="mobile">Mobile App Dev</SelectItem>
                    <SelectItem value="backend">Backend & APIs</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                className="h-[180px] sm:h-[200px] bg-primary/40 border-white/10 resize-none"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange("message")}
                required
              />

              {status.text && (
                <p
                  className={`text-sm font-medium ${
                    status.type === "success" ? "text-accent" : "text-red-400"
                  }`}
                >
                  {status.text}
                </p>
              )}

              {/* submit button */}
              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full sm:max-w-[180px] uppercase font-medium tracking-wide"
              >
                {submitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>

          {/* Info Container - order-2 on mobile */}
          <div className="w-full xl:flex-1 flex items-center xl:justify-end order-2 xl:order-none my-4 xl:my-0">
            <ul className="flex flex-col gap-6 sm:gap-10 w-full">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 p-4 sm:p-0 bg-[#27272c]/40 sm:bg-transparent rounded-xl border border-white/5 sm:border-none">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] border border-white/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                      <div className="text-xl sm:text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-xs sm:text-sm font-light uppercase tracking-wider">{item.title}</p>
                      <h3 className="text-base sm:text-xl font-medium text-white">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;