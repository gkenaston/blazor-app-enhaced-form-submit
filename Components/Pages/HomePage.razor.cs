namespace BlazorAppEnhacedFormSubmit.Components.Pages;

using Microsoft.AspNetCore.Components;

public partial class HomePage
{
    [SupplyParameterFromForm] FormModel Model { get; set; } = new();

    [Inject] IConfiguration Configuration { get; set; } = null!;

    void OnSubmit()
    {
        Console.WriteLine($"Name: {Model.Name}");
        Console.WriteLine($"CaptchaToken: {Model.CaptchaToken}");
    }

    class FormModel
    {
        public string? Name { get; set; }
        public string? CaptchaToken { get; set; }
    }
}
