'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+976) 8689 9766',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'cpurevjamts@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Ulaanbaatar, Mongolia',
  },
];

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const lastSubmissionTime = localStorage.getItem('lastSubmissionTime');
    const currentTime = new Date().getTime();

    // Check if the last submission was within the last 30 minutes
    if (
      lastSubmissionTime &&
      currentTime - lastSubmissionTime < 30 * 60 * 1000
    ) {
      toast.error('Please wait 30 minutes before sending another message.');
      return;
    }

    setLoading(true);
    toast.promise(
      emailjs.sendForm(
        'service_8jq881m',
        'template_xxbwtg8',
        form.current,
        'IOYieM5EuUuRxiiyA'
      ),
      {
        loading: 'Sending message...',
        success: () => {
          localStorage.setItem('lastSubmissionTime', currentTime); // Store the current time
          form.current.reset(); // Clear the form
          setLoading(false);
          return 'Message sent successfully!';
        },
        error: () => {
          setLoading(false);
          return 'Failed to send message, please try again later.';
        },
      }
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          {/* form */}
          <div className="order-2 xl:order-none xl:w-[54%]">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Why do developers love Batman? Because he always commits!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  required
                />
              </div>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                required
              />
              {/* btn */}
              <Button
                type="submit"
                size="md"
                className="max-w-40"
                loading={loading}
              >
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#27272c] text-accent xl:h-[72px] xl:w-[72px]">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Toaster />
    </motion.section>
  );
};

export default Contact;
