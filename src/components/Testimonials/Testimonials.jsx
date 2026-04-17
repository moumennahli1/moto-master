import "./Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Startup Founder",
    message:
      "Working with Moumen was a great experience. The website was fast, modern, and perfectly optimized.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "David Miller",
    role: "Product Manager",
    message:
      "Professional, creative, and detail-oriented. The UI and animations were top-notch.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Creative Director",
    message:
      "Amazing front-end skills. Clean code, smooth experience, and excellent communication.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>Testimonials</h2>
        <p>What people say about my work</p>
      </div>

      <div className="testimonials-grid">
        {testimonialsData.map(({ id, name, role, message, avatar }) => (
          <div key={id} className="testimonial-card">
            <img src={avatar} alt={name} />
            <p className="testimonial-message">“{message}”</p>
            <h4>{name}</h4>
            <span>{role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
