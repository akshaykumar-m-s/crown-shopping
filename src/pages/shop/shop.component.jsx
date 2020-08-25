import React, { Component } from 'react';
import './shop.component.scss';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import { Route } from 'react-router-dom';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
