import React from 'react';
import './Country.css';
import ca from '../../assets/canada.png';
import In from '../../assets/india.png';
import us from '../../assets/united-states.png';
import who from '../../assets/who.png';
function country() {
  return (
    <div className="gpt3__brand section__padding" id="cnty">
      <div>

      </div>
      <div>
        <a href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html"> <img src={ca} alt="Canada gov" /></a>
      </div>
      <div>
        <a href="https://www.mygov.in/covid-19/"><img src={In} alt="indian gov" /></a>
      </div>
      <div>
        <a href="https://www.usa.gov/coronavirus"><img src={us} alt="Usa gov" /></a>
      </div>
      <div>
        <a href="https://covid19.who.int/"><img src={who} alt="W.H.O" /></a>
      </div>

    </div>
  );
}

export default country
