import { convertArgs } from '../utils/args.utils';
import './m2-qr-code';

export default {
  title: 'Webcomponents/QrCode',
  argTypes: {
    width: Number,
    height: Number,
    href: String,
  },
};

const Template = (args) => `<m2-qr-code ${convertArgs(args)}></m2-qr-code>`;

export const Default = Template.bind({});
Default.args = {
  height: 120,
  width: 120,
  href: 'https://google.com',
};
