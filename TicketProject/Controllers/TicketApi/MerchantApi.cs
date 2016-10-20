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
    public class MerchantApiController : ApiController
    {

        static readonly IMerchantData repository = new MerchantData();
        [HttpGet]
        [ActionName("ListMerchant")]
        public DataTable ListMerchantInfo()
        {
            return repository.ListMerchantInfo();
        }
        [HttpGet]
        [ActionName("ListBrandInfo")]
        public DataTable GetListBrandInfo(int id)
        {
            return repository.ListBrandInfo(id);
        }
        [HttpGet]
        [ActionName("ListShopInfo")]
        public DataTable GetShopInfo(int id)
        {
            return repository.ListShopInfo(id);
        }
    }
}