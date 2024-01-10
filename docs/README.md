# Software Requirements Specification

Author: [@easafe](https://github.com/easafe)

## Overview

monies is an "accounting" tool that works with a max budget divided by a number of days. The goal is to not surpass the resulting daily budget. If the total expenses for a given day is different than the daily budget, such difference is added to the next day's budget and so on and so forth. If at the end of the period the max budget has not been reached the extra money is considered savings. 

Example:

```
Max budget 100
Days 10
```

That means it is possible to spend 10 per day. If at the first day only 5 is spent then the second day's budget is 15 -- third day onwards still retains the 10 budget. If on the second day nothing is spent then third day has a budget of 25 -- fourth day onwards still retains the initial 10 budget. Likewise if on the third day 30 is spent then the fourth day's budget is now 5 -- fifth day onwards still retains the initial 10 budget. If buy the end of the 10 days only 88 has been spent then the remaining 12 goes to savings.

## Budgets

A budget is a purpoted expeding for a time period. The max budget is an amount expected to be spent over n days. Users may:

* Add any number of max bugets for periods
* Delete a given max budget
* Edit a max budget number of days or amount
* Reset a max budget by recalculating the daily subject
* View past max budgets
* View individual days of budgets and their expenses
* View max budget savings

Similarly, a daily budget is the amount expected to be spent over a single day. This amount can be bigger or smaller than the starting daily budget for a given day according to the previous days expenses. Users may not edit the daily budget in any capacity. It is calculated from the max budget, number of days and current total spent. 

## Expenses

An expense is any single debit from a daily budget. An expense has a amount and optionally a tag and description. Users may:

* Add any number of expenses for the current day
* Add tags to expsnses
* Add descrptions to expenses
* Edit expenses
* Delete expenses

## Savings

Savings are the positive leftovers of max budgets.


