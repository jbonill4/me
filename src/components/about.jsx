import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About me</span>
                    <p>Hi! My name is Jason and I was first introduced to software development my senior year of high school back in 2016. This eventually led to my graduation from the Univeristy of California, Santa Cruz in 2020 with a Bachelors of Science in Computer Science and Engineering. During my four years I fell in love with all things front end and databases.
                    On my free time I love exploring new technologies, building custom keyboards and pcs, and playing video games. I am currently on the market for a software engineering position so if you can be of any help my contact information is to the left. Thank you! :)</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Projects</span>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-key" />
                </span>
                <div className="desc">
                    <h3>Reddit & Twitter trading bot </h3>
                    <p>Live sentiment analysis trading bot that handles popular cryptocurrencies such as Bitcoin, Dogecoin and Ethereum based
                        off the overall sentiment of live comments under different subreddits using a rsi trading strategy</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Face Detection</h3>
                    <p>Real-Time face detection Javascript web application that accesses your webcam and identifies all facial expressions and facial
                        landmarks using face-api.js to determine your mood</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-star"/>
                </span>
                <div className="desc">
                    <h3>J.A.R.V.I.S </h3>
                    <p>A python voice assistant, inspired by the voice assistant in Iron Man, that uses Speech Recognition, PyAudio, and pyttsx3</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Technical Skills</span>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Testing & Debugging </h3>
                    <p>My mentor at my first intership taught me how to effectively test and debug large code bases that I have continued to practice to this day</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>I am very confident with my grasp on fundemental concepts of Data Structures and Algorithms</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-phone3"/>
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have built several applications using JavaScript, HTML, CSS, React both in and out of school</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        
      </div>
    )
  }
}
