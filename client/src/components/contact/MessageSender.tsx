import axios from "axios";

export const handleSubmit = async (
  name: string,
  email: string,
  message: string
) => {
  let errorMessages = "";

  if (!/.+/g.test(name)) {
    errorMessages += "名前を入力してください\n";
  }
  if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g.test(email)) {
    errorMessages += "メールアドレスを入力してください\n";
  }
  if (!/.+/g.test(message)) {
    errorMessages += "メッセージを入力してください\n";
  }

  if (errorMessages) {
    alert(errorMessages);
  } else {
    const data = {
      name: name,
      email: email,
      message: message,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_BASE_URL}/message`, data)
      .then((response) => {
        console.log(response);
        alert("送信しました");
      })
      .catch((error) => {
        console.log(error);
        alert("送信に失敗しました");
      });
  }
};
