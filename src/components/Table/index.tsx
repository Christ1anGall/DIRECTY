import api from "../../api";
import { ContainerTable } from "./style";
import { useNavigate } from "react-router-dom";

const TableData = ({ data, hora, tempo }: any) => {
  let navigate = useNavigate();

  return (
    <ContainerTable>
      <button onClick={() => navigate("/")}>voltar</button>
      <h1>{data}</h1>
      <h2>{hora}</h2>
      <h2>{tempo}/ms</h2>
    </ContainerTable>
  );
};

export default TableData;
