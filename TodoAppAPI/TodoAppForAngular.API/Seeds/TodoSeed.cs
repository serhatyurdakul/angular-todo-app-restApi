using TodoAppForAngular.API.Models;

namespace TodoAppForAngular.API.Seeds;

public class TodoSeed
{
    public static void AddTodosDummy(AppDbContext context)
    {
        if (context.Todos!.Any()) return;
        context.Todos!.Add(new() { Content = "todo 1", Created = DateTime.Now, IsCompleted = false });
        context.Todos!.Add(new() { Content = "todo 2", Created = DateTime.Now, IsCompleted = false });
        context.SaveChanges();
    }
}