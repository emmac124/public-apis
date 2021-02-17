import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPicture } from './../actions/index';

const Pictures = ({ getPicture }) => {
    return null;
}

export default connect(mapStateToProps, { getPicture })(Pictures);