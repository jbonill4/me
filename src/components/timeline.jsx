import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Experience</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-star" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Application Engineer Intern  <span>2020-2020</span></h2>
                        <p>Began Workday’s crash course on their proprietary programming language XpressO (X0) as well as learned how to communicate in a professional manner with both higher ups and peers. This internship was short lived due to COVID-19. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-star" />
                      </div>
                      <div className="timeline-label">
                        <h2>Media Desk Assistant  <span>2018-2020</span></h2>
                        <p>Assisted students requiring additional help to imporve over all comrehension of different software such as Blender, Maya, and Adobe Photoshop. I also assisted patrons in finding or selecting items from the libraries digital media collection.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-star" />
                      </div>
                      <div className="timeline-label">
                        <h2>Modified Supplemental Instruction Tutor  <span>2017-2018</span></h2>
                        <p>Worked closely with students to strngthen their understanding of material in accelerated introductory programming courses. I also planned out lessons and examples to break down concepts.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-star" />
                      </div>
                      <div className="timeline-label">
                        <h2>Quality Control Engineer Intern  <span>2017-2017</span></h2>
                        <p>Created LIMS(Lightning Information Management System) software that streamlined data management for ABC & Testing. I tested and debugged software. I also helped with data entry.</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
