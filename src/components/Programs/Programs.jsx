import React from 'react';
import './Programs.css'; // Corrected import statement for CSS file
import Program_1 from '../../assets/Program_1.jpg';
import Program_2 from '../../assets/Program_2.jpg';
import Program_3 from '../../assets/Program_3.jpg';
import Program_4 from '../../assets/Program_4.jpg';
import Program_5 from '../../assets/Program_5.png';
import Program_6 from '../../assets/Program_6.png';

const Programs = () => {
  return (
    <>
    <div className="Program">
      <div className="cap">
        <img src={Program_1} alt='Program 1' />
        <h3>Douleur Chronique : Un Précurseur de la Dépression ?</h3>
        <p>Les douleurs chroniques affectent la vie quotidienne de douze millions de Français, causant des répercussions non seulement sur leur prop...<span>Lire la suite</span></p>
      </div>
      <div className='cap'>
        <img src={Program_2} alt='Program 2' />
        <h3>La dépression post-partum, les phtalates mis en cause !</h3>
        <p>Après la grossesse et l'accouchement, les femmes peuvent rencontrer le baby blues, une combinaison de tristesse et d'anxiété. Cela survient...<span>Lire la suite</span></p>
      </div>
      <div className='cap'>
        <img src={Program_3} alt='Program 3' />
        <h3>Troubles dépressifs, des mécanismes immunitaires en jeu?</h3>
        <p>
L'impact de la pandémie de Covid-19 sur la santé mentale, avec une augmentation significative des cas de dépression et de troubles de l'humeur, souligne...<span>Lire la suite</span></p>
      </div>
  </div>
    <div className='photoCards'>
      <div className='card'>
        <img src={Program_4} alt='Program 4' />
        <h3>L'efficacité à long terme des antidépresseurs dans la dépression post-partum.</h3>
        <p>La dépression post-partum affecte près de 20 % des nouvelles mères dans le mois suivant l'accouchement, selon les estimations... <span>Lire la suite</span></p>
      </div>

      <div className='card'>
        <img src={Program_5} alt='Program 5' />
        <h3>L'IA confrontée à la dépression et au stress post-traumatique</h3>
        <p>Seulement 30 % des personnes atteintes de troubles dépressifs majeurs reçoivent un traitement efficace, tandis qu'un patient sur quatre abandonne son suivi...<span>Lire la suite</span></p>
      </div>
      <div className='card'>
        <img src={Program_6} alt='Program 6' />
        <h3>Quand la perception des odeurs révèle beaucoup sur la dépression!</h3>
        <p>La faculté à percevoir des odeurs, l’olfaction, serait-elle un signe associé à la dépression et aux troubles dépressifs ? Alors que l’odorat a été largement...<span>Lire la suite</span></p>
      </div>
    </div>  
    </>
  );
}

export default Programs;
