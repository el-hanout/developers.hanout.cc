import{j as t}from"./jsx-runtime-GAY1pjDX.js";import{B as e}from"./Button-CtY9STZO.js";import"./iframe-CTraueZQ.js";import"./preload-helper-PPVm8Dsz.js";import"./button-DILJIukS.js";import"./utils-CDN07tui.js";import"./Icons-DwAfL_-0.js";import"./arrow-up-Cc8U2lEY.js";import"./createLucideIcon-CA4G3eav.js";const B={title:"Components/Buttons/Button",component:e,parameters:{layout:"centered",design:{type:"figspec",url:"https://www.figma.com/design/mxkDna0F8tpjis5iY0iI87/Ui-Hanout.cc?node-id=178-6962&t=dbXgTqjD5LKQx2D7-4"},docs:{description:{component:`Button component implementing the Hanout.cc design system.

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
Supports Lucide icons on the left, right, or both sides of text.`}}},args:{children:"Button Text",variant:"default",size:"default",prefixIcon:void 0,suffixIcon:void 0,disabled:!1},argTypes:{variant:{control:"select"},size:{control:"select"}},tags:["autodocs"]},n={args:{children:"Button Text",variant:"default",size:"default",disabled:!1},render:r=>t.jsx(e,{...r})},o={render:()=>t.jsxs("div",{className:"flex gap-2 flex-wrap",children:[t.jsx(e,{variant:"default",children:"Default"}),t.jsx(e,{variant:"secondary",children:"Secondary"}),t.jsx(e,{variant:"ghost",children:"Ghost"}),t.jsx(e,{variant:"outline",children:"Outline"}),t.jsx(e,{variant:"destructive",children:"Destructive"}),t.jsx(e,{variant:"link",children:"Link"})]})},a={render:()=>t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{children:[t.jsx(e,{size:"sm",children:"Small"}),t.jsx(e,{size:"default",children:"Default"}),t.jsx(e,{size:"lg",children:"Large"})]}),t.jsxs("div",{children:[t.jsx(e,{size:"icon",suffixIcon:"arrow-right",children:"Icon"}),t.jsx(e,{size:"icon-sm",suffixIcon:"arrow-right",children:"Icon Small"}),t.jsx(e,{size:"icon-lg",suffixIcon:"arrow-right",children:"Icon Large"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{code:`const Primary = () => <Button
    variant="default"
    size="default"
    prefixIcon={undefined}
    suffixIcon={undefined}
    disabled={false}>Button Text</Button>;`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{code:`const ButtonGroups = () => (
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
);`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button Text',
    variant: 'default',
    size: 'default',
    disabled: false
  },
  render: args => <Button {...args} />
}`,...n.parameters?.docs?.source},description:{story:`Interactive playground to test all button configurations.
Use the controls panel to customize variant, size, icons, and states.`,...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const v=["Primary","ButtonGroups","AllSizes"];export{a as AllSizes,o as ButtonGroups,n as Primary,v as __namedExportsOrder,B as default};
