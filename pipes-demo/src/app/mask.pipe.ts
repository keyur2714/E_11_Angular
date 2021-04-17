import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask',
  pure : false
})
export class MaskPipe implements PipeTransform {

  transform(value: string, maskChar ?: string ,noOfVisibleChar ?: number): string {
    console.log(maskChar+" "+noOfVisibleChar);
    if(maskChar !== undefined){
      if(noOfVisibleChar === undefined)  
        noOfVisibleChar = 4;
      let maskValue = "";
      for(let i=1;i<=value.length-noOfVisibleChar;i++){
       maskValue = maskValue + maskChar;
      }
      let visibleChars = value.substring(value.length-noOfVisibleChar,value.length);
      let newValue = maskValue + visibleChars;
      return newValue;
    }        
    return "";  
  }

}
