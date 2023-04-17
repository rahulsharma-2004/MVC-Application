using Cars_Inventory.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Cars_Inventory.Controllers
{
    public class SignupController : Controller
    {
        Uri baseAddress = new Uri("https://localhost:44399");
        HttpClient client;

        public SignupController()
        {
        }

        [HttpGet]
        public ActionResult Signup()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult> Signup(Signup signups)
        {
            client = new HttpClient();
            client.BaseAddress = baseAddress;
            string data = JsonConvert.SerializeObject(signups);
            var message = new HttpRequestMessage
            {
                Content = new StringContent(data, Encoding.UTF8, "application/json")
            };
            message.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            HttpResponseMessage response = await client.PostAsync("api/SignupApi", message.Content);

            if (response.IsSuccessStatusCode)
            {
                return RedirectToAction("Index", "CarsInventory");
            }
            return View();
        }
    }
}