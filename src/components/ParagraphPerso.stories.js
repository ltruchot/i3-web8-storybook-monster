import React from "react";
import ParagraphPerso from "./ParagraphPerso";
import "./ParagraphPerso.scss";

export default {
  title: "ParagraphPerso",
  component: ParagraphPerso
};

export const basic = () => <ParagraphPerso />;

export const isGreen = () => <ParagraphPerso green />;
