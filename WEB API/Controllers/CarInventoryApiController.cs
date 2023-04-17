using Microsoft.Ajax.Utilities;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http; 
using WEB_API.Data;
using WEB_API.Models;

namespace WEB_API.Controllers
{
    public class CarInventoryApiController : ApiController
    {
        CarInventoryDbContext db = new CarInventoryDbContext();

        //Get All Records   
        [HttpGet]
        public async Task<IHttpActionResult> Get()
        {
            return Ok(db.cars.ToList()); 
        }
        [HttpGet]
        public Cars Get(int id)
        {
            return db.cars.FirstOrDefault(x=>x.Id ==id); 
        }
        [HttpPost]
        public string Post(Cars cars)
        {

            db.cars.Add(cars);
            db.SaveChanges();
            return "Car Added Successfully";
        }
        [HttpPut]
        public string Put(int id, Cars cars)
        {
            var car = db.cars.Find(id);
            car.Brand = cars.Brand;
            car.Model = cars.Model;
            car.Year = cars.Year;
            car.Price = cars.Price;
            car.New = cars.New;
            db.Entry(car).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return "Cars Details Updated Successfully";

        }
        [HttpDelete]

        public string Delete(int id)
        {
            Cars car = db.cars.Find(id);
            db.cars.Remove(car);
            db.SaveChanges();
            return "Delete Successfully";
        }

        [HttpGet]
        [Route("search/{Model}")]
        public HttpResponseMessage Search(string Model, string Brand)
        {
            try
            {
                var httpResponseMessage = new HttpResponseMessage();
                httpResponseMessage.Content = new StringContent(JsonConvert.SerializeObject(db.cars.Where(c => c.Model.Contains(Model)).ToList()));
                httpResponseMessage.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/json");
                return httpResponseMessage;
            //    if (string.IsNullOrEmpty(Model) || string.IsNullOrEmpty(Brand))
            //    {
            //        return BadRequest("Both model and brand are required.");
            //    }

                //    var results = db.cars
                //                    .Where(e => e.Model == Model && e.Brand == Brand)
                //                    .ToList();

            }
            catch 
            {

                return null;
            } 
        } 
    }
}
