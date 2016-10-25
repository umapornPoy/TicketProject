using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace TicketProject.DBHelpers
{


    public interface ITicketData
    {

        DataTable TicketInfo();
    }

    public class TicketData : ITicketData
    {
        string errMsg = "";
        public DataTable TicketInfo()
        {
            SqlConnection objConn = DBHelpers.ConnectDb(ref errMsg);
            string strSQL = "";
             strSQL =   "\r\n Select t.*,m.MerchantName,b.BrandName,c.ProductLevelName From  ticket_info t " +
                        "\r\n left join merchant_profile m on t.MerchantID = m.MerchantID " +
                        "\r\n left join brand_profile b on t.BrandID = b.BrandID " +
                        "\r\n left join productlevel c on t.ShopID = c.ProductLevelID " +
                        "\r\n Order By t.TicketID DESC ";

            DataTable dt = DBHelpers.List(strSQL, objConn);
            objConn.Close();
            return dt;
        }


    }
}