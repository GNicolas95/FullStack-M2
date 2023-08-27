import React from "react";
import Botones from "./Botones";

const studentName = "Gerónimo Almonte";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá

  const renderTechSkills = techSkills.map((skill, index) => (
    <li key={index}>{skill}</li>
  ))

  return (
    <div>
      <h1>Mi primer App con React</h1>
      <h3>{studentName}</h3>
      <ul>
        {renderTechSkills}
      </ul>
      <Botones alerts={alerts}/>
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
