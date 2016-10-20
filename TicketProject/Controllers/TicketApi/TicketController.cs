using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TicketProject.DBHelpers;
namespace TicketProject.Controllers.TicketApi
{
    public class TicketApiController : ApiController
    {


        static readonly ITicketData repository = new TicketData();
        [HttpGet]
        [ActionName("ticketInfo")]
        public DataTable GetTicketInfo()
        {
            return repository.TicketInfo();
        }
    }
}