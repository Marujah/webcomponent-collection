import { convertArgs } from '../utils/args.utils';
import './m2-avatar';

export default {
  title: 'Webcomponents/Avatar',
  parameters: {
    actions: {
      handles: ['onToggleClick'],
    },
  },
  argTypes: {
    size: Number,
  },
};

const Template = (args) => `<m2-avatar ${convertArgs(args)}></m2-avatar>`;

export const Default = Template.bind({});
Default.args = {
  size: 2,
};
