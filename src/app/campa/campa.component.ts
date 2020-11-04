import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PrefServiceService } from '../pref-service.service';

@Component({
  selector: 'app-campa',
  templateUrl: './campa.component.html',
  styleUrls: ['./campa.component.css']
})


export class CampaComponent {

  

  form: FormGroup;

  acctsData = []
  pharmNames = ['Pharmacy 1', 'Pharmacy 2', 'Pharmacy 6', 'Pharmacy 12', 'Pharmacy 11', 'Pharmacy 16'];

  pharmAccounts = ["12-99999", "13-33333", "45-12222", "65-33333", "23-2443213"];
  preference = "01/20/2020,01/02/2021,01/03/2022,03/20/2021,11/23/2020,09/22/2022";
  preference2020 = "01/20/2020,11/23/2020";
  preference2021 = "01/02/2021,03/20/2021";
  preference2022 = "01/03/2022,09/22/2022";
  preference20202021 = "01/20/2020,01/02/2021";
  preference20212022 = "01/02/2021,01/03/2022,03/20/2021,09/22/2022";
  preference20202022 = "01/20/2020,01/03/2022,11/23/2020,09/22/2022";

  pharmAccountsSelected = [];

  transactionId = "13490823049813024";
  userId = "mileyme"
acctPrefs = [];

  constructor(private formBuilder: FormBuilder, private prefService: PrefServiceService) { 
    this.form = this.formBuilder.group({
      pharmacyAccts: new FormArray([])
    });

    this.addCheckboxes();
  }

  buildAccountsData(){

    for(let i = 0; i < this.pharmAccounts.length; i++ ){
      let acctData = {
        acctNumber: this.pharmAccounts[i],
        name: this.pharmNames[i]
      };
      this.acctsData.push(acctData);
    }

    console.log(this.acctsData)

    return this.acctsData
  }
  
get acctsFormArray(){
  return this.form.controls.pharmacyAccts as FormArray;
}

private addCheckboxes(){
  let accts = this.buildAccountsData();
  accts.forEach(() => this.acctsFormArray.push(new FormControl(false)));

}

submit() {
  const selectedAcctIds = this.form.value.pharmacyAccts
  .map((checked, i) => checked ? this.acctsData[i].acctNumber : null)
  .filter(v => v !== null);
  console.log(selectedAcctIds);
  this.pharmAccountsSelected = selectedAcctIds;
  //this.createBuild()
  this.prefService.updateAccountPrefsWithMultiplePharmacies(this.transactionId, this.userId, this.preference, this.pharmAccountsSelected )
}
  


//  createBuild(transactionId: string, userId: string, preference: string, key: string){


}