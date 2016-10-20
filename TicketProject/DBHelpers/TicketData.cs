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
            strSQL = "Select * From ticket_info";
            DataTable dt = DBHelpers.List(strSQL, objConn);
            objConn.Close();
            return dt;
        }


    }
}