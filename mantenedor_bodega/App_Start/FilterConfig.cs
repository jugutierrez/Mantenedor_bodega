﻿using System.Web;
using System.Web.Mvc;

namespace Control_cuentas_maestro
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
