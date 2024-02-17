using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WomackMission5.Models;

namespace WomackMission5.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Calculator()
        {
            return View();
        }
    }
}
