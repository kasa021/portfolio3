import styles from "./AboutMe.module.css";

export const AboutMe = () => {
  return (
    <article className={styles.container}>
      <div className={styles.introduction}>
        <h2>About Me</h2>
        <p>
          2002年7月8日生まれの20歳、福島県出身です。<br></br>
          埼玉大学工学部情報工学科学部3年です。
        </p>
        <p>
          中学から高校は陸上部に所属していました。高校では主に400mを走っていました。
        </p>
        <p>
          情報工学科に所属していることもありプログラミングをしたいという思いと、
          2年生になりサークル活動に規制が緩和されたこともありプログラミングサークル
          Maximumに入ったことがきっかけでプログラミングを始めました。
        </p>
        <p>
          競技プログラミングはAtCoderを中心にやっています。AtCoderのレートは現在891で
          <span className={styles.green}>緑色</span>です。上位13%になります。
          <br></br>
          <a href="https://atcoder.jp/users/kAsA02" className={styles.atcoder}>
            Atcoder: kAsA02
          </a>
        </p>
        <p>
          2年の3月ごろからWebのことについて勉強し始めました。初めはVue.js,Nuxt.jsについて少し勉強し今は、
          Reactについて勉強しています<br></br>
        </p>
      </div>
      <div className={styles.skills}>
        <h2>skills</h2>
        <p>言語: C, C++, JaveScript, TypeScript, React, HTML, CSS</p>
        <p>少し勉強したくらいのものも含まれます</p>
      </div>
    </article>
  );
};
