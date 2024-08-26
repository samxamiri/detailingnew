// src/pages/contact.tsx

import React from "react";
import Layout from "../components/ui/Layout";
import Contact from "../components/ui/Contact";
import Head from "next/head";

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title> Contact Us | Sam&apos;s Mobile Detailing</title>
        <meta
          name="description"
          content="Want to get your mobile detailing questions answered as fast as possible? Give us a call at 514-772-4554!"
        />
      </Head>
      <Contact />
    </Layout>
  );
};

export default ContactPage;
