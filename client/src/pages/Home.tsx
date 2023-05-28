import { BsGithub, BsTwitter } from "react-icons/bs";

export const Home = () => {
  const handleGithubClick = () => {
    window.open("https://github.com/kasa021", "_blank");
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com/kAsA02_", "_blank");
  };

  return (
    <div>
      <img
        src="../public/me.jpg"
        alt="me"
        style={{ width: "100px", height: "100px" }}
      />
      <h1>Kasa</h1>
      <div>
        <button onClick={handleGithubClick}>
          <BsGithub />
        </button>
        <button onClick={handleTwitterClick}>
          <BsTwitter />
        </button>
      </div>
    </div>
  );
};
