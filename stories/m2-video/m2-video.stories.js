import { convertArgs } from '../utils/args.utils';
import "./m2-video";

export default {
    title: "Webcomponents/Video",
    argTypes: {
      previewing: { control: 'boolean' },
    },
  };

// More on args: https://storybook.js.org/docs/html/writing-stories/args
const Template = (args) => `
  <video is="m2-video" ${convertArgs(args)} width="320" height="240" controls>
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
  </video>
`;

export const previewingActive = Template.bind({});
previewingActive.args = {
  previewing: true,
};

export const previewingInactive = Template.bind({});
previewingInactive.args = {
  previewing: false,
};