import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { update } from '../Redux/actions';
import CategoryForm from './CategoryForm';

export class Category extends Component {

    state = {
      editing: false
    };

    static PropTypes = {
      category: PropTypes.object.isRequired,
      update: PropTypes.func.isRequired
    };

    handleEdit = () => {
      this.setState({ editing: true });
    };

    handleComplete = category => {
      const { update } = this.props;
      update(category);
      this.handleEndEdit();
    };

    handleEndEdit = () => {
      this.setState({ editing: false });
    };

    render() {
      const { editing } = this.state;
      const { category } = this.props;

      return (
        <li>
          {editing
            ? <CategoryForm
              category={category}
              onComplete={this.handleComplete}
              onCancel={this.handleEndEdit}
            />
            : <CategoryItem
              category={category}
              onEdit={this.handleEdit}
            />
          }
        </li>
      );
    }
}

export default connect(
  null,
  { update }
)(Category);
