import { convertArgs } from '../utils/args.utils';
import "./awesome-rating";

export default {
    Title: "AwesomeRating",
    argTypes: {
      min: Number,
      max: Number,
      value: Number,
      color: String,
    },
  };

const Template = (args) => `<awesome-rating ${convertArgs(args)}></qr-code>`;

export const Default = Template.bind({});
Default.args = {
  color: 'red',
  min: 0,
  max: 5,
  value: 3
};
