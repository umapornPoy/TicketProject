using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TicketProject.Controllers
{
    public class TicketController : Controller
    {
        // GET: Ticket
        public ActionResult AllTicket()
        {
            return View();
        }
        public ActionResult OpenTicket()
        {
            return View();
        }
    }
}