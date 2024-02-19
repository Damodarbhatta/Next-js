"use client"

import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ServicePage: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const send: SubmitHandler<IFormInput> = async (data) => {
    try {
      console.log(data)
      const response = await fetch('/api/handlecontact', {
        method: 'POST',
        body: JSON.stringify(data), // Fix: Use data instead of register
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      console.log(data);
      alert('Form submitted successfully');
    } catch (error) {
      console.log('Error submitting form data', error);
    }
  };

  return (
   
    <div className='flex flex-col justify-center items-center w-full gap-5'>
    <div className='w-[25rem]'>
      <label htmlFor="name">Name</label>
      <Input
        type="text"
        placeholder="Enter your name..."
        {...register('name', {
          required: true,
        })}
        />
        </div>

<div className='w-[25rem]'>
  <label htmlFor="email">Email</label>
      <Input
        type="email"
        placeholder="Enter your email..."
        {...register('email', {
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Email address must be a valid address',
          },
        })}
        />
        </div>

<div className='w-[25rem]'>
  <label htmlFor="message">Message</label>
      <Textarea
        placeholder="Enter your message..."
        {...register('message', {
          required: true,
        })}
        />
        </div>

      <Button onClick={handleSubmit(send)}>Click Me</Button>
    </div>
  );
};

export default ServicePage;
