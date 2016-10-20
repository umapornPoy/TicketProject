using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
namespace TicketProject.DBHelpers
{
    public interface IMerchantData
    {
        DataTable ListMerchantInfo();
        DataTable ListBrandInfo(int id);
        DataTable ListShopInfo(int id);
    }
    public class MerchantData : IMerchantData
    {

        string errMsg = "";
        public DataTable ListMerchantInfo()
        {
            SqlConnection objConn = DBHelpers.ConnectDb(ref errMsg);
            string strSQL = "";
            strSQL = "\r\n Select MerchantID, MerchantCode,MerchantName " +
                     "\r\n From merchant_profile " +
                     "\r\n Where Deleted=0 " +
                     "\r\n Order by MerchantName ASC ;";
            DataTable dt = DBHelpers.List(strSQL, objConn);
            objConn.Close();
            return dt;
        }
        public DataTable ListBrandInfo(int id)
        { //id=MerchantID

            SqlConnection objConn = DBHelpers.ConnectDb(ref errMsg);
            string strSQL = "";
            strSQL = "\r\n Select BrandID, MerchantID, BrandName ,BrandCode " +
                     "\r\n From brand_profile " +
                     "\r\n Where Deleted = 0 ";
            if (id > 0)
            {
                strSQL += "and MerchantID =" + id;
            }
            strSQL += "\r\n Order by BrandName ASC ";
            DataTable dt = DBHelpers.List(strSQL, objConn);
            objConn.Close();
            return dt;
        }
        public DataTable ListShopInfo(int id)
        { //id=BrandID
            SqlConnection objConn = DBHelpers.ConnectDb(ref errMsg);
            string strSQL = "";
            strSQL = "\r\n Select MerchantID,BrandID,ProductLevelID,ProductLevelCode,ProductLevelName From productlevel " +
                     "\r\n where Deleted=0";
            if (id > 0)
            {
                strSQL += " and BrandID=" + id;
            }

            strSQL += "\r\n  Order by ProductLevelName ASC ";
            DataTable dt = DBHelpers.List(strSQL, objConn);
            objConn.Close();
            return dt;
        }

    }

    }