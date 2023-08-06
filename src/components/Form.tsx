import { useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

function Form() {
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      // trims whitespace and checks to avoid spam blank emails
      const name = form.current.user_name.value.trim();
      const email = form.current.user_email.value.trim();
      const subject = form.current.user_subject.value.trim();
      const message = form.current.message.value.trim();

      if (!name || !email || !message || !subject) {
        alert("Please fill in all the required fields.");
        return;
      }

      emailjs
        .sendForm(
          "service_hzebjpp",
          "template_hp7s4c8",
          form.current,
          "LmI3UkRKc5iOMcnTv"
        )
        .then(
          (result) => {
            console.log(result.text);
            form.current?.reset();
            setEmailSent(true);
          },
          (error) => {
            console.log(error.text);
            alert("Email not sent, please try again!");
          }
        );
    }
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      {emailSent ? <p>Thanks for your message! I'll be in touch...</p> : null}
      <div className="input-control i-c-2">
        <input type="text" name="user_name" required placeholder="YOUR NAME" />
        <input
          type="email"
          name="user_email"
          required
          placeholder="YOUR EMAIL"
        />
      </div>
      <div className="input-control">
        <input
          type="text"
          name="user_subject"
          required
          placeholder="ENTER SUBJECT"
        />
      </div>
      <div className="input-control">
        <textarea
          name="message"
          id=""
          cols={15}
          rows={8}
          placeholder="Message here..."
        />
      </div>
      <button className="alt-btn" type="submit" value="Send">
        <span className="btn-text">Send</span>
        <span className="btn-icon">
          <FaPaperPlane className="i" />
        </span>
      </button>
    </form>
  );
}

export default Form;
