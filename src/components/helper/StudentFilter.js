import { Cascader } from 'antd';

const sections = ['A', 'B', 'C', 'D', 'E'];

const options = Array.from({ length: 12 }, (_, index) => ({
  label: `Standard ${index + 1}`,
  value: `${index + 1}`,
  children: sections.map((section, sectionIndex) => ({
    label: section,
    value: `${index + 1}-${sectionIndex}`,
  })),
}));

const StudentFilter = () => {

  const onChange = (value) => {
    console.log(value);
  };

  return (
    <Cascader
    placeholder="select standard and section"
    style={{
      width: '100%',
      height: '40px',
    }}
    options={options}
    onChange={onChange}
    multiple
    maxTagCount="responsive"
  />
  );
}

export default StudentFilter;
