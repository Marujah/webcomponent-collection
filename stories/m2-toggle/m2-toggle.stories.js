import { convertArgs } from '../utils/args.utils';
import "./m2-toggle";

export default {
    title: "Webcomponents/M2-Toggle",
    parameters: {
      actions: {
        handles: ['onToggleClick'],
      },
    },
    argTypes: {
      leftColor: String,
      rightColor: String,
      size: {
        control: {
          type: 'select', // Type 'select' is automatically inferred when 'options' is defined
          options: {
            small: 'small',
            medium: 'medium',
            large: 'large',
          },
        }, 
      },
    }
  };

const Template = (args) => `<m2-toggle ${convertArgs(args)}></m2-toggle>`;

export const Default = Template.bind({});
Default.args = {
  leftColor: 'orange',
  rightColor: 'red',
  size: "medium"
};

export const Small = Template.bind({});
Small.args = {
  leftColor: '#3774cf',
  rightColor: 'red',
  size: "small"
};

export const Large = Template.bind({});
Large.args = {
  leftColor: 'orange',
  rightColor: 'red',
  size: "large"
};
