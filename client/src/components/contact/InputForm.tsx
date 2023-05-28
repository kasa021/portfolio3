import React, { useState } from "react";

import styles from "./InputForm.module.css";
import MessageSender from "./MessageSender";

export const InputForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await MessageSender(name, email, message);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.section}>
        <h1 className={styles.contact}>Contact</h1>
        <form className={styles.form}>
          <div className={styles.box}>
            <label htmlFor="name" className={styles.name}>
              Name
            </label>
            <div className={styles.innerBox}>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className={styles.inputs}
              />
            </div>
          </div>
          <div className={styles.box}>
            <label htmlFor="email" className={styles.email}>
              Email
            </label>
            <div className={styles.innerBox}>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputs}
              />
            </div>
          </div>
          <div className={styles.messageBox}>
            <label htmlFor="message" className={styles.message}>
              Message
            </label>
            <div className={styles.innerTextBox}>
              <textarea
                id="message"
                name="message"
                rows={10}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.textarea}
              />
            </div>
          </div>
          <button type="submit" onClick={handleSubmit} className={styles.btn}>
            <span className={styles.btnText}>Send</span>
          </button>
        </form>
      </div>
    </>
  );
};
