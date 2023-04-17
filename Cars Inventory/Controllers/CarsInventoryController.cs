using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Services.Description;
using System.Web.UI.WebControls;
using System.Xml;
using Cars_Inventory.Models;
using log4net;
using Newtonsoft.Json;

namespace Cars_Inventory.Controllers
{
    public class CarsInventoryController : Controller
    {
        private ILog Logger = LogManager.GetLogger(typeof(CarsInventoryController));

        Uri baseAddress = new Uri("https://localhost:44399");
        HttpClient client;

        public CarsInventoryController()
        {
        }

        public async Task<ActionResult> Index(string searchBy ,string searchValue)
        {
            client = new HttpClient();
            client.BaseAddress = baseAddress;
            List<Cars> cars = new List<Cars>();
            HttpResponseMessage response = await client.GetAsync("api/CarInventoryApi");
            if (response.IsSuccessStatusCode)
            {
                string data = response.Content.ReadAsStringAsync().Result;
                cars = JsonConvert.DeserializeObject<List<Cars>>(data);
            }
            else
            {
                if (string.IsNullOrEmpty(searchValue))
                {
                    TempData["InfoMessage"] = "Please Provide Search Value";
                    return View(cars);
                }
                else
                {
                    if(searchBy.ToLower() == "Model")
                    {
                        var searchByModel = cars.Where(c => c.Model.ToLower().Contains(searchValue.ToLower()));
                        return View(searchByModel);
                    }
                     else if (searchBy.ToLower() == "Brand")
                    {
                        var searchByBrand = cars.Where(c => c.Brand.ToLower().Contains(searchValue.ToLower()));
                        return View(searchByBrand);
                    }
                }
            }
            return View(cars);
        }
        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult> Create(Cars cars)
        {
            client = new HttpClient();
            client.BaseAddress = baseAddress;
            string data = JsonConvert.SerializeObject(cars);
            var message = new HttpRequestMessage
            {
                Content = new StringContent(data, Encoding.UTF8, "application/json")
            };
            message.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            HttpResponseMessage response = await client.PostAsync("api/CarInventoryApi", message.Content);

            if (response.IsSuccessStatusCode)
            {
                return RedirectToAction("Index");
            }
            return View();
        }
        public async Task<ActionResult> Edit(int id = 0)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://localhost:44399");
                HttpResponseMessage response = await client.GetAsync($"api/CarInventoryApi/"+id);
 
                if (!response.IsSuccessStatusCode)
                {
                    return RedirectToAction("Edit");
                }
                var json = response.Content.ReadAsStringAsync().Result;
                var result = JsonConvert.DeserializeObject<Cars>(json);
                return View(result);
            }
        }
        [HttpPost]
        public async Task<ActionResult> Edit(Cars cars)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://localhost:44399");

                var data = JsonConvert.SerializeObject(cars);
                var content = new StringContent(data, Encoding.UTF8, "application/json");

                HttpResponseMessage response = await client.PutAsync($"api/CarInventoryApi/{cars.Id}", content);

                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction("Index");
                }

                var errorMessage = await response.Content.ReadAsStringAsync();
                ModelState.AddModelError("", errorMessage);
                return View(cars);
            }
        }
         
        public async Task<ActionResult> Delete(int id)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://localhost:44399");

                HttpResponseMessage response = await client.DeleteAsync($"api/CarInventoryApi/{id}");
                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction("Index");
                }
                else
                {
                    var errorMessage = await response.Content.ReadAsStringAsync();
                    return Content(errorMessage);
                }
            }
        }

        public ActionResult Search()
        {
            return View(new Cars());
        }

        [HttpPost]
        public async Task<ActionResult> Search(Cars cars)
        {
            if (!ModelState.IsValid)
            {
                return View(cars);
            }

            var results = new List<Cars>();

            using (var client = new HttpClient())
            {
                var url = $"https://localhost:44399/api/search?cars={cars.Model}&brand={cars.Brand}";
                var response = await client.GetAsync("api/CarInventoryApi/");

                if (response.IsSuccessStatusCode)
                {
                    //results = await response.Content.ReadAsStringAsync<List<Cars>>();
                }
            }

            return View("SearchResults", results);
        }

    }
}