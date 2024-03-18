using CardGame.Domain.Entities;
using CardGame.Infrastructure.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CardGame.UI.WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        ApplicationDbContext context;
        public UserController(ApplicationDbContext context)
        {
                this.context = context;
        }

        [HttpGet]
        public User Get()
        {
            var user = context.Users;
            return user.FirstOrDefault();
        }
    }
}
