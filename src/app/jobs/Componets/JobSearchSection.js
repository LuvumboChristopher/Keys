import React, { useState } from 'react';

const JobSearchSection = () => {
    const [keywords, setKeywords] = useState('');
    const [location, setLocation] = useState('0');
    const [category, setCategory] = useState('0');

    return (
        <section className="pxp-page-header-simple" style={{ backgroundColor: 'var(--pxpMainColorLight)' }}>
            <div className="pxp-container">
                <h1>Jobs</h1>
                <div className="pxp-hero-subtitle pxp-text-light">
                    Search your career opportunity through 12,800 jobs
                </div>
                <div className="pxp-hero-form pxp-hero-form-round pxp-large mt-3 mt-lg-4">
                    <form
                        id="pxp-jobs-page-search-form"
                        className="row gx-3 align-items-center"
                        role="search"
                        method="get"
                        action="https://pixelprime.co/themes/jobster-wp/demo-1/jobs-list/"
                    >
                        <input type="hidden" name="sort" id="sort" value="newest" autoComplete="off" />
                        <input type="hidden" name="type" id="type" value="" />
                        <input type="hidden" name="level" id="level" value="" />
                        <div className="col-12 col-lg">
                            <div className="input-group mb-3 mb-lg-0">
                                <span className="input-group-text">
                                    <span className="fa fa-search"></span>
                                </span>
                                <input
                                    type="text"
                                    name="keywords"
                                    id="keywords"
                                    className="form-control"
                                    value={keywords}
                                    placeholder="Job Title or Keyword"
                                    onChange={(e) => setKeywords(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-lg pxp-has-left-border">
                            <div className="input-group mb-3 mb-lg-0">
                                <span className="input-group-text">
                                    <span className="fa fa-globe"></span>
                                </span>
                                <select
                                    className="form-select"
                                    name="location"
                                    id="location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                >
                                    <option value="0">All Locations</option>
                                    <option value="15">Boston, MA</option>
                                    <option value="16">Chicago, IL</option>
                                    <option value="17">Houston, TX</option>
                                    <option value="18">Los Angeles, CA</option>
                                    <option value="19">New York, NY</option>
                                    <option value="20">San Diego, CA</option>
                                    <option value="21">San Francisco, CA</option>
                                    <option value="22">Seattle, WA</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-lg pxp-has-left-border">
                            <div className="input-group mb-3 mb-lg-0">
                                <span className="input-group-text">
                                    <span className="fa fa-folder-o"></span>
                                </span>
                                <select
                                    className="form-select"
                                    name="category"
                                    id="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="0">All Categories</option>
                                    <option value="23">Business Development</option>
                                    <option value="24">Construction</option>
                                    <option value="25">Customer Service</option>
                                    <option value="26" selected>
                                        Finance
                                    </option>
                                    <option value="27">Healthcare</option>
                                    <option value="28">Human Resources</option>
                                    <option value="29">Marketing & Communication</option>
                                    <option value="30">Project Management</option>
                                    <option value="31">Software Engineering</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-lg-auto">
                            <button type="submit">Find Jobs</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default JobSearchSection;
