import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrefServiceService {


  firstYearStr = [];
  secondYearStr = [];
  thirdYearStr = [];

  constructor(private httpClient: HttpClient) { }

  updateAccountPrefsWithMultiplePharmacies(transactionId: string, userId: string, preference: string, key: any[]){

    const body = this.createBuild(transactionId, key, userId, preference)

    console.log(body)
  }

  createBuild(transactionId, pharmAccountsSelected, userId, preference){

    let acctListByYear = {};
  
    let acctPrefsStr = [];
    let currentYearArray = [];
  
    let now = new Date();
    let firstYear = now.getFullYear();
    let secondYear = now.getFullYear() + 1;
    let thirdYear = now.getFullYear() + 2;
  
    let startYearStr = firstYear.toString();
    let midYearStr = secondYear.toString();
  
    //let prefArray = this.preference.split(",");
    let prefArray = preference.split(",");
    
    
    let acctLists =[];
   
  
  
    prefArray.forEach(cDate => {
      let dateStr = cDate.split("/");
      let yearStr = dateStr[2];
  
      if(yearStr === startYearStr ){
        this.firstYearStr.push(cDate)
      } else if (midYearStr === yearStr) {
        this.secondYearStr.push(cDate)
      } else {
        this.thirdYearStr.push(cDate);
      }
      
      
    });
  
    currentYearArray = [firstYear.toString(), secondYear.toString(), thirdYear.toString];
  
  
   if(this.firstYearStr.toString().length > 0 && this.secondYearStr.toString().length > 0 && this.thirdYearStr.toString().length > 0){
    acctPrefsStr = [this.firstYearStr.toString(),this.secondYearStr.toString(), this.thirdYearStr.toString()];
   } else if (this.firstYearStr.toString().length > 0 && this.secondYearStr.toString().length === 0 && this.thirdYearStr.toString().length === 0) {
    acctPrefsStr = [this.firstYearStr.toString()];
   } else if (this.firstYearStr.toString().length > 0 && this.secondYearStr.toString().length > 0 && this.thirdYearStr.toString().length === 0) {
    acctPrefsStr = [this.firstYearStr.toString(),this.secondYearStr.toString()];
   } else if (this.firstYearStr.toString().length > 0 && this.secondYearStr.toString().length === 0 && this.thirdYearStr.toString().length > 0) {
    acctPrefsStr = [this.firstYearStr.toString(), this.thirdYearStr.toString()];
   } else if (this.firstYearStr.toString().length === 0 && this.secondYearStr.toString().length > 0 && this.thirdYearStr.toString().length > 0) {
    acctPrefsStr = [this.secondYearStr.toString(), this.thirdYearStr.toString()];
   } else if (this.firstYearStr.toString().length === 0 && this.secondYearStr.toString().length > 0 && this.thirdYearStr.toString().length === 0) {
    acctPrefsStr = [this.secondYearStr.toString()];
   } else if (this.firstYearStr.toString().length === 0 && this.secondYearStr.toString().length === 0 && this.thirdYearStr.toString().length > 0) {
    acctPrefsStr = [this.thirdYearStr.toString()];
   }
  
    
  
    for(let i = 0; i < pharmAccountsSelected.length; i++){
      for(let j = 0; j < acctPrefsStr.length; j++){
  
        let cDatesPrefs = acctPrefsStr[j].split(",")
        let yearSplit = cDatesPrefs[0].split("/")
  
        acctListByYear = {
          preference: acctPrefsStr[j],
          key: pharmAccountsSelected[i]+"|"+yearSplit[2]
        }
        acctLists.push(acctListByYear)
      }
      
  }
  
  let body = {
    transactionId: transactionId,
    userId: userId,
    accountPreferenceDataList: acctLists
  }
  
  console.log(body)
  
  }
}
