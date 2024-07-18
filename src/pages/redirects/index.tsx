import axios from "axios";
import { useEffect, useState } from "react";
import config from "index";
import { Container } from "../Instruments/FS/styled";

export default function RedirectURL() {
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    axios
      .get(`${config.api}${window.location.pathname}`)
      .then((res) => {
        window.location.replace(res.data.url);
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage(e.response.data.error);
      });
  }, []);

  return (
    <Container>
      <div>{errorMessage ? errorMessage : "redirecting..."}</div>
    </Container>
  );
}
