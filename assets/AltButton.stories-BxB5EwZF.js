import{j as o}from"./jsx-runtime-NB1XKu45.js";import{B as n}from"./Button-Bn5gnadT.js";import"./iframe-BmJKktP_.js";import"./preload-helper-PPVm8Dsz.js";import"./button-BGtPgPmj.js";import"./utils-CDN07tui.js";import"./triangle-alert-MKxW5Gvq.js";import"./createLucideIcon-BBgPBf4j.js";const l={title:"Components/Buttons/AltButton",component:n,parameters:{layout:"centered",design:{type:"figspec",url:"https://www.figma.com/design/mxkDna0F8tpjis5iY0iI87/Ui-Hanout.cc?node-id=178-6962&t=dbXgTqjD5LKQx2D7-4"},docs:{description:{component:`Button component implementing the Hanout.cc design system.

## Figma Design
Based on the Figma design specifications with 5 variants, 4 sizes, and 4 states.

## Variants
- **Primary**: Main action button with brand navy color
- **Secondary**: Secondary action button with brand gold color
- **Ghost**: Minimal style for tertiary actions
- **Error**: Destructive actions (delete, remove, etc.)
- **Outline**: Secondary actions with border

## Sizes
- **Mini** (h-7): Extra small button
- **Small** (h-8): Small button
- **Medium** (h-9): Default size
- **Large** (h-10): Large button

## States
- **Default**: Normal resting state
- **Hover & Active**: Interactive feedback
- **Focus**: Keyboard navigation state with ring
- **Disabled**: Non-interactive state

## Icons
Supports Lucide icons on the left, right, or both sides of text.`}}},argTypes:{variant:{control:"select",options:["primary","secondary","ghost","error","outline"]},size:{control:"select",options:["mini","small","medium","large"]}},args:{children:"Button Text",variant:"primary",size:"medium",prefixIcon:void 0,suffixIcon:void 0,disabled:!1},tags:["autodocs"]},t={args:{children:"Button Text",variant:"primary",prefixIcon:void 0,suffixIcon:void 0,disabled:!1},render:e=>o.jsx(n,{...e})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{code:`const Playground = () => <Button
    variant="primary"
    size="medium"
    prefixIcon={undefined}
    suffixIcon={undefined}
    disabled={false}>Button Text</Button>;`,...t.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button Text',
    variant: 'primary',
    prefixIcon: undefined,
    suffixIcon: undefined,
    disabled: false
  },
  render: args => <Button {...args} />
}`,...t.parameters?.docs?.source},description:{story:`Interactive playground to test all button configurations.
Use the controls panel to customize variant, size, icons, and states.`,...t.parameters?.docs?.description}}};const p=["Playground"];export{t as Playground,p as __namedExportsOrder,l as default};
