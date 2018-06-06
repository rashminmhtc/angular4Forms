import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidatorFn, Validator, FormControl } from '@angular/forms';
import * as moment from 'moment';

export function birthDateValidator(control: AbstractControl):{ [key: string]: boolean}  {
  const dob = control.get('dob');
  if (!dob) {
    return null;
  }
  let dobVal = moment(dob.value);
  let currentDate = moment().format('DD/MM/YYYY');
  if (dobVal.isValid()) {
    return null;
  }
  return {
    dobError: true 
  };
}
@Directive({
  selector: '[dobValidator]',
  providers: [
    provide: NG_VALIDATORS, 
    useValue: birthDateValidator
  ]
})

export class BirthDateValidatorDirective {

}