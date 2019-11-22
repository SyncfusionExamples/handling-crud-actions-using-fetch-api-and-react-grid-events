import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Edit,
  EditSettingsModel,
  Toolbar,
  ToolbarItems,
} from '@syncfusion/ej2-react-grids';
import {DataManager, UrlAdaptor} from '@syncfusion/ej2-data';
import './App.css';

const App: React.FC = () => {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true};
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

  const baseURL: string = 'http://localhost:8080';
  const data: DataManager = new DataManager({
    adaptor: new UrlAdaptor(),
    insertUrl: baseURL + '/orders/insert',
    removeUrl: baseURL + '/orders/delete',
    updateUrl: baseURL + '/orders/update',
    url: baseURL + '/orders'
  });

  return (
    <div style={{ margin: '10%', marginTop: '5%' }}>
      <GridComponent dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 6 }}
        editSettings={editOptions}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Invoice ID' textAlign='Right' width='100' isPrimaryKey={true} />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' />
          <ColumnDirective field='ShipName' headerText='Ship Name' />
          <ColumnDirective field='Freight' textAlign='Right' format='C2' width='150' />
          <ColumnDirective field='OrderDate' headerText='OrderDate' type='date' format='yMd' width='150' />
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar]} />
      </GridComponent>
    </div>
  );
}

export default App;