import { convertArgs } from '../utils/args.utils';
import "./m2-rating";

export default {
    title: "Webcomponents/Rating",
    parameters: {
      actions: {
        handles: ['onRatingclick'],
      },
    },
    argTypes: {
      min: Number,
      max: Number,
      size: Number,
      value: Number,
      color: String,
    }
  };

const Template = (args) => `<m2-rating ${convertArgs(args)}></m2-rating>`;

export const Default = Template.bind({});
Default.args = {
  color: '#3774cf',
  min: 0,
  max: 5,
  size: 2,
  value: 3,
};

export const Orange = Template.bind({});
Orange.args = {
  color: 'orange',
  min: 0,
  max: 6,
  size: 3,
  value: 3.5,
};
