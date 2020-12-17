import { PeriodicElement } from './../models/PeriodicEle';
import { Emp1Service } from './../services/emp1.service';
import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class MatTableComponent implements AfterViewInit, OnChanges {
  formGrp: FormGroup;
  select = new FormControl('select');
  name = new FormControl('name');
  weight = new FormControl('weight');
  symbol = new FormControl('symbol');
  position = new FormControl('position');

  colCheck = new FormControl('colCheck');

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  row = false;
  headers = false;
  selectedItems: any[] = [];

  columnsToDisplay = ['select', 'name', 'weight', 'symbol', 'position'];

  expandedElement: PeriodicElement | null;

  eleDatata: PeriodicElement[] = [
    {
      select: { value: '', rowCheck: false },
      position: { value: 1, rowCheck: false },
      name: { value: 'Hydrogen', rowCheck: false },
      weight: { value: 1.0079, rowCheck: false },
      symbol: { value: 'H', rowCheck: false },
      colCheck: false,
    },
    {
      select: { value: '', rowCheck: false },
      position: { value: 2, rowCheck: false },
      name: { value: 'Helium', rowCheck: false },
      weight: { value: 4.0079, rowCheck: false },
      symbol: { value: 'He', rowCheck: false },
      colCheck: false,
    },
    {
      select: { value: '', rowCheck: false },
      position: { value: 3, rowCheck: false },
      name: { value: 'Lithium', rowCheck: false },
      weight: { value: 4.0079, rowCheck: false },
      symbol: { value: 'Li', rowCheck: false },
      colCheck: false,
    },
    {
      select: { value: '', rowCheck: false },
      position: { value: 4, rowCheck: false },
      name: { value: 'Beryllium', rowCheck: false },
      weight: { value: 4.0079, rowCheck: false },
      symbol: { value: 'Be', rowCheck: false },
      colCheck: false,
    },
    {
      select: { value: '', rowCheck: false },
      position: { value: 5, rowCheck: false },
      name: { value: 'Boron', rowCheck: false },
      weight: { value: 4.0079, rowCheck: false },
      symbol: { value: 'B', rowCheck: false },
      colCheck: false,
    },
    {
      select: { value: '', rowCheck: false },
      position: { value: 6, rowCheck: false },
      name: { value: 'Carbon', rowCheck: false },
      weight: { value: 4.0079, rowCheck: false },
      symbol: { value: 'C', rowCheck: false },
      colCheck: false,
    },
    {
      select: { value: '', rowCheck: false },
      position: { value: 7, rowCheck: false },
      name: { value: 'Oxygen', rowCheck: false },
      weight: { value: 4.0079, rowCheck: false },
      symbol: { value: 'O', rowCheck: false },
      colCheck: false,
    },
    {
      select: { value: '', rowCheck: false },
      position: { value: 8, rowCheck: false },
      name: { value: 'Fluorine', rowCheck: false },
      weight: { value: 4.0079, rowCheck: false },
      symbol: { value: 'F', rowCheck: false },
      colCheck: false,
    },
  ];

  dataSource = new MatTableDataSource<PeriodicElement>(this.eleDatata);
  selection = new SelectionModel<PeriodicElement>(true, []);

  dataele = new FormControl({
    eleData: [this.eleDatata],
  });
  chkAll = '';
  eleDatata1 = [];

  constructor(private service: Emp1Service, private fb: FormBuilder) {
    this.formGrp = this.fb.group({
      memberDetails: this.fb.array([]),
    });
  }

  test1(arg1) {
    console.log(arg1);
  }
  ngOnInit() {
    this.formGrp = this.fb.group({
      memberDetails: this.fb.array(
        this.eleDatata.map((x) =>
          this.fb.group({
            name: [x.name],
            position: [x.position],
            select: [x.select],
            symbol: [x.symbol],
            weight: [x.weight],
            colCheck: [x.colCheck],
          })
        )
      ),
    });

    // this.formGrp = this.fb.group({
    //   memberDetails: this.fb.array(
    //     this.eleDatata.map((x) =>
    //       this.fb.group({
    //         name: [x.name, { rowcolCheck: false }],
    //         position: [x.position, { rowcolCheck: false }],
    //         select: [x.select, { rowcolCheck: false }],
    //         symbol: [x.symbol, { rowcolCheck: false }],
    //         weight: [x.weight, { rowcolCheck: false }],
    //         colCheck: [x.colCheck, { rowcolCheck: false }],
    //       })
    //     )
    //   ),
    // });

    console.log(this.formGrp);
  }

  submitHead(arg1, arg2) {
    // console.log();
    // arg2.colCheck = true;
    // if(arg2 == 'select'){
    //   this.row = true;
    // }
    // ((this.formGrp.get('controls') as FormArray).at(arg2.position) as FormGroup)
    //   .get('colCheck')
    //   .patchValue(true);
    // this.formGrp.get('memberDetails').value.forEach(x => {
    // });
  }

  submitCell(arg1, arg2) {
    // console.log();
  }
  selectforcolCheck(objEvent) {
    // this.chkAll = objEvent.target.colChecked;
  }
  colCheckCol(arg1, arg2) {}

  //for logging element entry
  testClick(element) {
    console.log(element);

    Object.keys(element).forEach(key => {
      this.eleDatata1.push(element[key]);
    });

    var res = this.eleDatata1;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  setGroups(groupsOn: boolean) {
    // this.grouped = groupsOn;
  }
  setHeaders(headersOn: boolean) {
    this.headers = headersOn;
  }

  masterToggle(event) {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => {
          this.selection.select(row);
        });
  }

  colCheckboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    } else {
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
        row.position + 1
      }`;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
