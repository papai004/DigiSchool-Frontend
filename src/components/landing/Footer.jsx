const style = {
  textDecoration: "none",
  color: "white",
  marginRight: "0.3rem",
};

const githubProfiles = [
  {
    name: "Papai",
    link: "https://github.com/papai004",
  },
  {
    name: "Bijoy",
    link: "https://github.com/Bijoy-007",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div
      style={{
        backgroundColor: "#1B1B1B",
        padding: "2%",
        textAlign: "center",
        color: "white",
        width: "100%",
        paddingTop: "1rem",
        marginBottom: "-2rem",
      }}
    >
      <p>Copyright@{year}</p>
      <p>
        Made with 💖 by DevConquerors (
        {githubProfiles.map((profile) => (
          <a style={style} href={profile.link}>
            {profile.name}
          </a>
        ))}
        )
      </p>
    </div>
  );
};

export default Footer;
