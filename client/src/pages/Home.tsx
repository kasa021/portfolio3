import { BsGithub, BsTwitter } from "react-icons/bs";

export const Home = () => {
  const handleGithubClick = () => {
    window.open("https://github.com/kasa021", "_blank");
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com/kasa_ame__", "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src="/umbrella.jpg"
          alt="me"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <div className={styles.title}>
        <h1>kAsA</h1>
      </div>
      <div className={styles.description}>
        <button onClick={handleGithubClick} className={styles.button}>
          <BsGithub className={styles.icon} />
        </button>
        <button onClick={handleTwitterClick}>
          <BsTwitter />
        </button>
      </div>
    </div>
  );
};
