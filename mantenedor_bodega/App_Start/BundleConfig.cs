﻿using System.Web;
using System.Web.Optimization;

namespace Control_cuentas_maestro
{
    public class BundleConfig
    {
        // Para obtener más información sobre Bundles, visite http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));
            bundles.Add(new ScriptBundle("~/bundles/jquery2").Include(
                   "~/Scripts/jquery.unobtrusive-ajax.js"));
            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Utilice la versión de desarrollo de Modernizr para desarrollar y obtener información. De este modo, estará
            // preparado para la producción y podrá utilizar la herramienta de compilación disponible en http://modernizr.com para seleccionar solo las pruebas que necesite.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));
            bundles.Add(new ScriptBundle("~/bundles/dirpagination").Include("~/Scripts/dirPagination.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular_ui").Include(

                 "~/Scripts/angular-ui/ui-bootstrap-tpls.min.js"));
            bundles.Add(new ScriptBundle("~/bundles/angular1").Include(

                     "~/Scripts/angular/modulo.js",
                      "~/Scripts/angular/controller.js",
                     "~/Scripts/angular/services.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/angular.js",
                "~/Scripts/angular-animate.js",
                "~/Scripts/angular-aria.js",
                "~/Scripts/angular-material.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                     "~/Content/angular-material.css",
                      "~/Content/site.css",
                        "~/Content/bootstrap.min.css"));

        }
    }
}
