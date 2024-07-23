namespace monies

open System
open Avalonia.Themes.Fluent
open Fabulous
open Fabulous.Avalonia


open type Fabulous.Avalonia.View

module App =
    type Expense =
        { Amount: decimal
          Tag: string Option
          time: DateTime }

    type Budget =
        { Max: decimal
          Days: int
          Start: DateTime
          Remaining: decimal
          Expenses: Expense list }

    type Model =
        { Budgets: Budget list
          MaxInput: decimal Option
          DaysInput: int Option
          AmountInput: decimal Option
          TagInput: string Option }

    type Msg =
        | Start
        | SetMaxInput of string
        | SetDaysInput of string
        | SetAmountInput of string
        | SetTagInput of string
        | Spend

    let initModel =
        { Budgets = []
          MaxInput = None
          DaysInput = None
          AmountInput = None
          TagInput = None }

    let init () = initModel, Cmd.none

    let parseDecimal s =
        try
            Some(decimal s)
        with _ ->
            None

    let parseInt s =
        try
            Some(int s)
        with _ ->
            None

    let addExpense (amount, tag) budgets =
        match budgets with
        | [] -> []
        | b :: udgets ->
            { b with
                Expenses =
                    { Amount = amount
                      Tag = tag
                      time = DateTime.Now }
                    :: b.Expenses }
            :: udgets

    let remaining budgets =
        match budgets with
        | [] -> []
        | b :: udgets ->
            let n = (decimal) (DateTime.Now - b.Start).Days + 1m
            let r = List.sumBy (fun e -> e.Amount) b.Expenses

            { b with
                Remaining = b.Max / (decimal) b.Days * n - r }
            :: udgets

    let update msg model =
        match msg with
        | Start ->
            match model.MaxInput, model.DaysInput with
            | Some m, Some d ->
                { model with
                    MaxInput = None
                    DaysInput = None
                    Budgets =
                        { Max = m
                          Days = d
                          Remaining = m / (decimal) d
                          Start = DateTime.Now
                          Expenses = [] }
                        :: model.Budgets },
                Cmd.none
            | _, _ -> model, Cmd.none

        | Spend ->
            match model.AmountInput with
            | Some a ->
                { model with
                    Budgets = addExpense (a, model.TagInput) model.Budgets |> remaining
                    AmountInput = None
                    TagInput = None },
                Cmd.none
            | None -> model, Cmd.none

        | SetMaxInput max ->
            { model with
                MaxInput = parseDecimal max },
            Cmd.none
        | SetDaysInput days -> { model with DaysInput = parseInt days }, Cmd.none
        | SetAmountInput amount ->
            { model with
                AmountInput = parseDecimal amount },
            Cmd.none
        | SetTagInput tag -> { model with TagInput = Some tag }, Cmd.none

    let df o =
        match o with
        | Some p -> p.ToString()
        | None -> ""

    let view model =
        match model.Budgets with
        | [] ->
            (VStack() {
                // i dont know how these paths work
                //    Image("logo_small.png", Strech.Uniform)

                Label("Max budget")
                TextBox(df model.MaxInput, SetMaxInput)
                Label("Days")
                TextBox(df model.DaysInput, SetDaysInput)

                Button("Add", Start)
            })
        | b :: bs ->
            let header =
                (HStack() {
                    Label("Spent")
                    Label("Tag")
                })

            let entry e =
                (HStack() {
                    TextBlock(e.Amount.ToString())

                    TextBlock(
                        match e.Tag with
                        | Some t -> t
                        | None -> ""
                    )
                })

            in

            (VStack() {
                TextBlock("monies").centerText ()

                TextBlock("Max budget: " + b.Max.ToString()).centerText ()
                TextBlock("Days: " + b.Days.ToString()).centerText ()
                TextBlock("Todays' budget " + b.Remaining.ToString()).centerText ()

                Label("Amount")
                TextBox(df model.AmountInput, SetAmountInput)
                Label("Tag")
                TextBox(df model.TagInput, SetTagInput)
                Button("Add", Spend)
                header

                ItemsRepeater(b.Expenses, entry)
            })

    let app model =
        if
            OperatingSystem.IsAndroid()
            || OperatingSystem.IsIOS()
            || OperatingSystem.IsBrowser()
        then
            SingleViewApplication(view model)
        else
            DesktopApplication(Window(view model))

    let theme = FluentTheme()

    let program = Program.statefulWithCmd init update app
