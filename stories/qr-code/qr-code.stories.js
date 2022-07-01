import { convertArgs } from '../utils/args.utils';
import "./qr-code";

export default {
    Title: "QrCode",
    argTypes: {
      width: Number,
      height: Number,
      href: String,
    },
  };

const Template = (args) => `<qr-code ${convertArgs(args)}></qr-code>`;

export const Default = Template.bind({});
Default.args = {
  height: 120,
  width: 120,
  href: "https://google.com"
};
