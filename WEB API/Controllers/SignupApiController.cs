using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using WEB_API.Data;
using WEB_API.Models;

namespace WEB_API.Controllers
{
    public class SignupApiController : ApiController
    {
        CarInventoryDbContext db = new CarInventoryDbContext();

        //Get All Records   
        [HttpGet]
        public  IEnumerable<Signup> Get()
        {
            return db.signups.ToList();
        }
        [HttpPost]
        public string Post(Signup signups)
        { 
            db.signups.Add(signups);
            db.SaveChanges();
            return "Signup Successfully";
        }
        
    }
}
