/**
 * @format
 */

import 'react-native';
import React from 'react';
import Top from '../comps/Top';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it.skip('renders Top correctly', () => {
  renderer.create(<Top />);
});
