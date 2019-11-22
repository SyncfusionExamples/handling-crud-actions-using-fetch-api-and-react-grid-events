import React, { useState, useEffect } from 'react';
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
import { getOrders, addOrder, updateOrder, deleteOrder } from './orderService';
import './App.css';

const App: React.FC = () => {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

  const [data, setData] = useState();
  useEffect(() => {
    refreshGrid();
  }, []);

  function refreshGrid() {
    getOrders()
      .then(
        data => {
          setData(data);
        }
      );
  }

  function dataSourceChanged(state: any) {
    if (state.action === "add") {
      addOrder(state.data)
        .then(res => refreshGrid());
    } else if (state.action === "edit") {
      updateOrder(state.data)
        .then(res => refreshGrid());
    } else if (state.requestType === "delete") {
      deleteOrder(state.data[0].OrderID)
        .then(res => refreshGrid());
    }
  }
  return (
    <div style={{ margin: '10%', marginTop: '5%' }}>
      <GridComponent dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 6 }}
        editSettings={editOptions}
        toolbar={toolbarOptions}
        dataSourceChanged={dataSourceChanged}
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