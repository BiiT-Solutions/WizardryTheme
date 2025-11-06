import { Pipe, PipeTransform } from '@angular/core';
import {MetaViewElementData} from "../model/meta-view-element-data";

@Pipe({
  name: 'extractData'
})
export class ExtractDataPipe implements PipeTransform {

  transform(metaViewData: MetaViewElementData[]): Object[] {
    return  metaViewData.map((element: MetaViewElementData) => element.data) || [];
  }

}
