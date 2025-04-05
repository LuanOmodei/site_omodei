import { FC, useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      // In a real application, you would send the form data to a server
      // This is a simulation for demonstration purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitResult({
        success: true,
        message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-border-color focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-border-color focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Mensagem</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-border-color focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition resize-y"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
      
      {submitResult && (
        <div className={`p-3 rounded-md ${submitResult.success ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
          {submitResult.message}
        </div>
      )}
    </motion.form>
  );
};

export default ContactForm;