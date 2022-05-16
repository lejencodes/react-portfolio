import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assests/twitter.png",
      desc: "I'm dummy no-3.If someone asks me for a programmer first name is Lejen I would suggest.He is funny,professional and charge extremly low amount",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assests/youtube.png",
      desc: "Hey there! I am dummy no-1 for Lejen's testimonials.I have never seen anyone hard working like him.I needed a E-COM website in under 3 months but he finished the task in jsut 1 month",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assests/linkedin.png",
      desc: "I'm dummy no-2 and one thing I know is Lejen is a very funny and focused person.He enjoy every work he do and that's why the output of his work is professional.",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <h6>
        Sorry,I have no testimonials for now :( for demo I added dummy data to
        page.
      </h6>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "featured card" : "card"}>
            <section className="top">
              <img src="assests/right-arrow.png" alt="" className="left-img" />
              <img src="assests/me.png" alt="" className="user" />
              <img src={d.icon} alt="" className="right-img" />
            </section>
            <section className="center">{d.desc}</section>
            <section className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
