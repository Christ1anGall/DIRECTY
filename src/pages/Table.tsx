import { FormEventHandler, useEffect, useState } from "react";
import api from "../api";
import TableData from "../components/Table";
import { Itime } from "../interface/timeInterface";

const Table = () => {
  const [table, setTable] = useState([] as Itime[]);

  const [render, setRender] = useState(false);

  useEffect(() => {
    api.get("/table").then((res) => {
      setTable(res.data);
    });
  }, []);

  const filtroData = () => {
    const talbeDes = table.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      }
      if (a.date < b.date) {
        return 1;
      }

      return 0;
    });
    setTable(talbeDes);
    setRender(!render);
  };

  const filtTempo = () => {
    const talbeDes = table.sort((a, b) => {
      if (a.hour > b.hour) {
        return -1;
      }
      if (a.hour < b.hour) {
        return 1;
      }

      return 0;
    });
    setTable(talbeDes);
    setRender(!render);
    console.log(table);
  };

  const filtroDataDES = () => {
    const talbeDes = table.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      }
      if (a.date < b.date) {
        return 1;
      }

      return 0;
    });
    setTable(talbeDes);
    setRender(!render);
  };

  const filtTempoDES = () => {
    const talbeDes = table.sort((a, b) => {
      if (a.hour > b.hour) {
        return 1;
      }
      if (a.hour < b.hour) {
        return -1;
      }

      return 0;
    });
    setTable(talbeDes);
    setRender(!render);
    console.log(table);
  };

  const filtroDataIntervalo = (e: any): void => {
    e.preventDefault();

    const targetA = e.target;

    const intervalo = table.filter((value) => {
      return value.date > targetA[0].value && value.date < targetA[1].value;
    });

    setTable(intervalo);
    setRender(!render);
  };

  return (
    <div>
      <h1>bem vindo</h1>
      <form onSubmit={filtroDataIntervalo}>
        <input type="date" />
        <input type="date" />

        <button type="submit">filtrar por data</button>
      </form>
      <button onClick={filtTempoDES}>filtro DES TEMPO</button>
      <button onClick={filtroDataDES}>filtro DES DATA</button>
      <button onClick={filtTempo}>filtro ASC TEMPO</button>
      <button onClick={filtroData}>filtro ASC DATA</button>

      <ul>
        {table.map((res: Itime) => {
          return (
            <TableData
              key={res.id}
              data={res.date}
              hora={res.hour}
              tempo={res.timeBetweenClicks}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Table;
