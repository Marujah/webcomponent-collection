import "./video-preview";

export default {
    Title: "MacButton",
    parameters: {
      actions: {
        handles: ['onClick'],
      },
    },
    argTypes: {
      previewing: { control: 'boolean' },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    },
  };

const convertArgs = (args) => Object.keys(args).map(e => {
  if (typeof args[e] === 'function') {
    return;
  }
  return `${e}="${args[e]}"`;
}).toString().replace(',', ' ');

// More on args: https://storybook.js.org/docs/html/writing-stories/args
const Template = (args) => `
  <video is="thumbnail-preview" ${convertArgs(args)} width="320" height="240" controls>
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
  </video>
`;

export const Default = Template.bind({});
Default.args = {
  previewing: true,
};

export const Small = Template.bind({});
Small.args = {
  previewing: true,
  size: 'small'
};