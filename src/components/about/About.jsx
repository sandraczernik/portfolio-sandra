import React from 'react'
import './About.css'
import me from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {MdOutlineGrade} from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
        <div className="about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={me} alt="Image" />
            </div>
          </div>
          <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>3+ Years</small>
              </article>

              <article className='about_card'>
                <MdOutlineGrade className='about_icon'/>
                <h5>Grades</h5>
                <small>MComp Computer Science - 1st</small>
              </article>

              <article className='about_card'>
                <AiOutlineFundProjectionScreen className='about_icon'/>
                <h5>Projects</h5>
                <small>10+ Projects</small>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About