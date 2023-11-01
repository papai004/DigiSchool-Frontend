import React, { useState } from 'react';
import AppLayout from '../layout/AppLayout';
import StandardAddModal from '../components/modal/StandardAddModal';
import { Card } from 'antd';

function ManageStandard() {

  const [standardValue, setStandardValue] = useState(null);

  const addFormHandler = (values) => {
    setStandardValue(values);
  }
  return (
    <AppLayout>
        <StandardAddModal onAddFormsContent={ addFormHandler }/>
        {standardValue && (
        <Card style={{width: '200px', marginTop: '1rem'}}>
          {standardValue.Standard}
          {standardValue.Section.map((val,idx) => (
            <>
            <p>
              {val}
            </p>
            </>
          ))}
        </Card>
      )}
    </AppLayout>
  )
}

export default ManageStandard;
