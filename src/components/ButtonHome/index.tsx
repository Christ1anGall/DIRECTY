import { useEffect, useState } from "react";
import api from "../../api";
import { ContainerMain, HomeButtonStyled } from "./style";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const [firstClickTime, setfirstClickTime] = useState(0);
  const [secondClickTime, setSecondClickTime] = useState(0);
  const [clicks, setClicks] = useState(0);
  let navigate = useNavigate();

  const click = async () => {
    setClicks(clicks + 1);

    if (clicks === 0) {
      setfirstClickTime(new Date().getTime());
    }

    if (clicks === 1 || clicks > 2) {
      setSecondClickTime(new Date().getTime());

      setClicks(0);
    }
  };

  const totalTime = secondClickTime - firstClickTime;

  useEffect(() => {
    if (totalTime > 1) {
      api
        .post("", {
          id: uuidv4(),
          timeBetweenClicks: totalTime,
          date: new Date().toLocaleDateString(),
          hour: new Date().toLocaleTimeString(),
        })
        .then((res) => {
          console.log(res);

          navigate("/table");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return (
    <ContainerMain>
      <HomeButtonStyled onClick={click}>
        Aperte 2 vezes para Entrar
      </HomeButtonStyled>
    </ContainerMain>
  );
};

export default HomeButton;
