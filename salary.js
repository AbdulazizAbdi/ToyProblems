// create function for the payee tax
function payeeTax(grossSalary, salaryBenefits){
    //Separate benefits from the taxable amount before putting it through the statements.
    monthlyTaxablePay = grossSalary - salaryBenefits;
    let payeeDeduction = 0;

    if (monthlyTaxablePay <= 24000){
        payeeDeduction = monthlyTaxablePay * 0.1;
        return payeeDeduction;
    }
    else if (monthlyTaxablePay >= 24001 && monthlyTaxablePay < 32334){
        payeeDeduction = monthlyTaxablePay * 0.25;
        return payeeDeduction;
    }
    else if (monthlyTaxablePay >= 32334 && monthlyTaxablePay < 500001){
        payeeDeduction = monthlyTaxablePay * 0.3;
        return payeeDeduction;
    }
    else if (monthlyTaxablePay >= 500001 && monthlyTaxablePay <= 800000){
        payeeDeduction = monthlyTaxablePay * 0.325;
        return payeeDeduction;
    }
    else if (monthlyTaxablePay > 800000){
        payeeDeduction = monthlyTaxablePay * 0.35;
        return payeeDeduction;
    }
}

//create function for NHIF Tax
function nhifTax(grossSalary){
    let nhifDeduction = 0;
    
    if (grossSalary < 5999){
        netAfterNhifDeduction = grossSalary - 150; 
        nhifDeduction = 150;
        return nhifDeduction;
    }
    else if(grossSalary >= 6000 && grossSalary < 8000){
        netAfterNhifDeduction = grossSalary - 300;
        nhifDeduction = 300;
        return nhifDeduction;
    }
    else if(grossSalary >= 8000 && grossSalary < 12000){
        netAfterNhifDeduction = grossSalary - 400;
        nhifDeduction = 400;
        return nhifDeduction;
    }
    else if(grossSalary >= 12000 && grossSalary < 15000){
        netAfterNhifDeduction = grossSalary - 500;
        nhifDeduction = 500;
        return nhifDeduction;
    }
    else if(grossSalary >= 15000 && grossSalary < 20000){
        netAfterNhifDeduction = grossSalary - 600;
        nhifDeduction = 600;
        return nhifDeduction;
    }
    else if(grossSalary >= 20000 && grossSalary < 25000){
        netAfterNhifDeduction = grossSalary - 750;
        nhifDeduction = 750;
        return nhifDeduction;
    }
    else if(grossSalary >= 25000 && grossSalary < 30000){
        netAfterNhifDeduction = grossSalary - 850;
        nhifDeduction = 850;
        return nhifDeduction;
    }
    else if(grossSalary >= 30000 && grossSalary < 35000){
        netAfterNhifDeduction = grossSalary - 900;
        nhifDeduction = 900;
        return nhifDeduction;
    }
    else if(grossSalary >= 35000 && grossSalary < 40000){
        netAfterNhifDeduction = grossSalary - 950;
        nhifDeduction = 950;
        return nhifDeduction;
    }
    else if(grossSalary >= 40000 && grossSalary < 45000){
        netAfterNhifDeduction = grossSalary - 1000;
        nhifDeduction = 1000;
        return nhifDeduction;
    }
    else if(grossSalary >= 45000 && grossSalary < 50000){
        netAfterNhifDeduction = grossSalary - 1100;
        nhifDeduction = 1100;
        return nhifDeduction;
    }
    else if(grossSalary >= 50000 && grossSalary < 60000){
        netAfterNhifDeduction = grossSalary - 1200;
        nhifDeduction = 1200;
        return nhifDeduction;
    }
    else if(grossSalary >= 60000 && grossSalary < 70000){
        netAfterNhifDeduction = grossSalary - 1300;
        nhifDeduction = 1300;
        return nhifDeduction;
    }
    else if(grossSalary >= 70000 && grossSalary < 80000){
        netAfterNhifDeduction = grossSalary - 1400;
        nhifDeduction = 1400;
        return nhifDeduction;
    }
    else if(grossSalary >= 80000 && grossSalary < 90000){
        netAfterNhifDeduction = grossSalary - 1500;
        nhifDeduction = 1500;
        return nhifDeduction;
    }
    else if(grossSalary >= 90000 && grossSalary < 100000){
        netAfterNhifDeduction = grossSalary - 1600;
        nhifDeduction = 1600;
        return nhifDeduction;
    }
    else if(grossSalary >= 100000){
        netAfterNhifDeduction = grossSalary - 1700;
        nhifDeduction = 1700;
        return nhifDeduction;
    }
}

//create function for NFFS Tax
function nssfTax(grossSalary){
    let nssfDeduction = 0;
    
    if (grossSalary <= 299999){
        nssfDeduction = grossSalary * 0.12;;
        return nssfDeduction;
    }
    else if (grossSalary >= 300000){
        nssfDeduction = 36000;
        return nssfDeduction;
    }
}

//Input of gross salary
const grossPay = 1000000;
console.log(`Gross Salary Amount: ${grossPay}`);

//Log and print the tax amounts from the three tax functions above.
const payeeDeductionAmount = payeeTax(1000000, 24000);
const nhifDeductionAmount = nhifTax(1000000);
const nssfDeductionAmount = nssfTax(1000000);

console.log(`Payee (Tax) Amount: ${payeeDeductionAmount}`);
console.log(`NHIF Deduction Amount: ${nhifDeductionAmount}`);
console.log(`NSSF Deduction Amount: ${nssfDeductionAmount}`);

//calculate total tax amount and net pay from the outputs of the functions and the gross pay amount.
const totalTaxedAmount = payeeDeductionAmount + nhifDeductionAmount + nssfDeductionAmount;
console.log(`Total Taxed Amount: ${totalTaxedAmount}`);
const netSalary = grossPay - totalTaxedAmount;
console.log(`Net salary: ${netSalary}`);