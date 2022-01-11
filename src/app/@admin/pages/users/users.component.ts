import { USER_LIST_QUERY } from '@graphql/operations/query/user';
import { Component, OnInit } from '@angular/core';
import { IResultData } from '@core/interfaces/result-data.interface';
import { DocumentNode } from 'graphql';
import { ITableColumns } from '@core/interfaces/table-columns.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  query: DocumentNode = USER_LIST_QUERY;
  context: object;
  itemsPage: number;
  resultData: IResultData;
  include: boolean;
  columns: Array<ITableColumns>;
  ngOnInit(): void {
    this.context = {};
    this.itemsPage = 10;
    this.resultData = {
      listKey: 'users',
      definitionKey: 'users'
    }
    this.include = true;
    this.columns = [
      {
        property: 'id',
        label: '#'
      },{
        property: 'name',
        label: 'Nombre'
      },{
        property: 'lastname',
        label: 'Apellidos'
      },{
        property: 'email',
        label: 'Correo electronico'
      },{
        property: 'role',
        label: 'Permisos'
      }
    ];
  }

}
