namespace BlazorAppEnhacedFormSubmit.Components.Pages;

using Microsoft.AspNetCore.Components;

public partial class Home
{
    [SupplyParameterFromForm] FormModel Model { get; set; } = new();

    void OnSubmit()
    {
        Console.WriteLine($"Name: {Model.Name}");
    }

    class FormModel
    {
        public string? Name { get; set; }
    }
}
