using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace FilmTrack.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/light-bulbs")]
    public class LightsController : ControllerBase
    {
        private readonly ILogger<LightsController> _logger;
        private readonly ILightTest _lightTest;

        public LightsController(ILogger<LightsController> logger, ILightTest lightTest)
        {
            _logger = logger;
            _lightTest = lightTest;
        }

        [HttpGet("number-of-lights/{numberOfLights}/number-of-people/{numberOfPeople}")]
        public async Task<ActionResult<List<Light>>> Get([FromRoute] int numberOfLights, [FromRoute] int numberOfPeople)
        {
            if (numberOfLights < 1 || numberOfPeople < 1)
            {
                var errorResponse = new ModelStateDictionary();
                if (numberOfLights < 1)
                {
                    errorResponse.AddModelError("numberOfLights", "Number of Lights must be greater than 0");
                }

                if (numberOfPeople < 1)
                {
                    errorResponse.AddModelError("numberOfPeople", "Number of People must be greater than 0");
                }

                return BadRequest(errorResponse);
            }

            //run the test
            var lightTestResponse = await _lightTest.RunAsync(numberOfLights, numberOfPeople);

            //log the test
            var logMessage = $"Number of lights: {numberOfLights} -- Number of people: {numberOfPeople}";
            _logger.Log(LogLevel.Information, logMessage);

            //return the results
            return Ok(lightTestResponse);
        }
    }
}