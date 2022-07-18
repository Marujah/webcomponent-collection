import { convertArgs } from '../utils/args.utils';
import './m2-graph';

export default {
  title: 'Webcomponents/Graph',
  argTypes: {
    color: String,
  },
};

const Template = (args) => `<m2-graph ${convertArgs(args)}></m2-graph>`;

export const Default = Template.bind({});
Default.args = {
  color: '#3774cf',
};
