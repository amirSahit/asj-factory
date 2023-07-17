function ContactForm() {
  return (
    <form className="flex flex-col p-5 gap-2">
      <label htmlFor="name">Name</label>
      <input
        id="name"
        placeholder="Joe Doe"
        type="text"
        className="p-1 text-blue"
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        placeholder="example@email.com"
        type="email"
        className="p-1 text-blue"
      />
      <label htmlFor="inquiry">Inquiry</label>
      <textarea
        id="inquiry"
        placeholder="Your next awesome project"
        rows={5}
        className="p-1 text-blue"
      />
      <button
        type="submit"
        className="p-2 mt-2 bg-lightYellow text-black font-bold"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
