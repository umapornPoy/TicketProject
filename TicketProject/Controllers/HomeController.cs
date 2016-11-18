using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TicketProject.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Sidebar()
        {
            return View();
        }
        public ActionResult Navbar()
        {
            return View();
        }

        public ActionResult Profiles()
        {
            return View();
        }


        public ActionResult Home()
        {
            return View();
        }
    }
}