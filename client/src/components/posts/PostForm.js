import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addPost } from "../../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };
  }
  render() {
    return (
      <div class="post-form mb-3">
        <div class="card card-info">
          <div class="card-header bg-primary text-white">Say Somthing...</div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  placeholder="Create a post"
                />
              </div>
              <button type="submit" class="btn btn-light">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null)(PostForm);
