using System.Web.Http;

namespace MvcApi.Controllers
{
    using System.Threading.Tasks;
    public class TestController : ApiController
    {
        /// <summary>
        /// Get Api Method
        /// </summary>
        /// <returns></returns>
        public int Get()
        {
            var result = 0;
            for (int x = 1; x < 1000000; x++)
            {

                result = x;
            }
            System.Threading.Thread.Sleep(2000);
            return result;
        }
    }
}
