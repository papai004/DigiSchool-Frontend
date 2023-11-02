import React, { useState } from 'react';
import { Card } from 'antd';
import AppLayout from '../layout/AppLayout';
import StandardAddModal from '../components/modal/StandardAddModal';

function ManageStandard() {

  const [standardValue, setStandardValue] = useState(null);

  const addFormHandler = (values) => {
    setStandardValue(values);
  }
  return (
    <AppLayout>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
        <StandardAddModal onAddFormsContent={ addFormHandler }/>
        </div>
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
