import React from "react";
import Toto from "../components/Toto";
import ParagraphPerso from "../components/ParagraphPerso";
import PetAKitten from "../components/PetAKitten/PetAKitten";
import Button from "../components/Button/Button";
import Jessik from "../components/Jessik";
import Champagne from "../components/champagne/Champagne";
import Sab from "../components/sabrina/Sab";

export default {
  title: "overview/Mélanie"
};

export const Mel = () => (
  <>
    <header className="container">
      <Toto />
    </header>

    <main style={{ backgroundColor: "blue" }} className="container">
      <Sab isText="Hi iu" />
      <h2>Welkom 2 ze be$t $ite</h2>
      <ParagraphPerso />
      <br />
      <h3>Iu have a kitty!</h3>
      <PetAKitten />
      <Jessik />
      <ParagraphPerso green />
      <h3>Let'$ partyyyyyyyyyy with</h3>
      <Champagne openBottle />
    </main>

    <footer className="container">
      <h3>Clic 2 $ub$cribe :</h3>
      <Button />
    </footer>
  </>
);
