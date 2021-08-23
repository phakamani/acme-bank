import { DialogService } from './../dialog/dialog.service';
import { Account } from './../model/account.model';
import { AccountsService } from './accounts.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accounts: Account[];
  accountType = '';
  balance = 0;
  @ViewChild('amount') amount: ElementRef;
  error: boolean;
  errorMessage: string;
  success: boolean;
  index: any;
  totalBalance = 0;


  constructor(
    private accountService: AccountsService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.accountService.getAccount().subscribe(
      response => {
        this.accounts = response;
        this.calculateTotalBalance();
      },
      error => {
        alert("Error retrieving data");
      }
    )
  }

  calculateTotalBalance() {
    this.totalBalance = this.accounts.reduce((previousValue, account) => {
      return previousValue + Number(account.balance);
    }, 0)
  }

  withdrawAmount() {
    this.error = false;
    const amount = Number(this.amount.nativeElement.value);

    // check if amount is Valid
    if (isNaN(amount)) {
      this.error = true;
      this.errorMessage = 'Enter valid amount';
      return;
    }

    switch (this.accountType) {
      case 'cheque':
        // check if amount is less than -500
        if (this.balance - amount < -500) {
          this.error = true;
          this.errorMessage = `Please enter an amount less than or equal to ${(this.balance + 500).toFixed(2)}`;
          return;
        }
        break;

      case 'savings':
        // check if amount the is an amount available
        if (amount > this.balance) {
          this.error = true;
          this.errorMessage = `Please enter an amount less than or equal to ${this.balance.toFixed(2)}`;
          return;
        }
        break;
      default:
        break;
    }

    this.error = false;
    this.closeDialog();

    this.accounts = this.accounts.map((account, index) => {
      if (index === this.index) {
        account.balance = (Number(account.balance) - amount).toString();
      }
      return account;
    })

    this.calculateTotalBalance();

    setTimeout(()=>{
      this.amount.nativeElement.value = '';
      alert('success');
    }, 200)
  }

  initiateWithdrawal(balance: string, accountType: string, index) {
    this.index = index;
    this.dialogService.open('account-dialog')
    this.accountType = accountType;
    this.balance = Number(balance);
  }

  closeDialog() {
    this.amount.nativeElement.value = '';
    this.dialogService.close('account-dialog');
    this.error = false;
  }

  cancel() {
    this.closeDialog();
  }
}
