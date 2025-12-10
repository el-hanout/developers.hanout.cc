import{j as t}from"./jsx-runtime-CChQA9tb.js";import{B as n}from"./Button-DCpDDtg_.js";import"./iframe-D5OrQ5bS.js";import"./preload-helper-PPVm8Dsz.js";import"./button-CTWYBNEO.js";import"./utils-CDN07tui.js";import"./Icons-DyZL75T8.js";import"./arrow-up-CBUurEKt.js";import"./createLucideIcon-CP_7qT0j.js";const B={title:"Components/Buttons/Button",component:n,parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/design/mxkDna0F8tpjis5iY0iI87/Ui-Hanout.cc?node-id=178-6962&t=dbXgTqjD5LKQx2D7-4"},docs:{description:{component:`Button component implementing the Hanout.cc design system.

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
Supports Lucide icons on the left, right, or both sides of text.`}}},args:{children:"Button Text",variant:"default",size:"default",prefixIcon:void 0,suffixIcon:void 0,disabled:!1},argTypes:{variant:{control:"select"},size:{control:"select"}},tags:["autodocs"]},e={args:{children:"Button Text",variant:"default",size:"default",disabled:!1},render:r=>t.jsx(n,{...r})},o={render:()=>t.jsxs("div",{className:"flex gap-2 flex-wrap",children:[t.jsx(n,{variant:"default",children:"Default"}),t.jsx(n,{variant:"secondary",children:"Secondary"}),t.jsx(n,{variant:"ghost",children:"Ghost"}),t.jsx(n,{variant:"outline",children:"Outline"}),t.jsx(n,{variant:"destructive",children:"Destructive"}),t.jsx(n,{variant:"link",children:"Link"})]})},a={render:()=>t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{children:[t.jsx(n,{size:"sm",children:"Small"}),t.jsx(n,{size:"default",children:"Default"}),t.jsx(n,{size:"lg",children:"Large"})]}),t.jsxs("div",{children:[t.jsx(n,{size:"icon",suffixIcon:"arrow-right",children:"Icon"}),t.jsx(n,{size:"icon-sm",suffixIcon:"arrow-right",children:"Icon Small"}),t.jsx(n,{size:"icon-lg",suffixIcon:"arrow-right",children:"Icon Large"})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Primary = () => <Button
    variant="default"
    size="default"
    prefixIcon={undefined}
    suffixIcon={undefined}
    disabled={false}>Button Text</Button>;`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{code:`const ButtonGroups = () => (
  <div className="flex gap-2 flex-wrap">
    <Button variant="default" >Default</Button>
    <Button variant="secondary" >Secondary</Button>
    <Button variant="ghost" >Ghost</Button>
    <Button variant="outline" >Outline</Button>
    <Button variant="destructive" >Destructive</Button>
    <Button variant="link" >Link</Button>
  </div>
);`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{code:`const AllSizes = () => (
  <div className='flex flex-col gap-4'>
    <div>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
    <div>
      <Button size="icon" suffixIcon="arrow-right">Icon</Button>
      <Button size="icon-sm" suffixIcon="arrow-right">Icon Small</Button>
      <Button size="icon-lg" suffixIcon="arrow-right">Icon Large</Button>
    </div>
  </div>
);`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button Text',
    variant: 'default',
    size: 'default',
    disabled: false
  },
  render: args => <Button {...args} />
}`,...e.parameters?.docs?.source},description:{story:`Interactive playground to test all button configurations.
Use the controls panel to customize variant, size, icons, and states.`,...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 flex-wrap">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-4'>
      <div>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
      <div>
        <Button size="icon" suffixIcon="arrow-right">Icon</Button>
        <Button size="icon-sm" suffixIcon="arrow-right">Icon Small</Button>
        <Button size="icon-lg" suffixIcon="arrow-right">Icon Large</Button>
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};const v=["Primary","ButtonGroups","AllSizes"];export{a as AllSizes,o as ButtonGroups,e as Primary,v as __namedExportsOrder,B as default};
