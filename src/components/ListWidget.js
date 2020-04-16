import React from "react";

export default class ListWidget extends React.Component{

  state ={
    widget: this.props.widget
  }


  render(){
    return(
        <div className="input-field-section">
                    <textarea className="form-control form-control-elements" id="textarea" rows="3"
                              placeholder="Enter one list item per line" style={{display : this.props.preview ? "none": "inherit"}}

                              onChange={(e) => {
                                const newText = e.target.value
                                this.setState(prevState => ({
                                  widget: {
                                    ...prevState.widget,
                                    text: newText
                                  }
                                }))
                                this.props.changeChild(this.state.widget)
                              }} value={
                      this.state.widget &&
                      this.state.widget.text
                    }
                    />

          <select className="form-control form-control-elements" id="role-select2"
                  style={{display : this.props.preview ? "none": "inherit"}}
                  onChange={(e) => {
                    const s = parseInt(e.target.value);
                    this.setState((prevState) => {
                      return{
                        widget: {
                          ...prevState.widget,
                          style: s
                        }}
                    });
                    this.props.changeChild(this.state.widget)
                  }}
                  value={this.state.widget.style}>
            <option value="Ordered">Ordered</option>
            <option value="UnOrdered">UnOrdered</option>
          </select>

          <input type="text-area" className="form-control form-control-elements" id="textarea-widget"
                 placeholder="Widget name" style={{display : this.props.preview ? "none": "inherit"}}

                 onChange={(e) => {
                   const newName = e.target.value
                   this.setState(prevState => ({
                     widget: {
                       ...prevState.widget,
                       name: newName
                     }
                   }))
                   this.props.changeChild(this.state.widget)
                 }} value={
            this.state.widget &&
            this.state.widget.name}
          ></input>

          <div style={{display : this.props.preview ? "inherit": "none"}}>
            <h5 className="form-control-elements">Preview </h5>
            <div>
              {
                widget.style === "Ordered" && <ol>
                {widget.text.split("\n").map(i =>
                    <li> {i}</li>
                )}
              </ol>
              }
              {widget.style === "UnOrdered" && <ul>
                {widget.text.split("\n").map(i =>
                    <li> {i}</li>
                )}
              </ul>
              }
            </div>
          </div>
        </div>
    );

  }
}