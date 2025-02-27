import { motion } from 'framer-motion';
import Link from 'next/link';

import { MessageIcon, VercelIcon } from './icons';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-left max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <MessageIcon size={32} />
        </p>
        <p>
          I am Evolve, Solara6's expert AI consultant specializing in website optimization. 
          I'm here to help you improve your web presence through:
        </p>
        <ul className="list-disc pl-6">
          <li>Web Performance Optimization (WPO)</li>
          <li>Search Engine Optimization (SEO)</li>
          <li>Web Accessibility Compliance (WAC)</li>
          <li>Conversion Rate Optimization (CRO)</li>
          <li>Copy & Content Optimization</li>
          <li>Personalization Strategies</li>
        </ul>
        <p>
          Ask me anything about optimizing your website's performance, accessibility, 
          or conversion rates. I'll provide specific, actionable advice tailored to your needs.
        </p>
      </div>
    </motion.div>
  );
};
