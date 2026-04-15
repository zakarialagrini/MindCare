import React from 'react'
import'./About.css';
import about_img from'../../assets/about_img.jpg'
import play_icon from'../../assets/play-icon.png'

export const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
           <img src={about_img} alt="" className='about_img' /> 
           {/* <img src={play_icon} alt="" className='play_icon' />  */}
        </div>
        <div className="about-right">
            <h3>ABOUT Us</h3>
            <h2>Programme Complet pour Surmonter 
              la Dépression 
              et Améliorer le Bien-Être Mental</h2>
            <p>Nous offrons une gamme de services spécialisés pour aider les individus à surmonter 
              la dépression et à améliorer leur bien-être mental,
               y compris des consultations individuelles.</p>
            <p>En plus des consultations individuelles,
               nous proposons des thérapies de groupe dirigées par des professionnels 
              expérimentés pour offrir un soutien et des partages entre pairs.</p>
            <p>Nous organisons régulièrement des ateliers éducatifs sur la gestion 
              du stress et l'auto-soin, fournissant aux participants des outils
               pratiques pour améliorer leur bien-être mental au quotidien.</p>
        </div>

    </div>
  )
}
