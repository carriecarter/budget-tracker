import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load, add, update } from '../Redux/actions';
import CategoryForm from './CategoryForm';
// import Categories from './Categories';
import styles from './Categories.css';

class Dashboard extends Component {
  
  static propTypes = {
    categories: PropTypes.array,
    load: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.load();
  }

  render() {
    const { categories, add } = this.props;

    return (
      <div className={styles.categories}>
        <section>
          <h2> Add Budget Items: </h2>
          <CategoryForm onComplete={add}/>
        </section>

        {categories &&
          <section>
            {/* <Categories
              categories={categories}
              onUpdate={update}
            /> */}
          </section>
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    categories: state
  }),
  { load, add }
)(Dashboard);