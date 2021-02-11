import { Meta, Story } from "@storybook/react";
import Logo, { LogoProps } from ".";
import logo from '../../../assets/credq_logo.png';
export default {
    title: 'Logo',
    component: Logo
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Default = Template.bind({});
Default.args = {
    logo: logo
}