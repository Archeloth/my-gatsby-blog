import React from 'react';
import Layout from '../layout';
import papan01 from '../../static/Konfest.png';
import SEO from '../components/SEO';
import './about.scss';

const About = () => {
  return (
    <Layout>
      <SEO title="About" path="/about" />
      <article className="about">
        <img src={papan01} className="user-avatar" alt="papan01" />
        <section className="about-context">
          <div>
            <h3>About</h3>
            <p className="time">2019-12-11</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ab tempore commodi vero et a omnis architecto, temporibus facilis. Iste ducimus facilis ullam? Ratione, eaque saepe neque incidunt ab optio.
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default About;
