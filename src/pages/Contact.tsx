import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { JSX } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact(): JSX.Element {
  useDocumentTitle("Contact");
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <motion.section
      className="p-4 sm:p-6 md:p-8 max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
            })}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="w-full p-2 border rounded"
            rows={5}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </motion.section>
  );
}