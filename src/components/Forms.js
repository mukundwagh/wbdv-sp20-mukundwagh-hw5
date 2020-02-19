import React from 'react';
import './stylesheets/Forms.css'

const Forms = () =>
    <div>

        <div className="row save-div">
            <div className="save-btn">
                <button className="btn btn-success">
                    Save
                </button>
            </div>


            <div className="row switchToggle">
                <label className="label label-default">Preview</label>
                <label className="switch">
                    <input type="checkbox" id="preview-toggle"></input>
                        <span className="slider round"></span>
                </label>
            </div>

        </div>
        <div className="heading-widget-div">
        <div className="row heading-widget-title">
                    <span className="heading-text">
                        <h3>Heading widget</h3>
                    </span>
            <div className="widget-div">
                <a href="#" className="arrow-icon"><span><em className="fa fa-arrow-down"></em></span></a>
                <a href="#" className="arrow-icon"><span><em className="fa fa-arrow-up"></em></span></a>
                <span><select className="widget-selector" id="role-select1">
                                    <option selected>Heading</option>
                                    <option>Paragraph</option>
                                    <option>List</option>
                                    <option>Image</option>
                            </select></span>
                <a href="#" className="cancel-icon"><span><em className="fa fa-times-circle"></em></span></a>
            </div>
        </div>

        <div className="input-field-section">
            <input className="form-control form-control-elements" id="heading" placeholder="Heading text"></input>
                <select className="form-control form-control-elements" id="role-select2">
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                    <option>Heading 3</option>
                    <option>Heading 4</option>
                </select>
                <input className="form-control form-control-elements" id="heading-widget" placeholder="Widget name"></input>
                    <h5 className="form-control-elements">Preview </h5>
                    <h2 className="form-control-elements">Heading text</h2>

        </div>
    </div>

        <div className="heading-widget-div">

            <div className="row heading-widget-title">
                    <span className="heading-text">
                        <h3>Paragraph widget</h3>
                    </span>
                <div className="widget-div">
                    <a href="#" className="arrow-icon"><span><em className="fa fa-arrow-down"></em></span></a>
                    <a href="#" className="arrow-icon"><span><em className="fa fa-arrow-up"></em></span></a>
                    <span><select className="widget-selector" id="role-select3">
                                    <option>Heading</option>
                                    <option selected>Paragraph</option>
                                    <option>List</option>
                                    <option>Image</option>
                                </select></span>
                    <a href="#" className="cancel-icon"><span><em className="fa fa-times-circle"></em></span></a>
                </div>
            </div>
            <div className="input-field-section">
                    <textarea className="form-control form-control-elements" id="textarea" rows="3"
                              placeholder="Hi paragraph"></textarea>

                <input type="text-area" className="form-control form-control-elements" id="textarea-widget"
                       placeholder="Widget name"></input>
                    <h5 className="form-control-elements">Preview </h5>
                    <h6>Hi paragraph</h6>
            </div>
        </div>


        <div className="heading-widget-div">
            <div className="row heading-widget-title">
                    <span className="heading-text">
                        <h3>List widget</h3>
                    </span>
                <div className="widget-div">
                    <a href="#" className="arrow-icon"><span><em className="fa fa-arrow-down"></em></span></a>
                    <a href="#" className="arrow-icon"><span><em className="fa fa-arrow-up"></em></span></a>
                    <span><select className="widget-selector" id="role-select4">
                                    <option>Heading</option>
                                    <option>Paragraph</option>
                                    <option selected>List</option>
                                    <option>Image</option>
                                </select></span>
                    <a href="#" className="cancel-icon"><span><em className="fa fa-times-circle"></em></span></a>
                </div>
            </div>

            <div className="input-field-section">
                    <textarea className="form-control form-control-elements" id="exampleFormControlTextarea1" rows="3"
                              placeholder="Put each item in a separate row"></textarea>
                <select className="form-control form-control-elements" id="role-select">
                    <option selected>Ordered List</option>
                    <option>Unordered List</option>
                </select>
                <input className="form-control form-control-elements" id="username" placeholder="Widget name"></input>
                    <h5 className="form-control-elements">Preview</h5>
                    <ul>
                        <li>a</li>
                        <li>b</li>
                        <li>c</li>
                    </ul>
            </div>
        </div>


        <div className="heading-widget-div">
            <div className="row heading-widget-title">
                    <span className="heading-text">
                        <h3>Image widget</h3>
                    </span>
                <div className="widget-div">
                    <a href="#" className="arrow-icon"><span><em className="fa fa-arrow-down"></em></span></a>
                    <a href="#" className="arrow-icon"><span><em className="fa fa-arrow-up"></em></span></a>
                    <span><select className="widget-selector" id="">
                                    <option>Heading</option>
                                    <option>Paragraph</option>
                                    <option>List</option>
                                    <option selected>Image</option>
                                </select></span>
                    <a href="#" className="cancel-icon"><span><em className="fa fa-times-circle"></em></span></a>

                </div>
            </div>

            <div className="input-field-section">
                <input className="form-control form-control-elements" id="image-name"
                       placeholder="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"></input>
                    <input className="form-control form-control-elements" id="image-widget" placeholder="Widget name"></input>
                        <h5 className="form-control-elements">Preview </h5>
                        <img className="image-preview"
                             src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                             width="300px" height="200px"></img>
            </div>

        </div>

    <a href="#" className="icon-span floater"><span><em className="fa fa-plus-circle"></em></span></a>
    </div>

export default Forms;
