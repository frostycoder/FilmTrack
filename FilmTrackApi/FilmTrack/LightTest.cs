using System.Collections.Generic;
using System.Threading.Tasks;

namespace FilmTrack
{
    public class LightTest : ILightTest
    {
        public Task<List<Light>> RunAsync(int numberOfLights, int numberOfPeople)
        {
            var lights = new List<Light>();

            if (numberOfPeople > numberOfLights)
            {
                numberOfPeople = numberOfLights;
            }

            //create the lights array
            for (var i = 0; i < numberOfLights; i++)
            {
                lights.Add(new Light {Illuminated = false, Index = i});
            }

            //first person needs to turn on all lights
            foreach (var light in lights)
            {
                light.Illuminated = true;
            }

            //run the test for the rest of the people
            for (var person = 2; person <= numberOfPeople; person++)
            {
                for (var light = person; light <= numberOfLights; light += person)
                {
                    lights[light - 1].Illuminated = !lights[light - 1].Illuminated;
                }
            }

            return Task.FromResult(lights);
        }
    }
}