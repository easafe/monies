namespace monies

open System
open Avalonia.Themes.Fluent
open Fabulous
open Fabulous.Avalonia

open type Fabulous.Avalonia.View

module App =
    type Expense =
        { Amount: decimal
          Tag: string
          time: DateTime }

    type Budget =
        { Max: decimal
          Days: int
          Start: DateOnly
          Expenses: Expense list }

    type Model =
        { Budgets: Budget list
          MaxInput: decimal Option
          DaysInput: int Option }

    type Msg =
        | Start
        | SetMaxInput of string
        | SetDaysInput of string

    let initModel =
        { Budgets = []
          MaxInput = None
          DaysInput = None }

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

    let update msg model =
        match msg with
        | Start ->
            match model.MaxInput, model.DaysInput with
            | Some m, Some d ->
                { model with
                    Budgets =
                        { Max = m
                          Days = d
                          Start = DateOnly.FromDateTime(DateTime.Now)
                          Expenses = [] }
                        :: model.Budgets },
                Cmd.none
            | _, _ -> model, Cmd.none

        | SetMaxInput max ->
            { model with
                MaxInput = parseDecimal max },
            Cmd.none
        | SetDaysInput days -> { model with DaysInput = parseInt days }, Cmd.none

    let view model =
        match model.Budgets with
        | [] ->
            (VStack() {
                TextBlock("monies").centerText ()

                MaskedTextBox("Max budget", "$", SetMaxInput).centerText ()

                Button("Add", Start).centerHorizontal ()
            })
        | b :: bs ->
            (VStack() {
                TextBlock("monies").centerText ()

                TextBlock("Max budget: " + b.Max.ToString()).centerText ()
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
