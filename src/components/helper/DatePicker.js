import { DatePicker, Form } from 'antd';

const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};

// const onFinish = (fieldsValue) => {
//   // Should format date value before submit.
//   const values = {
//     ...fieldsValue,
//     'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
//   };
//   console.log('Received values of form: ', values);
// };

const Date = () => (
    <Form.Item name="date-picker" label="Date" {...config}>
      <DatePicker />
    </Form.Item>
);
export default Date;