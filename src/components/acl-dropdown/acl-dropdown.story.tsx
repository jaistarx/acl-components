import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AclButton, AclDropdown, IDictionary } from '../..';

/**ACL Dropdown components are used for selecting user provided information from a list of options. */

const OPTIONS = [
  { id: 1, label: 'Option 1', value: 'option1' },
  { id: 2, label: 'Option 2', value: 'option2' },
  // Add more options as needed
];

const meta: Meta<typeof AclDropdown> = {
  component: AclDropdown,
  title: 'Components/AclDropdown',
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: `Type: string
      \nDescription: The label prop allows you to set a text label or description for the dropdown component. It provides a brief, informative text that describes the purpose or content of the dropdown.
      \nDefault Value: undefined (No default label is specified).
      \nExample:
            &lt;AclDropdown
             label="select options"
             options={options}
             onChange={(e) =&gt; console.log(e)}        
            &gt;&lt;/AclDropdown&gt;`,
      control: { type: 'text' },
    },
    options: {
      description: `Type: array
      \nDescription: The options prop is an array that contains the list of available options or items to be displayed in the dropdown. Each item in the array represents a choice that the user can select from the dropdown.
      \nDefault Value: An empty array, indicating no available options.
      \nExample:
            &lt;AclDropdown
              label="select options"
              options={options}
              onChange={(e)= &gt; console.log(e)}&gt;
            &lt;/AclDropdown&gt;`,
      defaultValue: OPTIONS[0],
      options: OPTIONS,
    },
    autoWidth: {
      description: `Type: boolean
      \nDescription: The autoWidth prop, when set to true, automatically adjusts the width of the dropdown to fit the content. This can be useful when you want the dropdown to be as wide as the widest option in the list.
      \nDefault Value: false (Dropdown does not auto-adjust its width by default)
      \nExample:
         &lt;AclDropdown
           label="select options"
           options={options}
           onChange={(e) =&gt; console.log(e)}
           autoWidth={true}
          &lt;&gt;/AclDropdown&gt;`,
      control: { type: 'radio' },
      options: [true, false],
    },
    defaultOpen: {
      description: `Type: boolean
      \nDescription: The defaultOpen prop, when set to true, specifies that the dropdown should be open by default when it is initially rendered. This can be used to control the initial state of the dropdown.
      \nDefault Value: false (Dropdown is initially closed by default).
      \nExample:
          &lt;AclDropdown
            label="select options"
            options={options}
            onChange={(e) =&gt; console.log(e)}
             defaultOpen={true}
            &lt;&gt;/AclDropdown&gt;`,
      control: { type: 'radio' },
      options: [true, false],
    },
    onChange: {
      description: `Type: function
      \nDescription: A callback function for handling user selection changes in the ACL Dropdown. It receives the selected option or an array of options, depending on single or multiple selection support.
      \nDefault Value: undefined
      \nExample:
      &lt;AclDropdown
        label="select options"
        options={options}
         onChange={(e) =&gt; console.log(e)}
       &lt;&gt;/AclDropdown&gt;`,
    },
    defaultValue: {
      description: `Type: any
      \nDescription: The defaultValue prop allows you to set the default value or initial selection for the dropdown component. This value represents the option that is selected when the dropdown is first rendered.
      \nDefault Value: undefined (No default value is specified).
      \nExample:
           &lt;AclDropdown
            label="select options"
             options={options}
             onChange={(e) =&gt; console.log(e)}
             defaultValue="New York"
             &gt;&lt;/AclDropdown&gt;`,
      defaultValue: OPTIONS[0],
      options: OPTIONS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    options: OPTIONS,
    label: 'select',
  },
};

export const Options: Story = {
  args: {
    options: OPTIONS,
    label: 'select',
  },
  argTypes: {
    options: {
      control: { type: 'object' },
    },
  },
};

export const AutoWidth: Story = {
  args: {
    autoWidth: true,
    options: OPTIONS,
    label: 'select',
  },

  argTypes: {
    autoWidth: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};

export const DefaultOpen: Story = {
  args: {
    defaultOpen: true,
    options: OPTIONS,
    label: 'select',
  },
};

export const OnChange: Story = {
  args: {
    options: OPTIONS,
    label: 'select',
    onChange: (event: IDictionary<any> | Array<IDictionary<any>>) => console.log(event),
  },
};

export const DefaultValue: Story = {
  args: {
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    label: 'select',
  },
};

export const ShowCheckbox: Story = {
  args: {
    multiple: true,
    options: OPTIONS,
    label: 'select',
  },
};

const Template: any = () => {
  const [, setReset] = useState(false);

  const handleClick = () => {
    setReset((value) => !value);
  };

  return (
    <>
      <AclButton onClick={() => handleClick()}>Reset Value</AclButton>
      <br></br>
      <AclDropdown label="select options" onChange={(e) => console.log(e)} options={OPTIONS}></AclDropdown>
    </>
  );
};

export const TriggerReset: Story = Template.bind({});
