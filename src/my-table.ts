import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MyTableRow } from './my-table-row.js';

@customElement('my-table')
export class MyTable extends LitElement {
  @property({ type: Array, reflect: false })
  public selectedRows?: MyTableRow[] = [];
}
