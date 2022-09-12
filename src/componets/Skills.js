import React from "react";
import "../styles/Skills.css";
import SkillsComp from "./SkillsComp";
const Skills = () => {
  return (
    <div className="cont-main-skills row justify-content-center align-content-center">
      <div className="col-md-8">
        <h3 className="mb-5" style={{ color: "white", textAlign:'center'}}>HABILIDADES</h3>
        <SkillsComp area="Html" level="90" progreso="90" />
        <SkillsComp area="Css" level="80" progreso="80" />
        <SkillsComp area="Js" level="70" progreso="70" />
        <SkillsComp area="Django" level="90" progreso="90" />
        <SkillsComp area="React" level="95" progreso="95" />
        <SkillsComp area="Bootstrap" level="100" progreso="100" />
      </div>
    </div>
  );
};

export default Skills;
