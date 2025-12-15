import{j as o}from"./jsx-runtime-CgErpkYP.js";import{C as a,a as s}from"./CategoryButton-BwZvYZ2-.js";import"./iframe-BM8yQpH8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BZc0SB6m.js";import"./button-BAQRMWT3.js";import"./utils-CDN07tui.js";import"./index-RGFqVJhh.js";import"./Button-Ck4lrwbG.js";import"./Icons-BUujMB1E.js";import"./createLucideIcon-COGvKqjn.js";import"./arrow-up-CR6NUjgX.js";import"./TextInput-QnN20Udz.js";const w={title:"Elements/CategoryButton",tags:["autodocs","components"],parameters:{layout:"centered"},component:a},r=[{id:1,name:"Electronics",icon:"📱",count:1243,trending:!0,subcategories:[{name:"Smartphones",count:284},{name:"Laptops & Computers",count:156},{name:"Tablets",count:92},{name:"Audio & Headphones",count:347},{name:"Cameras",count:128},{name:"Smart Home Devices",count:236}]},{id:2,name:"Fashion",icon:"👗",count:2156,trending:!0,subcategories:[{name:"Women's Clothing",count:654},{name:"Men's Clothing",count:478},{name:"Shoes & Footwear",count:392},{name:"Bags & Accessories",count:287},{name:"Jewelry & Watches",count:198},{name:"Sunglasses",count:147}]},{id:3,name:"Home & Living",icon:"🏠",count:892,trending:!1,subcategories:[{name:"Furniture",count:234},{name:"Home Decor",count:187},{name:"Kitchen & Dining",count:156},{name:"Bedding & Bath",count:123},{name:"Garden & Outdoor",count:98},{name:"Storage & Organization",count:94}]},{id:4,name:"Beauty & Health",icon:"💄",count:1534,trending:!0,subcategories:[{name:"Skincare",count:387},{name:"Makeup",count:456},{name:"Fragrances",count:178},{name:"Hair Care",count:234},{name:"Personal Care",count:156},{name:"Vitamins & Supplements",count:123}]},{id:5,name:"Sports & Outdoors",icon:"⚽",count:743,trending:!1,subcategories:[{name:"Fitness Equipment",count:198},{name:"Sports Apparel",count:234},{name:"Camping & Hiking",count:123},{name:"Cycling",count:87},{name:"Water Sports",count:56},{name:"Yoga & Pilates",count:45}]},{id:6,name:"Books & Media",icon:"📚",count:967,trending:!1,subcategories:[{name:"Books",count:456},{name:"E-Books",count:234},{name:"Movies & TV",count:123},{name:"Music",count:87},{name:"Video Games",count:45},{name:"Magazines",count:22}]},{id:7,name:"Toys & Kids",icon:"🧸",count:645,trending:!1,subcategories:[{name:"Action Figures",count:134},{name:"Educational Toys",count:156},{name:"Baby Products",count:178},{name:"Kids Clothing",count:98},{name:"Games & Puzzles",count:56},{name:"Arts & Crafts",count:23}]},{id:8,name:"Food & Beverages",icon:"🍔",count:1087,trending:!0,subcategories:[{name:"Groceries",count:387},{name:"Snacks",count:234},{name:"Beverages",count:178},{name:"Organic Foods",count:134},{name:"Gourmet Food",count:98},{name:"International Cuisine",count:56}]}],e={args:{categories:r},render:t=>o.jsx("div",{className:"w-full max-w-md",children:o.jsx(a,{...t})})},n={args:{categories:r},render:t=>o.jsx("div",{className:"w-full max-w-md",children:o.jsx(s,{...t})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Primary = () => {
    return (
        <div className="w-full max-w-md">
            <CategoryButton categories={mockCategories} />
        </div>
    );
};`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{code:`const CategoryContentStory = () => {
    return (
        <div className="w-full max-w-md">
            <CategoryContent categories={mockCategories} />
        </div>
    );
};`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    categories: mockCategories
  },
  render: args => {
    return <div className="w-full max-w-md">
      <CategoryButton {...args} />
    </div>;
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    categories: mockCategories
  },
  render: args => {
    return <div className="w-full max-w-md">
      <CategoryContent {...args} />
    </div>;
  }
}`,...n.parameters?.docs?.source}}};const x=["Primary","CategoryContentStory"];export{n as CategoryContentStory,e as Primary,x as __namedExportsOrder,w as default};
