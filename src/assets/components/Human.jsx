import React from 'react';

import hand from '../images/parts/hand.png'
import handNull from '../images/parts/null/hand.png'
import handEmpty from '../images/parts/empty/hand.png'

import leg from '../images/parts/leg.png'
import legNull from '../images/parts/null/leg.png'
import legEmpty from '../images/parts/empty/leg.png'

import cucumber from '../images/parts/cucumber.png'
import cucumberNull from '../images/parts/null/cucumber.png'
import cucumberEmpty from '../images/parts/empty/cucumber.png'

import maleEmpty from '../images/male/empty.png'
import maleBlack from '../images/male/black.png'
import maleWhite from '../images/male/white.png'

import femaleEmpty from '../images/female/empty.png'
import femaleBlack from '../images/female/black.png'
import femaleWhite from '../images/female/white.png'

export default ({ sex, skin, active, func }) => {
  if (active)
    switch (sex) {
      case "male":
        switch (skin) {
          case "black":
            return (<img className="Pointer" src={maleBlack} alt="black male" onClick={func} />);
          case "white":
            return (<img className="Pointer" src={maleWhite} alt="white male" onClick={func} />);
          default:
            return (<img src={maleEmpty} alt="male" />);
        }
      case "female":
        switch (skin) {
          case "black":
            return (<img className="Pointer" src={femaleBlack} alt="black female" onClick={func} />);
          case "white":
            return (<img className="Pointer" src={femaleWhite} alt="white female" onClick={func} />);
          default:
            return (<img src={femaleEmpty} alt="female" />);
        }
      default:
        return (<img src={maleEmpty} alt="male" />);
    }
  else
    switch (sex) {
      case "male":
        return (<img src={maleEmpty} alt="male" />);
      case "female":
        return (<img src={femaleEmpty} alt="female" />);
      default:
        return (<img src={maleEmpty} alt="male" />);
    }
}

export const HumanPart = ({ part, status, func }) => {
  switch (part) {
    case "hand":
      switch (status) {
        case "added":
          return (<img className="Pointer" src={hand} alt="hand" onClick={func} />);
        case "can":
          return (<img className="Pointer" src={handEmpty} alt="hand" onClick={func} />);
        case "cannot":
          return (<img src={handNull} alt="hand" onClick={func} />);
        default:
          return null;
      }
    case "leg":
      switch (status) {
        case "added":
          return (<img className="Pointer" src={leg} alt="leg" onClick={func} />);
        case "can":
          return (<img className="Pointer" src={legEmpty} alt="leg" onClick={func} />);
        case "cannot":
          return (<img src={legNull} alt="leg" onClick={func} />);
        default:
          return null;
      }
    case "cucumber":
      switch (status) {
        case "added":
          return (<img className="Pointer" src={cucumber} alt="cucumber" onClick={func} />);
        case "can":
          return (<img className="Pointer" src={cucumberEmpty} alt="cucumber" onClick={func} />);
        case "cannot":
          return (<img src={cucumberNull} alt="cucumber" onClick={func} />);
        default:
          return null;
      }
    default:
      return null;
  }
}