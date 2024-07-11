import {TableColumn, ValueGetter} from "@siemens/ngx-datatable";
import {PipeTransform, TemplateRef} from "@angular/core";

export class DatatableColumn implements TableColumn {
  /**
   * Internal unique id
   *
   * @memberOf TableColumn
   */
  $$id?: string;

  /**
   * Internal for column width distributions
   *
   * @memberOf TableColumn
   */
  $$oldWidth?: number;

  /**
   * Internal for setColumnDefaults
   *
   * @memberOf TableColumn
   */
  $$valueGetter?: ValueGetter;

  /**
   * Determines if column is checkbox
   *
   * @memberOf TableColumn
   */
  checkboxable?: boolean;

  /**
   * Determines if the column is frozen to the left
   *
   * @memberOf TableColumn
   */
  frozenLeft?: boolean;

  /**
   * Determines if the column is frozen to the right
   *
   * @memberOf TableColumn
   */
  frozenRight?: boolean;

  /**
   * The grow factor relative to other columns. Same as the flex-grow
   * API from http =//www.w3.org/TR/css3-flexbox/. Basically;
   * take any available extra width and distribute it proportionally
   * according to all columns' flexGrow values.
   *
   * @memberOf TableColumn
   */
  flexGrow?: number;

  /**
   * Min width of the column
   *
   * @memberOf TableColumn
   */
  minWidth?: number;

  /**
   * Max width of the column
   *
   * @memberOf TableColumn
   */
  maxWidth?: number;

  /**
   * The default width of the column, in pixels
   *
   * @memberOf TableColumn
   */
  width?: number;

  /**
   * Can the column be resized
   *
   * @memberOf TableColumn
   */
  resizeable?: boolean;

  /**
   * Custom sort comparator
   *
   * @memberOf TableColumn
   */
  comparator?: any;

  /**
   * Custom pipe transforms
   *
   * @memberOf TableColumn
   */
  pipe?: PipeTransform;

  /**
   * Can the column be sorted
   *
   * @memberOf TableColumn
   */
  sortable?: boolean;

  /**
   * Can the column be re-arranged by dragging
   *
   * @memberOf TableColumn
   */
  draggable?: boolean;

  /**
   * Whether the column can automatically resize to fill space in the table.
   *
   * @memberOf TableColumn
   */
  canAutoResize?: boolean;

  /**
   * Column name or label
   *
   * @memberOf TableColumn
   */
  name?: string;

  /**
   * Property to bind to the row. Example:
   *
   * `someField` or `some.field.nested`, 0 (numeric)
   *
   * If left blank, will use the name as camel case conversion
   *
   * @memberOf TableColumn
   */
  prop?: string | number;

  /**
   * Cell template ref
   *
   * @memberOf TableColumn
   */
  cellTemplate?: any;

  /**
   * Ghost Cell template ref
   *
   * @memberOf TableColumn
   */
  ghostCellTemplate?: any;

  /**
   * Header template ref
   *
   * @memberOf TableColumn
   */
  headerTemplate?: any;

  /**
   * Tree toggle template ref
   *
   * @memberOf TableColumn
   */
  treeToggleTemplate?: any;

  /**
   * CSS Classes for the cell
   *
   *
   * @memberOf TableColumn
   */
  cellClass?: string | ((data: any) => string | any);

  /**
   * CSS classes for the header
   *
   *
   * @memberOf TableColumn
   */
  headerClass?: string | ((data: any) => string | any);

  /**
   * Header checkbox enabled
   *
   * @memberOf TableColumn
   */
  headerCheckboxable?: boolean;

  /**
   * Is tree displayed on this column
   *
   * @memberOf TableColumn
   */
  isTreeColumn?: boolean;

  /**
   * Width of the tree level indent
   *
   * @memberOf TableColumn
   */
  treeLevelIndent?: number;

  /**
   * Summary function
   *
   * @memberOf TableColumn
   */
  summaryFunc?: (cells: any[]) => any;

  /**
   * Summary cell template ref
   *
   * @memberOf TableColumn
   */
  summaryTemplate?: any;

  /**
   * Sets visibility of the column
   */
  visible?: boolean;

  constructor(name: string, prop: string|number, visible?: boolean, width?: number, sortable?: boolean, pipe?: PipeTransform, cellTemplate?: TemplateRef<any>, cellClass?: string|((data: any) => string | any), comparator?: Function) {
    this.name = name;
    this.prop = prop;
    this.visible = visible ?? true;
    this.width = width ?? undefined;
    this.sortable = sortable ?? true;
    this.pipe = pipe ?? undefined;
    this.cellTemplate  = cellTemplate ?? undefined;
    this.cellClass = cellClass ?? undefined;
    this.comparator = comparator ?? undefined;
  }
}
