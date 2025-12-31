import{j as o}from"./jsx-runtime-DqY7mUZh.js";import{L as s}from"./Link-3cQZankZ.js";import"./iframe-Ce6jbqxU.js";import"./preload-helper-PPVm8Dsz.js";import"./use-merged-ref-DolZVG_b.js";import"./utils-CDN07tui.js";import"./Icons-C0Qz2dLJ.js";import"./createLucideIcon-WbWtkNdC.js";import"./arrow-up-DbyF4mAD.js";const l={title:"Components/Buttons/Link",tags:["autodocs","components"],parameters:{layout:"centered"},args:{href:"/",children:"Link",target:"_blank",prefixIcon:void 0,suffixIcon:void 0},argTypes:{target:{control:"select",options:["_blank","_self","_parent","_top"]}},component:s},e={args:{href:"/",children:"Link",prefixIcon:void 0,suffixIcon:void 0,underline:!1},render:n=>o.jsx(s,{...n})},r={args:{href:"/",children:"Link",prefixIcon:"refresh",suffixIcon:void 0,underline:!1},render:n=>o.jsx(s,{...n})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Primary = () => <Link
    href="/"
    target="_blank"
    prefixIcon={undefined}
    suffixIcon={undefined}
    underline={false}>Link</Link>;`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const WithIcon = () => <Link
    href="/"
    target="_blank"
    prefixIcon="refresh"
    suffixIcon={undefined}
    underline={false}>Link</Link>;`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    href: '/',
    children: 'Link',
    prefixIcon: undefined,
    suffixIcon: undefined,
    underline: false
  },
  render: args => <Link {...args} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    href: '/',
    children: 'Link',
    prefixIcon: 'refresh',
    suffixIcon: undefined,
    underline: false
  },
  render: args => <Link {...args} />
}`,...r.parameters?.docs?.source}}};const x=["Primary","WithIcon"];export{e as Primary,r as WithIcon,x as __namedExportsOrder,l as default};
