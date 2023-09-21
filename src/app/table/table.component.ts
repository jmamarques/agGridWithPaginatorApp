import {Component, OnInit} from '@angular/core';
import {GridOptions, GridReadyEvent} from "ag-grid-community";
import mockEmployees from "../employee";
import {PageEvent} from "@angular/material/paginator";
import {GridApi} from "ag-grid-community/dist/lib/gridApi";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  gridOptions: GridOptions;
  pageSize = 25;
  total = mockEmployees.length;
  pageIndex = 0;
  gridApi!: GridApi<any>;
  rowData!: any[];

  constructor() {
    this.gridOptions = <GridOptions>{
      pagination: false,
      columnDefs: [
        {headerName: 'ID', field: 'id'},
        {headerName: 'First Name', field: 'firstName'},
        {headerName: 'Last Name', field: 'lastName'},
        {headerName: 'Department', field: 'department'},
        {headerName: 'Salary', field: 'salary'},
        {headerName: 'Hire Date', field: 'hireDate', cellRenderer: 'dateFormatter'},
      ],
      components: {
        dateFormatter: function (params: { value: string | number | Date; }) {
          const date = new Date(params.value);
          return date.toLocaleDateString();
        },
      }
    };
  }

  ngOnInit(): void {
  }

  getRows() {
    const employees = mockEmployees;
    return new Promise<any>((resolve) => {
      setTimeout(() => {
        return employees.slice((this.pageIndex) * this.pageSize, Math.max((this.pageIndex + 1) * this.pageSize, this.total - 1));
      }, 2000); // 2000ms (2 seconds) delay
    });
  }

  handlePageEvent(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    this.rowData = mockEmployees.slice((this.pageIndex) * this.pageSize, Math.min((this.pageIndex + 1) * this.pageSize, this.total));
    this.gridApi.setRowData(this.rowData);
    this.gridApi.redrawRows();
  }

  gridReady(gridReadyEvent: GridReadyEvent<any>) {
    this.gridApi = gridReadyEvent.api;
    this.rowData = mockEmployees.slice(0, this.pageSize); // You should populate this array with your data
  }
}
