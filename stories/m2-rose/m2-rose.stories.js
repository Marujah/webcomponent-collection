import { convertArgs } from '../utils/args.utils';
import './m2-rose';

export default {
  title: 'Webcomponents/Rose',
  argTypes: {
    color: String,
    en: Number,
    dee: Number,
    amplitude: Number,
    width: Number,
    height: Number,
  },
};

const Template = (args) => `<m2-rose ${convertArgs(args)}></m2-rose>`;

export const Default = Template.bind({});
Default.args = {
  color: '#3774cf',
  en: 1,
  dee: 3,
  amplitude: 100.0,
  width: 400,
  height: 400,
};

export const Rose = Template.bind({});
Rose.args = {
  color: 'blue',
  en: 4,
  dee: 1,
  width: 400,
  height: 400,
};

// export const Flower = Template.bind({});
// Flower.args = {
//   color: '#ff0f0f',
//   leaf: 0.6,
// };

// export const Pendel = Template.bind({});
// Pendel.args = {
//   color: 'green',
//   leaf: Math.PI,
// };
